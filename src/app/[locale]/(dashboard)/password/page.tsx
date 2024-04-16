

import DogHero2 from "@/../public/dog-hero-2.png"
import Image from 'next/image';
import Link from 'next/link';
//import { isLogged } from './actions'
//import PasswordInput from '@/app/componenets/login/passwordInput';
import { resetPassword } from "./actions";
export default function Page() {
  //const is_logged = await isLogged();
  return (
    <section className='grid grid-cols-1  md:grid-cols-2 h-screen bg-blue-500 text-black ' >
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
            <form action={resetPassword} className='w-full'>
              <h2 className='text-center text-xl font-semibold mb-2'>Przypomnij Hasło</h2>
              <p className='text-center'>Wpisz adres mailowy, na który rejestrowałeś się w panelu.</p>
              <div className='mb-4 grid w-full'>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" className='border rounded-lg p-2 bg-white focus-within:outline' required autoFocus autoComplete="email" />
              </div>
              <button className="btn-ui  w-full h-[42px] block focus:outline focus:outline-1 ">Przypomnij</button>

            </form>
            <hr className='my-8'/>
            <Link href="/login" className="font-semibold uppercase text-xs hover:underline ml-auto">Zaloguj się</Link>

          </div>
        </div>


        <Link href="/" className='link mt-12'>Powrót na stronę główną</Link>
      </div>
    </section>
  )
}