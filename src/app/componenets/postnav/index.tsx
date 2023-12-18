import React from "react";
import Link from "next/link";


async function getNextPost(createdAt:any){
    const response = await fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldqjnpm22vwp01uldwwx5ejk/master',{
        method: 'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            query: `
            query AllPosts($createdAt: DateTime!) {
                posts(where: { createdAt_lt: $createdAt }, first: 1, orderBy: createdAt_DESC) {
                  date
                  slug
                  title
                }
              }`,
              variables: {
                createdAt: createdAt,
              }
            })
    })
    const data = await response.json();
    console.log('data', data)
    return data.data.posts;
}
async function getPrevPost(createdAt:any){
    const response = await fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldqjnpm22vwp01uldwwx5ejk/master',{
        method: 'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            query: `
            query AllPosts($createdAt: DateTime!) {
                posts(where: { createdAt_gt: $createdAt }, first: 1, orderBy: createdAt_DESC) {
                  date
                  slug
                  title
                }
              }`,
              variables: {
                createdAt: createdAt,
              }
            })
    })
    const data = await response.json();
    console.log('data', data)
    return data.data.posts;
}

export default  async function PostNav({currentDate}:any){

    const nextPost =  await getNextPost(currentDate);
    const prevPost = await getPrevPost(currentDate);
    console.log('nextPost', nextPost
    )
    console.log('prevPost', prevPost)
    if(!nextPost) return;
    return(
        <aside>
                <nav className="w-full" >
                    <ul className="flex gap-4 w-full justify-between">
                    {prevPost[0]?.slug && <Link className="block rounded-lg border py-2 px-4 border-white" href={`/porady/${prevPost[0].slug}`}>poprzedni post</Link>}  
                    {nextPost[0]?.slug && <Link className="block rounded-lg border py-2 px-4 border-white" href={`/porady/${nextPost[0].slug}`}>następny post</Link>}
                            
                           
                    </ul>
                    
                </nav>
            </aside>
    )
}