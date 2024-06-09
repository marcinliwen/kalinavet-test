import DashboardHeader from "@/app/componenets/header/DashboardHeader";

export default function DashboardLayout({
    children
  }: {
    children: React.ReactNode,
  }){
    return(
        <>
        <DashboardHeader/>
        {children}
        </>
    )
  }