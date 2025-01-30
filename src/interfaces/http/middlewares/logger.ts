import createLogger from "~/infrastructures/logger/index";
import type { ApplicationVariableBindings } from "~/interfaces/http/app";

import { createMiddleware } from "hono/factory";

export const loggerMIddleware = createMiddleware<ApplicationVariableBindings>(
  async (c, next) => {
    const logger = createLogger(c.var.env.LOG_LEVEL);
    c.set("logger", logger);
    await next();
  }
);
