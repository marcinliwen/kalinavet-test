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
        name: formData.get('name') as string,
        species: formData.get('species') as string,
        breed: formData.get('breed') as string,
        gender: formData.get('gender') as string,
        birth_date: formData.get('birth_date') as string,
        id: formData.get('id') as null | number
    }
    if (!rawFormData.id) {
        return { message: 'invalid data' }
    }
    //console.log('rawFormData', rawFormData)
    try {
        await supabase
            .from('pets')
            .update({
                name: rawFormData.name,
                species: rawFormData.species,
                breed: rawFormData.breed,
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
    //console.log('createpet', formData)
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const rawFormData = {
        name: formData.get('name') as string,
        species: formData.get('species') as string,
        breed: formData.get('breed') as string,
        gender: formData.get('gender') as string,
        birth_date: formData.get('birth_date') as string,
        owner_id: formData.get('owner_id') as string,
        id: 1 as null | number,
    }
    if (!rawFormData.id) {
        return { message: 'invalid data' }
    }

    try {
        await supabase
            .from('pets')
            .insert({
                name: formData.get('name') as string,
                species: formData.get('species') as string,
                breed: formData.get('breed') as string,
                gender: formData.get('gender') as string,
                birth_date: formData.get('birth_date') as string,
                owner_id: formData.get('owner_id') as string,
            })
        revalidatePath('/dashboard');
       // console.log('success')
        return { message: 'Success' }
    } catch (error) {
        //console.log('error', error)
        return { message: 'something wrong' }
    }
}

export async function deletePet(petId: number) {
    //console.log('petId', petId)
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

        let { data: visits, error } = await supabase
            .from('visits')
            .select('*')
            .eq('pet_id', petId)
            .order('visit_date', { ascending: true })
            .limit(1)
        // revalidatePath('/dashboard');
        return visits
    } catch (error) {
        return { message: 'something wrong' }
    }
}

export async function getResultsFiles() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase
        .storage
        .from('results')
        .list('morfology')
    //console.log('data results', data)
    if (!error) {
        return data;
    }
}

export async function getResultById(pet_id: number) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    try {
        let { data, error } = await supabase
            .from('results')
            .select('*')
            .eq('pet_id', pet_id)

        //console.log('results', data)
        return data
    } catch (error) {
        console.error(error)
        return { message: 'something wrong', }
    }
}

export async function getFileUrl(fileName: string) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    try {

        let { data, error } = await supabase
            .storage
            .from('results')
            .createSignedUrl('morfology/'+fileName, 60)

        return data?.signedUrl
    } catch (error) {
        console.error(error)
        return { message: 'something wrong', }
    }
}

export async function downloadFile(fileName:string){
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    try {
        const  { data, error } = await supabase
        .storage
        .from('results')
        .download('morfology/'+fileName)
        //console.log('download data')
        //return data
    } catch (error) {
        
    }
}