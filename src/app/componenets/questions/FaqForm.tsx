'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom'
import { useTranslations } from 'next-intl';
import { sendQuestionform } from '@/app/[locale]/(main)/pytania/actions';

function SubmitButton() {
    const { pending } = useFormStatus()
    const t = useTranslations('FAQ')
    return (
        <button  className='btn-ui uppercase' type='submit' aria-disabled={pending}>{t('send')}</button>
    )
}
export default function FaqForm(){
    const formRef = React.useRef<HTMLFormElement>(null);
    const t = useTranslations('FAQ')
    const initialState = {message: null, errors:{}, success: null}
    const [state, dispatch] = useFormState(sendQuestionform, initialState);

    return(
        <form ref={formRef} action={ async(formData)=>{
            await dispatch(formData);
            formRef.current?.reset()
        }
            } className=''>
             <div className='mb-4 grid w-full'>
                <label htmlFor="name" >{t('name')}</label>
            <input id="name" name="name" type="text" className='border rounded-lg p-2 bg-white' required></input>
            {state.errors?.name && <p className='text-red-500 py-4 font-semibold text-sm'>{state.errors?.name}</p>}
            </div> 
            <div className='mb-4 grid w-full '>
                <label htmlFor="question" >{t('question')}</label>
            <textarea id="question" name="question"  className='border rounded-lg p-2  bg-white' rows={8} required></textarea>
            {state.errors?.question && <p className='text-red-500 py-4 font-semibold text-sm'>{state.errors?.question}</p>}
            </div>
            <div className='mb-4 grid w-full'>
                <label htmlFor="email" >{t('email')}</label>
            <input id="email" name="email" type="email" className='border rounded-lg p-2  bg-white' required></input>
            {state.errors?.email && <p className='text-red-500 py-4 font-semibold text-sm'>{state.errors?.email}</p>}
            </div>
         <SubmitButton />
            {state.errors && <p className='text-red-500 py-4 font-semibold text-sm'>{state.message}</p>}
           {state?.success && <p className='text-green-500 py-4 font-semibold text-sm'>{state.success}</p>} 
        </form>
    )
}