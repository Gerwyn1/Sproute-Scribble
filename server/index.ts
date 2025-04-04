import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/server/schema";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

const sql = neon(process.env.DATABASE_URL as string);
export const db = drizzle(sql, { schema, logger: true });
