import Link from "next/link"
import NavLink from "./navLink"
export default function AdminNavigation(){

    return(
        <nav>
             <ul className='menu text-center'>
             <li className='text-center mb-2'>
                    <NavLink title={"Panel"} urlName="admin"/>
                  </li>
                  <li className='text-center mb-2'>
                    <NavLink title={"Klienci"} urlName="admin/users"/>
                  </li>
                  <li className="mb-2">
                  <NavLink title={"Godziny otwarcia"} urlName="admin"/>
                     
                  </li>
                 
                  <li className="mb-2">
                  <NavLink title={"Ustawienia"} urlName="admin"/>
                  </li>
              </ul>
        </nav>
    )
}