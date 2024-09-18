import Link from "next/link"
import LogOutBtn from "@/app/componenets/header/logOutBtn"
import AdminNavigation from "@/app/componenets/navigation/adminNavigation"
import { cookies } from 'next/headers'
import { createClient } from '@/app/utils/supabase/server'

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode,
}) {

  const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    
    const{ data: {user}} = await supabase.auth.getUser();
  return (
    <div className='container mx-auto py-12 '>
      <div className='grid md:grid-cols-8 w-full gap-8'>
        <div className=' bg-base-200 rounded-box col-span-2 px-6 py-4 grid'>
            <AdminNavigation />
          <div className='mt-auto text-center pb-4'>
            <LogOutBtn />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}