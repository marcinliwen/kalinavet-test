'use client'

import Image from "next/image";
import Dog from '@/../public/dog-3.png';
import { useTranslations } from 'next-intl';

export default function Slogan(){
    const t = useTranslations('Common');
    return (
        <section className='bg-gradient relative'>
            <div className='container'>
                <div className='grid md:grid-cols-3 items-center'>

                    <div className='md:col-span-2  md:pr-32 py-8 relative z-10'>
                        <p className='text-4xl leading-10 font-black text-ui-red'>{t('slogan')}</p>
                    </div>
                    <div className="mt-auto flex order-2  z-0">
                        <Image src={Dog} alt="dogs ears" width={320} />
                    </div>
                </div>

            </div>
        </section>
    )
}
