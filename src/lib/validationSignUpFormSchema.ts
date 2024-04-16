import {z} from 'zod';


export const SignUpFormSchema = z.object({
    email: z.coerce.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, {message:"Password must be at last 8 characters"})
})