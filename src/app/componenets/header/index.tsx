import AlertNews from "../alertNews";
import HeaderNav from "./headerNav";

export default function Header() {
    return (
        <header className="fixed pb-2 lg:py-0 lg:sticky left-0 right-0  top-0 z-50 bg-blue-500 ">
            <AlertNews />
            <HeaderNav />
        </header>
    )
}
