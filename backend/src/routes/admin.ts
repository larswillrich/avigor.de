import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import { pool } from "../db/pool";
import { signToken } from "../utils/jwt";
import { requireAuth } from "../middleware/auth";
import { sendEmail } from "../services/email";
import { renderInvitation } from "../services/emailTemplates";
import { parseLeadsCsv } from "../services/csvParser";
import { getMaxSendsToday } from "../services/warmup";
import { runPageSpeedAudit } from "../services/pagespeed";
import { checkSSL } from "../services/sslCheck";

const router = Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024 } });

// POST /admin/login
router.post("/admin/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ error: "Username and password required" });
      return;
    }

    const result = await pool.query("SELECT id, password_hash FROM admin_users WHERE username = $1", [username]);
    if (result.rows.length === 0) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const admin = result.rows[0];
    const valid = await bcrypt.compare(password, admin.password_hash);
    if (!valid) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const token = signToken(admin.id);
    res.json({ token, expiresIn: "24h" });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /admin/import-leads — CSV upload
router.post("/admin/import-leads", requireAuth, upload.single("file"), async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: "CSV file required" });
      return;
    }

    const leads = parseLeadsCsv(req.file.buffer);
    let imported = 0;
    let skipped = 0;

    for (const lead of leads) {
      // Check blacklist
      const bl = await pool.query("SELECT 1 FROM blacklist WHERE email = $1", [lead.email]);
      if (bl.rows.length > 0) { skipped++; continue; }

      // Check existing
      const existing = await pool.query("SELECT 1 FROM leads WHERE email = $1", [lead.email]);
      if (existing.rows.length > 0) { skipped++; continue; }

      const token = uuidv4().replace(/-/g, "");
      await pool.query(
        "INSERT INTO leads (firma, branche, email, status, lead_token) VALUES ($1, $2, $3, 'new', $4)",
        [lead.firma, lead.branche, lead.email, token]
      );
      imported++;
    }

    res.json({ imported, skipped, total: leads.length });
  } catch (err) {
    console.error("Import error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /admin/send-invitations — Batch send respecting warmup
router.post("/admin/send-invitations", requireAuth, async (req: Request, res: Response) => {
  try {
    const maxToday = getMaxSendsToday();

    // How many already sent today?
    const sentToday = await pool.query(
      `SELECT COUNT(*) as count FROM email_log
       WHERE template = 'invitation' AND sent_at::date = CURRENT_DATE`
    );
    const alreadySent = parseInt(sentToday.rows[0].count);
    const remaining = Math.max(0, maxToday - alreadySent);

    if (remaining === 0) {
      res.json({ sent: 0, remaining: 0, message: `Daily limit reached (${maxToday}/day)` });
      return;
    }

    // Get leads to send to
    const leads = await pool.query(
      `SELECT id, firma, branche, email, lead_token FROM leads
       WHERE status = 'new'
       ORDER BY created_at ASC
       LIMIT $1`,
      [remaining]
    );

    let sent = 0;
    for (const lead of leads.rows) {
      const template = renderInvitation({ firma: lead.firma, branche: lead.branche });
      const success = await sendEmail({
        to: lead.email,
        subject: template.subject,
        html: template.html,
        leadId: lead.id,
        template: "invitation",
        leadToken: lead.lead_token,
      });

      if (success) {
        await pool.query("UPDATE leads SET status = 'invited', invited_at = NOW() WHERE id = $1", [lead.id]);
        sent++;
      }
    }

    // Count remaining new leads
    const remainingLeads = await pool.query("SELECT COUNT(*) as count FROM leads WHERE status = 'new'");

    res.json({
      sent,
      remaining_leads: parseInt(remainingLeads.rows[0].count),
      daily_limit: maxToday,
      sent_today: alreadySent + sent,
    });
  } catch (err) {
    console.error("Send invitations error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /admin/dashboard — KPI overview
router.get("/admin/dashboard", requireAuth, async (req: Request, res: Response) => {
  try {
    const stats = await pool.query(`
      SELECT
        COUNT(*) as total_leads,
        SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) as status_new,
        SUM(CASE WHEN status = 'invited' THEN 1 ELSE 0 END) as status_invited,
        SUM(CASE WHEN status = 'pending_optin' THEN 1 ELSE 0 END) as status_pending,
        SUM(CASE WHEN status = 'confirmed' THEN 1 ELSE 0 END) as status_confirmed,
        SUM(CASE WHEN status = 'opted_out' THEN 1 ELSE 0 END) as status_opted_out
      FROM leads
    `);

    const emailStats = await pool.query(`
      SELECT
        COUNT(*) as total_sent,
        SUM(CASE WHEN sent_at::date = CURRENT_DATE THEN 1 ELSE 0 END) as sent_today,
        SUM(CASE WHEN status = 'failed' THEN 1 ELSE 0 END) as failed
      FROM email_log
    `);

    const surveyCount = await pool.query("SELECT COUNT(*) as count FROM survey_responses");
    const auditCount = await pool.query("SELECT COUNT(*) as count FROM audit_results");
    const blacklistCount = await pool.query("SELECT COUNT(*) as count FROM blacklist");

    res.json({
      leads: stats.rows[0],
      emails: emailStats.rows[0],
      surveys: parseInt(surveyCount.rows[0].count),
      audits: parseInt(auditCount.rows[0].count),
      blacklisted: parseInt(blacklistCount.rows[0].count),
      warmup_limit_today: getMaxSendsToday(),
    });
  } catch (err) {
    console.error("Dashboard error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /admin/run-audits — Trigger audits
router.post("/admin/run-audits", requireAuth, async (req: Request, res: Response) => {
  try {
    const leads = await pool.query(
      `SELECT l.id, l.website_url FROM leads l
       LEFT JOIN audit_results a ON a.lead_id = l.id
       WHERE l.status = 'confirmed' AND l.website_url IS NOT NULL AND l.website_url != '' AND a.id IS NULL
       LIMIT 10`
    );

    res.status(202).json({ queued: leads.rows.length, message: "Audits started in background" });

    // Process in background
    (async () => {
      for (const lead of leads.rows) {
        try {
          const result = await runPageSpeedAudit(lead.website_url);
          const ssl = await checkSSL(lead.website_url);

          if (result) {
            await pool.query(
              `INSERT INTO audit_results (lead_id, url, performance, mobile, ssl, load_time_ms, seo_score)
               VALUES ($1, $2, $3, $4, $5, $6, $7)`,
              [lead.id, lead.website_url, result.performance, result.mobile, ssl, result.load_time_ms, result.seo_score]
            );
          }
        } catch (err) {
          console.error(`Audit failed for lead ${lead.id}:`, err);
        }
      }
      console.log(`Audit batch complete: ${leads.rows.length} processed`);
    })();
  } catch (err) {
    console.error("Run audits error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /admin/generate-report — Aggregate data (same as public /report but triggered manually)
router.post("/admin/generate-report", requireAuth, async (_req: Request, res: Response) => {
  try {
    const total = await pool.query("SELECT COUNT(*) as count FROM survey_responses");
    res.json({ total: parseInt(total.rows[0].count), message: "Report data available at GET /report" });
  } catch (err) {
    console.error("Generate report error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
