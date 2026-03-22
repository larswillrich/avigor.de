import { Router, Request, Response } from "express";
import { pool } from "../db/pool";

const router = Router();

// GET /report — Public aggregated study data
router.get("/report", async (req: Request, res: Response) => {
  try {
    const totalResult = await pool.query("SELECT COUNT(*) as total FROM survey_responses");
    const total = parseInt(totalResult.rows[0].total);

    if (total === 0) {
      res.json({ status: "pending", message: "Noch keine Daten vorhanden." });
      return;
    }

    // Branche distribution
    const brancheResult = await pool.query(
      `SELECT q1_branche as label, COUNT(*) as count
       FROM survey_responses GROUP BY q1_branche ORDER BY count DESC`
    );

    // Digital average by branche
    const digitalResult = await pool.query(
      `SELECT q1_branche as label, ROUND(AVG(q2_digital), 1) as value
       FROM survey_responses GROUP BY q1_branche ORDER BY value DESC`
    );

    // GenAI usage
    const genaiResult = await pool.query(
      `SELECT q3_genai as label, COUNT(*) as count
       FROM survey_responses GROUP BY q3_genai ORDER BY count DESC`
    );

    // GenAI sentiment
    const sentimentResult = await pool.query(
      `SELECT q4_sentiment as label, COUNT(*) as count
       FROM survey_responses GROUP BY q4_sentiment ORDER BY count DESC`
    );

    // Kundenkanal
    const kanalResult = await pool.query(
      `SELECT q5_kundenkanal as label, COUNT(*) as count
       FROM survey_responses GROUP BY q5_kundenkanal ORDER BY count DESC`
    );

    // Online-Zufriedenheit average
    const zufrResult = await pool.query(
      "SELECT ROUND(AVG(q6_zufriedenheit), 1) as value FROM survey_responses"
    );

    // Herausforderung
    const challengeResult = await pool.query(
      `SELECT q7_herausforderung as label, COUNT(*) as count
       FROM survey_responses GROUP BY q7_herausforderung ORDER BY count DESC`
    );

    // Investition
    const investResult = await pool.query(
      `SELECT q8_investition as label, COUNT(*) as count
       FROM survey_responses GROUP BY q8_investition ORDER BY count DESC`
    );

    res.json({
      total_responses: total,
      branche_distribution: brancheResult.rows,
      digital_by_branche: digitalResult.rows,
      genai_usage: genaiResult.rows,
      genai_sentiment: sentimentResult.rows,
      kundenkanal: kanalResult.rows,
      avg_zufriedenheit: parseFloat(zufrResult.rows[0].value) || 0,
      herausforderung: challengeResult.rows,
      investition: investResult.rows,
    });
  } catch (err) {
    console.error("Report error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
