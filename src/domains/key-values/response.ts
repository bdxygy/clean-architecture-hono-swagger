import { z } from "zod";

export const ResponseDTOSchema = <T extends z.ZodType<any, any, any>>(T?: T) =>
  z.object({
    data: T ?? z.null().nullable(),
    error: z.boolean().optional().default(false),
    message: z.string(),
  });

export type ResponseDTO = z.infer<ReturnType<typeof ResponseDTOSchema>>;
