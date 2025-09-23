import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email({ message: "Digite um e-mail válido." }),
    password: z
      .string()
      .min(8, { message: "A senha deve ter no mínimo 8 caracteres." }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirme a senha (mínimo 8 caracteres)." }),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "As senhas digitadas não coincidem.",
      });
    }
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
