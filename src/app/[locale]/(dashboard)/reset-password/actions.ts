'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { z } from 'zod'
import { createClient } from '@/app/utils/supabase/client'
import { createClient as createServerClient } from '@/app/utils/supabase/server'
export async function getUserSession(code: any) {
    const supabase = createClient();
    //console.log('code link', code)
    try {
        const userData = supabase.auth.exchangeCodeForSession(code)
        return userData
    } catch (error) {

    }

}

export async function isLogged() {
    const cookieStore = cookies()
    const supabase = createClient()

    supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'PASSWORD_RECOVERY') {
            //console.log('PASSWORD_RECOVERY', session)
            // show screen to update user's password
            //showPasswordResetScreen(true)
        }
    })
    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {
        //redirect('/')
    }
    else {
        return data
    }
}

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

type UpdateMessages = {
    errors: {
        password?: string[] | undefined;
        confirmPassword?: string[] | undefined;
    };
}

export async function updatePassword(prevState: any, formData: FormData) {
    const cookieStore = cookies()
    const supabase = createServerClient(cookieStore)
    const locale = await getLocale();
    const validatedFields = newPasswordSchema.safeParse({
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword')

    })
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    
    const newPassword = {password: formData.get('confirmPassword')}
   
   
    const { data, error } = await supabase.auth.updateUser(
        {password: formData.get('confirmPassword') as string}
        )
   if(error){
    console.error(error)
   }
    //console.log('success', data)
    revalidatePath(`/${locale}/reset-password`, 'layout')
    await supabase.auth.signOut()
    redirect('/login')
    return{
        success: 'Hasło zostało pomyślnie zmienione'
    }
}