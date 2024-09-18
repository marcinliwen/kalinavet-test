
import { cookies } from 'next/headers'
import Link from 'next/link'
import { createClient } from '@/app/utils/supabase/server'
import LogOutBtn from './logOutBtn'
import { getTranslations } from 'next-intl/server';
import UserLink from './UserLink';

export default async function IsLogged() {
  const t = await getTranslations('Dashboard')
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data, error } = await supabase.auth.getUser();

  console.log('isLogged', data)
  if (error || !data?.user) {
    return (
      <div className='flex gap-2 items-center'><div>Nie jesteś zalogowany</div><Link href="/login" className='btn-ui'>Log in</Link></div>
    )
  }
  
  return (
    <div className='flex gap-2 items-center ml-auto'>
      <div className='relative group p-4 text-black'>
        <button className=''>User</button>
        <dialog className='absolute min-w-max block shadow-lg text-center top-full left-auto right-0 rounded-2xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 ease-in-out'>
          <div className=' p-4 rounded-t-2xl'>{t('login')}</div>
          <div className='p-4 grid gap-4'>
            <UserLink user_role={data.user.app_metadata.role}/>
         {/*  <Link href="/dashboard" className='hover:underline duration-300 decoration-gray-400 underline-offset-4 relative'>{t('dashboard')}</Link> */}
          <LogOutBtn />
          </div>
        </dialog>
      </div>

    </div>
  )
}