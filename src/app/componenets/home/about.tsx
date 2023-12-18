import {useLocale} from 'next-intl';
import Image from 'next/image';
import { RichText } from '@graphcms/rich-text-react-renderer';

async function getAbout(locale: string) {
    const {data} = await fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldqjnpm22vwp01uldwwx5ejk/master', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query About($locale: Locale!) {
        homePages(locales: [$locale]) {
            about {
              description {
                raw
              }
              image {
                width
                url
                height
              }
              title
            }
          }
      }`,
      variables: {
        locale
      }
    }),
  }).then((res) => res.json());
  return data.homePages[0].about;
}

export default async function HomeAbout(){
    const locale = useLocale();

    //const {locale} = props.params;
    const aboutData = await getAbout(locale);
    return(
        <section className="py-12 lg:mb-16 bg-blue-100 relative z-0 after:content-[''] after:absolute after:bg-white after:right-0 after:top-0 after:bottom-0 after:w-0 md:after:w-[20%] after:z-0" >
        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col justify-center text-black">
              <h2 className='text-black'>{aboutData.title}</h2>
            <RichText  
            content={aboutData.description.raw}
            renderers={{
                p:({children})=><p className='mb-8'>{children}</p>
            }}/>
            </div>
            <div>
              <Image
                src={aboutData.image.url}
                width={aboutData.image.width}
                height={aboutData.image.height}
                alt="Kalina Adamkiewicz - Weterynarz"

              />
            </div>
          </div>
        </div>
      </section >
    )
}