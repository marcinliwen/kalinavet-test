
import React from 'react'
import { createClient } from '@/app/utils/supabase/server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import {getTranslations} from 'next-intl/server';

async function createPet(formData: FormData) {
    'use server'
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
    console.log('pet name from form', rawFormData.id)
    if (rawFormData.id) {
        const { error } = await supabase
            .from('user_pet')
            .update({
                pet_name: rawFormData.pet_name,
                species: rawFormData.species,
                race: rawFormData.race,
                gender: rawFormData.gender,
                birth_date: rawFormData.birth_date
            })
            .eq('id', rawFormData.id)
    }
    revalidatePath('/private')
}


export default async function MyPetForm() {
    const t = await getTranslations('PetForm')
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase.from('user_pet').select()
    if (error) {
        return;
    }
    const petObject = data[0]

    type PetData = typeof petObject;
    type PetDataValues = keyof Omit<PetData, 'owner'>;
    const petData = Object.keys(petObject);


    return (
        <div className='container py-14'>
            <h2>Edytuj dane Twojego pupila</h2>
            <form action={createPet} className='max-w-[400px] grid'>
                {petData.map((item: string) => {
                    if (item === 'id') {
                        return (
                                <input key={item} hidden id={item} className='border rounded-lg p-2' name={item} type="text"  defaultValue={petObject[item as keyof typeof petObject] as string }/>
                        )
                    }
                    else if(item !== 'owner')
                        return (
                            <div key={item} className='mb-4 grid md:grid-cols-2 gap-2 items-center w-full'>
                                <label htmlFor={item} className='md:text-right'>{t(item)} </label>
                                <input id={item} className='border rounded-lg p-2' name={item} type={item === 'birth_date' ? "date":"text"} defaultValue={petObject[item as keyof typeof petObject] as string } />
                            </div>
                        )
                })}

                {/*  <div className='mb-4 grid grid-cols-2 gap-2 items-center w-full'>
                    <label htmlFor='species' className='text-right'>Gatunek</label>
                    <input id="species" className='border rounded-lg p-2' name={"species"} type="text" defaultValue={petObject.species ? petObject.species : ''} />
                </div>
                <div className='mb-4 grid grid-cols-2 gap-2 items-center w-full'>
                    <label htmlFor='race' className='text-right'>Gatunek</label>
                    <input id="race" className='border rounded-lg p-2' name={"race"} type="text" defaultValue={petObject.race ? petObject.race : ''} />
                </div> */}
                <button type='submit' className='btn-ui ml-auto'>Zapisz</button>
            </form>
        </div>

    )
}