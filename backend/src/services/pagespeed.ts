import { config } from "../config";

interface AuditResult {
  performance: number;
  mobile: number;
  seo_score: number;
  load_time_ms: number;
}

export async function runPageSpeedAudit(url: string): Promise<AuditResult | null> {
  try {
    const apiUrl = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
    apiUrl.searchParams.set("url", url);
    apiUrl.searchParams.set("strategy", "mobile");
    apiUrl.searchParams.set("category", "performance");
    apiUrl.searchParams.set("category", "seo");

    if (config.pagespeedApiKey) {
      apiUrl.searchParams.set("key", config.pagespeedApiKey);
    }

    const res = await fetch(apiUrl.toString(), {
      signal: AbortSignal.timeout(30000),
    });

    if (!res.ok) {
      console.error(`PageSpeed API error for ${url}: ${res.status}`);
      return null;
    }

    const data = await res.json() as Record<string, any>;
    const categories = data.lighthouseResult?.categories || {};
    const audits = data.lighthouseResult?.audits || {};

    const perfScore = Math.round((categories.performance?.score || 0) * 100);
    const seoScore = Math.round((categories.seo?.score || 0) * 100);

    // Speed Index as proxy for mobile score
    const speedIndex = audits["speed-index"]?.numericValue || 0;
    const mobileScore = speedIndex < 3000 ? 90 : speedIndex < 5000 ? 70 : speedIndex < 8000 ? 50 : 30;

    // First Contentful Paint as load time
    const fcp = Math.round(audits["first-contentful-paint"]?.numericValue || 0);

    return {
      performance: perfScore,
      mobile: mobileScore,
      seo_score: seoScore,
      load_time_ms: fcp,
    };
  } catch (err) {
    console.error(`PageSpeed audit failed for ${url}:`, err);
    return null;
  }
}
