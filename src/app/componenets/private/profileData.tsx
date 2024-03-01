import { createClient } from '@/app/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function ProfileData() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase
        .from('profile')
        .select(
            `   profile_id, 
                profile_name, 
                profile_surname, 
                phone,
                email, 
                user_pet (
                    owner, 
                    pet_name
                    )
            `
        )
    if (error) {
        return;
    }
    console.log('data.profile', data)
    return (
        <>
        </>
    )
}