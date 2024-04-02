import Head from "next/head"
import SecondHero from "@/app/componenets/secondHero"
import AboutTitle from "@/app/componenets/about/aboutTitle"
import Image from "next/image"
import AboutUs from "@/../public/Kalina02.png"
import Marcin from "@/../public/Marcin01.png"
import AboutBio from "@/app/componenets/about/aboutBio"
import GabiinetFront from '@/../public/gabinet-front.png'
import LinkMore from "@/app/componenets/linkMore"
import { Link } from "@/navigation";
import Slogan from "@/app/componenets/slogan"
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'O nas',
    description: 'Informacje o Gabinecie i Lekarzu'
}
export default function Onas() {
    return (
        <>
            <Head>
                <meta name="description" content="Informacje o nas " />
            </Head>
            <SecondHero isCTA={false} title={'about'} />
            <section className="py-12 md:py-16 relative z-0 bg-white text-black" >
                <div className="container relative z-10">
                    <AboutTitle />
                </div>
            </section>
            <section className="pb-16 pt-2 bg-white text-black">
                <div className="container">

                    <div className="grid md:grid-cols-3 gap-8 relative ">

                        <div className="flex flex-col pr-8 mb-8 md:mb-0 ">
                            <h2 className='mb-14'>{"Lokalizacja"}</h2>
                            <p className="text-sm leading-8 "><strong>Gabinet Weterynaryjny w Zasiekach</strong> mieści się w budynku Apteki Arnika. Przed budynkiem jest wygodny parking dla klientów.</p>


                            <Link className="btn-ui mt-4  ml-0 md:mx-0 block lg:min-w-0 w-max " href="/kontakt">{"Kontakt"}</Link>
                        </div>
                        <Image src={GabiinetFront} alt="Gabinet Weterynaryjny w zasiekach" className="md:col-span-2 mb-8 md:mb-0" />

                    </div>
                </div>
            </section>
            {/* <section className="py-12  mb-16 ">
                <div className="container relative z-10">
                    <h2 className='mb-14'>{"Zespół"}</h2>
                    <div className="grid md:grid-cols-3 gap-8 relative">

                        <article>
                            <Image
                                src={AboutUs}
                                width={360}
                                height={611}
                                alt="Kalina Adamkiewicz - Weterynarz"
                                className=""

                            />
                            <div className="mt-4">
                                <strong className="">Kalina Adamkiewicz</strong>
                                <p className="text-sm">Lekarz weterynarii, Chirurg</p>
                                <p className="text-sm">Właściciel i Kierownik</p>
                            </div>
                        </article>
                        <article>
                            <Image
                                src={Marcin}
                                width={360}
                                height={611}
                                alt="Kalina Adamkiewicz - Weterynarz"
                                className=""

                            />
                            <div className="mt-4">
                                <strong className="">Marcin Liweń</strong>
                                <p className="text-sm">Pomoc weterynaryjna</p>
                                <p className="text-sm">Manager</p>
                            </div>
                        </article>
                        <div>

                        </div>
                    </div>

                </div>
            </section>
            <section className="py-12  mb-16 ">
                <div className="container relative z-10">
                    <div className='grid md:grid-cols-3 border-b border-[#242424] mb-16'>
                        <h2 className='mb-14'>{"Certyfikaty"}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {[1, 2, 3, 4, 5, 6].map(item => {
                            return (
                                <article key={item} className="p-4 bg-gray-100 rounded-xl min-h-[450px]">

                                </article>
                            )
                        })}

                    </div>

                </div>
            </section> */}
            <Slogan />
        </>
    )
}