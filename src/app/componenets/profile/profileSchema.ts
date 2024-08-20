import { z } from "zod";

export const profileSchema = z.object({
    name: z.string().trim().min(1, {message: "Imię jest wymagane"}),
    surname: z.string().trim().min(1, {message: "Nazwisko jest wymagane"}),
    address: z.string().trim().min(1, {message: "Adres jest wymagany"}),
    post_code: z.string().trim().min(1, {message: "Kod pocztowy jest wymagany"}),
    city: z.string().trim().min(1, {message: "Miasto jest wymagane"}),
    country: z.string().trim().min(1, {message: "Państwo jest wymagane"}),
    phone: z.string().trim().min(1, {message: "Nr tel jest wymagany"}),
    email: z.string().trim().email({message: "Nieprawidłowy adres email"}),
    id: z.string(),
})