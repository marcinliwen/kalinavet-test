'use client'

import Image from "next/image"
import { Link } from "@/navigation";
import { useTranslations } from 'next-intl';
import Pin from "@/app/icons/Pin";
import CalendarIcon from "@/app/icons/CalendarIcon";
import Phone from "@/app/icons/Phone";
import Doghome from "@/../public/doghome.png";
import DogHero2 from "@/../public/dog-hero-2.png"
import MobileHero from "@/../public/mobile-hero.png"

export default function HomeHero() {
  const t = useTranslations('Common');
  const h = useTranslations('HomePage');
  return (
    <div className="bg-ui-light  lg:pb-0  w-full bg-gradient h-dvh lg:h-[calc(100vh_-_88px)] flex relative">
      <div className='container'>
        <div className="flex flex-col h-full  mt-auto">
          <div className="w-full md:w-2/3 max-h-full  absolute right-0 bottom-0 h-full flex items-end z-0 overflow-hidden">
            <Image
              alt="hero"
              src={DogHero2}
              sizes="100vw"
              priority={true}
              className='object-cover h-[98%] object-left lg:object-top absolute md:left-0 mt-auto  w-full  md:!h-[100%] lg:!h-[90%] xl:!h-full'
            />
            {/*  <Image
                alt="hero"
                src={MobileHero}
                sizes="100vw"
                priority={true}
                className='md:hidden object-cover object-bottom sm:object-center md:object-top absolute !left-auto md:left-0 mt-auto  !right-0 w-full  !h-[100%] lg:!h-[90%]'
              /> */}
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center relative z-10 mb-20 md:mb-0">
            <h1 className="logo-text-ui">
              {h('title')}
            </h1>
            <p className="mt-2 text-base  font-normal max-w-[450px] text-black">
              {h('welcome-text')}
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link href="/kontakt" className="btn-ui mt-4 md:mt-16 ml-0 md:mx-0 block lg:min-w-0 w-max text-lg"
              >
                {h('cta')}
              </Link>
              {/*  <Link href="/kontakt" className="btn-ui-outline md:mt-16 ml-0 md:mx-0 block lg:min-w-0 w-max text-lg"
                >
                  {h('offer')}
                </Link> */}
            </div>

          </div>
          <div className='flex mt-12 absolute md:relative left-0 bottom-0 right-0  lg:w-2/3'>
            <div className='grid grid-cols-3 md:grid-cols-4 bg-ui-red [&>div>svg]:mx-auto gap-0 py-4 px-0 md:py-4 relative z-20 w-full md:w-auto'>
              <Link href="/kontakt" className='text-white text-center px-3 md:px-8  md:py-4 gap-8 items-center border-r border-white/40'>
              
                <div className='w-6 mb-2 mx-auto md:ml-0'>
                  <Pin size="32" />
                </div>
                <div className='md:text-left text-xs md:text-sm text-center'>
                  {/*  <p className='text-2xl'>{t('new-address')}</p> */}
                  <p>Zasieki 75</p>
                </div>
              </Link>
              <Link href="/kontakt" className='text-white text-center px-3 md:px-8 md:pr-4 md:py-4  border-r border-white/40  gap-8 items-center'>
                <div className='w-6 mb-2 mx-auto md:ml-0'>
                  <CalendarIcon size={"32"} />
                </div>
                <div className='text-center md:text-left'>
                  <p className='text-xs md:text-sm'>{/* {t('termin')} */} {t('monday-to-friday')}</p>
                  <p className='text-xs md:text-sm'>9:30 - 13:30</p>
                </div>
              </Link>
              <div className=' text-white text-center px-3 md:px-8 md:pr-4 md:py-4   gap-8 items-center md:border-r border-white/40 '>
                <div className='w-6 mb-2 mx-auto md:ml-0'>
                  <Phone size={"32"} />
                </div>
                <div className='text-center md:text-left '>
                  <a className="max-w-max mx-auto md:ml-0 text-xs md:text-sm block  whitespace-nowrap" href="tel:+325006109445" rel="nofollow">{t("phone_numer")}</a>
                </div>
              </div>
              <div className=' text-white text-center  px-4 md:px-8 md:py-4 h-full mt-auto gap-8 items-center hidden md:block '>
                {/* <div className=''>
                  <VeterinarianIcon size={"32"} />
                </div> */}
                <div className='text-left'>
                  <p className='w-[12ch] text-xs md:text-sm'>{t('only-on-call')}</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}