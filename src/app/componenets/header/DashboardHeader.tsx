import IsLogged from "./isLogged"
import LocaleSwitcher from "../localeSwitcher"
import LogoRed from "@/app/icons/LogoRed"
import Link from "next/link"
import LogOutBtn from "./logOutBtn"

export default function DashboardHeader() {

    return (
        <header className="fixed py-2  lg:sticky left-0 right-0  top-0 z-50 bg-blue-500 dark:bg-base-200 ">
            <div className="container mx-auto flex justify-between items-center">
                <div className="max-w-[80px]">
                    <Link href='/'  >
                        <LogoRed />
                    </Link>
                </div>
               
                <LocaleSwitcher />
            </div>
        </header>
    )
}
