'use client'
import PasswordInput from '@/app/componenets/login/passwordInput';
import { login, signup, logout } from './actions';
import DogHero2 from "@/../public/dog-hero-2.png"
import Image from 'next/image';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';


export default  function  SignUpPage() {

  const [state, formAction] = useFormState(login, {error: ""})
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
      <div className="container flex flex-col justify-center py-20 md:py-0">
        <div className='card bg-white  border max-w-[450px]'>
          <div className='card-body'> 
          <form action={formAction} className='w-full relative'>
          <h2 className='text-center text-xl font-semibold'>Zaloguj się do panelu klienta</h2>
          <div className='relative pt-8'>
         
          <div className='mb-4 grid w-full relative'>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" className='border rounded-lg p-2 bg-white focus-within:outline' required autoFocus autoComplete="email"/>
            {state?.error && typeof state?.error === "object" && (<span className='text-xs text-red-600 font-semibold absolute -bottom-4 pl-2'>{state?.error.email}</span>)}
          </div>
          <PasswordInput error={state?.error && typeof state.error === 'object' ? state?.error.password : null }/>
          {/* <div className='mb-4 grid w-full relative'>
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" className='border rounded-lg p-2 bg-white focus-within:outline' required autoComplete="current-password"/>
            {state?.error && typeof state?.error === "object" && (<span className='text-xs text-red-600 font-semibold absolute -bottom-4 pl-2'>{state?.error.password}</span>)}
          </div> */}
          <div className='grid gap-4  pt-4'>
            <Submit />
          </div>
          {state?.error && typeof state?.error === "string" && (<span className='text-xs text-red-600 font-semibold pl-2 top-0'>{state?.error}</span>)}
          </div>
        </form>
        <Link href="/password" className='hover:underline text-right pt-2'>Zapomniałeś hasła?</Link>
        <hr className='my-8'/>
        <div className='flex flex-wrap gap-2 justify-center items-center '>
        <span>nie masz jeszcze konta? </span> <Link href="/sign-up" className='font-semibold uppercase text-xs hover:underline'>Utwórz konto!</Link>
        </div>
          </div>
        </div>
       

        <Link href="/" className='link mt-12'>Powrót na stronę główną</Link>
      </div>
    </section>
  )
}



function Submit() {
  // ✅ `pending` will be derived from the form that wraps the Submit component
  const { pending } = useFormStatus(); 
  return <button 
        type='submit' 
        className='btn-ui h-[42px] disabled:bg-ui-red disabled:text-white flex justify-center items-center' 
        disabled={pending}
      >
        { pending &&  <svg className="animate-spin h-5 w-5 mr-3" fill='#e22a18' viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg> } {"Log in"}</button>;
}