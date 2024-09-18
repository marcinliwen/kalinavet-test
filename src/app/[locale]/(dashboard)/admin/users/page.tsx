'use server'
import { createClient } from '@/app/utils/supabase/server'
import { cookies } from 'next/headers';
import Link from 'next/link';


export default async function AdminUsersList() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
  
const { data, error }  = await supabase.rpc('get_persons_and_pets')
//const  {data, error} = await supabase.from('person').select('name,  pets ( name )')

  console.log('person custom 2' , data, error)
  
 
    return (
        <div className='col-span-6 rounded-xl bg-base-200 px-6 py-4'>
            <div className='w-full'>
                <h3 className='font-semibold text-2xl first-letter:uppercase mb-4'>{'Lista Klientów'}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-sm  bg-base-100 ">
                        <thead>
                            <tr>
                                <th className="px-6">{'Nr'}</th>
                                <th className="px-6">{'Imię Zwierzęcia'}</th>
                                <th className="px-6">{'Gatunek'}</th>
                                <th className="px-6">{'Właściciel'}</th>
                                <th className="px-6">{'E-mail'}</th>
                                <th className="px-6">{'Tel'}</th>
                               
                                
                                <th className="px-6"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {data && data.map((item, index) => {
                                return (
                                    <tr key={item.person_id}>
                                        <td className="px-6">{index + 1}</td>
                                        <td className="px-6">{item.pets_name ? item.pets_name : '---'}</td>
                                        <td className="px-6">{item.pets_species ? item.pets_species : '---'}</td>
                                        <td className="px-6">{item.person_name ?`${item.person_name} ${item.person_surname}`: '---' }</td>
                                        <td className="px-6">{item.person_email ? item.person_email : '---'}</td>
                                        <td className="px-6">{item.person_phone ? item.person_phone : '---'}</td>
                                      
                                        <td className="px-6"><Link href="/admin/users" className="btn btn-sm btn-primary">{'Edytuj ->'}</Link></td>
                                    </tr>
                                )
                            })} 
 
                        </tbody>
                    </table>
                </div>
                {/* <div className="grid gap-8">
                    <div className='card bg-base-100  border'>
                        <div className='card-body'>
                           
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}