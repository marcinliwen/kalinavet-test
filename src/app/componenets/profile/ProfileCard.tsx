import EditProfileForm from "./EditProfileForm"
import { cookies } from "next/headers"
import { createClient } from "@/app/utils/supabase/server"
import { redirect } from 'next/navigation'

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
export default async function ProfileCard({ userId }: { userId: string | undefined }) {

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

    let profile = person[0]

    return (
        <div className='card bg-base-100  border'>
            <div className='card-body'>
                {/* <div className='flex gap-3 items-start'>
                            <h3 className='font-semibold text-2xl mb-4'>{'Imię Nazwisko'}</h3>
                            <div className="dropdown dropdown-bottom dropdown-end ml-auto">
                                <div tabIndex={0} role="button" className="btn btn-ghost min-h-1 h-8 px-1"><EditIcon /></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-22">
                                    <li><button className='' >Edytuj</button></li>
                                </ul>
                            </div>
                            
                        </div> */}
                <div className='flex gap-3 items-start'>
                    <h3 className='font-semibold text-2xl mb-4'>{profile.name} {profile.surname}</h3>
                    {/* <EditProfileForm  profile={profile}/> */}
                </div>
                <div className='flex-wrap md:flex-nowrap flex gap-3'>
                    <span className='min-w-[130px]'>{'Adres'}:</span> <span className='first-letter:uppercase line font-semibold w-full md:w-auto'>{profile.address}</span>
                </div>
                <div className='flex-wrap md:flex-nowrap flex gap-3'>
                    <span className='min-w-[130px]'>{'Kod pocztowy'}:</span> <span className='line font-semibold w-full md:w-auto'>{profile.post_code}</span>
                </div>
                <div className='flex-wrap md:flex-nowrap flex gap-3'>
                    <span className='min-w-[130px]'>{'Miasto'}:</span> <span className='first-letter:uppercase line font-semibold w-full md:w-auto'>{profile.city}</span>
                </div>
                <div className='flex-wrap md:flex-nowrap flex gap-3'>
                    <span className='min-w-[130px]'>{'Państow'}:</span> <span className='first-letter:uppercase line font-semibold w-full md:w-auto'>{profile.country}</span>
                </div>
                <div className='flex-wrap md:flex-nowrap flex gap-3'>
                    <span className='min-w-[130px]'>{'Telefon'}:</span> <span className=' line font-semibold w-full md:w-auto'>{profile.phone}</span>
                </div>
                <div className='flex-wrap md:flex-nowrap flex gap-3'>
                    <span className='min-w-[130px]'>{'Mail'}:</span> <span className=' line font-semibold w-full md:w-auto'>{profile.email}</span>
                </div>
            </div>
        </div>
    )
}