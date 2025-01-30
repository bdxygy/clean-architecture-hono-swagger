import { createRoute } from "@hono/zod-openapi";
import { HealthDTOSchemaResponse } from "~/domains/dtos/health";
import { ResponseDTOSchema } from "~/domains/key-values/response";

const TAGS = ["Health"];

export const healthRouteGet = createRoute({
  method: "get",
  path: "/",
  tags: TAGS,
  responses: {
    [200]: {
      type: "object",
      content: {
        "application/json": {
          schema: ResponseDTOSchema(HealthDTOSchemaResponse),
        },
      },
      description: "Check API Health",
    },
  },
});

export type HealthRouteGetType = typeof healthRouteGet;
