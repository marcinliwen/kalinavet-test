
import EditIcon from "@/app/icons/EditIcon"

export default function GabinetPage() {
    return (
        <div className='col-span-6 rounded-xl bg-base-200 px-6 py-4'>
            <div className='w-full'>

                <h3 className='font-semibold text-2xl first-letter:uppercase mb-4'>{'Informacje o gabinecie'}</h3>

                <div className="grid grid-cols-2 gap-8">
                    <div className='card bg-base-100  border'>
                        <div className='card-body'>
                            <h4>Godziny otwarcia</h4>
                        </div>
                    </div>
                    <div className='card bg-base-100  border'>
                        <div className='card-body'>
                            <h4>Nasze usługi</h4>
                        </div>
                    </div>
                    <div className='card bg-base-100  border col-span-2'>
                        <div className='card-body'>
                            <h4>Kadra</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}