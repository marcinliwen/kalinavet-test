import { signup} from './actions';
import DogHero2 from "@/../public/dog-hero-2.png"
import Image from 'next/image';
import Link from 'next/link';
import { isLogged } from './actions';


export default async function  SignUpPage() {
  const is_logged = await isLogged();

  return (
    <section className='grid grid-cols-2 h-screen bg-blue-500 text-black ' >
      <div className='h-full relative'>
        <Image
          alt="hero"
          src={DogHero2}
          sizes=""
          priority={true}
          className='absolute h-full object-contain scale-x-[-1]'
        />
      </div>
      <div className="container flex flex-col justify-center">
        <div className='card bg-white  border max-w-[500px] shadow-xl'>
          <div className='card-body'>
          <form className='w-full'>
          <h2>Utwórz konto klienta!</h2>
          <div className='mb-4 grid w-full'>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" className='border rounded-lg p-2 bg-white' required />
          </div>
          <div className='mb-4 grid w-full'>
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" className='border rounded-lg p-2 bg-white' required />
          </div>
          <div className='grid gap-4'>
            <button formAction={signup} className='btn-ui'>Utwórz konto</button>
          </div>
          
        </form>
        <hr className='my-8'/>
        <div className='flex flex-wrap gap-2 justify-center'>
        <span>masz już konto? </span> <Link href="/login" className='hover:underline uppercase'>Zaloguj się!</Link>
        </div>
          </div>
        </div>
       

        <Link href="/" className='link mt-12'>Powrót na stronę główną</Link>
      </div>
    </section>
  )
}