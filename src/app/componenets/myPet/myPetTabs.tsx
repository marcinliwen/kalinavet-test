'use client'
import React, { useEffect } from 'react';
import AddIcon from '@/app/icons/AddIcon';
import { useTranslations } from 'next-intl';
import ClipboardIcon from '@/app/icons/ClipboardIcon';
import DownloadIcon from '@/app/icons/DownloadIcon';
import SearchIcon from '@/app/icons/SearchIcon';
import PetAbout from './petAbout';
import CreatePet from './createPet';
import EditIcon from "@/app/icons/EditIcon";
import NextVisit from './nextVisit';
import { getResultsFiles } from '@/app/[locale]/(dashboard)/dashboard/actions';
import PetResults from './petResults';

/* type MyPets = {
    pets: Pet
}[] */
type Pet = {
    birth_date: Date | null;
    gender: string | null;
    id: number;
    owner_id: string | null;
    name: string | null;
    breed: string | null;
    species: string | null;

}[];

export default function MyPetTabs({ myPets, userId }: { myPets: Pet, userId: string }) {

    useEffect(()=>{
const results = async () =>{ 
    const resultsData = await getResultsFiles()
}
results();

    },[])

    const [tab, setTab] = React.useState<string>('my_tabs_0');
    //console.log('tab', tab)
    const onOptionChange = (e: any) => {
        setTab(e.target.value)
    }
    const t = useTranslations('PetForm')
    return (
        <div className='col-span-6 rounded-xl bg-base-200 px-6 py-4'>
            <div className='w-full'>
                <div role="tablist" className="tabs tabs-lifted ">
                   {myPets?.map((pet, index: number) => {
                        return (
                            <React.Fragment key={pet.id}>
                                <input type="radio" name={`my_tabs_${index}`} value={`my_tabs_${index}`} role="tab" className="tab  uppercase " aria-label={`${pet.name}`} onChange={onOptionChange} checked={tab === `my_tabs_${index}`} />
                                <div role="tabpanel" className="tab-content border border-base-300 bg-base-100 p-6 rounded-xl ">
                                    <div className='md:grid md:grid-cols-2 gap-8'>
                                        <div className='card bg-base-100  border'>
                                            <div className='card-body'>
                                              {pet && <PetAbout pet={pet} />}
                                                
                                            </div>
                                        </div>
                                        <div className='card bg-base-100  border'>
                                            <div className='card-body'>
                                                <NextVisit petId={pet.id}  />
                                            </div>
                                        </div>
                                        <div className='card bg-base-100  border col-span-2 '>
                                            <div className='card-body'>
                                               <PetResults pet_id={pet.id}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })} 
                    <input type="radio" role="tab" className='tab text-2xl add-before' aria-label="+" onChange={onOptionChange} value={`my_tabs_${myPets.length}`} checked={tab === `my_tabs_${myPets.length}`} />
                    <div role="tabpanel" className="tab-content border border-base-300 bg-base-100 p-6 rounded-xl ">
                        {myPets.length < 1 ? <h2>Nie masz jeszcze dodanych zwierząt.<br/> Dodaj pierwszego zwierzaka.</h2> : <h2>Dodaj zwierzaka</h2>}
                        <div className='card bg-base-100'>
                            <CreatePet userId={userId} />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}