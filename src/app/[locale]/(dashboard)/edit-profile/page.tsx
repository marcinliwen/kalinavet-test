
import EditProfileCard from "@/app/componenets/editProfile/editProfileCard";
import EditProfileForm from "@/app/componenets/profile/EditProfileForm"
import ProfileCard from "@/app/componenets/profile/ProfileCard";
import EditIcon from "@/app/icons/EditIcon"
import { createClient } from "@/app/utils/supabase/server"
import { cookies } from 'next/headers';


export default async function EditProfile() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: { user } } = await supabase.auth.getUser()


    return (
        <div className='md:col-span-6 w-full rounded-xl bg-base-200 px-6 py-4'>    
                <EditProfileCard userId={user?.id} />
        </div>
    )
}