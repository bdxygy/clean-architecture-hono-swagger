import { swaggerUI } from "@hono/swagger-ui";
import type { Application } from "~/interfaces/http/app";

export const createSwaggerUI = (app: Application) =>
  app.get("/", swaggerUI({ url: "/doc" }));
