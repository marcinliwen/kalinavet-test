import { login, signup, logout } from './actions'

export default function LoginPage() {
  return (
    <section className='py-20'>
    <div className="container">
    <form className='max-w-[430px]'>
         <div className='mb-4 grid w-full'>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" className='border rounded-lg p-2' required />
      </div>
      <div className='mb-4 grid w-full'>
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" className='border rounded-lg p-2' required />
      </div>
      <div className='grid gap-4'>
      <button formAction={login} className='btn-ui'>Log in</button>
      <button formAction={signup} className='btn-ui'>Sign up</button>
      </div>
      
    </form>

    <div className='py-12'>
        <form>
        <button formAction={logout} className='btn-ui'>Log out</button>
        </form>
    </div>
    </div>
    </section>
  )
}