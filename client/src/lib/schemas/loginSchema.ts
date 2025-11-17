import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Email is required"),
  password: z.string().min(6),
});

export type LoginSchema = z.infer<typeof loginSchema>;
