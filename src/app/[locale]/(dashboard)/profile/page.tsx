
import EditProfileForm from "@/app/componenets/profile/EditProfileForm"
import ProfileCard from "@/app/componenets/profile/ProfileCard";
import EditIcon from "@/app/icons/EditIcon"
import { createClient } from "@/app/utils/supabase/server"
import { cookies } from 'next/headers';
import Link from "next/link";

export default async function ProfilePage() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: { user }, error } = await supabase.auth.getUser()

    return (
        <div className='md:col-span-6 rounded-xl bg-base-200 px-6 py-4'>
            <div className='w-full'>
                <div className="flex justify-between items-center">
                <h3 className='font-semibold text-2xl first-letter:uppercase mb-4'>{'Profil'}</h3>
                <Link className="btn btn-ghost btn-sm" href="/edit-profile">{'Edytuj ->'}</Link>
                </div>
                <ProfileCard userId={user?.id} /> 
            </div>
        </div>
    )
}