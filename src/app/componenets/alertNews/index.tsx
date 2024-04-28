import React from "react";
import AlertIcon from "./AlertIcon";
import { useLocale } from 'next-intl';
import { RichText } from "@graphcms/rich-text-react-renderer"
import { useTranslations } from "next-intl";
type News = {
    content: {
        html: string
    },
    slug: string,
    title: string,
    validTill: string
}

type Props = {
    news: News;
}

async function getNews(locale: string) {
    const { data } = await fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldqjnpm22vwp01uldwwx5ejk/master', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query Assets($locale: Locale!) {
                newses(locales: [$locale]){
                    content {
                        raw
                      }
                      displayInTopBanner
                      validTill
                      title
                }
              }`,
            variables: {
                locale
            }
        }),
    }).then((res) => res.json());
    return data.newses;
}
export default async function AlertNews(){
    const locale = useLocale();

    const news = await getNews(locale)
    return (
        <>
            <section id="otwarte" className=' pt-32'>
                {news && news.filter((news:any)=>news.displayInTopBanner).map((news:any)=>{
                   return <div key={news.title} className='container mx-auto  items-center py-1 text-sm  overflow-auto grid grid-cols-3'>
                    <h2>{'Najbliższe godziny otwarcia:'}</h2>
                    <div className="col-span-2"><RichText content={news.content.raw} /></div>
                    
                    </div>
                })}
                {/* <div className='container mx-auto flex gap-4 text-white items-center py-1 overflow-auto whitespace-nowrap' dangerouslySetInnerHTML={{ __html: news.html }} >

                </div> */}
            </section>

        </>
    )
}
