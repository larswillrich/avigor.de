import { parse } from "csv-parse/sync";

interface LeadRow {
  firma: string;
  branche: string;
  email: string;
}

export function parseLeadsCsv(buffer: Buffer): LeadRow[] {
  const records = parse(buffer, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
    delimiter: [",", ";"],
  }) as Record<string, string>[];

  return records
    .map((row) => ({
      firma: row.firma || row.Firma || row.company || "",
      branche: row.branche || row.Branche || row.industry || "",
      email: (row.email || row.Email || row.EMAIL || "").toLowerCase().trim(),
    }))
    .filter((r) => r.email && (r.email.startsWith("info@") || r.email.startsWith("kontakt@")));
}
