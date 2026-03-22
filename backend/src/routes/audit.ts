import { Router, Request, Response } from "express";
import { pool } from "../db/pool";

const router = Router();

// GET /webpages/audit/:id — Audit results for a lead
router.get("/webpages/audit/:id", async (req: Request, res: Response) => {
  try {
    const leadId = parseInt(req.params.id as string);
    if (isNaN(leadId)) {
      res.status(400).json({ error: "Invalid ID" });
      return;
    }

    // Get audit result
    const auditResult = await pool.query(
      `SELECT a.*, l.firma, l.branche
       FROM audit_results a
       JOIN leads l ON l.id = a.lead_id
       WHERE a.lead_id = $1
       ORDER BY a.audited_at DESC
       LIMIT 1`,
      [leadId]
    );

    if (auditResult.rows.length === 0) {
      // Check if lead exists
      const lead = await pool.query("SELECT id, website_url FROM leads WHERE id = $1", [leadId]);
      if (lead.rows.length === 0) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json({ status: "pending", message: "Audit wird erstellt..." });
      return;
    }

    const audit = auditResult.rows[0];

    // Get branche averages for comparison
    const avgResult = await pool.query(
      `SELECT
        ROUND(AVG(a.performance)) as avg_performance,
        ROUND(AVG(a.mobile)) as avg_mobile,
        ROUND(AVG(a.seo_score)) as avg_seo,
        ROUND(AVG(a.load_time_ms)) as avg_load_time
       FROM audit_results a
       JOIN leads l ON l.id = a.lead_id
       WHERE l.branche = $1`,
      [audit.branche]
    );

    res.json({
      audit: {
        url: audit.url,
        performance: audit.performance,
        mobile: audit.mobile,
        ssl: audit.ssl,
        load_time_ms: audit.load_time_ms,
        seo_score: audit.seo_score,
        audited_at: audit.audited_at,
      },
      firma: audit.firma,
      branche: audit.branche,
      averages: avgResult.rows[0] || {},
    });
  } catch (err) {
    console.error("Audit route error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
