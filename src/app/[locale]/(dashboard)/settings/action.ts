'use server'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { z } from 'zod'
import { createClient as createServerClient } from '@/app/utils/supabase/server'
import { passwordResetSchema } from '@/lib/passwordResetSchema'

const newPasswordSchema = z.object({
    password: z.string().min(8, {message: 'Hasło powinno mnieć co najmniej 8 znaków'}),
    //.refine(
       // (val) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(val),
       // { message: 'Password must be at least 8 characters long and contain at least one uppercase character, one lowercase character, and one special symbol' }
   // ),
    confirmPassword: z.string(),

}).superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['confirmPassword'],
            message: 'Passwords do not match',
        });
    }
})

type FormState = {
    message?: string;
    error?: string;
    //fields?: Record<string, string>;
    //issues?: string[];
  };

export default  async function setNewPassword(prevState: FormState, formData: FormData):Promise<FormState>{
    const cookieStore = cookies();
    const supabase = createServerClient(cookieStore)
    const locale = await getLocale();
    const validatedFields = passwordResetSchema.safeParse({
        password: formData.get('password') as string,
        confirmPassword: formData.get('confirmPassword') as string
    })
    if(!validatedFields.success){
        return {
            message: 'something wrong',
        }
    }
    //console.log("formData.get('confirmPassword')", formData.get('confirmPassword'))

    const {data, error} =  await supabase.auth.updateUser(
        {password: formData.get('confirmPassword') as string}
    ) 

    if(error){
       console.error('[ERROR]: ', error.name,  error.status)
       let errorMessage = error.status === 422 ? "Użyte hasło jest takie same jak poprzednie, wymyśl coś nowego!" : "";
       return {
        error: errorMessage
       }
    } 
    revalidatePath(`/${locale}/settings`);

        return{
            message:'Hasło zostało zaktualizowane.'
        }
    
}