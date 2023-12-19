import KontaktInfo from "@/app/componenets/kontakt/kontaktInfo"
import SecondHero from "@/app/componenets/secondHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Kontakt',
    description: 'Informacje kontaktowe i adresowe'
}

export default function Kontakt(){
    return(
        <>
            <SecondHero isCTA={false} title={"contact"} />
         <section className='py-20'>
                <div className="container">
               
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        <KontaktInfo />
                        <div className='col-span-2'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.910924119633!2d14.66634631613796!3d51.75295237967615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47087f0fbc487c15%3A0x6c16bb3c74513e0c!2sZasieki%2075%2C%2068-343!5e0!3m2!1spl!2spl!4v1654376835356!5m2!1spl!2spl"
                                className="w-full"
                                width="600"
                                height="450"
                                style={{ border: "0" }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}