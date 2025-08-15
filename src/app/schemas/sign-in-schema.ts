import { z } from "zod";

export const signInSchema = z.object({
  email: z.email({ message: "Digite um e-mail válido." }),
  password: z
    .string()
    .min(8, { message: "A senha deve conter no mínimo 8 caracteres." })
    .max(20, { message: "A senha deve conter no máximo 20 caracteres." }),
});
