import { drizzle, MySql2Database } from 'drizzle-orm/mysql2';
import mysql from 'mysql2';
import { env } from '~/helpers/env';

let db:
  | (MySql2Database<Record<string, never>> & {
      $client: mysql.Pool | mysql.Connection;
    })
  | null = null;

if (!db) {
  let connectionPool: mysql.Connection | mysql.Pool | null = null;

  if (env.MODE === 'development') {
    connectionPool = mysql.createConnection({
      user: env.DATABASE_USER,
      host: env.DATABASE_HOST,
      password: env.DATABASE_PASSWORD,
      database: env.DATABASE_NAME,
    });
  } else {
    connectionPool = mysql.createPool({
      user: env.DATABASE_USER,
      host: env.DATABASE_HOST,
      password: env.DATABASE_PASSWORD,
      database: env.DATABASE_NAME,
      maxIdle: env.DATABASE_MAX_CONNECTION_IDLE,
      connectionLimit: env.DATABASE_CONNECTION_LIMIT,
    });
  }

  db = drizzle({ client: connectionPool, casing: 'snake_case' });
}

export default db;
