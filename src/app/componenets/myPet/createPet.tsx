'use client'
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from 'react'
import { createClient } from '@/app/utils/supabase/client'
import { useTranslations } from 'next-intl'
import {createPet} from '@/app/[locale]/(dashboard)/dashboard/actions';

type Pet = {
  birth_date: string | null;
  gender: string | null;
  id: number;
  owner: string | null;
  pet_name: string | null;
  race: string | null;
  species: string | null;
};

const petData = ['pet_name', 'gender','race', 'species','birth_date']
const initialState = {
  message: "",
};

function EditButton(){
  const { pending } = useFormStatus();
  return(<button type='submit' className='btn-ui ml-auto' aria-disabled={pending}>Zapisz</button>)
}

export default function CreatePet({userId}:{userId: string}) {
  const t = useTranslations('PetForm');

  const [myPet, setMyPet] = useState<Pet>()


  //const petObject = myPet

 // type PetData = typeof petObject;
  //type PetDataValues = keyof Pet;
  //const petData = Object.keys(petObject ? petObject : {});

  const [state, formAction] = useFormState(createPet, initialState);
  return (
      <form action={formAction} className='max-w-[400px] grid' >
        <input  hidden id={'owner'} className='border rounded-lg p-2' name={'owner'} type="text" defaultValue={userId} />
        
        {petData.map((item: any) => {
          if (item === 'id') {
            return (
              <input key={item} hidden id={item} className='border rounded-lg p-2' name={item} type="text" defaultValue={userId} />
            )
          }
          else if (item !== 'owner')
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
                  type={item === 'birth_date' ? "date" : "text"} />
              </div>
            )
        })}

<EditButton />
        
        <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
      </form>
  )
}