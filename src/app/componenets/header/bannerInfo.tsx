'use client'
import { useTranslations } from "next-intl"
import Link from "next/link"


export default function BannerInfo(){
    const t = useTranslations('AlertNews')
    return(
        <div className='container mx-auto gap-4  items-center py-1 text-white text-sm whitespace-nowrap text-right overflow-auto '>
            {t('is_open')} {'9:30 - 13:30'}
                  {/*   {t('today_closed')} */}
                </div>
    )
}