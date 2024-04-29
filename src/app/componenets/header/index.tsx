import AlertNews from "../alertNews";
import HeaderNav from "./headerNav";
import Link from "next/link";
import { useTranslations } from "next-intl";
import BannerInfo from "./bannerInfo";
export default function Header() {
    const t = useTranslations('AlertNews')
    return (
        <header className="fixed pb-2 lg:py-0 lg:sticky left-0 right-0  top-0 z-50 bg-blue-500 ">
            <section className='bg-ui-red '>
                <BannerInfo />
            </section>
            <HeaderNav />
        </header>
    )
}
