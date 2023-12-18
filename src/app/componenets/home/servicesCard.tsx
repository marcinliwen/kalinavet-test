'use client'
import LinkMore from "../linkMore";
import ScalpelIcon from "@/app/icons/ScalpelIcon";
import { useTranslations } from 'next-intl';
import ServicesIcon from "./servicesIcon";


export default function ServicesCard(props:any){
    const {service} = props;
    const h = useTranslations('HomePage');

    return(
        <div key={service.title} className='flex flex-col'>
        <div className='flex gap-3 mb-10 icon-bg'>
           <ServicesIcon icon={service.icon}/>
          <p className="text-lg font-bold uppercase text-black">{service.title}</p>
        </div>
        <ul className='list-disc pl-4 grid gap-1 text-sm mb-4'>
          {service.serviceCategory.map((item:any)=>{if(item.name && item.name.length !== 0) return(<li key={item.name}>{item.name}</li>)})}
        </ul>
      <LinkMore link={"/uslugi"}>{h('more')}</LinkMore> 
      </div>
    )
}