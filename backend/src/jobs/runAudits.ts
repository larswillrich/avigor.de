import { pool } from "../db/pool";
import { runPageSpeedAudit } from "../services/pagespeed";
import { checkSSL } from "../services/sslCheck";

export async function runAuditsJob(): Promise<void> {
  console.log("[Audits] Starting...");

  const leads = await pool.query(
    `SELECT l.id, l.website_url FROM leads l
     LEFT JOIN audit_results a ON a.lead_id = l.id
     WHERE l.status = 'confirmed'
       AND l.website_url IS NOT NULL
       AND l.website_url != ''
       AND a.id IS NULL
     LIMIT 10`
  );

  let processed = 0;

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
        processed++;
      }

      // Rate limit: wait 2 seconds between API calls
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (err) {
      console.error(`[Audits] Failed for lead ${lead.id}:`, err);
    }
  }

  console.log(`[Audits] Complete: ${processed}/${leads.rows.length} processed`);
}
