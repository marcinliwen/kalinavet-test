'use client'

import { useTranslations } from 'next-intl';


export default function AboutBio() {
    const h = useTranslations('HomePage')
    return ( 
        <div className="flex flex-col pr-8 ">
            <strong>Kalina Adamkiewicz</strong>
            <p className="max-w-2xl text-sm leading-8">{h('bio-1')}</p>
            <p className="max-w-2xl text-sm leading-8">{h('bio-2')}</p>
        </div>
    )
}