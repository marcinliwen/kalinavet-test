'use client'
import { useState } from "react"
import Navigation from "../navigation"
import RightNav from "../navigation/rightNav"
import MenuButton from "./menuButton"
import CloseIcon from "./closeIcon"
import IsLogged from "./isLogged"

export default function Nav(){
    const [isOpen, setOpen] = useState(false)
    return(
        <>
        <div className={`flex flex-col lg:flex-row justify-center lg:justify-between w-full main-nav bg-blue-500 lg:bg-transparent ${isOpen ? 'is-open' :''}`}>
                    <button onClick={()=>{setOpen(false)}} className="lg:hidden ml-auto absolute top-4 right-4 p-4 text-black"><CloseIcon /></button>
                <Navigation onClick={()=>{setOpen(false)}}/>
                <RightNav />
                </div>                
                <button onClick={()=>{console.log('click'), setOpen(true)}} className="lg:hidden text-black"><MenuButton /></button></>
    )
}