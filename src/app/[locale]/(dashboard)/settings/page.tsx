
import EditIcon from "@/app/icons/EditIcon"
import { createClient } from "@/app/utils/supabase/server"
import { cookies } from 'next/headers';
import ResetPasswordForm from "@/app/componenets/resetPassword/resetForm";
import { SubmitButton } from "@/app/utils/submitButton";
import setNewPassord from "./action";
import PasswordForm from "@/app/componenets/settings/passwordForm";


export default async function SettingsPage() {
    /* const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data } = await supabase.auth.getUser() */
    
    
    return (
        <div className='col-span-6 rounded-xl bg-base-200 px-6 py-4'>
            <div className='w-full'>

                <h3 className='font-semibold text-2xl first-letter:uppercase mb-4'>{'Ustawienia'}</h3>
<div className="grid grid-cols-2 gap-8">
                <div className='card bg-base-100  border max-w-[450px]'>
                    <div className='card-body '>
                        <h2>{'Zmień hasło'}</h2>
                        <PasswordForm setNewPassord={setNewPassord} />
                    </div>
                </div>
                <div className='card bg-base-100  border max-w-[450px]'>
                    <div className='card-body '>
                        <h2>{'Pozostałe'}</h2>
                        
                        <div className="flex gap-4 items-center justify-between mb-4 w-full">
                        <label htmlFor="notifications">{'Włącz powiadomienia email'}</label>
                        <input id="notifications" name="notifications" type="checkbox"></input>
                        </div>
                        <div className="flex gap-4 items-center justify-between mb-4 w-full">
                        <label htmlFor="newsletter">{'Zapisz mnie do newslettera'}</label>
                        <input id="newsletter" name="newsletter" type="checkbox"></input>
                        </div>
                        <button className="btn-ui max-w-max ml-auto">{'Zapisz'}</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}