'use server'

import { createClient } from '@/app/utils/supabase/server'
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { z } from "zod";

type Person = {
    name: string,
    surname: string,
    address: string,
    post_code: string,
    city: string,
    country: string,
    phone: string,
    email: string
}

const personEditSchema = z.object({
    name: z.string().trim().min(1, {message:"Podaj imię"}),
    surname: z.string().trim().min(1, {message: "Podaj nazwosko"}),
    address: z.string().trim(),
    post_code: z.string().trim(),
    city: z.string().trim(),
    country: z.string().trim(),
    phone: z.string().trim(),
    email: z.string().trim().email({message: "podaj prawidłowy mail"}),
    id: z.string().trim()
})

export async function editPersonData(prevState: any, formData: FormData) {
    //console.log('action update', formData.get('name'))

    const locale = await getLocale();
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const rawFormData = personEditSchema.safeParse({
        name: formData.get('name'),
        surname: formData.get('surname'),
        address: formData.get('address'),
        post_code: formData.get('post_code'),
        city: formData.get('city'),
        country: formData.get('country'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        id: formData.get('id')
    })

    if (!rawFormData.success) {
        //console.log(rawFormData.error)
        return {
            errors: rawFormData.error.flatten().fieldErrors,
            issues: rawFormData.error.issues.map((issue)=>issue.message)
        }
    }

    const { data, error } = await supabase
        .from('person')
        .update({
            name: formData.get('name'),
            surname: formData.get('surname'),
            address: formData.get('address'),
            post_code: formData.get('post_code'),
            city: formData.get('city'),
            country: formData.get('country'),
            phone: formData.get('phone'),
            email: formData.get('email'),
        })
        .eq('id', formData.get('id'))
        .select()


    /* if (error) {
        console.error(error)
    } */
    if (!error && data) {
        revalidatePath(`/${locale}/profile`, 'layout')
        
        redirect(`/${locale}/profile`)
        return {
        success: 'Dane zostały pomyślnie zaktualizowane'
        }
    }
}