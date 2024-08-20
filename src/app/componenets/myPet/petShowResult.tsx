'use client';
import { useEffect, useState } from "react";
import DownloadIcon from "@/app/icons/DownloadIcon";
import { getFileUrl } from "@/app/[locale]/(dashboard)/dashboard/actions";
import SearchIcon from "@/app/icons/SearchIcon";
import { downloadFile } from "@/app/[locale]/(dashboard)/dashboard/actions";

export default function PetShowResult({fileName}:{fileName:string}){

const [file, setFileUrl] = useState<any>(null)   
    useEffect(() => {
        const fileUrl = async () => {
            const data = await getFileUrl(fileName)
            setFileUrl(data ? data : '')
        }
        fileUrl();

    }, [fileName])

    //console.log('file', file)
    if(!file){
        return
    }
    return(
        <>
        <a href={file} className=' duration-300 max-w-max px-2 py-1 rounded-md btn btn-ghost' target="blank"><SearchIcon /></a>
{/*         <button  onClick={async ()=>{await downloadFile(fileName)}} className=' duration-300 max-w-max px-2 py-1 rounded-md btn btn-ghost'><DownloadIcon /></button>
 */}        </>
    )
}