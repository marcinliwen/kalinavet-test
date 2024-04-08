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

type Pet = {
    birth_date: string | null;
    gender: string | null;
    id: number;
    owner: string | null;
    pet_name: string | null;
    race: string | null;
    species: string | null;
}[];

export default async function MyPet({userId}:{userId:string}) {
    const t = await getTranslations('PetForm')
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase.from('user_pet').select()
    if (error) {
        return;
    }
    return (
        <div className='container mx-auto py-12 '>

            <div className='grid md:grid-cols-12 w-full gap-8'>
                <div className=' bg-base-200 max-w-56 rounded-box col-span-2 px-6 py-4 grid'>
                    <ul className='menu  text-center'>
                        <li className='text-center'>
                            <Link href={'/dashboard'}>Zwierzęta</Link>
                        </li>
                        <li>
                            <Link href={'/dashboard'}> Gabinet</Link>
                        </li>
                        <li>
                            <Link href={'/dashboard'}>Profil</Link>
                        </li>
                        <li>
                            <Link href={'/dashboard'}>Ustawienia</Link>
                        </li>
                    </ul>
                    <div className='mt-auto text-center pb-4'>
                        <LogOutBtn />
                    </div>

                </div>
                {data && <MyPetTabs myPets={data} userId={userId}/>}
            </div>
        </div>
    )
}