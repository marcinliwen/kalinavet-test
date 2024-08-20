"use server"
import { z } from "zod";
import { createClient } from '@/app/utils/supabase/server'
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { getLocale } from 'next-intl/server'

import { profileSchema } from "@/app/componenets/profile/profileSchema";
export type FormState = {
    message: string;
    //fields?: Record<string, string>;
    issues?: string[];
};

export async function profileEditSubmit(initialState: FormState, formData: FormData): Promise<FormState> {
    const currentData = Object.fromEntries(formData);
    const parsed = profileSchema.safeParse(currentData);
    const locale = await getLocale();
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    //console.log('parsed', parsed )
    if (!parsed.success) {
        return {
            message: "Invalid form data",
            issues: parsed.error.issues.map((issue) => issue.message),
        }
    }
    if (parsed.data.name.includes("1")) {
        return {
            message: "Błąd w imieniu"
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

    if (error) {
        console.error(error)
        throw new Error('Coś poszło nie tak!')
        //return {message: "Coś poszło nie tak!"};
    }
    revalidatePath(`${locale}/edit-profile`)
    return { message: "Dane pomyślnie zaktualizowane!" };
} 