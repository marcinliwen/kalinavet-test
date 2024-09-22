'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getLocale } from 'next-intl/server'

import { createClient } from '@/app/utils/supabase/server'
import { z } from 'zod';

import { SignUpFormSchema } from '@/lib/validationSignUpFormSchema' 

export type SignUpData = {
    email: string,
    password: string
}
export async function signup(prevState: any, formData: FormData) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    //console.log('formData', formData)
    // type-casting here for convenience
    // in practice, you should validate your inputs
    const singUpValidation = SignUpFormSchema.safeParse({
        email: formData.get('email') as string,
        password: formData.get('password') as string
    })
    if(!singUpValidation.success){
        return {
            error: singUpValidation.error.flatten().fieldErrors
        }
    }
   /*  const data = {
        email: email as string,
        password: password as string,
    }
 */

    let currentEmail = formData.get('email') as string;
    let currentPassword = formData.get('password') as string;
    const {count} = await supabase.from('person').select('*', {count: 'exact', head: true}).eq('email', currentEmail)
    console.log('count', count)
    if(count && count > 0){
        return{
            error: "Ten email jest już w naszej bazie"
        }
    }

     const { data, error } = await supabase.auth.signUp({ email: currentEmail, password:currentPassword
    })

     console.log('error', error)
    if (error) {
        redirect('/error')
    } 

    revalidatePath('/sign-up', 'layout')
    return{
        message: 'Utworzyłeś nowe konto, potwierdź teraz swój mail klikając w link w wiadomości, którą wysłalismy do Ciebie'
    }
    //redirect('/')
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


