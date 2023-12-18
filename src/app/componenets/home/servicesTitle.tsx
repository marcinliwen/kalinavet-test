'use client'
import { useTranslations } from 'next-intl';

export default function ServicesTitle(){
    const h = useTranslations('HomePage');

    return(
        <div className='grid md:grid-cols-3 border-b border-[#242424] mb-14'>
        <h2 className='mb-14'>{h('offer_home')}</h2>
        <p className='col-span-2 text-sm leading-8 mb-8 '>{h.rich('offer_text', {
          b: (chunk) => <b>{chunk}</b>
        })}</p>
      </div>
    )
}