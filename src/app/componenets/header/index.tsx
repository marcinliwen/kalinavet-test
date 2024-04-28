import AlertNews from "../alertNews";
import HeaderNav from "./headerNav";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed pb-2 lg:py-0 lg:sticky left-0 right-0  top-0 z-50 bg-blue-500 ">
            <section className='bg-ui-red '>
                <div className='container mx-auto gap-4  items-center py-1 text-white text-sm whitespace-nowrap text-right overflow-auto '>
                    {'Dziś gabinet jest zamknięty, '}<Link href="/#otwarte" className="underline">sprawdź najbliższe godziny otwarcia.</Link>
                    </div>
              
                {/* <div className='container mx-auto flex gap-4 text-white items-center py-1 overflow-auto whitespace-nowrap' dangerouslySetInnerHTML={{ __html: news.html }} >

                </div> */}
            </section>
            <HeaderNav />
        </header>
    )
}
