'use client'
import { useTranslations } from 'next-intl';

import LinkMore from "../linkMore"


export default function AboutLink(){
    const t = useTranslations('About')

    return(
        <LinkMore link={"/o-nas"}>{t('more_about')}</LinkMore>
    )
}