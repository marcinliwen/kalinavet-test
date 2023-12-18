import Head from "next/head";
import SecondHero from "@/app/componenets/secondHero";
import Image from "next/image";
import FaqTitle from "@/app/componenets/home/faqTitle";
import { Metadata } from "next";
import FaqSectoin from "@/app/componenets/home/faqHome";
import FaqDog from "@/../public/dog_blue.png";


export const metadata: Metadata = {
    title: 'Pytania',
    description: 'Najczęściej zadawane pytania'
}

type Faq = {
    id: number,
    question: string,
    answer: string
}

async function getFAQ(locale: string) {
    const { data } = await fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldqjnpm22vwp01uldwwx5ejk/master', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
      query FaqData($locale: Locale!) {
        faqs(locales: [$locale]) {
            answer
            question
          }
      }`,
            variables: {
                locale
            }
        }),
    }).then((res) => res.json());
    return data.faqs;
}

export default async function Faq(props:any) {

    const {locale} = props.params;
    const questions = await getFAQ(locale)
    return (
        <>
    <SecondHero isCTA={false} title={'faq'} />
    <section className="py-20">
                <div className="container">
                    <FaqTitle />
                    <div className='grid md:grid-cols-3 gap-14'>
                        <div className='mb-10'>
                            <div className='flex gap-3 sticky top-5'>
                                <Image src={FaqDog} width={515} height={643} alt="dog" />

                            </div>
                        </div>
                        <div className='accordion md:col-span-2'>
                            {questions.map((item: Faq, index: number) => (
                                <>
                                    <input type="radio" id={`acc_${index}`} name="acc1" />
                                    <div className="accordion-item border-b-[0.5px]  last-of-type:border-0">
                                        <label
                                            htmlFor={`acc_${index}`}
                                            className="accordion-title cursor-pointer flex items-center bg-blue-100 px-6 py-7"
                                        >
                                            <span className="flex-1">{item.question}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="ml-auto acccordion-icon h-6 w-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </label>
                                        <label
                                            htmlFor="acc_close"
                                            className="accordion-close h-[80px] cursor-pointer"
                                        />
                                        <div className="accordion-content px-6">
                                            <p className="small">{item.answer}</p>
                                        </div>
                                    </div>
                                </>
                            ))}

                            <input id="acc_close" type="radio" name="acc1" />
                            
                        </div>


                    </div>
                </div>
            </section >s
        </>
    )
}
