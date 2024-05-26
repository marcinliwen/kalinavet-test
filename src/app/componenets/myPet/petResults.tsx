'use client';
import { useEffect, useState } from "react";
import { getResultsFiles } from "@/app/[locale]/(dashboard)/dashboard/actions";
import ClipboardIcon from "@/app/icons/ClipboardIcon";
import EditIcon from "@/app/icons/EditIcon";
import SearchIcon from "@/app/icons/SearchIcon";
import DownloadIcon from "@/app/icons/DownloadIcon";
import { useTranslations } from 'next-intl';
import { getResultById } from "@/app/[locale]/(dashboard)/dashboard/actions";
import { dateFormat } from "@/app/utils/displayDate/dateDisplay";
import { getFileUrl } from "@/app/[locale]/(dashboard)/dashboard/actions";
import PetShowResult from "./petShowResult";

export default function PetResults({pet_id}:{pet_id:number}) {
    const t = useTranslations('PetForm')
    const [results, setResults] = useState<any>([])
    
    useEffect(() => {
        const results = async () => {
            const resultsData = await getResultById(pet_id)
            setResults(resultsData ? resultsData : [])
        }
        results();

    }, [pet_id])

    console.log('results', results)
    return (
        <>
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
                {results && results.map((result:any)=>{
                    return(
                        <li key={result.id} className='relative flex gap-2 cursor-pointer  items-center'>
                        <ClipboardIcon />
                        <span className='px-2 py-1'>{dateFormat(result.added_date)}</span>
                        <span className='px-2 py-1'>{result.title}</span>
                        
                        <PetShowResult fileName={result.url}/>
                    </li>
                    )
                })}
               
            </ul>
        </>
    )
}