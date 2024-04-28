'use client'
import React from "react";
import { sendEmail } from "@/app/[locale]/pytania/actions";

export default function Sendemail(){
    const[resMessage, setMessage] = React.useState<string>()
    async function  emailHandler(){
      try{
        const res = await sendEmail().then(res=> res)
        if(res){
          setMessage(res.Message)
        }
        alert('email sended')
      }catch(e){
        console.error(e)
      }
     
  }
    return(
        <>
        <button onClick={()=>{emailHandler()}}>Wyślij maila</button>
        {resMessage && <div className='text-green-500 py-3'>{resMessage}</div>}
        </>
    )
}