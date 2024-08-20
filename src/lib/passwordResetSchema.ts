import { z } from "zod";

export const passwordResetSchema = z.object({
    password: z.string().min(8, { message: 'Hasło powinno mnieć co najmniej 8 znaków.' }),
    confirmPassword: z.string(),
}).superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['confirmPassword'],
            message: 'Powtórzone hasło nie jest identyczne.',
        });
    }
}) 