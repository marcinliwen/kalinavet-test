'use client'
import { useTranslations } from 'next-intl';


export default function FaqTitle() {
    const h = useTranslations('HomePage')
    return (
        <div className='grid md:grid-cols-3 border-b border-[#242424] mb-14'>
            <h2 className='mb-14'>{h('faq_title')}</h2>
            <p className='col-span-2 text-sm leading-8 mb-8'></p>
        </div>
    )
}