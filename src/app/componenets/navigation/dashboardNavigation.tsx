import Link from "next/link"
import NavLink from "./navLink"
export default function DashboardNavigation(){

    return(
        <nav>
             <ul className='menu text-center'>
                  <li className='text-center mb-2'>
                    <NavLink title={"Dashboard"} urlName="dashboard"/>
                  </li>
                  <li className='text-center mb-2'>
                    <NavLink title={"Moje zwierzęta"} urlName="zwierzenta"/>
                  </li>
                  <li className="mb-2">
                  <NavLink title={"Gabinet"} urlName="gabinet"/>
                     
                  </li>
                  <li className="mb-2">
                  <NavLink title={"Profil"} urlName="profile"/>
                  </li>
                  <li className="mb-2">
                  <NavLink title={"Ustawienia"} urlName="settings"/>
                  </li>
              </ul>
        </nav>
    )
}