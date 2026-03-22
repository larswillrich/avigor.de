import bcrypt from "bcrypt";
import { pool } from "./pool";
import { config } from "../config";
import { runMigrations } from "./migrate";

async function seed() {
  await runMigrations();

  const hash = await bcrypt.hash(config.admin.password, 12);

  await pool.query(
    `INSERT INTO admin_users (username, password_hash)
     VALUES ($1, $2)
     ON CONFLICT (username) DO UPDATE SET password_hash = $2`,
    [config.admin.username, hash]
  );

  console.log(`Admin user "${config.admin.username}" seeded.`);
  await pool.end();
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
