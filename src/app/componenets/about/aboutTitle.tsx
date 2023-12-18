'use client'

import { useTranslations } from 'next-intl';


export default function AboutTitle() {
const h = useTranslations('HomePage');
const t = useTranslations('Common')
    return (
        <div className='grid md:grid-cols-3 border-b border-[#242424] '>
            <h2 className='mb-14'>{t('about_us')}</h2>
            <p className='md:col-span-2 text-sm leading-8 mb-8'><strong>{t('office')}</strong> {h('about_title')}</p>
        </div>
    )
}