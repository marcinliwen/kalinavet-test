'use client'
import React from "react"
import { updatePassword } from "@/app/[locale]/(dashboard)/reset-password/actions"
import { useFormState } from 'react-dom'


type UpdateMessages = {
    errors: {
        password: string,
        confirmPassword: string
    };
}

const initialState = {
    errors: {
        password: '',
        confirmPassword: ''
    },
    success: ''
}

export default function ResetPasswordForm({ user_email }: { user_email: string }) {
    const [state, formAction] = useFormState(updatePassword, initialState)


    //console.log('state', errors)

    const [togglePassword, setTogglePassword] = React.useState<boolean>(false)
    const [toggleConfirmation, setToggleConfirmation] = React.useState<boolean>(false)
    const [error, setError] = React.useState<any>({ password: '', confirmation: '' })

    return (
        <form className='w-full' action={formAction}>
            <h2 className='text-center text-lg font-semibold mb-2'>Podaj nowe hasło</h2>
            <p className='text-center'></p>
            <div className='mb-4 grid w-full'>
                <label htmlFor="email">Email:</label>
                <input defaultValue={user_email} id="email" name="email" type="email" className='border rounded-lg p-2 bg-white focus-within:outline' />
            </div>
            <div className='pb-4  grid w-full relative'>
                <label htmlFor="password">Nowe hasło:</label>
                <div className='relative'>
                    <input
                        //onChange={onPasswordInput} 
                        id="password"
                        name="password"
                        type={togglePassword ? 'text' : 'password'}
                        className='border rounded-lg p-2 bg-white focus-within:outline w-full'
                        required
                        autoFocus />
                    <button type='button' className='absolute right-3 top-2' onClick={() => setTogglePassword(!togglePassword)}>
                        {togglePassword ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                        }
                    </button>

                </div>
                {state?.errors && <span className="text-red-500 text-xs font-semibold   absolute -bottom-[2px] left-0">{state.errors.password}</span>}
            </div>
            <div className='pb-4 mb-4 grid w-full relative'>
                <label htmlFor="password-2">Powtórz nowe hasło:</label>
                <div className='relative'>
                    <input
                        //onChange={onInputChange}
                        id="password-2"
                        name="confirmPassword"
                        type={toggleConfirmation ? 'text' : 'password'}
                        className='border rounded-lg p-2 bg-white focus-within:outline w-full'
                        required />
                    <button type='button' className='absolute right-3 top-2' onClick={() => setToggleConfirmation(!toggleConfirmation)}>
                        {toggleConfirmation ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                        }
                    </button>

                </div>
                {state?.errors && <span className="text-red-500 text-xs font-semibold   absolute -bottom-[2px] left-0">{state.errors?.confirmPassword}</span>}
            </div>
            {state?.success && <span className="text-green-700 text-xs font-semibold ">{state.success}</span>}
            <div className='grid gap-4'>
                <button
                    className='btn-ui h-[42px]'
                    type='submit'
                    disabled={error.confirmation.length > 0 || error.password.length > 0}
                    aria-disabled={error.confirmation.length > 0 || error.password.length > 0}
                >Zapisz nowe hasło</button>

            </div>

        </form>
    )
}