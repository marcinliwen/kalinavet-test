import { createClient } from '@/app/utils/supabase/server'
import { cookies } from 'next/headers'
import { getTranslations } from 'next-intl/server';
import ClipboardIcon from '@/app/icons/ClipboardIcon';
import Link from 'next/link';
import DownloadIcon from '@/app/icons/DownloadIcon';
import SearchIcon from '@/app/icons/SearchIcon';
import AddIcon from '@/app/icons/AddIcon';
import LogOutBtn from '../header/logOutBtn';
import MyPetTabs from './myPetTabs';
import { redirect } from 'next/navigation'

//import { getPetNextVisit } from '@/app/[locale]/(dashboard)/dashboard/actions';
type Pet = {
    birth_date: string | null;
    gender: {male: string, femaile: string} | null;
    id: number;
    owner: string | null;
    pet_name: string | null;
    race: string | null;
    species: string | null;
   // visits: any
}[];

export default async function MyPet({userId}:{userId:string}) {
    const t = await getTranslations('PetForm')
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase.from('pets').select('*').order('name', {ascending: true})

    
    if (error) {
      redirect('/error')
    }

    //const { data, error} = await supabase.from('pets_data').select();

    console.log('pet data 2', data)
   
    return (
       <>
                {data && <MyPetTabs myPets={data} userId={userId}/>} 
          </>
    )
}