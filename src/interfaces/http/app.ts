import { OpenAPIHono } from "@hono/zod-openapi";

import { createSwaggerUI } from "~/interfaces/docs";
import { env } from "~/helpers/env";
import {
  ResponseDTOSchema,
  type ResponseDTO,
} from "~/domains/key-values/response";

import { loggerMIddleware } from "./middlewares/logger";
import { envMiddleware } from "./middlewares/env";
import type { Application } from "./types";

export const createRouter = (): Application => {
  return new OpenAPIHono({
    strict: false,
  });
};

export const createApp = () => {
  const app = createRouter();

  app.doc("/doc", {
    openapi: "3.0.3",
    info: {
      title: env.DOC_TITLE,
      version: "1.0.0",
    },
  });

  app.use(envMiddleware);

  app.use(loggerMIddleware);

  createSwaggerUI(app);

  app.onError(async (err, c) => {
    c.var.logger.error({ err, path: c.req.path });

    const response: ResponseDTO = {
      error: true,
      message: err.message,
    };

    return c.json(ResponseDTOSchema().parse(response), 401);
  });

  return app;
};
