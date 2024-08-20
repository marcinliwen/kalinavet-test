
'use client'

import { useRef } from "react";


import Link from "next/link";
import EditIcon from "@/app/icons/EditIcon"
import ProfileForm from "./ProfileForm";

type Person = {
    name: string,
    surname: string,
    address: string,
    post_code: string,
    city: string,
    country: string,
    phone: string,
    email: string,
    id: string
}

export default function EditProfileForm({profile}:{profile:Person}) {


    const myModal = useRef<HTMLDialogElement>(null);

    return (  
        <>
    
        <div className="dropdown dropdown-bottom dropdown-end ml-auto">
            <div tabIndex={0} role="button" className="btn btn-ghost min-h-1 h-8 px-1"><EditIcon /></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-22">
                {/* <li><button className='' onClick={() => { myModal.current?.showModal() }}>Edytuj</button></li> */}
                <li><Link href="/edit-profile">Edytuj</Link></li>

            </ul>
        </div>
    {/*     <dialog ref={myModal} id={`my_modal_1`} className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h2 className="text-center mb-1">Edytujesz dane właściciela </h2>
                        <hr className="mb-10 opacity-60" />
                       
                    <ProfileForm
                        profile={profile} 
                        closeModal={() => {
                                console.log('about click')
                            }}
                            />
                    </div>
                </dialog> */}
                </>
    )
}