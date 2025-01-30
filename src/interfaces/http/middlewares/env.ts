import { createMiddleware } from "hono/factory";
import type { ApplicationVariableBindings } from "~/interfaces/http/types";
import { env } from "~/helpers/env";

export const envMiddleware = createMiddleware<ApplicationVariableBindings>(
  async (c, next) => {
    c.set("env", env);
    await next();
  }
);
