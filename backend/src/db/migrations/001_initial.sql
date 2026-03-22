-- AVIGOR Kampagnen-Backend: Initial Schema

CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS leads (
  id SERIAL PRIMARY KEY,
  firma VARCHAR(255),
  branche VARCHAR(100),
  email VARCHAR(255) UNIQUE NOT NULL,
  website_url VARCHAR(500),
  status VARCHAR(50) DEFAULT 'new',
  lead_token VARCHAR(64) UNIQUE NOT NULL,
  invited_at TIMESTAMP,
  confirmed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS survey_responses (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads(id) ON DELETE CASCADE,
  q1_branche VARCHAR(50),
  q2_digital INTEGER CHECK (q2_digital BETWEEN 1 AND 5),
  q3_genai VARCHAR(50),
  q4_sentiment VARCHAR(50),
  q5_kundenkanal VARCHAR(50),
  q6_zufriedenheit INTEGER CHECK (q6_zufriedenheit BETWEEN 1 AND 5),
  q7_herausforderung VARCHAR(50),
  q8_investition VARCHAR(50),
  submitted_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS audit_results (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads(id) ON DELETE CASCADE,
  url VARCHAR(500),
  performance INTEGER,
  mobile INTEGER,
  ssl BOOLEAN,
  load_time_ms INTEGER,
  seo_score INTEGER,
  audited_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS email_log (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads(id) ON DELETE CASCADE,
  template VARCHAR(50) NOT NULL,
  sent_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'sent'
);

CREATE TABLE IF NOT EXISTS blacklist (
  email VARCHAR(255) PRIMARY KEY,
  reason VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_token ON leads(lead_token);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_email_log_lead_template ON email_log(lead_id, template);
CREATE INDEX IF NOT EXISTS idx_survey_lead ON survey_responses(lead_id);
CREATE INDEX IF NOT EXISTS idx_audit_lead ON audit_results(lead_id);
