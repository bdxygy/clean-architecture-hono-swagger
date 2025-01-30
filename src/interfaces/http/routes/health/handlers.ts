import {
  HealthDTOSchemaResponse,
  type HealthDTOResponse,
} from '~/domains/dtos/health';
import type { AppRouteHandler } from '~/interfaces/http/types';
import {
  ResponseDTOSchema,
  type ResponseDTO,
} from '~/domains/key-values/response';

import type { HealthRouteGetType } from './routes';
import { logging } from '~/infrastructures/logger';

export const healthHandleGet: AppRouteHandler<HealthRouteGetType> = (c) => {
  const data: HealthDTOResponse = {
    status: 'OK',
  };

  const response: ResponseDTO = {
    data,
    message: 'The health service OK',
    error: false,
  };

  logging(c.var.logger, 'info', {
    type: '<== RESPONSE',
    path: c.req.path,
    value: response,
  });

  return c.json(
    ResponseDTOSchema(HealthDTOSchemaResponse).parse(response),
    200
  );
};
