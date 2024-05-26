'use client'
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import EditIcon from "@/app/icons/EditIcon";
import { getPetNextVisit } from '@/app/[locale]/(dashboard)/dashboard/actions';
import { useEffect, useState } from 'react';
import { createClient } from '@/app/utils/supabase/client'
import { VisitSkeleton } from '../skeletons';
import { dateFormat } from '@/app/utils/displayDate/dateDisplay';
import { timeFormat } from '@/app/utils/displayDate/timeDisplay';
export default function NextVisit({ petId }: { petId: number }) {
    const t = useTranslations('PetForm')
    const [isLoading, setIsLoading] = useState(true)
    const [visits, setVisits] = useState<any>([])

    useEffect(() => {
        const getVisitData = async (petId:number) =>{
            const data = await getPetNextVisit(petId)
            setVisits(data? data : [])
            setIsLoading(false)
        }
        getVisitData(petId);
      
    }, [petId]) 

    return (
       isLoading ? <VisitSkeleton /> :
        <React.Fragment key={petId}>
            <div className='flex gap-3 items-start'>
                <h3 className='font-semibold text-2xl mb-4'>{t('next_appointment')}:</h3>
                <div className="dropdown dropdown-bottom dropdown-end ml-auto">
                    <div tabIndex={0} role="button" className="btn btn-ghost min-h-1 h-8 px-1"><EditIcon /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box min-w-22">
                        <li><a className='whitespace-nowrap'>Pokarz wszystko</a></li>
                    </ul>
                </div>
            </div>
            {visits.length> 0 ?
            <>
            {visits.map((visit: any) => {
                return (
                    <React.Fragment key={visit.id}>
                        <div className='flex gap-3 mb-3'>
                            <span className='min-w-[130px] '>{t('date')}:</span> <span className='font-semibold'>{dateFormat(visit.visit_date)}</span>
                        </div>
                        <div className='flex gap-3 mb-3'>
                            <span className='min-w-[130px] '>{t('hour')}:</span> <span className='font-semibold'>{visit.visit_time.slice(0, 5) }</span>
                        </div>
                        <div className='flex gap-3 mb-3'>
                            <span className='min-w-[130px] '>{t('subject')}:</span> <span className='font-semibold'>{visit.subject }</span>
                        </div>
                    </React.Fragment>
                )

            })}

            {/* <div className='flex gap-3 mb-3'>
                <span className='min-w-[130px] '>{t('place')}:</span>
                <span className='font-semibold'>Zasieki 75, 68-343 Zasieki</span>
            </div> */}
            <div className='flex'>
                <a className='btn cursor-pointer ml-auto' href="https://goo.gl/maps/5vwZ1Veo9Y9zDGsC9" target="_blank">{t('navigate')}</a>
            </div>
            </>
            :
            <div className='grid gap-8'>
            <p>Nie masz jeszcze zaplanowanych wizyt</p>
            <Link href="/kontakt" className='btn-ui  max-w-max ml-auto'>Umów się na wizytę</Link>
            </div>
}
            </React.Fragment>
        )
}