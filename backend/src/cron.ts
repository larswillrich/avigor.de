import cron from "node-cron";
import { processSequence } from "./jobs/processSequence";
import { runAuditsJob } from "./jobs/runAudits";
import { aggregateData } from "./jobs/aggregateData";

export function setupCronJobs(): void {
  // Daily 09:00: Process email sequence
  cron.schedule("0 9 * * *", async () => {
    try {
      await processSequence();
    } catch (err) {
      console.error("[Cron] Sequence error:", err);
    }
  });

  // Daily 02:00: Run audits for new leads
  cron.schedule("0 2 * * *", async () => {
    try {
      await runAuditsJob();
    } catch (err) {
      console.error("[Cron] Audit error:", err);
    }
  });

  // Monday 08:00: Aggregate study data
  cron.schedule("0 8 * * 1", async () => {
    try {
      await aggregateData();
    } catch (err) {
      console.error("[Cron] Aggregate error:", err);
    }
  });

  console.log("Cron jobs scheduled: sequence(09:00), audits(02:00), aggregate(Mon 08:00)");
}
