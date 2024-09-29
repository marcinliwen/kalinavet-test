import { cookies } from "next/headers"
import { createClient } from "@/app/utils/supabase/server"
import { redirect } from 'next/navigation'
import ProfileForm from "../profile/ProfileForm"
import Link from "next/link"

type Person = {
    name: string,
    surname: string,
    address: string,
    post_code: string,
    city: string,
    country: string,
    phone: string,
    email: string
}

type ProfileData = {
    person: Person,
    error: any,
}
export default async function EditProfileCard({ userId }: { userId: string | undefined }) {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    let { data: person, error} = await supabase
        .from('person').select("*").eq('id', userId)

    if (error) {
        redirect('/error')
    }

    if (!person) {
        redirect('/error')
    }
    //console.log('person', person[0])

    const [ profile ] = person;//destructuring array
    //let profile = person[0]

    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
            <h3 className='font-semibold text-2xl mb-4'>{'Edytuj swoje dane'}</h3> 
            <Link className="btn btn-ghost btn-sm" href="/profile">{"<- Anuluj"}</Link>
            </div>
        <div className='card bg-base-100  border '>
            <div className='card-body'>
              
                    <ProfileForm profile={profile}/>
                
            </div>
        </div>
        </div>
    )
}