'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink({title, urlName}:{title: string, urlName: string}){

    const pathname = usePathname();
    let lastindex = pathname.lastIndexOf('/')
    let lastName = pathname.substring(lastindex + 1)
     //console.log('lastName', lastName)
    return(
        <Link  role="button" className={`${lastName === urlName ? 'text-ui-red' : ''}`} href={'/'+urlName}>{title}</Link>
    )
}