import { serve } from "bun";
import { Client } from "pg";

const db = new Client({
    host: "db",
    port: 5432,
    user: "user",
    password: "password",
    database: "transport",
  });
  

await db.connect();

serve({
  port: 3000,
  fetch: async (req) => {
    if (req.url.endsWith("/test-db")) {
      const res = await db.query("SELECT NOW()");
      return new Response(JSON.stringify(res.rows[0]), { status: 200 });
    }
    return new Response("API Bun running!", { status: 200 });
  },
});