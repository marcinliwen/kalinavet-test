import Link from "next/link"
export default function DashboardNavigation(){
    return(
        <nav>
             <ul className='menu  text-center'>
                  <li className='text-center'>
                      <Link href={'/dashboard'}>Zwierzęta</Link>
                  </li>
                  <li>
                      <Link href={'/gabinet'}> Gabinet</Link>
                  </li>
                  <li>
                      <Link href={'/profile'}>Profil</Link>
                  </li>
                  <li>
                      <Link href={'/settings'}>Ustawienia</Link>
                  </li>
              </ul>
        </nav>
    )
}