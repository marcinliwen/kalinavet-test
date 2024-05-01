import AlertNews from "../alertNews";
import HeaderNav from "./headerNav";
import Link from "next/link";
import { useTranslations } from "next-intl";
import BannerInfo from "./bannerInfo";
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
    const t = useTranslations('AlertNews')
    
    return (
        <header className="fixed pb-2 lg:py-0 lg:sticky left-0 right-0  top-0 z-50 bg-blue-500 ">
            <section className='bg-ui-red '>
                <BannerInfo />
            </section>
            <HeaderNav />
        <header className="fixed py-2 lg:py-0 lg:sticky left-0 right-0  top-0 z-50 bg-blue-500 ">
            <div className="container mx-auto">
            
            </div>
            <div className="container mx-auto flex ">
                <Logo />
                <div className=" w-full flex items-center lg:flex-row-reverse">
                <IsLogged/>
                <Nav />
                </div>
               
            </div>
        </header>
    )
}
