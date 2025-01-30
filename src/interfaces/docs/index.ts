import { swaggerUI } from "@hono/swagger-ui";

import type { Application } from "~/interfaces/http/types";

export const createSwaggerUI = (app: Application) =>
  app.get("/", swaggerUI({ url: "/doc" }));
