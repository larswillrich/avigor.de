import { pool } from "../db/pool";

export async function aggregateData(): Promise<void> {
  console.log("[Aggregate] Starting weekly data aggregation...");

  const total = await pool.query("SELECT COUNT(*) as count FROM survey_responses");
  const leads = await pool.query("SELECT COUNT(*) as count FROM leads WHERE status = 'confirmed'");
  const audits = await pool.query("SELECT COUNT(*) as count FROM audit_results");

  console.log(`[Aggregate] Stats: ${total.rows[0].count} surveys, ${leads.rows[0].count} confirmed leads, ${audits.rows[0].count} audits`);
  console.log("[Aggregate] Complete. Report data available at GET /report");
}
