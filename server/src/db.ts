import { Pool } from "pg";

export const pool = new Pool({
  user: "kevinzimmer",
  host: "localhost",
  database: "woodwork-webstore",
  password: "Fr4nk13d4muff69!", // leave blank if not set
  port: 5432,
});