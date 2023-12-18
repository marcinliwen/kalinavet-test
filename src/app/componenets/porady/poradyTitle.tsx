'use client'
import Link from "next/link"
import { useTranslations } from 'next-intl';

export default function PoradyTitle() {
    const t = useTranslations("Porady");
    const n = useTranslations("MenuLinks")
    return (
        <div className='grid md:grid-cols-3 border-b border-[#242424] pt-20 mb-14'>
            <h2 className='mb-14'>{t('title')}</h2>
            <div className='col-span-2 text-sm leading-8 mb-8'>
                <p className=''>{t.rich('subtitle', {br: ()=> <br />})}</p>
                <p>{t('more_questions')} <Link href="/pytania" className='font-semibold'>{n('faq')}</Link></p>
            </div>
        </div>
    )
}