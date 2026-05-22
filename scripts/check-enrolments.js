const fs = require('node:fs');
const path = require('node:path');
const mysql = require('mysql2/promise');

function safeIdentifier(input, fallback) {
  const raw = (input || '').trim();
  const value = raw || fallback;
  if (!/^[A-Za-z0-9_]+$/.test(value)) {
    throw new Error(`Invalid SQL identifier: ${value}`);
  }
  return value;
}

function loadEnvFromExample() {
  const envPath = path.join(process.cwd(), '.env.example');
  const out = {};
  const content = fs.readFileSync(envPath, 'utf8');
  for (const raw of content.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const idx = line.indexOf('=');
    if (idx <= 0) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim().replace(/^['"]|['"]$/g, '');
    out[key] = value;
  }
  return out;
}

async function main() {
  const env = loadEnvFromExample();
  const schema = safeIdentifier(env.DB_SCHEMA || env.DB_NAME, 'sapiens_nova');
  const table = safeIdentifier(env.DB_ENROLMENT_TABLE, 'enrolment_submissions');
  const conn = await mysql.createConnection({
    host: env.DB_HOST,
    port: Number.parseInt(env.DB_PORT || '3306', 10),
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  });

  const [rows] = await conn.query(
    `SELECT Programme, Stu_First_name, Stu_last_name, Par_email, number FROM \`${schema}\`.\`${table}\` LIMIT 20`,
  );

  console.log(JSON.stringify(rows, null, 2));
  await conn.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
