import { config } from "../config";

interface TemplateVars {
  firma?: string;
  branche?: string;
  lead_token?: string;
  lead_id?: number;
  personalisierter_insight?: string;
  deadline?: string;
  confirmed_at?: string;
  confirm_url?: string;
}

function footer(vars: TemplateVars): string {
  return `
    <tr><td style="padding:32px 24px 24px;border-top:1px solid #e5e7eb;font-size:12px;color:#9ca3af;line-height:1.6;">
      AVIGOR UG (haftungsbeschr&auml;nkt) | Goeckestr. 32A, 13055 Berlin<br>
      <a href="${config.baseUrl}" style="color:#6366F1;">avigor.de</a> | <a href="mailto:hello@avigor.de" style="color:#6366F1;">hello@avigor.de</a><br><br>
      ${vars.confirmed_at ? `Sie erhalten diese E-Mail aufgrund Ihrer Studienteilnahme am ${vars.confirmed_at}.<br>` : ""}
      ${vars.lead_token ? `<a href="${config.baseUrl}/api/unsubscribe/${vars.lead_token}" style="color:#9ca3af;">Abmelden</a>` : ""}
    </td></tr>`;
}

function wrap(content: string, vars: TemplateVars): string {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<style>body{margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}
a{color:#4F46E5}.btn{display:inline-block;background:#4F46E5;color:#fff!important;text-decoration:none;padding:14px 28px;border-radius:10px;font-weight:600;font-size:15px}</style>
</head><body style="background:#f3f4f6;margin:0;padding:0">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 0">
<tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1)">
<tr><td style="background:#4F46E5;padding:20px 24px">
  <span style="color:#84CC16;font-weight:800;font-size:18px;letter-spacing:2px">AVIGOR</span>
</td></tr>
<tr><td style="padding:32px 24px;font-size:15px;line-height:1.7;color:#1e293b">
${content}
</td></tr>
${footer(vars)}
</table></td></tr></table></body></html>`;
}

export function renderDOI(vars: TemplateVars): { subject: string; html: string } {
  return {
    subject: "Bitte bestätigen Sie Ihre Teilnahme an KMU Digital 2026",
    html: wrap(`
      <p>Guten Tag,</p>
      <p>vielen Dank f&uuml;r Ihre Teilnahme an der Studie <strong>&bdquo;KMU Digital 2026&ldquo;</strong>!</p>
      <p>Bitte best&auml;tigen Sie Ihre E-Mail-Adresse:</p>
      <p style="text-align:center;padding:16px 0">
        <a href="${vars.confirm_url}" class="btn">✓ Teilnahme best&auml;tigen</a>
      </p>
      <p>Nach der Best&auml;tigung erhalten Sie:</p>
      <ul>
        <li>Den Studienbericht</li>
        <li>Ihren Branchenvergleich</li>
        <li>Einen Digital-Quick-Check f&uuml;r Ihre Website</li>
      </ul>
      <p style="color:#9ca3af;font-size:13px">Falls Sie diese Anfrage nicht gestellt haben, ignorieren Sie diese E-Mail.</p>
    `, vars),
  };
}

export function renderInvitation(vars: TemplateVars): { subject: string; html: string } {
  return {
    subject: `Darf ${vars.firma} in unserer KMU-Studie 2026 dabei sein?`,
    html: wrap(`
      <p>Guten Tag,</p>
      <p>mein Name ist Dr. Sven-Erik Willrich, Autor von &bdquo;Data-Driven Company&ldquo; (Springer, 2025) und Co-Founder von AVIGOR in Berlin.</p>
      <p>Wir f&uuml;hren eine Studie durch:</p>
      <p style="background:#EEF2FF;padding:16px;border-radius:8px;border-left:4px solid #4F46E5">
        <strong>&bdquo;KMU Digital 2026: Wie der deutsche Mittelstand mit GenAI, Digitalisierung und Online-Sichtbarkeit umgeht&ldquo;</strong>
      </p>
      <p>500 KMUs nehmen teil. Die Ergebnisse werden als kostenloser Report auf avigor.de ver&ouml;ffentlicht.</p>
      <p><strong>D&uuml;rfen wir ${vars.firma} einbeziehen?</strong></p>
      <p>8 kurze Fragen, unter 1 Minute:</p>
      <p style="text-align:center;padding:16px 0">
        <a href="${config.baseUrl}/studie" class="btn">→ Zur Studie</a>
      </p>
      <p>Teilnehmer erhalten vorab:<br>
      ✓ Studienbericht<br>
      ✓ Branchenvergleich: ${vars.firma} vs. ${vars.branche}<br>
      ✓ Kostenlosen Digital-Quick-Check</p>
      <p>Herzliche Gr&uuml;&szlig;e<br>
      <strong>Dr. Sven-Erik Willrich</strong><br>
      Autor, &bdquo;Data-Driven Company&ldquo; (Springer, 2025)<br>
      AVIGOR UG | Goeckestr. 32A, 13055 Berlin<br>
      <a href="${config.baseUrl}">avigor.de</a></p>
    `, vars),
  };
}

export function renderSeq01(vars: TemplateVars): { subject: string; html: string } {
  return {
    subject: "Danke — Ihre Ergebnisse kommen in 2 Wochen",
    html: wrap(`
      <p>Hallo,</p>
      <p>vielen Dank f&uuml;r Ihre Teilnahme an &bdquo;KMU Digital 2026&ldquo;!</p>
      <p>Wir werten gerade alle Antworten aus. In ca. 2 Wochen erhalten Sie:</p>
      <ol>
        <li>Den Studienbericht</li>
        <li>Ihren Branchenvergleich</li>
        <li>Einen Digital-Quick-Check f&uuml;r Ihre Website</li>
      </ol>
      <p>Kennen Sie ein KMU, das mitmachen sollte?<br>
      <a href="${config.baseUrl}/studie">→ avigor.de/studie</a></p>
      <p>Herzliche Gr&uuml;&szlig;e<br>
      <strong>Dr. Sven-Erik Willrich</strong> | AVIGOR</p>
    `, vars),
  };
}

export function renderSeq02(vars: TemplateVars): { subject: string; html: string } {
  return {
    subject: `Ihre Ergebnisse: Report + Branchenvergleich für ${vars.firma}`,
    html: wrap(`
      <p>Hallo,</p>
      <p>die Auswertung ist da. Hier sind Ihre Ergebnisse:</p>
      <p><strong>📄 Studienbericht:</strong><br>
      <a href="${config.baseUrl}/studie/report">→ avigor.de/studie/report</a></p>
      <p><strong>📊 Ihr Branchenvergleich:</strong><br>
      <a href="${config.baseUrl}/studie/benchmark/${vars.lead_id}">→ avigor.de/studie/benchmark/${vars.lead_id}</a></p>
      <p><strong>🔍 Digital-Quick-Check f&uuml;r ${vars.firma}:</strong><br>
      <a href="${config.baseUrl}/webpages/audit/${vars.lead_id}">→ avigor.de/webpages/audit/${vars.lead_id}</a></p>
      ${vars.personalisierter_insight ? `<p style="background:#FEF3C7;padding:16px;border-radius:8px;border-left:4px solid #F59E0B">
        <strong>Eine Zahl, die uns aufgefallen ist:</strong> ${vars.personalisierter_insight}
      </p>` : ""}
      <p>Fragen? Einfach antworten.</p>
      <p><strong>Dr. Sven-Erik Willrich</strong> | AVIGOR</p>
    `, vars),
  };
}

export function renderSeq03(vars: TemplateVars): { subject: string; html: string } {
  return {
    subject: `Was die Ergebnisse konkret für ${vars.firma} bedeuten`,
    html: wrap(`
      <p>Hallo,</p>
      <p>viele Studienteilnehmer fragen uns nach dem Report:<br>
      <em>&bdquo;Okay &mdash; aber was soll ich als erstes tun?&ldquo;</em></p>
      <p>Daf&uuml;r bieten wir ein <strong>kostenloses 15-Min-Gespr&auml;ch</strong>:</p>
      <ul>
        <li>Welche 2&ndash;3 Quick Wins h&auml;tten f&uuml;r ${vars.firma} den gr&ouml;&szlig;ten Effekt?</li>
        <li>Wo stehen Sie vs. die Besten Ihrer Branche?</li>
        <li>Wie nutzen andere KMUs GenAI bereits konkret?</li>
      </ul>
      <p>Kein Verkaufsgespr&auml;ch &mdash; eine Einordnung Ihrer Ergebnisse.</p>
      <p style="text-align:center;padding:16px 0">
        <a href="${config.baseUrl}/termin" class="btn">→ Termin buchen</a>
      </p>
      <p style="color:#6b7280;font-size:14px">&Uuml;brigens: Ein ${vars.branche}-Unternehmen mit &auml;hnlichem Profil hat k&uuml;rzlich seinen Online-Auftritt in 7 Tagen komplett erneuert &mdash; mit +60% mehr Anfragen im ersten Monat.<br>
      <a href="${config.baseUrl}/referenzen">→ avigor.de/referenzen</a></p>
      <p><strong>Lars Willrich</strong> | AVIGOR</p>
    `, vars),
  };
}

export function renderSeq04(vars: TemplateVars): { subject: string; html: string } {
  return {
    subject: `Letzter Punkt: Kostenloser Mockup für ${vars.firma}`,
    html: wrap(`
      <p>Hallo,</p>
      <p>als Dankesch&ouml;n f&uuml;r Ihre Studienteilnahme:</p>
      <p style="background:#EEF2FF;padding:20px;border-radius:8px;border-left:4px solid #84CC16">
        <strong>Wir erstellen kostenlos und unverbindlich einen Mockup-Entwurf f&uuml;r einen neuen Online-Auftritt von ${vars.firma}.</strong>
        Gef&auml;llt er nicht &mdash; kostet nichts.
      </p>
      <p style="text-align:center;padding:16px 0">
        <a href="${config.baseUrl}/webpages/mockup" class="btn" style="background:#84CC16;color:#1E1B4B!important">→ Mockup anfordern</a>
      </p>
      <p>Gilt bis <strong>${vars.deadline}</strong>.</p>
      <p style="color:#9ca3af;font-size:13px">Das ist die letzte E-Mail zu diesem Thema. Wenn Sie weiterhin unsere Studien-Insights erhalten m&ouml;chten, bleiben Sie gerne auf der Liste.</p>
      <p><strong>Lars Willrich</strong> | AVIGOR</p>
    `, vars),
  };
}
