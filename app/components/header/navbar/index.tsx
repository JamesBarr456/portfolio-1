import { navItems } from "@/app/data/navbar-links"
import Link from "next/link"

const Navbar = () => {
  return (
   <nav className="">
    {
        navItems.map(({className,label,link},key) => (
            <Link key={key} href={link} className={className}>
                {label}
            </Link>
        ) )
    }
    <div className="active-box" ref={activeBox}
    ></div>
   </nav>
  )
}

export default Navbar
