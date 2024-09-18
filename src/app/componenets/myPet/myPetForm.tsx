import React from 'react'
import { createClient } from '@/app/utils/supabase/server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import {getTranslations} from 'next-intl/server';
import {createPet} from '@/app/[locale]/(dashboard)/dashboard/actions';
import { useFormState } from 'react-dom';


const initialState = {
    message: "",
  };


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
    const [state, formAction] = useFormState(createPet, initialState);

    return (
        <div className='container py-14'>
            <h2>Edytuj dane Twojego pupila</h2>
            <form action={formAction} className='max-w-[400px] grid'>
                {petData.map((item: string) => {
                    if (item === 'id') {
                        return (
                                <input key={item} hidden id={item} className='border rounded-lg p-2' name={item} type="text"  defaultValue={petObject[item as keyof typeof petObject] as string }/>
                        )
                    }
                    else if(item === 'species'){
                        return(
                          <div key={item} className='mb-4 grid md:grid-cols-2 gap-2 items-center w-full'>
                             <label 
                              htmlFor={item} 
                              className='md:text-right'
                              >
                                {t(item)} 
                            </label>
                            <select id={item} name={item} className='border rounded-lg p-2' defaultValue={item} >
                              <option></option>
                              <option value={'cat'} >{'kot'}</option>
                              <option value={'dog'}>{'pies'}</option>
                            </select>
                          </div>
                        )
                      }
                    else if(item === 'gender'){
                        return(
                          <div key={item} className='mb-4 grid md:grid-cols-2 gap-2 items-center w-full'>
                             <label 
                              htmlFor={item} 
                              className='md:text-right'
                              >
                                {t(item)} 
                            </label>
                            <select className='border rounded-lg p-2' >
                              <option value={'male'} >{'male'}</option>
                              <option value={'female'}>{'female'}</option>
                            </select>
                          </div>
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

                
                <button type='submit' className='btn-ui ml-auto'>Zapisz</button>
            </form>
        </div>

    )
}