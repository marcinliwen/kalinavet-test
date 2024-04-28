import type { Metadata } from 'next'
import Image from 'next/image';
import { Link } from "@/navigation";
import PostNav from '../../../componenets/postnav';
import { RichText } from "@graphcms/rich-text-react-renderer"

export const metadata: Metadata = {
  title: "Blog - ",
  description: "Artykuł bloga"
}

async function getPost(slug: any) {
  
  const response = await fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldqjnpm22vwp01uldwwx5ejk/master', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            query Post($slug: String!) {
                post(where: {slug: $slug}) {
                  date
                  title
                  content {
                    references {
                      ... on Asset {
                        __typename
                        id
                        url
                        mimeType
                      }
                    }
                    json
                  }
                  author {
                    name
                    createdAt
                  }
                  coverImage {
                    url
                    height
                    width
                  }
                  createdAt
                }
              }`,
      variables: {
        slug: slug,
      }
    })
  })
  const data = await response.json();
  return data.data.post
}

export default async function Post({ params }: any){

  const postData = await getPost(params.slug)

  return (
    <section className='pb-16'>
      <div className='container'>
      <h1>{postData.title}</h1>
      <Link className='my-8 flex gap-3 hover:ml-2 duration-300' href="\porady">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg><span>Back</span></Link>
      <div className="w-full max-w-[900px] mx-auto ">
        <Image alt="blog imag"
          src={postData.coverImage.url}
          width={postData.coverImage.width}
          height={postData.coverImage.height}
        />
      </div>
      <article className='prose w-full py-10 px-5 mx-auto prose-zinc dark:prose-blockquote:text-white/60 dark:prose-invert dark:prose-headings:text-blue-200'>
        {postData.content && (
          <RichText
            content={postData?.content?.json}
            references={postData?.content?.references}
          />
        )}
      </article>

      {postData &&
        <PostNav currentDate={postData.createdAt} />
      }
      </div>
    </section>
  )
}