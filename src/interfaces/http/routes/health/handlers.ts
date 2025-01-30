import {
  HealthDTOSchemaResponse,
  type HealthDTOResponse,
} from "~/domains/dtos/health";
import type { HealthRouteGetType } from "./routes";
import type { AppRouteHandler } from "~/interfaces/http/app";
import {
  ResponseDTOSchema,
  type ResponseDTO,
} from "~/domains/key-values/response";

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
