import { login, signup, logout } from './actions';
import DogHero2 from "@/../public/dog-hero-2.png"
import Image from 'next/image';
import Link from 'next/link';
import { isLogged } from './actions';


export default async function  SignUpPage() {
  const is_logged = await isLogged();

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 h-screen bg-blue-500 text-black ' >
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
        <div className='card bg-white  border max-w-[450px]'>
          <div className='card-body'>
          <form className='w-full'>
          <h2 className='text-center text-xl font-semibold'>Zaloguj się do panelu klienta</h2>
          <div className='mb-4 grid w-full'>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" className='border rounded-lg p-2 bg-white focus-within:outline' required autoFocus autoComplete="email"/>
          </div>
          <div className='mb-4 grid w-full'>
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" className='border rounded-lg p-2 bg-white focus-within:outline' required autoComplete="current-password"/>
          </div>
          <div className='grid gap-4  pt-4'>
            <button formAction={login} className='btn-ui h-[42px]'>Log in</button>
          </div>
          
        </form>
        <Link href="/password" className='hover:underline text-right pt-2'>Zapomniałeś hasła?</Link>
        <hr className='my-8'/>
        <div className='flex flex-wrap gap-2 justify-center items-center '>
        <span>nie masz jeszcze konta? </span> <Link href="/sign-up" className='font-semibold uppercase text-xs hover:underline'>Utwórz konto!</Link>
        </div>
          </div>
        </div>
       
{ is_logged && <div className='py-12'>
          <form>
            <button formAction={logout} className='btn-ui'>Log out</button>
          </form>
        </div>}
        
        <Link href="/" className='link mt-12'>Powrót na stronę główną</Link>
      </div>
    </section>
  )
}