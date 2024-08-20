import DashboardHeader from "@/app/componenets/header/DashboardHeader";
import { Toaster } from "react-hot-toast";
export default function DashboardLayout({
    children
  }: {
    children: React.ReactNode,
  }){
    return(
        <>
        <DashboardHeader/>
        {children}
        <Toaster/>
        </>
    )
  }