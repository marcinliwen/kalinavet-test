import Link from "next/link"
import Image from "next/image"
import DogHero2 from "@/../public/dog-hero-2.png"


export default function ErrorPage() {
    return  <section className='grid grid-cols-1 md:grid-cols-2 h-screen bg-blue-500 text-black ' >
    <div className='h-full hidden md:block relative'>
      <Image
        alt="hero"
        src={DogHero2}
        sizes=""
        priority={true}
        className='absolute h-full object-contain scale-x-[-1]'
      />
    </div>
    <div className="container flex flex-col justify-center">
      <h1 className="logo-text-ui max-w-max">404</h1>
      <p className="text-ui-red text-4xl font-semibold">Ups! Coś poszło nie tak...</p>

      <Link href="/" className='btn-ui h-[42px] flex items-center text-center justify-center  mt-12 max-w-[240px]'>Wróć na stronę główną</Link>
    </div>
  </section>
  }