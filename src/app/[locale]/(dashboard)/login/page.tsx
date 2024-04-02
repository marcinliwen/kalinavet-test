import { login, signup, logout } from './actions';
import DogHero2 from "@/../public/dog-hero-2.png"
import Image from 'next/image';
import Link from 'next/link';
import { isLogged } from './actions';


export default async function  LoginPage() {
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
        <form className='max-w-[430px]'>
          <h2>Zaloguj się do konta klienta</h2>
          <div className='mb-4 grid w-full'>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" className='border rounded-lg p-2 bg-white' required />
          </div>
          <div className='mb-4 grid w-full'>
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" className='border rounded-lg p-2 bg-white' required />
          </div>
          <div className='grid gap-4'>
            <button formAction={login} className='btn-ui'>Log in</button>
            <button formAction={signup} className='btn-ui'>Sign up</button>
          </div>

        </form>
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