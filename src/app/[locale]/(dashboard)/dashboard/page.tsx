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
    redirect('/')
  }

  return(
  <main className=''>
  <MyPet />
  <ProfileData />
  <MyPetForm />
  </main>
)
}