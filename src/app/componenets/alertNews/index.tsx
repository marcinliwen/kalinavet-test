'use server'
import React from "react";
import AlertIcon from "./AlertIcon";
import { useLocale } from 'next-intl';
import { RichText } from "@graphcms/rich-text-react-renderer"

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
    console.log('news', news.filter((news:any)=>news.displayInTopBanner))
    return (
        <>
            <section className='bg-ui-red '>
                {news && news.filter((news:any)=>news.displayInTopBanner).map((news:any)=>{
                   return <div key={news.title} className='container mx-auto gap-4  items-center py-1 text-white whitespace-nowrap text-right overflow-auto flex ' >{'W tym tygodniu pracujemy: '}<RichText content={news.content.raw}/></div>
                })}
                {/* <div className='container mx-auto flex gap-4 text-white items-center py-1 overflow-auto whitespace-nowrap' dangerouslySetInnerHTML={{ __html: news.html }} >

                </div> */}
            </section>

        </>
    )
}
