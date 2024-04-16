'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getLocale } from 'next-intl/server'

import { createClient } from '@/app/utils/supabase/client'

export async function getUserSession(code:any){
    const supabase = createClient();
    console.log('code link', code)
    try {
        const userData = supabase.auth.exchangeCodeForSession(code)
        return userData
    } catch (error) {
        
    }
   
}

export async function isLogged(){
    const cookieStore = cookies()
    const supabase = createClient()

    supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'PASSWORD_RECOVERY') {
          console.log('PASSWORD_RECOVERY', session)
          // show screen to update user's password
          //showPasswordResetScreen(true)
        }
      })
    const { data, error } = await supabase.auth.getUser();
  
    if (error || !data?.user) {
        //redirect('/')
    }
    else{
        return data
    }
}