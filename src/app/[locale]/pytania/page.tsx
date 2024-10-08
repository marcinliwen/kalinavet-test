
import SecondHero from "@/app/componenets/secondHero";
import Image from "next/image";
import FaqTitle from "@/app/componenets/home/faqTitle";
import { Metadata } from "next";
import FaqDog from "@/../public/dog_blue.png";
import { GetAllQuestions } from "@/app/[locale]/pytania/actions";
import FaqForm from "@/app/componenets/questions/FaqForm";
import DogForm from "@/../public/dog-form.png"
import FaqFormtitle from "@/app/componenets/questions/FaqFormTitle";


export const metadata: Metadata = {
    title: 'Pytania',
    description: 'Najczęściej zadawane pytania'
}

export default async function Faq(props: any) {
    const { locale } = props.params;
    const hygraphData = await GetAllQuestions(locale)

    const jsonLdQA = {
        "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: hygraphData?.map((item)=>{
        return({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: `<p>${item.answer}</p>`
            }
      })
    }
      )
    }
   
    return (
        <>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQA) }}
      />
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
            <section className="py-20 bg-blue-100">
                <div className="container">
                
                    <div className='grid md:grid-cols-3 gap-14 mb-14'>
                      <FaqFormtitle />
                        <FaqForm/>
                        <Image src={DogForm} width={515} height={643} alt="dog" />
                    </div>
                </div>
            </section>
        </>
    )
}
