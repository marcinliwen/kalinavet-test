'use client'

import { useState } from "react"
import Navigation from "../navigation"
import RightNav from "../navigation/rightNav"
import Logo from "./logo"
import MenuButton from "./menuButton"
import CloseIcon from "./closeIcon"



export default function Header() {
    const [isOpen, setOpen] = useState(false)
    return (
        <header className="fixed py-2 lg:py-0 lg:sticky left-0 right-0  top-0 z-50 bg-blue-500 ">
            <div className="container mx-auto flex justify-between">
                <Logo />
                <div className={`flex flex-col lg:flex-row justify-center lg:justify-between w-full main-nav bg-blue-500 lg:bg-transparent ${isOpen ? 'is-open' :''}`}>
                    <button onClick={()=>{setOpen(false)}} className="lg:hidden ml-auto absolute top-4 right-4 p-4"><CloseIcon /></button>
                <Navigation onClick={()=>{setOpen(false)}}/>
                <RightNav />
                </div>
                
                <button onClick={()=>{console.log('click'), setOpen(true)}} className="lg:hidden"><MenuButton /></button>
            </div>
        </header>
    )
}
