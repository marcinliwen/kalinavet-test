'use client'
import React from 'react';
import AddIcon from '@/app/icons/AddIcon';
import { useTranslations } from 'next-intl';
import ClipboardIcon from '@/app/icons/ClipboardIcon';
import DownloadIcon from '@/app/icons/DownloadIcon';
import SearchIcon from '@/app/icons/SearchIcon';
import PetAbout from './petAbout';
import CreatePet from './createPet';
import EditIcon from "@/app/icons/EditIcon";
import NextVisit from './nextVisit';
type Pet = {
    birth_date: string | null;
    gender: string | null;
    id: number;
    owner: string | null;
    pet_name: string | null;
    race: string | null;
    species: string | null;
}[];

export default function MyPetTabs({ myPets, userId }: { myPets: Pet, userId: string }) {
    console.log(myPets)

    const [tab, setTab] = React.useState<string>('my_tabs_0');
    console.log('tab', tab)
    const onOptionChange = (e: any) => {
        setTab(e.target.value)
    }
    const t = useTranslations('PetForm')
    return (
        <div className='col-span-10 rounded-xl bg-base-200 px-6 py-4'>
            <div className='w-full'>
                <div role="tablist" className="tabs tabs-lifted ">
                    {myPets?.map((pet, index: number) => {
                        return (
                            <React.Fragment key={pet.pet_name}>
                                <input type="radio" name={`my_tabs_${index}`} value={`my_tabs_${index}`} role="tab" className="tab  uppercase " aria-label={`${pet.pet_name}`} onChange={onOptionChange} checked={tab === `my_tabs_${index}`} />
                                <div role="tabpanel" className="tab-content border border-base-300 bg-base-100 p-6 rounded-xl ">
                                    <div className='md:grid md:grid-cols-2 gap-8'>
                                        <div className='card bg-base-100  border'>
                                            <div className='card-body'>
                                                <PetAbout pet={pet} />
                                            </div>
                                        </div>
                                        <div className='card bg-base-100  border'>
                                            <div className='card-body'>
                                                <NextVisit petId={pet.id} />
                                            </div>
                                        </div>
                                        <div className='card bg-base-100  border col-span-2 '>
                                            <div className='card-body'>
                                                <div className='flex gap-3 items-start'>
                                                    <h3 className='font-semibold text-2xl mb-4'>{t('documents')}:</h3>
                                                    <div className="dropdown dropdown-bottom dropdown-end ml-auto">
                                                        <div tabIndex={0} role="button" className="btn btn-ghost min-h-1 h-8 px-1"><EditIcon /></div>
                                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box min-w-22">
                                                            <li><a className='whitespace-nowrap'>Pokarz wszystko</a></li>
                                                        </ul>
                                                    </div>
                                                </div>


                                                <ul className=''>
                                                    <li className='relative flex gap-2 cursor-pointer  items-center'>
                                                        <ClipboardIcon />
                                                        <span className='px-2 py-1'>{'21-02-2024'}</span>
                                                        <span className='px-2 py-1'>{'morfologia krwi'}</span>
                                                        <button className=' duration-300 max-w-max px-2 py-1 rounded-md btn btn-ghost'><SearchIcon /></button>
                                                        <button className=' duration-300 max-w-max px-2 py-1 rounded-md btn btn-ghost'><DownloadIcon /></button>

                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })}
                    <input type="radio" role="tab" className='tab text-2xl add-before' aria-label="+" onChange={onOptionChange} value={`my_tabs_${myPets.length}`} checked={tab === `my_tabs_${myPets.length}`} />
                    <div role="tabpanel" className="tab-content border border-base-300 bg-base-100 p-6 rounded-xl ">
                        <h2>Dodaj zwierzaka</h2>
                        <div className='card bg-base-100'>
                            <CreatePet userId={userId} />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}