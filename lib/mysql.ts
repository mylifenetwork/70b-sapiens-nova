import mysql from 'mysql2/promise';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

let pool: mysql.Pool | null = null;
let envBootstrapped = false;

function bootstrapEnvFromExample(): void {
  if (envBootstrapped) {
    return;
  }
  envBootstrapped = true;

  const required = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];
  const hasRequired = required.every((key) => Boolean(process.env[key]));
  if (hasRequired) {
    return;
  }

  const candidate = join(process.cwd(), '.env.example');
  if (!existsSync(candidate)) {
    return;
  }

  const content = readFileSync(candidate, 'utf8');
  for (const rawLine of content.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) {
      continue;
    }
    const idx = line.indexOf('=');
    if (idx <= 0) {
      continue;
    }
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim().replace(/^['"]|['"]$/g, '');
    if (!process.env[key] && value) {
      process.env[key] = value;
    }
  }
}

function getRequiredEnv(name: string): string {
  bootstrapEnvFromExample();
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function parseBooleanEnv(value: string | undefined): boolean {
  if (!value) {
    return false;
  }
  return ['1', 'true', 'yes', 'on'].includes(value.trim().toLowerCase());
}

function getOptionalEnv(name: string): string {
  bootstrapEnvFromExample();
  return (process.env[name] || '').trim();
}

function getSslConfig(): mysql.PoolOptions['ssl'] | undefined {
  const sslEnabled = parseBooleanEnv(getOptionalEnv('DB_SSL'));
  if (!sslEnabled) {
    return undefined;
  }

  const rejectUnauthorizedRaw = getOptionalEnv('DB_SSL_REJECT_UNAUTHORIZED');
  const rejectUnauthorized = rejectUnauthorizedRaw
    ? parseBooleanEnv(rejectUnauthorizedRaw)
    : true;

  const caPath = getOptionalEnv('DB_SSL_CA_PATH');
  const caBase64 = getOptionalEnv('DB_SSL_CA_BASE64');
  const certBase64 = getOptionalEnv('DB_SSL_CERT_BASE64');
  const keyBase64 = getOptionalEnv('DB_SSL_KEY_BASE64');

  const ssl: mysql.PoolOptions['ssl'] = {
    rejectUnauthorized,
  };

  if (caPath && existsSync(caPath)) {
    ssl.ca = readFileSync(caPath, 'utf8');
  } else if (caBase64) {
    ssl.ca = Buffer.from(caBase64, 'base64').toString('utf8');
  }

  if (certBase64) {
    ssl.cert = Buffer.from(certBase64, 'base64').toString('utf8');
  }
  if (keyBase64) {
    ssl.key = Buffer.from(keyBase64, 'base64').toString('utf8');
  }

  return ssl;
}

export function getMySqlPool(): mysql.Pool {
  if (pool) {
    return pool;
  }

  const host = getRequiredEnv('DB_HOST');
  const port = Number.parseInt(process.env.DB_PORT || '3306', 10);
  const user = getRequiredEnv('DB_USER');
  const database = getRequiredEnv('DB_NAME');
  const ssl = getSslConfig();

  console.log('[db] Creating MySQL pool', {
    host,
    port,
    user,
    database,
    sslEnabled: Boolean(ssl),
  });

  pool = mysql.createPool({
    host,
    port,
    user,
    password: getRequiredEnv('DB_PASSWORD'),
    database,
    connectionLimit: Number.parseInt(process.env.DB_CONNECTION_LIMIT || '10', 10),
    waitForConnections: true,
    namedPlaceholders: false,
    ssl,
  });

  return pool;
}
