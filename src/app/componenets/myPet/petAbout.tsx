'use client'
import { useTranslations } from "next-intl";
import { useRef } from "react";
import PetEdit from "./petEdit";
import EditIcon from "@/app/icons/EditIcon";
import { deletePet } from "@/app/[locale]/(dashboard)/dashboard/actions";
type Pet = {
    birth_date: string | null;
    gender: string | null;
    id: number;
    owner: string | null;
    pet_name: string | null;
    race: string | null;
    species: string | null;
};
export default function PetAbout({ pet }: { pet: Pet }) {

    const t = useTranslations('PetForm')
    const myModal = useRef<HTMLDialogElement>(null);
    const deleteModal = useRef<HTMLDialogElement>(null);
    return (
        <>
            <div className='card bg-base-100  border'>
                <div className='card-body'>

                    <div className='flex gap-3 items-start'>
                        <h3 className='font-semibold text-2xl first-letter:uppercase mb-4'>{pet.pet_name}</h3>
                        <div className="dropdown dropdown-bottom dropdown-end ml-auto">
                            <div tabIndex={0} role="button" className="btn btn-ghost min-h-1 h-8 px-1"><EditIcon /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-22">
                                <li><a className='' onClick={() => { myModal.current?.showModal() }}>Edytuj</a></li>
                                <li><a onClick={() => { deleteModal.current?.showModal() }} >Usuń</a></li>
                            </ul>
                        </div>
                        {/*  <button className='ml-auto btn btn-sm' onClick={() => {myModal.current?.showModal()}}>Edytuj</button> */}
                        <dialog ref={myModal} id={`my_modal_${pet.id}`} className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h2 className="text-center mb-1">Edytujesz dane </h2>
                                <hr className="mb-10 opacity-60" />
                                <PetEdit petId={pet.id} />
                            </div>
                        </dialog>
                        <dialog ref={deleteModal} className="modal">
                            <div className="modal-box ">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h2 className="text-center mt-4 mb-8">{`Czy na pewno chcesz usunąć`} <strong>{pet.pet_name}</strong> z panelu?</h2>
                                <div className="flex items-center justify-center gap-4">
                                    <form method="dialog">
                                        <button type="submit" className="btn btn-neutral text-center" >Anuluj</button>
                                    </form>

                                    <button type="button" className="btn  text-center" onClick={() => deletePet(pet.id)}>Usuń</button>
                                </div>

                            </div>
                        </dialog>
                    </div>
                    <div className='flex gap-3'>
                        <span className='min-w-[130px]'>{t('race')}:</span> <span className='first-letter:uppercase line font-semibold'>{pet.species}</span>
                    </div>
                    <div className='flex gap-3'>
                        <span className='min-w-[130px]'>{t('species')}:</span> <span className='first-letter:uppercase line font-semibold'>{pet.race}</span>
                    </div>
                    <div className='flex gap-3'>
                        <span className='min-w-[130px]'>{t('gender')}:</span> <span className='first-letter:uppercase line font-semibold'>{pet.gender}</span>
                    </div>
                    <div className='flex gap-3'>
                        <span className='min-w-[130px]'>{t('birth_date')}:</span> <span className='first-letter:uppercase line font-semibold'>{pet.birth_date}</span>
                    </div>


                </div>

            </div>
        </>
    )
}