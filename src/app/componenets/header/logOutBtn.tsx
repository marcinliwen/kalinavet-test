import { logout } from "@/app/services/logout"

export default function LogOutBtn(){
    return(
        <form>
            <button formAction={logout} className='btn btn-outline'>Log out</button>
        </form>
    )
}