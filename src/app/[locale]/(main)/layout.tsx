import Footer from "@/app/componenets/footer";
import Header from "@/app/componenets/header";

export default function MainLayout({
    children
  }: {
    children: React.ReactNode,
  }){
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
  }