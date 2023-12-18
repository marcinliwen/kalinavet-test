
import ServicesCategories from './servicesCategories';
import {useLocale} from 'next-intl';
import ServicesTitle from './servicesTitle';
import ServicesCard from './servicesCard';


async function getServices(locale: string) {
    const {data} = await fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldqjnpm22vwp01uldwwx5ejk/master', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query ServicesData($locale: Locale!) {
        services(locales: [$locale]) {
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



export default async function HomeServices(){
    const locale = useLocale();
    const data = await getServices(locale);
    console.log('services', data)

    return(
        <section className=" py-20 bg-white text-black">
        <div className="container">
        <ServicesTitle />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 md:gap-8 md:gap-y-16'>
            {data && data.map((service:any) =>{
                return(
                   <ServicesCard service={service}/>
                )
            })}
        </div>
          </div>
          </section>
    )
}