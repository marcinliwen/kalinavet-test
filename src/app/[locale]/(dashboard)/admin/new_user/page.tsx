import Link from "next/link"

export default function NewUserPage() {
    return (
        <div className='col-span-6 rounded-xl bg-base-200 px-6 py-4'>
            <div className='w-full'>
                <div className="flex justify-between items-center">
                <h3 className='font-semibold text-2xl first-letter:uppercase mb-4'>{'Dodaj nowego Klienta'}</h3>
                <Link href="/admin" className="btn btn-sm btn-primary">{'<- wróć'}</Link>
                </div>
                <p>{`Componenet -> Formularz`}</p>
                <p>Imię</p>
                <p>email</p>
                <p>tymczasowe - hasło</p>
                <button className="btn-ui">Zapisz</button>
            </div>
        </div>
    )
}