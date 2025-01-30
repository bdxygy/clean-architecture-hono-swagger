import {
  HealthDTOSchemaResponse,
  type HealthDTOResponse,
} from "~/domains/dtos/health";
import type { AppRouteHandler } from "~/interfaces/http/types";
import {
  ResponseDTOSchema,
  type ResponseDTO,
} from "~/domains/key-values/response";

import type { HealthRouteGetType } from "./routes";

export const healthHandleGet: AppRouteHandler<HealthRouteGetType> = (c) => {
  const data: HealthDTOResponse = {
    status: "OK",
  };

  const response: ResponseDTO = {
    data,
    message: "The health service OK",
    error: false,
  };

  c.var.logger.info({ response, path: c.req.path });

  return c.json(
    ResponseDTOSchema(HealthDTOSchemaResponse).parse(response),
    200
  );
};
