'use client'

import React from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { usePathname } from 'next-intl/client';

export default function Navigation(){
    const t = useTranslations("MenuLinks");
    const mainNav = [
        {
            "name": t("services"),
            "link": "/uslugi"
        },
        {
            "name": t("about"),
            "link": "/o-nas"
        },
        {
            "name": t("blog"),
            "link": "/porady"
        },
        {
            "name": t("faq"),
            "link":"/pytania"
        },
        {
            "name": t("contact"),
            "link": "/kontakt"
        }
        
    ]
    const pathname = usePathname();
    
    return(
        <nav className="mr-auto ml-16  hidden lg:block ">
            <ul className="flex gap-8 justify-center items-center h-full">
                {mainNav.map((item, index) =>
                    <li key={index} className="block lg:inline-block lg:mt-0  last:mr-0">
                        <Link href={item.link} className={`${pathname === item.link ? 'active' : ''} nav-active relative text-black`}>
                            {item.name}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}