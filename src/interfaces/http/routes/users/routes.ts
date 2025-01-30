import { createRoute } from "@hono/zod-openapi";
import { STATUS_CODE } from "~/helpers/status-code";

export const get = createRoute({
  method: "get",
  path: "/",
  responses: {
    [STATUS_CODE.OK]: {
      description: "OK",
    },
  },
});
