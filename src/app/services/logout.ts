'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { createClient } from '@/app/utils/supabase/server'

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