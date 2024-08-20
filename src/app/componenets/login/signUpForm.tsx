'use client';
import React from "react";
import { SignUpFormSchema } from "@/lib/validationSignUpFormSchema";
import { useFormState, useFormStatus } from "react-dom";
import { signup, type SignUpData } from "@/app/[locale]/(dashboard)/sign-up/actions";
import { z } from 'zod';
import { useTransition } from "react";
import PasswordInput from "./passwordInput";

export default function SignUpForm() {
  const [isPending, startTransition] = useTransition();
  const [formError, setError] = React.useState<any>();
  const [passwordError, setPasswordError] = React.useState<string[]>([])

  
  const [state, formAction] = useFormState(signup, {error: ""})
 /*  const handleSubmit = (event: any) => {
    event.preventDefault()
    const currnetFormData: SignUpData = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    try {
      SignUpFormSchema.parse(currnetFormData)
      console.log('valid', currnetFormData)
      startTransition(() => {
        signup(currnetFormData);
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.flatten().fieldErrors);
        console.log(error.flatten());
      }
    }
  } */

  //console.log('formError', formError)
  return (
  <form action={formAction}>
    <h2 className='text-center text-lg font-semibold mb-2'>Witaj w panelu klienta Gabinetu Weterynaryjnego KalinaVet! </h2>
    <p className='text-center mb-8'>Utwórz darmowe konto i bądź na bierząco ze zdrowiem swojego pupila.</p>
    
    
    <div className='mb-4 grid w-full relative'>
      <label htmlFor="email">Email:</label>
      <input  id="email" name="email" type="email" className='border rounded-lg p-2 bg-white focus-within:outline' autoFocus autoComplete="email" />
      {state?.error && typeof state.error === 'object' && (<span className="text-red-500 text-xs absolute -bottom-4" >{state.error.email}</span>)}
    </div>
    <PasswordInput error={state?.error && typeof state.error === 'object' ? state?.error.password : null } />
  
    <div className='grid gap-4 pt-4'>
     <Submit />
    </div>
    {state && typeof state.error === 'string' && (<div className="text-red-500 text-xs text-center font-semibold mt-5">{state.error}</div>)}
  </form>)
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
  </svg> } {"Utwórz konto"}</button>;
}