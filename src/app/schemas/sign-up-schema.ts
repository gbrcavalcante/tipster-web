import { z } from "zod";

export const signUpSchema = z
  .object({
    fullname: z
      .string()
      .min(3, { message: "O nome deve conter no mínimo 3 caracteres" }),
    email: z.email({ message: "Digite um e-mail válido." }),
    password: z
      .string()
      .min(8, { message: "A senha deve conter no mínimo 8 caracteres." }),
    confirmPassword: z
      .string()
      .min(8, { message: "A senha deve conter no mínimo 8 caracteres." }),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "As senhas não conferem.",
      });
    }
  });
