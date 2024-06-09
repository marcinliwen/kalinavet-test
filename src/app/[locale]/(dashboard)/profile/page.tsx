
import EditIcon from "@/app/icons/EditIcon"

export default function ProfilePage() {
    return (
        <div className='col-span-10 rounded-xl bg-base-200 px-6 py-4'>
            <div className='w-full'>

                <h3 className='font-semibold text-2xl first-letter:uppercase mb-4'>{'Profil'}</h3>

                <div className='card bg-base-100  border'>
                    <div className='card-body'>
                        <div className='flex gap-3 items-start'>
                            <h3 className='font-semibold text-2xl mb-4'>{'Name Surname '}</h3>
                            <div className="dropdown dropdown-bottom dropdown-end ml-auto">
                                <div tabIndex={0} role="button" className="btn btn-ghost min-h-1 h-8 px-1"><EditIcon /></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-22">
                                    <li><a className='' >Edytuj</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <span className='min-w-[130px]'>{'Adres'}:</span> <span className='first-letter:uppercase line font-semibold'>{'adres'}</span>
                        </div>
                        <div className='flex gap-3'>
                            <span className='min-w-[130px]'>{'Kod pocztowy'}:</span> <span className='first-letter:uppercase line font-semibold'>{'miasto'}</span>
                        </div>
                        <div className='flex gap-3'>
                            <span className='min-w-[130px]'>{'mail'}:</span> <span className='first-letter:uppercase line font-semibold'>{'mail@mail.com'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}