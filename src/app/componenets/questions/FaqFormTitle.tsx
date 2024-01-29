'use client'

import { useTranslations } from "next-intl"

export default function FaqFormtitle(){
    const t = useTranslations('FAQ')
    return(
        <div>
        <h2 className='mb-4'>{t('form_title')}</h2>
        <p className='col-span-2 text-sm leading-8 mb-8'>{t('form_subtitle')}</p>
    </div>
    )
}