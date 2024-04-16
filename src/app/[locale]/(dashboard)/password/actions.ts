'use server'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/app/utils/supabase/server'
import {z} from 'zod';
import { SignUpFormSchema } from '@/lib/validationSignUpFormSchema'
const emailSchema = SignUpFormSchema.pick({email: true})

export async function  resetPassword(formData:FormData){
console.log('formData.get(`"email"`)',formData.get('email'))
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {email}= emailSchema.parse({email: formData.get('email')})
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:3000/reset-password',
      })
      if (error) {
        revalidatePath('/error')
        }
        revalidatePath('/', 'layout')
        redirect('/')
}