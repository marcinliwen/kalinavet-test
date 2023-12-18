
'use client' 
import React from "react";



export default function AnkietaPopup() {


    const [showPopup, setPopup] = React.useState<boolean>(false);
    const [show, setShow]  = React.useState<boolean>(false);
    

    const popupHandler = () =>{
        document.body.classList.add('overflow-hidden')
    }

    const closeHandler = () =>{
        document.body.classList.remove('overflow-hidden')
    }

    React.useEffect(()=>{
        setTimeout(()=>{
            setShow(true);
        }, 2000)
    }, [])
    return (
        <>

            <div className={`${show? " -translate-y-2/4" : "translate-y-[-1000px]"} w-[90%] max-w-[600px] mx-auto rounded-md shadow-xl p-12 my-12 fixed top-1/2 left-1/2 -translate-x-1/2 z-50 bg-white duration-700 transition-all`}>
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full flex justify-center items-center shadow-md hover:shadow-xl active:shadow-md duration-300  ease" onClick={() => {setShow(false), closeHandler()}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
                <h2>Już niebawem pojawią się pierwsze artykuły w sekcji Blog</h2>
                <p className="mb-8">Zapraszamy Państwa do wypełnienia anonimowej ankiety, pomoże to nam lepiej dobrać tematy artykułów.</p>
            <button className="btn-ui mx-auto block" onClick={() => {setPopup(true), setShow(false), popupHandler() }}>Wypełnij Ankietę</button>
            </div>
            
            <div onClick={() => {setPopup(!showPopup), closeHandler()}} className={`${showPopup ? 'opacity-1 visible z-50' : 'opacity-0 hidden'} fixed inset-0 overflow-auto  flex justify-center pt-16 md:pt-32 md:pb-16 bg-white`}>
                <button className="absolute md:fixed z-50 top-4 right-4 bg-white md:top-12 cursor-pointer lg:right-32 w-12 h-12 rounded-full flex justify-center items-center shadow-md hover:shadow-xl active:shadow-md duration-300  ease" onClick={() => {console.log('close popup'), setPopup(false)}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
                <iframe className='mx-auto relative z-10 h-[1600px] md:h-[1400px]' src="https://docs.google.com/forms/d/e/1FAIpQLSfEyv1gernaZxtRT0aBIi1rBkPo-5h_pj6ODhjAn3R8QwhkZg/viewform?embedded=true" width="640" height="1378"  >Ładuję…</iframe>
            </div>
        </>
    )
}