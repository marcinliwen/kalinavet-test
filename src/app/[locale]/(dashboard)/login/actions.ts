'use server'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getLocale } from 'next-intl/server'

import { createClient } from '@/app/utils/supabase/server'

type LoginType = { error: string | {} }

const credentialsSchema = z.object({
    email: z.string().email({ message: "Nie prawidłowy adre email." }),
    password: z.string().min(8, { message: "Hasło musi mieć co najmniej 8 znaków." })
})

/**
 *  LOGIN FUNCTION
 * @param prevState 
 * @param formData 
 * @returns 
 */

export async function login(prevState: LoginType, formData: FormData) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const locale = await getLocale();

    const credentialValidatoin = credentialsSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })
    if (!credentialValidatoin.success) {
        return {
            error: credentialValidatoin.error.flatten().fieldErrors
        }
    }

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { data: { user }, error } = await supabase.auth.signInWithPassword(data)

    if (error?.status === 400) {
        let currentEmail = formData.get('email') as string;
        const { error, count } = await supabase
            .from('person')
            .select('*', { count: 'exact', head: true })
            .eq('email', currentEmail)

        if (error) {
            return {
                error: "error"
            }
        }
        if (count && count > 0) {
            return {
                error: "Podałeś złe hasło"
            }
        } else {
            return {
                error: "Podany email nie jest dodany do naszej bazy"
            }
        }

    }

    //check user role
    
    const isAdmin = user?.app_metadata.role === 'admin';


    revalidatePath(isAdmin ? `/${locale}/admin` : `/${locale}/dashboard`, 'layout')
    redirect(isAdmin ? `/${locale}/admin` : `/${locale}/dashboard`)
}


/**
 * SINGUP FUNCTION
 * @param formData 
 */
export async function signup(formData: FormData) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)


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

/**
 * LOGOUT FUNCTION
 */
export async function logout() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const locale = await getLocale();
    const { error } = await supabase.auth.signOut();
    if (error) {
        redirect('/error')
    }
    revalidatePath(`/${locale}`, 'layout')
    redirect(`/${locale}`)
}

/**
 * Check if user is logged
 * @returns true||false
 */
export async function isLogged() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {
        return false
    }
    else {
        return true
    }
}