import { env } from '~/helpers/env';
import app from './interfaces/http';

const server = Bun.serve({
  port: env.PORT,
  hostname: env.HOST,
  fetch: app.fetch,
});

console.log(`Server running at ${server.hostname}:${server.port}`);
