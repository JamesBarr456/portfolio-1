
/**
 * 
 * Librerias u otros
 */

import Image from "next/image"
import Link from "next/link"

/**
 * 
 * Components
 */
import Navbar from "./navbar"

export const Header = () => {
  return (
   <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
    <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr,3fr,1fr] ">
        <h1>
            <Link href={"/"} className="logo">
                <Image 
                alt="logo"
                src={"/images/logo.svg"}
                width={40}
                height={40}/>
            </Link>
        </h1>

        <div className="relative md:justify-self-center">
            <button className="menu-btn md:hidden" >
                <span className="material-symbols-rounded ">
                    {/* agregar icono de menu */}
                    menu
                </span>
            </button>
            <Navbar/>
        </div>

        <Link href={"#contact"} 
        className="">
            Contact Me
        </Link>
    </div>


   </header>
  )
}


