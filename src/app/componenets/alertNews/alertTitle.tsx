import { useTranslations } from "next-intl";

export default function AlertNewsTitle(){
    const t = useTranslations('AlertNews')
    return(
        <h2>{t('title')}</h2>
    )
}