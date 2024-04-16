'use server'
import { createClient } from '@/app/utils/supabase/server'
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { z } from "zod";

export async function updatePet(prevState: {
    message: string;
}, formData: FormData) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const rawFormData = {
        pet_name: formData.get('pet_name') as string,
        species: formData.get('species') as string,
        race: formData.get('race') as string,
        gender: formData.get('gender') as string,
        birth_date: formData.get('birth_date') as string,
        id: formData.get('id') as null | number
    }
    if (!rawFormData.id) {
        return { message: 'invalid data' }
    }
    console.log('rawFormData', rawFormData)
    try {
        await supabase
            .from('user_pet')
            .update({
                pet_name: rawFormData.pet_name,
                species: rawFormData.species,
                race: rawFormData.race,
                gender: rawFormData.gender,
                birth_date: rawFormData.birth_date
            })
            .eq('id', rawFormData.id);
        revalidatePath('/dashboard');
        return { message: 'Success' }
    } catch (error) {
        return { message: 'something wrong' }
    }


}

export async function createPet(prevState: {
    message: string;
}, formData: FormData) {
    console.log('createpet', formData)
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const rawFormData = {
        pet_name: formData.get('pet_name') as string,
        species: formData.get('species') as string,
        race: formData.get('race') as string,
        gender: formData.get('gender') as string,
        birth_date: formData.get('birth_date') as string,
        owner: formData.get('owner') as string,
        id: 1 as null | number,
    }
    if (!rawFormData.id) {
        return { message: 'invalid data' }
    }

    try {
        await supabase
            .from('user_pet')
            .insert({
                pet_name: formData.get('pet_name') as string,
                species: formData.get('species') as string,
                race: formData.get('race') as string,
                gender: formData.get('gender') as string,
                birth_date: formData.get('birth_date') as string,
                owner: formData.get('owner') as string,
            })
        revalidatePath('/dashboard');
        return { message: 'Success' }
    } catch (error) {
        return { message: 'something wrong' }
    }
}

export async function deletePet(petId: number) {
    console.log('petId', petId)
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    try {
        await supabase
            .from('user_pet')
            .delete()
            .eq('id', petId)
        revalidatePath('/dashboard');
        return { message: 'Deleted' }
    } catch (error) {
        return { message: 'something wrong' }
    }
}


export async function getPetNextVisit(petId: number) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    try {

        let { data:visits, error } = await supabase
            .from('visits')
            .select('*')
            .eq('pet_id', petId)
       // revalidatePath('/dashboard');
        return visits
    } catch (error) {
        return { message: 'something wrong' }
    }
}