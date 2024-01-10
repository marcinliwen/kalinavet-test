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
                        <div className='mb-10 order-1 md:-order-1'>
                            <div className='flex gap-3 sticky top-5'>
                                <Image src={FaqDog} width={515} height={643} alt="dog" />

                            </div>
                        </div>
                        <div className='accordion md:col-span-2'>
                            {questions.map((item: Faq, index: number) => (
                                <div key={item.id} className="mb-8">
                                    <h3 className="font-bold mb-2">{item.question}</h3>
                                    <p>{item.answer}</p>
                                </div>
                                
                            ))}

                            <input id="acc_close" type="radio" name="acc1" />
                            
                        </div>


                    </div>
                </div>
            </section >
        </>
    )
}
