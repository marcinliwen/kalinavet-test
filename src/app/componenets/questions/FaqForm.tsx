'use client';

import { useFormState } from 'react-dom';
import { PostQuestion } from '@/app/services/faqSubmit';

export default function FaqForm(){
    const initialState = {message: null, errors:{}, success: null}
    const [state, dispatch] = useFormState(PostQuestion, initialState);
    return(
        <form action={dispatch} className=''>
             <div className='mb-4 grid w-full'>
                <label htmlFor="name" >Imię</label>
            <input id="name" name="name" type="text" className='border rounded-lg p-2' ></input>

            </div> 
            <div className='mb-4 grid w-full '>
                <label htmlFor="question" >Zadaj Pytanie</label>
            <textarea id="question" name="question"  className='border rounded-lg p-2'></textarea>

            </div>
            <div className='mb-4 grid w-full'>
                <label htmlFor="email" >E-mail</label>
            <input id="email" name="email" type="email" className='border rounded-lg p-2' ></input>

            </div>
            <button className='btn-ui uppercase' type='submit'>wyślij wiadomość</button>
            {state?.success && <p className='text-green-500 py-4 font-semibold'>{state.success}</p>}
        </form>
    )
}