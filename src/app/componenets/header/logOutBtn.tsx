import { logout } from "@/app/services/logout"

export default function LogOutBtn(){
    return(
        <form>
                    <button formAction={logout} className='btn btn-neutral'>Log out</button>
                </form>
    )
}