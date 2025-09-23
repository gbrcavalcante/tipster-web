import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Digite um e-mail válido." }),
  password: z
    .string()
    .min(8, { message: "A senha deve conter no mínimo 8 caracteres." }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
