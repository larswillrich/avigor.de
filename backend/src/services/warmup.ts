import { config } from "../config";

/**
 * Warmup ramp schedule:
 * Day 1-2:  5/day
 * Day 3-4:  10/day
 * Day 5-7:  20/day
 * Day 8-14: 30/day
 * Day 15+:  40/day
 */
export function getMaxSendsToday(): number {
  const start = new Date(config.warmupStartDate);
  const now = new Date();
  const daysSinceStart = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  if (daysSinceStart <= 0) return 0;
  if (daysSinceStart <= 2) return 5;
  if (daysSinceStart <= 4) return 10;
  if (daysSinceStart <= 7) return 20;
  if (daysSinceStart <= 14) return 30;
  return 40;
}
