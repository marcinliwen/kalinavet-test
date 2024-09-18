import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/app/utils/supabase/server'
import Link from 'next/link'

export default async  function AdminPage(){
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

   const{ data: {user}} = await supabase.auth.getUser();

  /*   const { data: user_roles, error } = await supabase
    .from('user_roles')
    .select('role').eq('user_id', user?.id).single()

  const isAdmin = user_roles?.role === 'admin'; */

  //if(!isAdmin){
    //redirect('/')
  //}

  console.log('user', user)
    return(
        <div className='col-span-6 rounded-xl bg-base-200 px-6 py-4'>
            <div className='w-full'>
                <h3 className='font-semibold text-2xl first-letter:uppercase mb-4'>{'Panel Administratora/Lekarza'}</h3>
                <div className="grid grid-cols-2 gap-8">
                    <div className='card bg-base-100  border'>
                        <div className='card-body'>
                            <h4>Dodaj nowego klienta</h4>
                            <Link href="/admin/new_user" className='btn-ui max-w-max'>Ddodaj</Link>
                        </div>
                    </div>
                    <div className='card bg-base-100  border'>
                        <div className='card-body'>
                            <h4>Zaplanowane wizyty</h4>
                        </div>
                    </div>
                    <div className='card bg-base-100  border col-span-2'>
                        <div className='card-body'>
                            <h4>Dokumenty</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}