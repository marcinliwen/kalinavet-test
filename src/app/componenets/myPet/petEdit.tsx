'use client'
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from 'react'
import { createClient } from '@/app/utils/supabase/client'
import { useTranslations } from 'next-intl'
import {updatePet} from '@/app/[locale]/(dashboard)/dashboard/actions';

type Pet = {
  birth_date: string | null;
  gender: string | null;
  id: number;
  owner: string | null;
  pet_name: string | null;
  race: string | null;
  species: string | null;
}[];

const initialState = {
  message: "",
};

function EditButton(){
  const { pending } = useFormStatus();
  return(<button type='submit' className='btn-ui ml-auto' aria-disabled={pending}>Zapisz</button>)
}

export default function PetEdit({ petId }: { petId: number }) {
  const t = useTranslations('PetForm');
  const supabase = createClient()

  const [isLoading, setIsLoading] = useState(true)
  const [myPet, setMyPet] = useState<Pet>([])

  useEffect(() => {
    const fetchMyPet = async () => {
      const { data, error } = await supabase.from('user_pet').select().eq('id', petId)
      setMyPet(data ? data : [])
      setIsLoading(false)
    }

    fetchMyPet()
  }, [])

  const petObject = myPet[0]

  type PetData = typeof petObject;
  type PetDataValues = keyof Omit<PetData, 'owner'>;
  const petData = Object.keys(petObject ? petObject : {});

  const [state, formAction] = useFormState(updatePet, initialState);
  return (
    isLoading ? <p>Loading</p> :
      <form action={formAction} className='max-w-[400px] grid'>
        {petData.map((item: any) => {
          if (item === 'id') {
            return (
              <input key={item} hidden id={item} className='border rounded-lg p-2' name={item} type="text" defaultValue={petObject[item as keyof typeof petObject] as string} />
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
                  <option value={'pies'} >{'pies'}</option>
                  <option value={'kot'}>{'kot'}</option>
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
                <select id={item} name={item} className='border rounded-lg p-2' defaultValue={item} >
                  <option value={'male'} >{'male'}</option>
                  <option value={'female'}>{'female'}</option>
                </select>
              </div>
            )
          }
          else if (item !== 'owner'){
            return (
              <div key={item} className='mb-4 grid md:grid-cols-2 gap-2 items-center w-full'>
                <label 
                  htmlFor={item} 
                  className='md:text-right'
                  >
                    {t(item)} 
                </label>
                <input 
                  id={item} 
                  className='border rounded-lg p-2' 
                  name={item} 
                  type={item === 'birth_date' ? "date" : "text"} 
                  defaultValue={petObject[item as keyof typeof petObject] as string} />
              </div>
            )}
         
        })}

<EditButton />
      </form>
  )
}