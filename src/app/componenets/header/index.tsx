import LocaleSwitcher from "../localeSwitcher"
import Navigation from "../navigation"
import RightNav from "../navigation/rightNav"
import Logo from "./logo"

export default function Header() {
    return (
        <header className="absolute left-0 right-0  top-0 z-50 lg:bg-blue-500 pt-6">
            <div className="container mx-auto flex justify-between">
                <Logo />
                <Navigation />
                <RightNav />
            </div>
        </header>
    )
}
