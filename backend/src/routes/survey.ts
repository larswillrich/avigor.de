import { Router, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { pool } from "../db/pool";
import { sendEmail } from "../services/email";
import { renderDOI } from "../services/emailTemplates";
import { config } from "../config";

const router = Router();

// POST /survey — Submit survey + create lead
router.post("/survey", async (req: Request, res: Response) => {
  try {
    const { q1, q2, q3, q4, q5, q6, q7, q8, email, website_url } = req.body;

    if (!email || !q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check blacklist
    const bl = await pool.query("SELECT 1 FROM blacklist WHERE email = $1", [normalizedEmail]);
    if (bl.rows.length > 0) {
      res.status(200).json({ message: "Vielen Dank für Ihre Teilnahme!" });
      return;
    }

    // Check if lead already exists
    const existing = await pool.query("SELECT id, status FROM leads WHERE email = $1", [normalizedEmail]);

    if (existing.rows.length > 0) {
      const lead = existing.rows[0];
      if (lead.status === "confirmed") {
        res.status(200).json({ message: "Sie nehmen bereits teil. Vielen Dank!" });
        return;
      }
      // Resend DOI
      const tokenRes = await pool.query("SELECT lead_token FROM leads WHERE id = $1", [lead.id]);
      const token = tokenRes.rows[0].lead_token;
      const doi = renderDOI({
        confirm_url: `${config.baseUrl}/api/confirm/${token}`,
      });
      await sendEmail({ to: normalizedEmail, subject: doi.subject, html: doi.html, leadId: lead.id, template: "doi", leadToken: token });
      res.status(200).json({ message: "Bitte bestätigen Sie Ihre E-Mail-Adresse." });
      return;
    }

    // Create new lead
    const leadToken = uuidv4().replace(/-/g, "");
    const leadResult = await pool.query(
      `INSERT INTO leads (firma, branche, email, website_url, status, lead_token)
       VALUES ($1, $2, $3, $4, 'pending_optin', $5)
       RETURNING id`,
      [q1, q1, normalizedEmail, website_url || null, leadToken]
    );
    const leadId = leadResult.rows[0].id;

    // Save survey responses
    await pool.query(
      `INSERT INTO survey_responses (lead_id, q1_branche, q2_digital, q3_genai, q4_sentiment, q5_kundenkanal, q6_zufriedenheit, q7_herausforderung, q8_investition)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [leadId, q1, parseInt(q2), q3, q4, q5, parseInt(q6), q7, q8]
    );

    // Update lead with firma info from survey
    await pool.query("UPDATE leads SET status = 'pending_optin' WHERE id = $1", [leadId]);

    // Send DOI email
    const doi = renderDOI({
      confirm_url: `${config.baseUrl}/api/confirm/${leadToken}`,
    });
    await sendEmail({
      to: normalizedEmail,
      subject: doi.subject,
      html: doi.html,
      leadId,
      template: "doi",
      leadToken,
    });

    res.status(200).json({ message: "Bitte bestätigen Sie Ihre E-Mail-Adresse." });
  } catch (err) {
    console.error("Survey submission error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /confirm/:token — Double-Opt-In
router.get("/confirm/:token", async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const result = await pool.query(
      "UPDATE leads SET status = 'confirmed', confirmed_at = NOW() WHERE lead_token = $1 AND status = 'pending_optin' RETURNING id",
      [token]
    );

    if (result.rows.length === 0) {
      // Maybe already confirmed
      const existing = await pool.query("SELECT status FROM leads WHERE lead_token = $1", [token]);
      if (existing.rows.length > 0 && existing.rows[0].status === "confirmed") {
        res.redirect(`${config.baseUrl}/studie?confirmed=true`);
        return;
      }
      res.status(404).json({ error: "Invalid or expired token" });
      return;
    }

    res.redirect(`${config.baseUrl}/studie?confirmed=true`);
  } catch (err) {
    console.error("Confirm error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /unsubscribe/:token — Unsubscribe
router.get("/unsubscribe/:token", async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const result = await pool.query(
      "UPDATE leads SET status = 'opted_out' WHERE lead_token = $1 RETURNING email",
      [token]
    );

    if (result.rows.length > 0) {
      const email = result.rows[0].email;
      await pool.query(
        "INSERT INTO blacklist (email, reason) VALUES ($1, 'unsubscribed') ON CONFLICT DO NOTHING",
        [email]
      );
    }

    res.redirect(`${config.baseUrl}/unsubscribe/${token}?done=true`);
  } catch (err) {
    console.error("Unsubscribe error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
