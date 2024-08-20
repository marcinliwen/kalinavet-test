import Link from "next/link"
import LogOutBtn from "@/app/componenets/header/logOutBtn"
import DashboardNavigation from "@/app/componenets/navigation/dashboardNavigation"
export default function DashboardLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <div className='container mx-auto py-12 '>
      <div className='grid md:grid-cols-8 w-full gap-8'>
        <div className=' bg-base-200 rounded-box col-span-2 px-6 py-4 grid'>
          <DashboardNavigation />
          <div className='mt-auto text-center pb-4'>
            <LogOutBtn />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}