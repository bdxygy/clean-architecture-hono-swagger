import { z } from "zod";

export const HealthDTOSchemaResponse = z.object({
  status: z.string(),
});

export type HealthDTOResponse = z.infer<typeof HealthDTOSchemaResponse>;
