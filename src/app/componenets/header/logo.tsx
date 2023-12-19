'use client'

import { Link } from "@/navigation";
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl';
import React from 'react';
import LogoRed from '@/app/icons/LogoRed';

const DEFAULT_LANG = 'pl';


export default function Logo() {
  const pathname = usePathname();
  const locale = useLocale();
  return (
    <>
      {pathname === '/' ? (
        <div className="w-[74px] md:w-[120px] relative grid items-center">
          <LogoRed />
        </div>
      ) : (
        <div className=" w-[74px] md:w-[120px] relative grid items-center">
          <Link href='/'  >
            <LogoRed />
          </Link>
        </div>
      )}
    </>
  )
}