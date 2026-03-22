# AVIGOR Kampagnen-Playbook — FINAL
## „KMU Digital 2026" Studie → Kunden

*Stand: März 2026 | 100% Self-Hosted | 6 Wochen bis erste Kunden*

---

## DAS KONZEPT

```
E-Mail an 500× info@firma.de → „Nehmen Sie an unserer Studie teil"
→ avigor.de/studie: 8 Fragen, < 1 Min → Opt-In
→ 4 E-Mails in 21 Tagen: Report → Benchmark → Termin → Mockup → Kunde
```

---

## TEIL 1: DIE STUDIE

### Titel

> **„KMU Digital 2026: Wie der deutsche Mittelstand mit GenAI, Digitalisierung und Online-Sichtbarkeit umgeht"**
>
> Eine Studie von AVIGOR — 500 KMUs in Deutschland
> Autoren: Dr. Sven-Erik Willrich (Springer) & Lars Willrich

### 8 Fragen (< 60 Sekunden, alles Single-Tap)

**Q1: Branche?**
Handwerk & Bau / Einzelhandel / Gastronomie & Hotellerie / Gesundheit & Praxis / Dienstleistung & Beratung / Sonstige

**Q2: Wie digital ist Ihr Unternehmen insgesamt?**
⭐ 1 (kaum digital) bis ⭐ 5 (voll digitalisiert)

**Q3: Nutzen Sie bereits GenAI-Tools (z.B. ChatGPT, Copilot)?**
Ja, regelmäßig / Ja, gelegentlich / Nein, aber geplant / Nein, kein Thema

**Q4: Empfinden Sie GenAI für Ihre Branche eher als…**
Große Chance / Eher Chance / Neutral / Eher Bedrohung / Große Bedrohung

**Q5: Wie gewinnen Sie hauptsächlich neue Kunden?**
Empfehlungen / Website / Social Media / Google-Suche / Sonstiges

**Q6: Wie zufrieden sind Sie mit Ihrem Online-Auftritt?**
⭐ 1 (sehr unzufrieden) bis ⭐ 5 (sehr zufrieden)

**Q7: Größte Herausforderung bei der Digitalisierung?**
Fehlendes Know-how / Kosten / Keine Zeit / Datenschutz / Sehe keinen Bedarf

**Q8: Investieren Sie in den nächsten 12 Monaten in Ihren digitalen Auftritt?**
Ja, definitiv / Ja, wenn bezahlbar / Eher nein / Weiß noch nicht

### Opt-In-Screen (nach Frage 8)

> **Geschafft! Vielen Dank.**
>
> Sie erhalten exklusiv:
> 🏆 Den Studienbericht
> 📊 Ihren Branchenvergleich
> 🔍 Einen Digital-Quick-Check Ihrer Website
>
> **E-Mail:** [________________]
> **Website-URL:** [________________] *(optional)*
>
> ☐ Ja, ich möchte die Ergebnisse per E-Mail. Abmeldung jederzeit.
>
> [→ Ergebnisse anfordern]

→ Bestätigungs-E-Mail via SMTP (Double-Opt-In)
→ Klick bestätigt → Status „confirmed" → Sequenz startet

---

## TEIL 2: DIE EINLADUNGS-E-MAIL

### Vorlage

**An:** info@[firmenname].de
**Von:** sven@avigor.de
**Betreff:** Darf [Firmenname] in unserer KMU-Studie 2026 dabei sein?

> Guten Tag,
>
> mein Name ist Dr. Sven-Erik Willrich, Autor von „Data-Driven
> Company" (Springer, 2025) und Co-Founder von AVIGOR in Berlin.
>
> Wir führen eine Studie durch:
>
> **„KMU Digital 2026: Wie der deutsche Mittelstand mit GenAI,
> Digitalisierung und Online-Sichtbarkeit umgeht"**
>
> 500 KMUs nehmen teil. Die Ergebnisse werden als kostenloser
> Report auf avigor.de veröffentlicht.
>
> **Dürfen wir [Firmenname] einbeziehen?**
>
> 8 kurze Fragen, unter 1 Minute:
> → avigor.de/studie
>
> Teilnehmer erhalten vorab:
> ✓ Studienbericht
> ✓ Branchenvergleich: [Firmenname] vs. [Branche]
> ✓ Kostenlosen Digital-Quick-Check
>
> Herzliche Grüße
> Dr. Sven-Erik Willrich
> Autor, „Data-Driven Company" (Springer, 2025)
> AVIGOR UG | Goeckestr. 32A, 13055 Berlin
> avigor.de

### Betreff-Varianten (A/B)

- A: „Darf [Firmenname] in unserer KMU-Studie 2026 dabei sein?"
- B: „8 Fragen, 1 Minute — KMU-Studie zu GenAI & Digitalisierung"
- C: „Wie digital ist der [Branche]-Bereich? Ihre Einschätzung zählt"
- D: „Studie: GenAI im Mittelstand — [Firmenname] dabei?"

### Versand: Kein Segment, nur Warmup-Ramp

Alle 500 KMUs bekommen dieselbe E-Mail. Einzige Personalisierung: [Firmenname] und [Branche]. Kein Scoring, kein Priorisieren.

Versand-Geschwindigkeit richtet sich nach SMTP-Warmup:

| Tag | Anzahl/Tag | Kumuliert |
|-----|-----------|-----------|
| 1–2 | 5 | 10 |
| 3–4 | 10 | 30 |
| 5–7 | 20 | 90 |
| 8–14 | 30 | 300 |
| 15–19 | 40 | **500 ✅** |

**Alle 500 sind in ~3 Wochen draußen.**

### Versandregeln (im Backend erzwungen)

- Nur an `info@` / `kontakt@` — Backend validiert
- Rate-Limiter gemäß Warmup-Plan
- Kein Versand an Adressen auf der Blacklist
- Jede E-Mail geloggt (lead_id, template, sent_at, status)
- Bei Bounce → automatisch auf Blacklist
- Max. 1 Einladung pro KMU, kein Follow-Up ohne Opt-In

---

## TEIL 3: E-MAIL-SEQUENZ NACH OPT-IN (4 E-Mails, 21 Tage)

### Überblick

| # | Tag | Was | Ziel |
|---|-----|-----|------|
| **1** | 0 | Danke, Ergebnisse kommen in ~2 Wochen | Bestätigung |
| **2** | 14 | Report + Branchenvergleich + Audit | Problem-Bewusstsein |
| **3** | 17 | Was das für [Firma] bedeutet → 15-Min-Gespräch | Termin |
| **4** | 21 | Kostenloser Mockup — letzte Nachricht | Conversion |

### E-Mail 1 — Tag 0
**Betreff:** Danke — Ihre Ergebnisse kommen in 2 Wochen

> Hallo,
>
> vielen Dank für Ihre Teilnahme an „KMU Digital 2026"!
>
> Wir werten gerade alle Antworten aus. In ca. 2 Wochen
> erhalten Sie:
>
> 1. Den Studienbericht
> 2. Ihren Branchenvergleich
> 3. Einen Digital-Quick-Check für Ihre Website
>
> Kennen Sie ein KMU, das mitmachen sollte?
> → avigor.de/studie
>
> Herzliche Grüße
> Dr. Sven-Erik Willrich | AVIGOR

### E-Mail 2 — Tag 14 (DIE WICHTIGSTE)
**Betreff:** Ihre Ergebnisse: Report + Branchenvergleich für {{firma}}

> Hallo,
>
> die Auswertung ist da. Hier sind Ihre Ergebnisse:
>
> **📄 Studienbericht:**
> → avigor.de/studie/report
>
> **📊 Ihr Branchenvergleich:**
> → avigor.de/studie/benchmark/{{lead_id}}
>
> **🔍 Digital-Quick-Check für {{firma}}:**
> → avigor.de/webpages/audit/{{lead_id}}
>
> Eine Zahl, die uns aufgefallen ist: {{personalisierter_insight}}
>
> Fragen? Einfach antworten.
>
> Dr. Sven-Erik Willrich | AVIGOR

*{{personalisierter_insight}} wird automatisch generiert, z.B.:*
- *Wenn Q6 ≤ 2: „Sie sind mit Ihrem Online-Auftritt unzufriedener als 70% Ihrer Branche."*
- *Wenn Q3 = „Nein, kein Thema": „64% der KMUs in Ihrer Branche nutzen bereits GenAI — Sie verpassen gerade eine Chance."*
- *Wenn Q5 = „Empfehlungen": „Sie gewinnen Kunden vor allem über Empfehlungen — 38% Ihrer Branchenkollegen setzen bereits auf Website-Anfragen als zweiten Kanal."*

### E-Mail 3 — Tag 17
**Betreff:** Was die Ergebnisse konkret für {{firma}} bedeuten

> Hallo,
>
> viele Studienteilnehmer fragen uns nach dem Report:
> „Okay — aber was soll ich als erstes tun?"
>
> Dafür bieten wir ein kostenloses 15-Min-Gespräch:
>
> → Welche 2–3 Quick Wins hätten für {{firma}} den größten Effekt?
> → Wo stehen Sie vs. die Besten Ihrer Branche?
> → Wie nutzen andere KMUs GenAI bereits konkret?
>
> Kein Verkaufsgespräch — eine Einordnung Ihrer Ergebnisse.
>
> → avigor.de/termin
>
> Übrigens: Ein {{branche}}-Unternehmen mit ähnlichem Profil
> hat kürzlich seinen Online-Auftritt in 7 Tagen komplett
> erneuert — mit +60% mehr Anfragen im ersten Monat.
> → avigor.de/referenzen
>
> Lars Willrich | AVIGOR

### E-Mail 4 — Tag 21 (letzte)
**Betreff:** Letzter Punkt: Kostenloser Mockup für {{firma}}

> Hallo,
>
> als Dankeschön für Ihre Studienteilnahme:
>
> **Wir erstellen kostenlos und unverbindlich einen
> Mockup-Entwurf für einen neuen Online-Auftritt
> von {{firma}}.** Gefällt er nicht — kostet nichts.
>
> → avigor.de/webpages/mockup
>
> Gilt bis {{deadline}}.
>
> Das ist die letzte E-Mail zu diesem Thema.
> Wenn Sie weiterhin unsere Studien-Insights erhalten
> möchten, bleiben Sie gerne auf der Liste.
>
> Lars Willrich | AVIGOR

### Jede E-Mail — automatischer Footer

```
---
AVIGOR UG (haftungsbeschränkt) | Goeckestr. 32A, 13055 Berlin
avigor.de | hello@avigor.de

Sie erhalten diese E-Mail aufgrund Ihrer Studienteilnahme
am {{confirmed_at}}.

→ Abmelden: avigor.de/unsubscribe/{{lead_token}}
```

---

## TEIL 4: WEBSITE-SEITEN AUF AVIGOR.DE

| URL | Was | Wann live |
|-----|-----|-----------|
| **/studie** | Landing Page + 8-Fragen-Formular + Opt-In | Woche 1 |
| **/studie/report** | Ergebnisse + PDF-Download + Infografiken | Woche 4 |
| **/studie/benchmark/[id]** | Personalisierter Branchenvergleich | Woche 4 |
| **/termin** | Calendly-Embed oder eigenes Buchungstool | Woche 2 |
| **/unsubscribe/[token]** | Abmeldeseite | Woche 1 |
| **/referenzen** | Vorher/Nachher Fallstudien | Woche 5+ |
| **/webpages/audit/[id]** | Website-Audit (PageSpeed, Mobil, SSL, SEO) | Woche 4 |
| **/webpages/kmu-webdesign** | Angebotsseite (Pakete, Referenzen, CTA) | Woche 2 |
| **/webpages/mockup** | Mockup-Anfrage-Formular | Woche 4 |

### /studie — Landing Page

**Above the fold:**
- „KMU Digital 2026: Wie digital ist der deutsche Mittelstand?"
- „500 KMUs. 8 Fragen. Unter 1 Minute."
- Trust: Springer-Logo, Autoren, Live-Teilnehmerzähler
- CTA-Button → scrollt zum Formular

**Formular:**
- Multi-Step: 1 Frage pro Screen, Progressbar
- Mobile-first, Single-Tap-Antworten
- Letzer Screen: E-Mail + URL + Opt-In

**Below the fold:**
- 3 Benefit-Cards (Report, Benchmark, Audit)
- Über die Autoren (Bücher, Credentials)
- FAQ + Datenschutzhinweis

### /studie/benchmark/[id] — Branchenvergleich

Personalisierte Seite pro Teilnehmer. Zeigt deren Antworten vs. Branchendurchschnitt:

```
Digitalisierung:     Sie ████░░░░░░ 2/5  |  Branche ██████░░░░ 3.2/5  ⚠️
GenAI-Nutzung:       Nein, geplant       |  42% nutzen regelmäßig      ⚠️
Kundenkanal:         Empfehlungen         |  38% Website                💡
Online-Zufriedenheit: Sie ██░░░░░░░░ 1/5  |  Branche ██████░░░░ 3.1/5  ❌
Investitionsplan:    Ja, wenn bezahlbar   |  61% planen Investment      ✅
```

CTAs: „Digital-Quick-Check" / „15-Min-Gespräch" / „Mockup anfordern"

### /webpages/audit/[id] — Digital-Quick-Check

Automatisch generiert via PageSpeed API + Lighthouse:
- Performance-Score, Mobil-Score, SSL, Ladezeit, SEO-Basics
- Vergleich mit Branchendurchschnitt
- CTAs: „Termin buchen" / „Angebot anfordern"

---

## TEIL 5: BACKEND-ARCHITEKTUR

### Datenbank

```sql
CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  firma VARCHAR(255),
  branche VARCHAR(100),
  email VARCHAR(255) UNIQUE,
  website_url VARCHAR(500),
  status VARCHAR(50) DEFAULT 'new',
  -- new → invited → survey_done → pending_optin → confirmed → opted_out
  lead_token VARCHAR(64) UNIQUE,
  invited_at TIMESTAMP,
  confirmed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE survey_responses (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads(id),
  q1_branche VARCHAR(50),
  q2_digital INTEGER,       -- 1-5
  q3_genai VARCHAR(50),
  q4_sentiment VARCHAR(50),
  q5_kundenkanal VARCHAR(50),
  q6_zufriedenheit INTEGER, -- 1-5
  q7_herausforderung VARCHAR(50),
  q8_investition VARCHAR(50),
  submitted_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE audit_results (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads(id),
  url VARCHAR(500),
  performance INTEGER,
  mobile INTEGER,
  ssl BOOLEAN,
  load_time_ms INTEGER,
  seo_score INTEGER,
  audited_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE email_log (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads(id),
  template VARCHAR(50),
  sent_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'sent'
);

CREATE TABLE blacklist (
  email VARCHAR(255) PRIMARY KEY,
  reason VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### API-Endpunkte

```
POST  /api/survey                  ← Umfrage einreichen
GET   /api/confirm/[token]         ← Double-Opt-In
GET   /api/unsubscribe/[token]     ← Abmelden

GET   /api/benchmark/[id]          ← Branchenvergleich-Daten
GET   /api/webpages/audit/[id]     ← Audit-Daten

POST  /api/admin/import-leads      ← CSV-Import der 500 KMUs
POST  /api/admin/send-invitations  ← Batch-Versand (respektiert Warmup)
GET   /api/admin/dashboard         ← KPIs auf einen Blick
POST  /api/admin/run-audits        ← Audits triggern
POST  /api/admin/generate-report   ← Studiendaten aggregieren
```

### SMTP

```env
SMTP_HOST=smtp.avigor.de
SMTP_PORT=587
SMTP_USER=noreply@avigor.de
SMTP_PASS=***
SMTP_FROM_NAME=Dr. Sven-Erik Willrich
SMTP_FROM_EMAIL=sven@avigor.de
SMTP_REPLY_TO=hello@avigor.de
```

**Deliverability-Checkliste:**
- [ ] SPF-Record für avigor.de
- [ ] DKIM-Signierung
- [ ] DMARC-Policy
- [ ] `List-Unsubscribe`-Header in jeder E-Mail
- [ ] Bounce-Handling → automatisch Blacklist
- [ ] Warmup-Ramp einhalten

### Cron-Jobs

```
# Täglich 09:00: E-Mail-Sequenz verarbeiten
0 9 * * * node jobs/process-sequence.js

# Täglich 02:00: Audits für neue Leads mit URL
0 2 * * * node jobs/run-audits.js

# Montags 08:00: Studiendaten aggregieren
0 8 * * 1 node jobs/aggregate-data.js
```

### Sequenz-Engine Logik

```
Für jeden Lead mit status = „confirmed":
  tage = heute - confirmed_at

  Wenn tage >= 0  UND seq_01 nicht gesendet → sende seq_01
  Wenn tage >= 14 UND seq_02 nicht gesendet → sende seq_02
  Wenn tage >= 17 UND seq_03 nicht gesendet → sende seq_03
  Wenn tage >= 21 UND seq_04 nicht gesendet → sende seq_04

  Wenn lead auf Blacklist → überspringe
```

---

## TEIL 6: CLAUDE CODE — BUILD-REIHENFOLGE

| # | Claude Code Prompt | Output | Tag |
|---|-------------------|--------|-----|
| 1 | „Erstelle ein Node.js/Express Backend mit PostgreSQL. Schema: [oben]. SMTP mit Nodemailer. Double-Opt-In-Flow. Rate-limitierter Batch-Versand." | Backend | 1–2 |
| 2 | „Baue ein Multi-Step-Umfrage-Formular für /studie. 8 Fragen, 1 pro Screen, Progressbar, Mobile-first. Submittet an POST /api/survey." | Umfrage-Frontend | 2–3 |
| 3 | „Erstelle responsive HTML-E-Mail-Templates: DOI-Bestätigung + 4 Sequenz-E-Mails. Template-Variablen: {{firma}}, {{branche}}, {{lead_token}}, {{personalisierter_insight}}." | E-Mail-Templates | 3 |
| 4 | „Baue den Cron-Job für die 4-Stufen-Sequenz. Logik: [oben]. Respektiert Blacklist, loggt jeden Versand." | Sequenz-Engine | 3–4 |
| 5 | „Baue eine Audit-Engine: Google PageSpeed Insights API + SSL-Check. Speichert Ergebnisse in audit_results." | Audit-Engine | 4–5 |
| 6 | „Erstelle /studie/benchmark/[id]: Zeigt Teilnehmer-Antworten vs. Branchendurchschnitt als Balkendiagramme. Daten aus /api/benchmark/[id]." | Benchmark-Seite | 5 |
| 7 | „Erstelle /webpages/audit/[id]: Zeigt Audit-Ergebnisse mit Performance-Gauges, Branchenvergleich und CTAs." | Audit-Seite | 5 |
| 8 | „Generiere aus den aggregierten Studiendaten einen Studienbericht als PDF. 15 Seiten, Infografiken, AVIGOR-Branding." | Studienbericht | Woche 4 |

---

## TEIL 7: DER 6-WOCHEN-PLAN

### Woche 1 — Build

| Tag | Was | Wer |
|-----|-----|-----|
| 1 | Claude Code: Backend + DB + API + SMTP | Ralph |
| 1 | SPF/DKIM/DMARC für avigor.de konfigurieren | Ralph |
| 2 | Claude Code: Umfrage-Frontend (/studie) | Ralph |
| 2 | Claude Code: E-Mail-Templates (DOI + 4 Sequenz) | Lars |
| 3 | Claude Code: Sequenz-Engine + Batch-Versand | Ralph |
| 3 | Claude Code: Abmelde-Flow (/unsubscribe) | Ralph |
| 4 | 500 KMUs als CSV importieren (POST /api/admin/import-leads) | Sven |
| 4 | Claude Code: 500 personalisierte E-Mails generieren | Sven |
| 5 | End-to-End-Test: Einladung → Umfrage → DOI → E-Mail 1 | Alle |
| 5 | SMTP-Warmup starten (5 Test-E-Mails) | Ralph |

### Woche 2 — Launch

| Was |
|-----|
| Versand starten: 5/Tag → 10/Tag → 20/Tag (Warmup) |
| Claude Code: /webpages/kmu-webdesign + /termin Seiten bauen |
| Claude Code: Audit-Engine bauen |
| LinkedIn-Profile optimieren |
| LinkedIn Post #1: „Wir starten unsere KMU-Studie 2026" |

### Woche 3 — Ramp-Up

| Was |
|-----|
| Versand: 30/Tag → alle 500 bis Ende Woche 3 draußen |
| Erste Opt-Ins kommen rein → Sequenz-E-Mail 1 läuft automatisch |
| Claude Code: Benchmark-Seite + Audit-Seite bauen |
| LinkedIn Posts #2–4 (Teaser: „Erste Trends...") |
| Audits für alle Teilnehmer mit URL laufen automatisch |

### Woche 4 — Report & Delivery

| Was |
|-----|
| Studiendaten auswerten (Claude Code: aggregate-data) |
| Claude Code: Studienbericht als PDF generieren |
| Claude Code: /studie/report Ergebnisseite bauen |
| Branchenvergleiche für alle Teilnehmer automatisch generieren |
| **E-Mail 2 geht raus an erste Opt-Ins** (Report + Benchmark + Audit) |
| LinkedIn Posts #5–8: Key Findings der Studie |

### Woche 5 — Conversion

| Was |
|-----|
| E-Mail 3 läuft automatisch (Termin-CTA) |
| E-Mail 4 läuft automatisch (Mockup-Angebot) |
| Termine führen |
| Angebote erstellen |
| Mockups mit Claude Code bauen |

### Woche 6 — Abschluss & Skalierung

| Was |
|-----|
| Deals abschließen |
| Erste Projekte starten |
| Fallstudien-Seite /referenzen erstellen |
| Report auf avigor.de veröffentlichen (öffentlich) |
| Nächste Welle planen: „KMU Digital Q3 2026" |

---

## TEIL 8: KPIs

| Stufe | Konservativ | Optimistisch |
|-------|-------------|-------------|
| E-Mails versendet | 500 | 500 |
| Öffnungsrate | 25% (125) | 40% (200) |
| Klick auf Umfrage | 10% (50) | 18% (90) |
| Umfrage fertig (8 Fragen!) | 70% (35) | 80% (72) |
| Opt-In bestätigt (DOI) | 75% (26) | 85% (61) |
| + LinkedIn/Viral | +10 | +30 |
| **Opt-Ins gesamt** | **36** | **91** |
| → Termin | 20% (7) | 25% (23) |
| → Angebot | 60% (4) | 60% (14) |
| → Kunde | 40% (2) | 40% (6) |
| **Kunden** | **2–3** | **6–10** |
| **Umsatz (Ø 2.500 €)** | **5.000–7.500 €** | **15.000–25.000 €** |

---

## TEIL 9: KOSTEN

| Position | Kosten |
|----------|--------|
| Hosting/Server/Domain (existiert) | 0 € |
| SMTP (eigener oder Transaktions-SMTP) | 0–10 €/Monat |
| Google PageSpeed API | 0 € |
| Claude (habt ihr) | 0 € |
| LinkedIn Ads (optional) | 0–500 € |
| **Gesamt** | **0–510 €** |

---

## TEIL 10: CHECKLISTE TAG 1

- [ ] Claude Code: Backend + DB + SMTP aufsetzen
- [ ] SPF/DKIM/DMARC konfigurieren
- [ ] Claude Code: Umfrage-Formular bauen
- [ ] Claude Code: Double-Opt-In-Flow
- [ ] Claude Code: Admin-Endpunkt für CSV-Import
- [ ] 500-KMU-CSV vorbereiten (Spalten: firma, branche, email)
- [ ] Claude Code: E-Mail-Personalisierungs-Script
- [ ] End-to-End-Test mit eigener E-Mail

---

```
500 E-Mails → Umfrage → Opt-In → 4 E-Mails in 21 Tagen → Kunden

Keine Segmente. Keine Drittanbieter. Keine 50-Tage-Wartezeit.
Alles auf avigor.de. Alles mit Claude Code.
6 Wochen bis erste Kunden. ~0 € Kosten.
```

---

*AVIGOR UG (haftungsbeschränkt) · Goeckestr. 32A, 13055 Berlin*
*hello@avigor.de · avigor.de*

*„We deploy agents, not armies."*
