import Head from "next/head";
import SecondHero from "@/app/componenets/secondHero";
import ServicesTitle from "@/app/componenets/home/servicesTitle";
import { useLocale } from 'next-intl';
import StetoscopeIcon from "@/app/icons/StetoscopeIcon";
import { RichText } from "@graphcms/rich-text-react-renderer"
import ServicesIcon from "@/app/componenets/home/servicesIcon";
import type { Metadata } from "next";


async function getServices(locale: string) {
    const { data } = await fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldqjnpm22vwp01uldwwx5ejk/master', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
      query ServicesData($locale: Locale!) {
        services(locales: [$locale]) {
            id
            title
            icon
            serviceCategory {
              name
              description {
                raw
              }
            }
          }
      }`,
            variables: {
                locale
            }
        }),
    }).then((res) => res.json());
    return data.services;

}

export const metadata: Metadata = {
    title: 'Usługi',
  };

export default async function Uslugi() {

    const locale = useLocale();
    const services = await getServices(locale);
    console.log('services', services)
    console.log('category', services[0].serviceCategory[0])
    return (
        <>
            <Head>
                <meta name="description" content="Informacje kontaktowe" />
            </Head>
            <SecondHero isCTA={false} title={'services'} />
            <section className='py-20'>
                <div className="container">
                    <ServicesTitle />
                    <div className='grid grid-cols-1 gap-16'>
                    {services && services.map((service: any) => {
                        return(
                        <div key={service.title} className='grid md:grid-cols-3'>
                            <div className='mb-10'>
                                <div className='flex gap-3 icon-bg sticky top-5'>
                                   <ServicesIcon icon={service.icon}/>
                                    <p className="text-lg font-bold uppercase">{service.title}</p>
                                </div>
                            </div>
                            <div className='accordion md:col-span-2'>
                                {service.serviceCategory.map((item: any, index: number) => (
                                    <>
                                    {item.description?.raw ?
                                    <>
                                        <input type="radio" id={`acc_${service.title}_${index}`} name="acc1" />
                                        <div className="accordion-item border-b-[0.5px]  last-of-type:border-0">
                                            <label
                                                htmlFor={`acc_${service.title}_${index}`}
                                                className="accordion-title cursor-pointer flex items-center bg-blue-100 px-6 py-7"
                                            >
                                                <span className="flex-1">{item.name}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="ml-auto acccordion-icon h-6 w-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </label>
                                            <label
                                                htmlFor="acc_close"
                                                className="accordion-close h-[80px] cursor-pointer"
                                            />
                                            <div className="accordion-content px-6">
                                                <RichText content={item.description.raw}/>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                    <div className="accordion-item border-b-[0.5px]  last-of-type:border-0">
                                            <label
                                                htmlFor={`acc_${service.title}_${index}`}
                                                className="accordion-title cursor-pointer flex items-center bg-blue-100 px-6 py-7"
                                            >
                                                <span className="flex-1">{item.name}</span>
                                              
                                            </label>
                                           
                                        </div>
                                    </>
                                    }
                                    </>
                                ))}

                                <input id="acc_close" type="radio" name="acc1" />
                            </div>
                        </div>
                        )
                    })}
                    </div>
                </div>
            </section>
        </>
    )
}