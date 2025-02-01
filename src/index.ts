import 'dotenv/config';
import { serve } from '@hono/node-server';
import { env } from '~/helpers/env';
import app from './interfaces/http';

serve({
  port: env.PORT,
  hostname: env.HOST,
  fetch: app.fetch,
});

console.log(`Server running!`);
