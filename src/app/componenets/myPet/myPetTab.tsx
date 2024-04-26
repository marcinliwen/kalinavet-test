
import React, { useState } from "react"
import { createClient } from "@/app/utils/supabase/server"
import { cookies } from "next/headers";
import PetAbout from "./petAbout";
import ClipboardIcon from "@/app/icons/ClipboardIcon";
import EditIcon from "@/app/icons/EditIcon";
import SearchIcon from "@/app/icons/SearchIcon";
import DownloadIcon from "@/app/icons/DownloadIcon";
import { useTranslations } from "next-intl";

export default async function MyPetTab({pet_id, index}:{pet_id: string, index: number}){
    const t = useTranslations('PetForm')
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
   const { data, error} = await supabase.from('pets').select().eq('pet_id', pet_id)
   console.log('tab', data && data[0])
    return(
        <React.Fragment key={pet_id}>
                            <input 
                                type="radio" 
                                name={`my_tabs_${index}`} 
                                value={`my_tabs_${index}`} 
                                role="tab" className="tab  uppercase " 
                                aria-label={`${data && data[0].name}`} 
                                //onChange={onOptionChange} 
                                //checked={tab === `my_tabs_${index}`} 
                                //defaultChecked = {index === 0 ? true: false}
                                />
                            <div role="tabpanel" className="tab-content border border-base-300 bg-base-100 p-6 rounded-xl ">
                                   <div className='md:grid md:grid-cols-2 gap-8'>
                                        <div className='card bg-base-100  border'>
                                            <div className='card-body'>
                                                <PetAbout pet={data && data[0]} />
                                            </div>
                                        </div>
                                        <div className='card bg-base-100  border'>
                                            <div className='card-body'>
                                                {/* <NextVisit petId={pet.id}  /> */}
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
}