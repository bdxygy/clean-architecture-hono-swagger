import { z } from "zod";

const EnvSchema = z.object({
  PORT: z.coerce.number().default(3000),
  HOST: z.coerce.string().default("locahost"),
  LOG_LEVEL: z.coerce.string().default("info"),
  DOC_TITLE: z.coerce.string().default(""),
});

export type EnvType = z.infer<typeof EnvSchema>;

export const env = EnvSchema.parse(Bun.env);
