

import DogHero2 from "@/../public/dog-hero-2.png"
import Image from 'next/image';
import Link from 'next/link';
//import { isLogged } from './actions'
//import PasswordInput from '@/app/componenets/login/passwordInput';
import { resetPassword } from "./actions";
import RemindPasswordForm from "@/app/componenets/resetPassword/remindPasswordForm";


export default function Page() {
  //const is_logged = await isLogged();
  return (
    <section className='grid grid-cols-1  md:grid-cols-2 min-h-screen py-20 bg-blue-500 text-black ' >
      <div className='h-full  hidden md:block relative'>
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
            <RemindPasswordForm />
            <hr className='my-8'/>
            <Link href="/login" className="font-semibold uppercase text-xs hover:underline ml-auto">Zaloguj się</Link>
          </div>
        </div>


        <Link href="/" className='link mt-12'>Powrót na stronę główną</Link>
      </div>
    </section>
  )
}

