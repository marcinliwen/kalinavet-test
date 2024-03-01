'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import Dog from '@/../public/error-dog.png'

export default function NotFound() {
  const t =  useTranslations('NotFound')
  return (
    <section className='self-stretch bg-blue-500 pt-20'>
      <div className='container h-full flex  justify-center items-end text-left'>
        <div className='grid lg:grid-cols-2 '>
          <div className='self-center lg:pl-[25%] xl:pl-[40%]'>
            <h2 className='text-ui-red text-[124px] mb-8 leading-[140px] font-extrabold'>404</h2>
            <p className='mb-8'>{t('title')}</p>
            <Link href="/" className='btn-ui'>{t('btn_text')}</Link>
          </div>
          <div className='relative -mr-4 w-2/3 lg:w-full ml-auto lg:mx-0'>
          <Image src={Dog} alt="dogs ears" className='object-cover object-top lg:max-h-[445px] 2xl:max-h-[600px] 2xl:w-[600px] ' width={420} />
          </div>
          
        </div>

      </div>
    </section>

  )
}