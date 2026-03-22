import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { config } from "./config";
import { runMigrations } from "./db/migrate";
import { setupCronJobs } from "./cron";
import { errorHandler } from "./middleware/errorHandler";
import surveyRoutes from "./routes/survey";
import benchmarkRoutes from "./routes/benchmark";
import auditRoutes from "./routes/audit";
import reportRoutes from "./routes/report";
import adminRoutes from "./routes/admin";

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: [config.baseUrl, "http://localhost:3000"],
  credentials: true,
}));
app.use(express.json());

// Rate limiting
const publicLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

const surveyLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { error: "Too many submissions. Please try again later." },
});

// Routes
app.use("/", publicLimiter, surveyRoutes);
app.use("/", publicLimiter, benchmarkRoutes);
app.use("/", publicLimiter, auditRoutes);
app.use("/", publicLimiter, reportRoutes);
app.use("/", adminRoutes);

// Apply survey limiter specifically
app.post("/survey", surveyLimiter);

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Error handler
app.use(errorHandler);

// Start
async function start() {
  try {
    console.log("Running database migrations...");
    await runMigrations();
    console.log("Migrations complete.");

    setupCronJobs();

    app.listen(config.port, "0.0.0.0", () => {
      console.log(`AVIGOR API running on port ${config.port}`);
    });
  } catch (err) {
    console.error("Failed to start:", err);
    process.exit(1);
  }
}

start();
