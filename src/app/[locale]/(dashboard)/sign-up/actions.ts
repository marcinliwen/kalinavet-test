'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getLocale } from 'next-intl/server'

import { createClient } from '@/app/utils/supabase/server'
import {z} from 'zod';

import { SignUpFormSchema } from '@/lib/validationSignUpFormSchema' 

export type SignUpData = {
    email: string,
    password: string
}
export async function signup(formData: SignUpData) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    console.log('formData', formData)
    // type-casting here for convenience
    // in practice, you should validate your inputs
    const {email, password} = SignUpFormSchema.parse({
        email: formData.email,
        password: formData.password
    })
    const data = {
        email: email as string,
        password: password as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/dashboard', 'layout')
    redirect('/dashboard')
}
export async function isLogged(){
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase.auth.getUser();
  
    if (error || !data?.user) {
      return false
    }
    else{
        return true
    }
}


