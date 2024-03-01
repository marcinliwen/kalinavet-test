import { useState } from "react"
import Navigation from "../navigation"
import RightNav from "../navigation/rightNav"
import Logo from "./logo"
import MenuButton from "./menuButton"
import CloseIcon from "./closeIcon"
import IsLogged from "./isLogged"
import Nav from "./nav"
import LogOutBtn from "./logOutBtn"



export default function Header() {
    
    return (
        <header className="fixed py-2 lg:py-0 lg:sticky left-0 right-0  top-0 z-50 bg-blue-500 ">
            <div className="container mx-auto">
            
            </div>
            <div className="container mx-auto flex justify-between">
                <Logo />
                <Nav />
                <IsLogged/>
                
            </div>
        </header>
    )
}
