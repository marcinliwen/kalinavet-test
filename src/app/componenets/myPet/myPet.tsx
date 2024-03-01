import { createClient } from '@/app/utils/supabase/server'
import { cookies } from 'next/headers'
import { getTranslations } from 'next-intl/server';
import ClipboardIcon from '@/app/icons/ClipboardIcon';
import Link from 'next/link';
import DownloadIcon from '@/app/icons/DownloadIcon';
import SearchIcon from '@/app/icons/SearchIcon';
import Add from '@/app/icons/AddIcon';
import LogOutBtn from '../header/logOutBtn';


export default async function MyPet() {
    const t = await getTranslations('PetForm')
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase.from('user_pet').select()
    if (error) {
        return;
    }
    return (
        <div className='container mx-auto py-12 '>
            <h2 className='mb-8'>Tu będą informacje o Twoim pupilu!</h2>
            <div className='grid md:grid-cols-12 w-full gap-8'>
                <div className='border rounded-2xl px-6 py-4 col-span-2 bg-white text-center grid'>
                    <div className=''>
                        Zwierzęta
                    </div>
                    <div>
                        Gabinet
                    </div>
                    <div>
                        Profil
                    </div>
                    <div>
                        Ustawienia
                    </div>
                    <div className='mt-auto'>
                    <LogOutBtn/>
                    </div>
                   
                </div>
                <div className='grid md:grid-cols-2 gap-8 col-span-10'>
                    <div className='col-span-2 p-4'>
                        <nav className='flex items-center'>
                            <ul className='flex gap-8 font-semibold'>
                                <li className='underline cursor-pointer'>Gina</li>
                                <li className='text-gray-300 cursor-pointer'>Megan</li>
                                <li className='text-gray-300 cursor-pointer'>Rosa</li>

                            </ul>
                            <button className='btn-ui ml-auto flex items-center gap-2'>Dodaj pupila <Add/></button>
                        </nav>
                    </div>
                    <div className='border rounded-2xl px-6 py-4 bg-white'>
                        <h3 className='font-semibold text-2xl first-letter:uppercase mb-4'>{data[0].pet_name}</h3>
                        <div className='flex gap-3'>
                            <p className='min-w-[130px]'>{t('species')}:</p> <p className='first-letter:uppercase line font-semibold'>{data[0].species}</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='min-w-[130px]'>{t('race')}:</p> <p className='first-letter:uppercase line font-semibold'>{data[0].race}</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='min-w-[130px]'>{t('gender')}:</p> <p className='first-letter:uppercase line font-semibold'>{data[0].gender}</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='min-w-[130px]'>{t('birth_date')}:</p> <p className='first-letter:uppercase line font-semibold'>{data[0].birth_date}</p>
                        </div>
                    </div>
                    <div className='border rounded-2xl px-6 py-4 bg-white'>
                        <h3 className='font-semibold text-2xl mb-4'>{t('next_appointment')}:</h3>
                        <div className='flex gap-3 mb-3'>
                            <p className='min-w-[130px] font-semibold'>{t('date')}:</p> <p className=''>{'2024-05-01'}</p>
                        </div>
                        <div className='flex gap-3 mb-3'>
                            <p className='min-w-[130px] font-semibold'>{t('hour')}:</p> <p className=''>{'10:30'}</p>
                        </div>
                        <div className='flex gap-3 mb-3'>
                            <p className='min-w-[130px] font-semibold'>{t('place')}:</p>
                            <p>Zasieki 75, 68-343 Zasieki</p>
                        </div>
                        <div className='flex'>
                            <a className='btn-ui cursor-pointer ml-auto' href="https://goo.gl/maps/5vwZ1Veo9Y9zDGsC9" target="_blank">{t('navigate')}</a>
                        </div>
                    </div>
                    <div className='border rounded-2xl px-6 py-4 col-span-2 bg-white'>
                        <h3 className='font-semibold text-2xl mb-4'>{t('documents')}:</h3>

                        <ul>
                            <li className='relative flex gap-2 cursor-pointer  items-center'>
                                <ClipboardIcon />
                                <p className='px-2 py-1'>{'21-02-2024'}</p>
                                <span className='px-2 py-1'>{'morfologia krwi'}</span>
                                <button className='hover:bg-gray-100 duration-300 max-w-max px-2 py-1 rounded-md active:bg-gray-200'><SearchIcon /></button>
                                <button className='hover:bg-gray-100 duration-300 max-w-max px-2 py-1 rounded-md active:bg-gray-200'><DownloadIcon /></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}