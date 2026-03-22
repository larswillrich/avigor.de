import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || "4000", 10),
  databaseUrl: process.env.DATABASE_URL || "postgresql://avigor:changeme@localhost:5432/avigor",
  jwtSecret: process.env.JWT_SECRET || "dev-secret-change-me",
  smtp: {
    host: process.env.SMTP_HOST || "localhost",
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_SECURE === "true",
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
    fromName: process.env.SMTP_FROM_NAME || "AVIGOR",
    fromEmail: process.env.SMTP_FROM_EMAIL || "sven@avigor.de",
    replyTo: process.env.SMTP_REPLY_TO || "hello@avigor.de",
  },
  pagespeedApiKey: process.env.PAGESPEED_API_KEY || "",
  warmupStartDate: process.env.WARMUP_START_DATE || "2026-04-01",
  baseUrl: process.env.BASE_URL || "https://avigor.de",
  admin: {
    username: process.env.ADMIN_USERNAME || "admin",
    password: process.env.ADMIN_PASSWORD || "changeme",
  },
};
