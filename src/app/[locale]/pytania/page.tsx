import SecondHero from "@/app/componenets/secondHero";
import Image from "next/image";
import FaqTitle from "@/app/componenets/home/faqTitle";
import { Metadata } from "next";
import FaqDog from "@/../public/dog_blue.png";
import { GetAllQuestions } from "@/app/services/actions";



export const metadata: Metadata = {
    title: 'Pytania',
    description: 'Najczęściej zadawane pytania'
}

export default async function Faq(props: any) {
    const { locale } = props.params;
    const hygraphData = await GetAllQuestions(locale)
    console.log('hygraphData', hygraphData)
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
                        <div className='md:col-span-2'>
                            {hygraphData && hygraphData.map((item) => (
                                <div key={item.id} className="mb-8">
                                    <h3 className="font-bold mb-2">{item.question}</h3>
                                    <p>{item.answer}</p>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
