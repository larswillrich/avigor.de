import fs from "fs";
import path from "path";
import { pool } from "./pool";

export async function runMigrations(): Promise<void> {
  const migrationsDir = path.join(__dirname, "migrations");

  // In compiled dist, SQL files won't be there — copy them or read from src
  let dir = migrationsDir;
  if (!fs.existsSync(dir)) {
    dir = path.join(__dirname, "..", "..", "src", "db", "migrations");
  }

  if (!fs.existsSync(dir)) {
    console.warn("No migrations directory found, skipping migrations");
    return;
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".sql")).sort();

  for (const file of files) {
    const sql = fs.readFileSync(path.join(dir, file), "utf-8");
    console.log(`Running migration: ${file}`);
    await pool.query(sql);
    console.log(`Migration complete: ${file}`);
  }
}
