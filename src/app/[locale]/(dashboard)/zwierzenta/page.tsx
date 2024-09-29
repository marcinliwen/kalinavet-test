import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/app/utils/supabase/server'
import ProfileData from '@/app/componenets/private/profileData'
import MyPet from '@/app/componenets/myPet/myPet'
import MyPetForm from '@/app/componenets/myPet/myPetForm'

export default async function PrivatePage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    //redirect('/')
    return;
  }

  return(
  
    <div className='col-span-6 rounded-xl bg-base-200 px-6 py-4'>
            <div className='w-full'>
            <h3 className='font-semibold text-2xl first-letter:uppercase mb-4'>{"Moje zwierzęta"}</h3>
                </div>
                </div>
  
)
}