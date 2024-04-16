'use client';
import React from "react";
import { SignUpFormSchema } from "@/lib/validationSignUpFormSchema";
import { useFormState } from "react-dom";
import { signup, type SignUpData } from "@/app/[locale]/(dashboard)/sign-up/actions";
import { z } from 'zod';
import { useTransition } from "react";
import PasswordInput from "./passwordInput";

export default function SignUpForm() {
  const [isPending, startTransition] = useTransition();
  const [formError, setError] = React.useState<any>();
  const [passwordError, setPasswordError] = React.useState<string[]>([])

  
  const handleSubmit = (event: any) => {
    event.preventDefault()
    const currnetFormData: SignUpData = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    try {
      SignUpFormSchema.parse(currnetFormData)
      console.log('valid', currnetFormData)
      setError({})
      startTransition(() => {
        signup(currnetFormData);
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.flatten().fieldErrors);
        console.log(error.flatten());
      }
    }
  }

  console.log('formError', formError)
  return (<form onSubmit={handleSubmit}>
    <h2 className='text-center text-lg font-semibold mb-2'>Witaj w panelu klienta Gabinetu Weterynaryjnego KalinaVet! </h2>
    <p className='text-center'>Utwórz darmowe konto i bądź na bierząco ze zdrowiem swojego pupila.</p>
    <div className='mb-4 grid w-full relative'>
      <label htmlFor="email">Email:</label>
      <input  id="email" name="email" type="email" className='border rounded-lg p-2 bg-white focus-within:outline' autoFocus autoComplete="email" />
      {formError?.email?.map((error: any) => <span className="text-red-500 text-xs absolute -bottom-4" key="error">{error}</span>)}
    </div>
    <PasswordInput error={formError?.password ? formError.password : null} />
    {/*  <div className='mb-4 grid w-full relative'>
                <label htmlFor="password">Password:</label>
                <div className='relative'>
                  <input id="password" name="password" type="password" className='border rounded-lg p-2 bg-white focus-within:outline w-full'  />
                  <button type='button' className='absolute right-3 top-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  </button>
                </div>
                {formError?.password?.map((error:any)=> <span className="text-red-500 text-xs absolute -bottom-4" key="error">{error}</span>) }
              </div> */}
    <div className='grid gap-4 pt-4'>
      <button type="submit" className='btn-ui h-[42px]'>Utwórz konto</button>
    </div>
  </form>)
}