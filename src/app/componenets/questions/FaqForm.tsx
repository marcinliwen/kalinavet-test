'use client';

import { useFormState } from 'react-dom';
import { postQuestion } from '@/app/services/faqSubmit';
import { useTranslations } from 'next-intl';

export default function FaqForm(){
    const t = useTranslations('FAQ')
    const initialState = {message: null, errors:{}, success: null}
    const [state, dispatch] = useFormState(postQuestion, initialState);
    console.log('state', state)
    return(
        <form action={dispatch} className=''>
             <div className='mb-4 grid w-full'>
                <label htmlFor="name" >{t('name')}</label>
            <input id="name" name="name" type="text" className='border rounded-lg p-2' ></input>
            {state.errors?.name && <p className='text-red-500 py-4 font-semibold text-sm'>{state.errors?.name}</p>}
            </div> 
            <div className='mb-4 grid w-full '>
                <label htmlFor="question" >{t('question')}</label>
            <textarea id="question" name="question"  className='border rounded-lg p-2'></textarea>
            {state.errors?.question && <p className='text-red-500 py-4 font-semibold text-sm'>{state.errors?.question}</p>}
            </div>
            <div className='mb-4 grid w-full'>
                <label htmlFor="email" >{t('email')}</label>
            <input id="email" name="email" type="email" className='border rounded-lg p-2' ></input>
            {state.errors?.email && <p className='text-red-500 py-4 font-semibold text-sm'>{state.errors?.email}</p>}
            </div>
            <button className='btn-ui uppercase' type='submit'>{t('send')}</button>
            {state.errors && <p className='text-red-500 py-4 font-semibold text-sm'>{state.message}</p>}
           {state?.success && <p className='text-green-500 py-4 font-semibold text-sm'>{state.success}</p>} 
        </form>
    )
}