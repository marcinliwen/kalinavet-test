import type { Metadata } from 'next'
import SecondHero from '@/app/componenets/secondHero';
import PoradyTitle from '@/app/componenets/porady/poradyTitle';


export const metadata: Metadata = {
    title: "Porady",
    description: "Przydatne informacje i artykuły"
}


async function getPosts(){
    const response = await fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldqjnpm22vwp01uldwwx5ejk/master',{
        method: 'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            query: `
            query AllPosts {
                posts(orderBy: createdAt_DESC) {
                  date
                  id
                  slug
                  title
                  createdAt
                }
              }`
            })
    })
    const data = await response.json();
    return data.data.posts;
}

export default async function Blog(){

    const posts = await getPosts();
    return(
        <>
            <SecondHero isCTA={false} title={"blog"} />
            <section>
                <div className='container'>
                    <PoradyTitle />
                    <p className='text-center py-16'>Wkrótce pojawią się tu artykuły</p>
                    {/* <h2 className='text-3xl mb-8'>Linki do artykułów</h2> */}
               {/*  <ul>
                    {posts && posts.map((post:{title:string, slug:string})=>{
                        return(
                            <li><Link className='px-4 py-2 block' href={`/porady/${post.slug}`}>{post.title}</Link></li>
                        )
                    })}
                </ul> */}
                </div>

            </section >
        </>
        
    )
}