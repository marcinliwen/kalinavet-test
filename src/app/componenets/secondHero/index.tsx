'use client'

import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import DogHero from "@/../public/header-dog.png";
import { useTranslations } from 'next-intl';
type Props = {
    isCTA?: boolean;
    title: 'services' | 'about' | 'blog' | 'contact' | 'faq';
}
const SecondHero = (props: Props) => {
    const m = useTranslations('MenuLinks');

    const { isCTA, title } = props;
    return (
        <div className="w-full bg-gradient  flex relative">
            <div className='container'>
                <div className="flex  h-full  mt-auto">

                    <div className="w-1/2 h-full flex flex-col justify-center relative z-10 mb-20 md:mb-0">
                        <h1 className="logo-text-ui">
                            {m(title as any)}
                        </h1>

                        {isCTA &&
                            <div className="flex flex-col md:flex-row gap-4">
                                <Link href="/kontakt" className="btn-ui mt-4 md:mt-16 ml-0 md:mx-0 block lg:min-w-0 w-max text-lg"
                                >
                                    umów wizytę
                                </Link>

                            </div>
                        }
                    </div>
                    <div className="ml-auto flex pt-4 max-w-1/2">
                        <Image
                            alt="hero"
                            src={DogHero}
                            width={400}
                            className='object-contain mt-auto'
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondHero;