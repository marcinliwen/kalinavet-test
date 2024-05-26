'use client'
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from 'react'
import { createClient } from '@/app/utils/supabase/client'
import { useTranslations } from 'next-intl'
import {createPet} from '@/app/[locale]/(dashboard)/dashboard/actions';
import { Pet } from "@/app/services/definitions";
/* type Pet = {
  birth_date: string | null;
  gender: string | null;
  pet_id: number;
  name: string | null;
  breed: string | null;
  species: string | null;
}; */

const petData = ['name', 'species','breed', 'gender','birth_date']
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
        <input  hidden id={'owner_id'} className='border rounded-lg p-2' name={'owner_id'} type="text" defaultValue={userId} />
        
        {petData.map((item: any) => {
          if (item === 'id') {
            return (
              <input key={item} hidden id={item} className='border rounded-lg p-2' name={item} type="text" defaultValue={userId} />
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
                <select id={item} name={item}  className='border rounded-lg p-2'  defaultValue={item} >
                  <option></option>
                  <option value={'male'} >{'male'}</option>
                  <option value={'female'}>{'female'}</option>
                </select>
              </div>
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