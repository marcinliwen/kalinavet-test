'use client'

import React from 'react';
import { Link } from "@/navigation";
import { useTranslations } from 'next-intl';
import LogoRed from '@/app/icons/LogoRed';
import { usePathname } from '@/navigation';


export default function Footer() {
    const t = useTranslations('MenuLinks');
    const f = useTranslations('Footer');
    const pathname = usePathname();
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
            "name": t('contact'),
            "link": "/kontakt"
        }
    ]
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="bg-ui-black py-8">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-auto mb-8 md:mb-0">
                        <div className="w-32 h-14">
                            {pathname === '/' ? (
                                <LogoRed />
                            ) :
                                <Link href="/" >
                                    <LogoRed />
                                </Link>}

                        </div>
                    </div>
                    <div className="w-1/2 md:ml-auto md:w-1/4">
                        <span className="text-white font-semibold text-xs uppercase mb-4">{f('contakt')}</span>
                        <p className="text-white font-light text-sm">
                            Zasieki 75,<br />
                            68-343 Brody<br />
                            kontakt@kalinavet.com
                        </p>
                    </div>
                    <nav className="w-1/2 md:w-1/4">
                        <span className="text-white font-semibold text-xs  uppercase mb-4">{f('nav')}</span>
                        <ul className="flex flex-col">
                            {mainNav.map((item, index) =>
                                <li key={index} className="block ">
                                    <Link href={item.link} className="leading-7 block text-white text-sm font-light py-3 lg:py-0">
                                        {item.name}
                                    </Link>
                                </li>
                            )}</ul>
                    </nav>
                    <ul className="block md:hidden text-left">
                        <li><a className="leading-7 block text-white text-sm font-light " href="/">Facebook</a></li>
                    </ul>

                </div>
                <div className="h-[1px] w-full bg-white/60 my-4"></div>
                <div className="flex">
                    <div className="text-white text-xs font-light">
                        &copy; {year} Kalina VET. With love for animals.
                    </div>
                    <ul className="ml-auto hidden md:block">
                        <li><a className="leading-7 block text-white text-sm font-light" href="/">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}