'use client'
import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcher from '../localeSwitcher';
import PhoneSolid from '@/app/icons/PhoneSolid';

export default function RightNav(){

    const locale = useLocale();
    return (
        <div className="lg:visible flex flex-col lg:flex-row  lg:flex-[1_0_140px] gap-4  justify-end items-center text-black ">
            <LocaleSwitcher />
            {locale === 'pl' ?
                <a href="tel:+48506109445" className="flex items-center justify-center gap-2 font-semibold w-48"><PhoneSolid size="16" /> <span>+48 506 109 445</span></a>
                :
                <a href="tel:00506109445" className="flex items-center justify-center gap-2 font-semibold w-48"><PhoneSolid size="16" /> <span>00 506 109 445</span></a>
            }
        </div>
    )
}