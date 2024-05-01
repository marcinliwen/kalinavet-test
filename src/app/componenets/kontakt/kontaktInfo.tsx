import { useTranslations } from 'next-intl';
import CalendarSolid from '@/app/icons/CalendarSolid';
import PinSolid from '@/app/icons/PinSolid';
import PhoneSolid from '@/app/icons/PhoneSolid';
import MailSolid from '@/app/icons/MailSolid';
import TimeIcon from '@/app/icons/TimeIcon';

export default function KontaktInfo() {
    const t = useTranslations('Common');
    return (
        <div className='mb-12'>
            <p className='font-semibold text-sm mb-8'>{t('only-on-call')}</p>
            <h3 className='uppercase font-extrabold text-sm mb-1'>{t('open-days-title')}</h3>
            <p className='flex gap-2 items-center'><CalendarSolid size="16" />{t('open-days')}</p>
            <p className='flex gap-2 items-center'><TimeIcon size="16"/> {"9:30 - 13:30"}</p>
            <h3 className='uppercase font-extrabold text-sm mt-4 mb-1'>{t('address_title')}</h3>
            <p className='flex gap-2 items-center'><PinSolid size="16" />Zasieki 75, 68-343 Zasieki</p>
            <a className="mt-2 mb-4 block btn-ui btn-second  max-w-max" href="https://goo.gl/maps/5vwZ1Veo9Y9zDGsC9" target="_blank" rel="nofollow">{t('navigate')}</a>
            <h3 className='uppercase font-extrabold text-sm mb-1'>{t('termin')}</h3>
            <p className='flex gap-2 items-center'><PhoneSolid size="16" />{t('phone_numer')}</p>
            <p className='flex gap-2 items-center'><MailSolid size="16" />{t('mail')}</p>
            <a className="mt-2 block   btn-ui btn-second max-w-max" href="http://wa.me/48506109445/?text=Dzień dobry, chciałbym umówić się na wizytę" target="_blank" rel="nofollow">WhatsApp</a>
        </div>
    )
}