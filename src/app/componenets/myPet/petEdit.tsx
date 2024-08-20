'use client'
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from 'react'
import { createClient } from '@/app/utils/supabase/client'
import { useTranslations } from 'next-intl'
import {updatePet} from '@/app/[locale]/(dashboard)/dashboard/actions';

type Pet = {
  birth_date: Date | null;
  gender: string | null;
  id: number;
  owner_id: string | null;
  name: string | null;
  breed: string | null;
  species: string | null;
}[];

const initialState = {
  message: "",
};

function EditButton({onClick}:{onClick:()=>void}){
  const { pending } = useFormStatus();
  return(<button type='submit' onClick={()=>{onClick(), console.log('click')}} className='btn-ui ml-auto' aria-disabled={pending}>Zapisz</button>)
}

export default function PetEdit({ petId, onClick }: { petId: number, onClick:()=>void }) {
  const t = useTranslations('PetForm');
  const supabase = createClient()

  const [isLoading, setIsLoading] = useState(true)
  const [myPet, setMyPet] = useState<Pet>([])

  useEffect(() => {
    const fetchMyPet = async () => {
      const { data, error } = await supabase.from('pets').select('name, species, breed, gender, birth_date,  owner_id, id').eq('id', petId)
      setMyPet(data ? data : [])
      setIsLoading(false)
    }

    fetchMyPet()
  }, [])

  //console.log('myPet', myPet)
  const petObject = myPet[0]

  type PetData = typeof petObject;
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
          else if (item !== 'owner_id'){
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
{/* <button type='submit' onClick={()=>{onClick(), console.log('click')}} className='btn-ui ml-auto' >Zapisz</button>
 */}<EditButton onClick={()=>onClick()} />
       </form>
  )
}