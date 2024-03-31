

import React, { ReactNode } from "react";
import { Link } from "@/navigation";

type Props = {
    link: string;
    children: ReactNode;
}

const LinkMore = (props: Props) => {
    const { link, children } = props;

    return (
        <Link href={link} className='uppercase text-xs font-semibold cursor-pointer flex gap-2 hover:ml-4 transition-all duration-300 ease-in-out'>{children}<svg width="32" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M30.8642 7.45802H0.864243V6.45802H30.8642V7.45802Z" fill="black"></path><path fillRule="evenodd" clipRule="evenodd" d="M25.4054 0.94283L31.7032 6.94512L31.0133 7.66901L24.7155 1.66672L25.4054 0.94283Z" fill="black"></path><path fillRule="evenodd" clipRule="evenodd" d="M24.6229 12.9161L30.6382 6.63069L31.3606 7.3221L25.3454 13.6075L24.6229 12.9161Z" fill="black"></path></svg></Link>
    )
}
export default LinkMore;