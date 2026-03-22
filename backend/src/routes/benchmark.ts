import { Router, Request, Response } from "express";
import { pool } from "../db/pool";

const router = Router();

// GET /benchmark/:id — Personalized benchmark data
router.get("/benchmark/:id", async (req: Request, res: Response) => {
  try {
    const leadId = parseInt(req.params.id as string);
    if (isNaN(leadId)) {
      res.status(400).json({ error: "Invalid ID" });
      return;
    }

    // Get lead + survey data
    const leadResult = await pool.query(
      `SELECT l.firma, l.branche, s.*
       FROM leads l
       JOIN survey_responses s ON s.lead_id = l.id
       WHERE l.id = $1`,
      [leadId]
    );

    if (leadResult.rows.length === 0) {
      res.status(404).json({ error: "Not found" });
      return;
    }

    const lead = leadResult.rows[0];

    // Get branche averages
    const avgResult = await pool.query(
      `SELECT
        COUNT(*) as total_responses,
        ROUND(AVG(q2_digital), 1) as avg_digital,
        ROUND(AVG(q6_zufriedenheit), 1) as avg_zufriedenheit,
        ROUND(100.0 * SUM(CASE WHEN q3_genai IN ('Ja, regelmäßig', 'Ja, gelegentlich') THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0)) as pct_genai_nutzer,
        ROUND(100.0 * SUM(CASE WHEN q5_kundenkanal = 'Website' THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0)) as pct_website_kanal,
        ROUND(100.0 * SUM(CASE WHEN q8_investition IN ('Ja, definitiv', 'Ja, wenn bezahlbar') THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0)) as pct_investition
       FROM survey_responses
       WHERE q1_branche = $1`,
      [lead.q1_branche]
    );

    const averages = avgResult.rows[0];

    res.json({
      lead: {
        firma: lead.firma,
        branche: lead.branche,
        q1_branche: lead.q1_branche,
        q2_digital: lead.q2_digital,
        q3_genai: lead.q3_genai,
        q4_sentiment: lead.q4_sentiment,
        q5_kundenkanal: lead.q5_kundenkanal,
        q6_zufriedenheit: lead.q6_zufriedenheit,
        q7_herausforderung: lead.q7_herausforderung,
        q8_investition: lead.q8_investition,
      },
      averages: {
        total_responses: parseInt(averages.total_responses) || 0,
        avg_digital: parseFloat(averages.avg_digital) || 0,
        avg_zufriedenheit: parseFloat(averages.avg_zufriedenheit) || 0,
        pct_genai_nutzer: parseFloat(averages.pct_genai_nutzer) || 0,
        pct_website_kanal: parseFloat(averages.pct_website_kanal) || 0,
        pct_investition: parseFloat(averages.pct_investition) || 0,
      },
    });
  } catch (err) {
    console.error("Benchmark error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
