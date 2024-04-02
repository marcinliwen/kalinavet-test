'use client'
import React from 'react';
import AddIcon from '@/app/icons/AddIcon';
import { useTranslations } from 'next-intl';
import ClipboardIcon from '@/app/icons/ClipboardIcon';
import DownloadIcon from '@/app/icons/DownloadIcon';
import SearchIcon from '@/app/icons/SearchIcon';


type Pet = {
    birth_date: string | null;
    gender: string | null;
    id: number;
    owner: string | null;
    pet_name: string | null;
    race: string | null;
    species: string | null;
}[];

export default function MyPetTabs({ myPets }: { myPets: Pet }) {
    console.log(myPets)

    const [tab, setTab] = React.useState<string>('my_tabs_0');
    console.log('tab',tab)
    const onOptionChange = (e:any) => {
        setTab(e.target.value)
      }
    const t = useTranslations('PetForm')
    return (
        <div className='grid md:grid-cols-2 gap-8 col-span-10'>
            <div className='col-span-2 p-4'>
                {/* <nav className='flex items-center'>
                    <ul className='flex gap-8 font-semibold '>
                        {myPets.map((pet, index) => {
                            return (<li key={pet.id} className={`${index === 0 ? 'underline' : 'text-gray-300'} cursor-pointer first-letter:uppercase`}>{pet.pet_name}</li>)
                        })}
                    </ul>
                    <button className='btn-ui ml-auto flex items-center gap-2'>Dodaj pupila <AddIcon /></button>
                </nav> */}
            </div>
            {/* {myPets?.map((pet, index:number) => {
                        return (
                            <div key={pet.pet_name} className={`col-span-2 md:grid md:grid-cols-2 gap-8`}>
                                <div className='border rounded-2xl px-6 py-4 bg-white'>
                                    <h3 className='font-semibold text-2xl first-letter:uppercase mb-4'>{pet.pet_name}</h3>
                                    <div className='flex gap-3'>
                                        <p className='min-w-[130px]'>{t('species')}:</p> <p className='first-letter:uppercase line font-semibold'>{pet.species}</p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <p className='min-w-[130px]'>{t('race')}:</p> <p className='first-letter:uppercase line font-semibold'>{pet.race}</p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <p className='min-w-[130px]'>{t('gender')}:</p> <p className='first-letter:uppercase line font-semibold'>{pet.gender}</p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <p className='min-w-[130px]'>{t('birth_date')}:</p> <p className='first-letter:uppercase line font-semibold'>{pet.birth_date}</p>
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
                        )
                    })} */}
            <div className='col-span-2'>
            <div role="tablist" className="tabs tabs-lifted ">
                {myPets?.map((pet, index: number) => {
                    return (
                        <React.Fragment key={pet.pet_name}>
                            <input type="radio" name={`my_tabs_${index}`} value={`my_tabs_${index}`} role="tab" className="tab  uppercase" aria-label={`${pet.pet_name}`} onChange={onOptionChange} checked={tab === `my_tabs_${index}`} />
                            <div role="tabpanel" className="tab-content border border-base-300 p-6 rounded-xl ">
                                <div className='md:grid md:grid-cols-2 gap-8'>
                                    <div className='border rounded-2xl px-6 py-4 '>
                                        <h3 className='font-semibold text-2xl first-letter:uppercase mb-4'>{pet.pet_name}</h3>
                                        <div className='flex gap-3'>
                                            <p className='min-w-[130px]'>{t('species')}:</p> <p className='first-letter:uppercase line font-semibold'>{pet.species}</p>
                                        </div>
                                        <div className='flex gap-3'>
                                            <p className='min-w-[130px]'>{t('race')}:</p> <p className='first-letter:uppercase line font-semibold'>{pet.race}</p>
                                        </div>
                                        <div className='flex gap-3'>
                                            <p className='min-w-[130px]'>{t('gender')}:</p> <p className='first-letter:uppercase line font-semibold'>{pet.gender}</p>
                                        </div>
                                        <div className='flex gap-3'>
                                            <p className='min-w-[130px]'>{t('birth_date')}:</p> <p className='first-letter:uppercase line font-semibold'>{pet.birth_date}</p>
                                        </div>
                                    </div>
                                    <div className='border rounded-2xl px-6 py-4 '>
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
                                    <div className='border rounded-2xl px-6 py-4 col-span-2 '>
                                        <h3 className='font-semibold text-2xl mb-4'>{t('documents')}:</h3>

                                        <ul>
                                            <li className='relative flex gap-2 cursor-pointer  items-center'>
                                                <ClipboardIcon />
                                                <p className='px-2 py-1'>{'21-02-2024'}</p>
                                                <span className='px-2 py-1'>{'morfologia krwi'}</span>
                                                <button className=' duration-300 max-w-max px-2 py-1 rounded-md btn btn-ghost'><SearchIcon /></button>
                                                <button className=' duration-300 max-w-max px-2 py-1 rounded-md btn btn-ghost'><DownloadIcon /></button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </React.Fragment>
                    )
                })}

            </div>
            </div>

        </div>
    )
}