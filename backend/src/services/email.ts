import nodemailer from "nodemailer";
import { config } from "../config";
import { pool } from "../db/pool";

const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: config.smtp.secure,
  auth: {
    user: config.smtp.user,
    pass: config.smtp.pass,
  },
});

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  leadId?: number;
  template?: string;
  leadToken?: string;
}

export async function sendEmail(opts: SendEmailOptions): Promise<boolean> {
  const { to, subject, html, leadId, template, leadToken } = opts;

  // Check blacklist
  const bl = await pool.query("SELECT 1 FROM blacklist WHERE email = $1", [to]);
  if (bl.rows.length > 0) {
    console.log(`Skipping blacklisted email: ${to}`);
    return false;
  }

  const headers: Record<string, string> = {};
  if (leadToken) {
    headers["List-Unsubscribe"] = `<${config.baseUrl}/api/unsubscribe/${leadToken}>`;
    headers["List-Unsubscribe-Post"] = "List-Unsubscribe=One-Click";
  }

  try {
    await transporter.sendMail({
      from: `"${config.smtp.fromName}" <${config.smtp.fromEmail}>`,
      replyTo: config.smtp.replyTo,
      to,
      subject,
      html,
      headers,
    });

    // Log send
    if (leadId && template) {
      await pool.query(
        "INSERT INTO email_log (lead_id, template, status) VALUES ($1, $2, 'sent')",
        [leadId, template]
      );
    }

    console.log(`Email sent: ${template || "unknown"} → ${to}`);
    return true;
  } catch (err: unknown) {
    console.error(`Email failed: ${to}`, err);

    // Permanent failure → blacklist
    const message = err instanceof Error ? err.message : "";
    if (message.includes("550") || message.includes("553") || message.includes("Invalid")) {
      await pool.query(
        "INSERT INTO blacklist (email, reason) VALUES ($1, 'bounce') ON CONFLICT DO NOTHING",
        [to]
      );
    }

    if (leadId && template) {
      await pool.query(
        "INSERT INTO email_log (lead_id, template, status) VALUES ($1, $2, 'failed')",
        [leadId, template]
      );
    }

    return false;
  }
}
