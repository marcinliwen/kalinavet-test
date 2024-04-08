'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getLocale } from 'next-intl/server'

import { createClient } from '@/app/utils/supabase/server'


export async function signup(formData: FormData) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
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