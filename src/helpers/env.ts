import { z } from 'zod';

const EnvSchema = z.object({
  MODE: z.enum(['development', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  HOST: z.coerce.string().default('locahost'),
  LOG_LEVEL: z.coerce.string().default('info'),
  DOC_TITLE: z.coerce.string().default(''),
  DATABASE_URL: z.coerce.string().default(''),
  DATABASE_HOST: z.coerce.string().default('localhost'),
  DATABASE_USER: z.coerce.string().default(''),
  DATABASE_PASSWORD: z.coerce.string().default(''),
  DATABASE_NAME: z.coerce.string().default(''),
  DATABASE_CONNECTION_LIMIT: z.coerce.number().default(10),
  DATABASE_MAX_CONNECTION_IDLE: z.coerce.number().default(5),
});

export type EnvType = z.infer<typeof EnvSchema>;

export const env = EnvSchema.parse(Bun.env);
