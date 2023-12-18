'use client'
import { useTranslations } from 'next-intl';

import LinkMore from "../linkMore"


export default function FaqLink(){
    const t = useTranslations('FAQ')

    return(
        <LinkMore link={"/pytania"}>{t('more_questions')}</LinkMore>
    )
}