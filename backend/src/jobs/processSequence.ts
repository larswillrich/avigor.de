import { pool } from "../db/pool";
import { sendEmail } from "../services/email";
import { renderSeq01, renderSeq02, renderSeq03, renderSeq04 } from "../services/emailTemplates";

function generateInsight(survey: Record<string, unknown>): string {
  if ((survey.q6_zufriedenheit as number) <= 2) {
    return "Sie sind mit Ihrem Online-Auftritt unzufriedener als 70% Ihrer Branche.";
  }
  if (survey.q3_genai === "Nein, kein Thema") {
    return "64% der KMUs in Ihrer Branche nutzen bereits GenAI — Sie verpassen gerade eine Chance.";
  }
  if (survey.q5_kundenkanal === "Empfehlungen") {
    return "Sie gewinnen Kunden vor allem über Empfehlungen — 38% Ihrer Branchenkollegen setzen bereits auf Website-Anfragen als zweiten Kanal.";
  }
  if ((survey.q2_digital as number) <= 2) {
    return "Ihr Digitalisierungsgrad liegt unter dem Branchendurchschnitt — hier schlummern Quick Wins.";
  }
  return "Ihre Branche digitalisiert sich rasant — wir zeigen Ihnen, wo Sie stehen.";
}

export async function processSequence(): Promise<void> {
  console.log("[Sequence] Starting...");

  const leads = await pool.query(
    `SELECT l.id, l.email, l.firma, l.branche, l.lead_token, l.confirmed_at,
            s.q2_digital, s.q3_genai, s.q5_kundenkanal, s.q6_zufriedenheit
     FROM leads l
     LEFT JOIN survey_responses s ON s.lead_id = l.id
     WHERE l.status = 'confirmed' AND l.confirmed_at IS NOT NULL`
  );

  let sent = 0;

  for (const lead of leads.rows) {
    // Check blacklist
    const bl = await pool.query("SELECT 1 FROM blacklist WHERE email = $1", [lead.email]);
    if (bl.rows.length > 0) continue;

    const confirmedAt = new Date(lead.confirmed_at);
    const now = new Date();
    const daysSince = Math.floor((now.getTime() - confirmedAt.getTime()) / (1000 * 60 * 60 * 24));

    // Check which emails have already been sent
    const sentEmails = await pool.query(
      "SELECT template FROM email_log WHERE lead_id = $1 AND status = 'sent'",
      [lead.id]
    );
    const sentTemplates = new Set(sentEmails.rows.map((r: { template: string }) => r.template));

    const vars = {
      firma: lead.firma,
      branche: lead.branche,
      lead_token: lead.lead_token,
      lead_id: lead.id,
      confirmed_at: confirmedAt.toLocaleDateString("de-DE"),
    };

    // Day 0: seq_01
    if (daysSince >= 0 && !sentTemplates.has("seq_01")) {
      const tmpl = renderSeq01(vars);
      await sendEmail({ to: lead.email, subject: tmpl.subject, html: tmpl.html, leadId: lead.id, template: "seq_01", leadToken: lead.lead_token });
      sent++;
    }

    // Day 14: seq_02
    if (daysSince >= 14 && !sentTemplates.has("seq_02")) {
      const insight = generateInsight(lead);
      const tmpl = renderSeq02({ ...vars, personalisierter_insight: insight });
      await sendEmail({ to: lead.email, subject: tmpl.subject, html: tmpl.html, leadId: lead.id, template: "seq_02", leadToken: lead.lead_token });
      sent++;
    }

    // Day 17: seq_03
    if (daysSince >= 17 && !sentTemplates.has("seq_03")) {
      const tmpl = renderSeq03(vars);
      await sendEmail({ to: lead.email, subject: tmpl.subject, html: tmpl.html, leadId: lead.id, template: "seq_03", leadToken: lead.lead_token });
      sent++;
    }

    // Day 21: seq_04
    if (daysSince >= 21 && !sentTemplates.has("seq_04")) {
      const deadline = new Date(confirmedAt.getTime() + 42 * 24 * 60 * 60 * 1000);
      const tmpl = renderSeq04({ ...vars, deadline: deadline.toLocaleDateString("de-DE") });
      await sendEmail({ to: lead.email, subject: tmpl.subject, html: tmpl.html, leadId: lead.id, template: "seq_04", leadToken: lead.lead_token });
      sent++;
    }
  }

  console.log(`[Sequence] Complete: ${sent} emails sent for ${leads.rows.length} leads`);
}
