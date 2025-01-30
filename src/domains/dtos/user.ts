import { z } from "zod";

export const UserRegisterDTOSchemaRequest = z.object({
  email: z.string(),
  password: z.string(),
});

export type UserRegisterDTORequest = z.infer<
  typeof UserRegisterDTOSchemaRequest
>;
