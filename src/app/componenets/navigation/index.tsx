'use client'

import React from "react";
import { Link } from "@/navigation";
import { useTranslations } from 'next-intl';
import { usePathname } from '@/navigation';

export default function Navigation({ onClick }: { onClick: () => void; }) {
    const t = useTranslations("MenuLinks");
    const mainNav = [
        {
            "name": "Home",
            "link": "/"
        },
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
            "link": "/pytania"
        },
        {
            "name": t("contact"),
            "link": "/kontakt"
        }

    ]
    const pathname = usePathname();

    return (
        <nav className=" mx-auto lg:mr-auto lg:ml-16 mb-14 lg:mb-0">
            <ul className="flex flex-col lg:flex-row gap-8 justify-center items-center h-full">
                {mainNav.map((item, index) => {
                    
                    return (<li key={index} className={`block lg:inline-block lg:mt-0  last:mr-0 ${item.link === '/' && "lg:hidden" }`} onClick={() => { onClick() }}>
                        <Link href={item.link} className={`${pathname === item.link ? 'active' : ''} nav-active relative text-black`}>
                            {item.name}
                        </Link>
                    </li>)
                }
                )}
            </ul>
        </nav>
    )
}