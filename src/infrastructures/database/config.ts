import { defineConfig } from 'drizzle-kit';
import { env } from '~/helpers/env';

export default defineConfig({
  dialect: 'mysql',
  schema: './src/infrastructures/database/schema',
  strict: true,
  breakpoints: true,
  casing: 'snake_case',
  migrations: {
    table: '__drizzle__migrations__',
    prefix: 'timestamp',
  },
  out: './src/infrastructures/database/migrations',
  dbCredentials: {
    database: env.DATABASE_NAME,
    host: env.DATABASE_HOST,
    password: env.DATABASE_PASSWORD,
    user: env.DATABASE_USER,
  },
});
