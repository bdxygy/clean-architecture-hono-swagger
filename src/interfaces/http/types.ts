import type { OpenAPIHono, RouteConfig, RouteHandler } from "@hono/zod-openapi";

import type { EnvType } from "~/helpers/env";
import type { logger } from "~/infrastructures/logger";

export type ApplicationVariableBindings = {
  Variables: {
    env: EnvType;
    logger: logger;
  };
  Bindings: Record<string, string>;
};

export type Application = OpenAPIHono<ApplicationVariableBindings>;

export type AppRouteHandler<R extends RouteConfig> = RouteHandler<
  R,
  ApplicationVariableBindings
>;
