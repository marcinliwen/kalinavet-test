import React from "react";
import DogHero2 from "@/../public/dog-hero-2.png"
import Image from 'next/image';
import Link from 'next/link';
import { isLogged } from "./actions";
import { cookies } from 'next/headers'
import { createClient } from '@/app/utils/supabase/server'
import ResetPasswordForm from "@/app/componenets/resetPassword/resetForm";
import { updatePassword } from "./actions";
export default async  function ResetPasswordPage() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase.auth.getUser()
  
  //console.log('user', data)
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 min-h-screen py-20 bg-blue-500 text-black ' >
      <div className='h-full hidden md:block relative'>
        <Image
          alt="hero"
          src={DogHero2}
          sizes=""
          priority={true}
          className='absolute h-full object-contain scale-x-[-1]'
        />
      </div>
      <div className="container flex flex-col justify-center">
        <div className='card bg-white  border max-w-[450px] shadow-xl'>
          <div className='card-body'>
            {data?.user?.email &&  <ResetPasswordForm  user_email={data?.user?.email}/>}
           
         {/* <form className='w-full'>
              <h2 className='text-center text-lg font-semibold mb-2'>Podaj nowe hasło</h2>
              <p className='text-center'></p>
              <div className='mb-4 grid w-full'>
                <label htmlFor="email">Email:</label>
                <input defaultValue={data?.user?.email}   id="email" name="email" type="email" className='border rounded-lg p-2 bg-white focus-within:outline' />
              </div>
             <div className='mb-4 grid w-full'>
                <label htmlFor="password">Nowe hasło:</label>
                <div className='relative'>
                  <input id="password" name="password" type="password" className='border rounded-lg p-2 bg-white focus-within:outline w-full' required autoFocus/>
                  <button type='button' className='absolute right-3 top-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  </button>

                </div>
              </div>
              <div className='mb-4 grid w-full'>
                <label htmlFor="password-2">Powtórz nowe hasło:</label>
                <div className='relative'>
                  <input id="password-2" name="password-2" type="password" className='border rounded-lg p-2 bg-white focus-within:outline w-full' required />
                  <button type='button' className='absolute right-3 top-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  </button>

                </div>
              </div>
              <div className='grid gap-4'>
                <button  className='btn-ui h-[42px]'>Zapisz nowe hasło</button>
              </div>

            </form> */} 
            {/* <hr className='my-8' />
            <div className='flex flex-wrap gap-2 justify-center items-center'>
              <span>masz już konto? </span> <Link href="/login" className='font-semibold uppercase text-xs hover:underline'>Zaloguj się!</Link>
            </div> */}
          </div>
        </div>


        <Link href="/" className='link mt-12'>Powrót na stronę główną</Link>
      </div>
    </section>
  )
}