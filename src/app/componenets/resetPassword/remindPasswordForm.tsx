"use client"
import { z } from "zod";
import { useFormState, useFormStatus } from "react-dom";
import { resetPassword } from "@/app/[locale]/(dashboard)/password/actions";

export default function RemindPasswordForm() {

    const [state, formAction] = useFormState( resetPassword, {error: ""})
    return (
        <form action={formAction} className='w-full'>
            <h2 className='text-center text-xl font-semibold mb-2'>Przypomnij Hasło</h2>
            <p className='text-center mb-8'>Wpisz adres mailowy, na który rejestrowałeś się w panelu.</p>
            {state && typeof state.error === 'string' && (<div className="text-red-500 text-xs text-center font-semibold mt-5">{state.error}</div>)}
            <div className='grid w-full relative mb-8'>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" className='border rounded-lg p-2 bg-white focus-within:outline' required autoFocus autoComplete="email" />
                {state?.error && typeof state.error === 'object' && (<span className="text-red-500 text-xs absolute -bottom-4 font-semibold pl-2" >{state.error.email}</span>)}
            </div>
            <Submit />
        </form>
    )
}


function Submit() {
    // ✅ `pending` will be derived from the form that wraps the Submit component
    const { pending } = useFormStatus();
    return <button
        type='submit'
        className='btn-ui h-[42px] disabled:bg-ui-red disabled:text-white flex justify-center items-center w-full'
        disabled={pending}
    >
        {pending && <svg className="animate-spin h-5 w-5 mr-3" fill='#e22a18' viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>} {"Przypomnij"}</button>;
}