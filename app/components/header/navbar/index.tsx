

import Link from "next/link"
import { useEffect, useRef } from "react";

interface Props {
    navOpen: boolean
}
const Navbar = ({navOpen}: Props) => {
    const lastActiveLink = useRef()
    const activeBox = useRef()

    const initActiveBox = () => {
        activeBox.current.style.top = event.target.offsetTop + 'px'
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px'
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px'
        activeBox.current.style.heigth = lastActiveLink.current.offsetHeigth + 'px'
    }

    useEffect(initActiveBox,[] )
    window.addEventListener('resize', initActiveBox)
    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active')
        event.target.classList.add('active')
        lastActiveLink.current = event.target

        activeBox.current.style.top = event.target.offsetTop + 'px'
        activeBox.current.style.left = event.target.offsetLeft + 'px'
        activeBox.current.style.width = event.target.offsetWidth + 'px'
        activeBox.current.style.heigth = event.target.offsetHeigth + 'px'

    }
    const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Reviews',
      link: '#reviews',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden'
    }
  ];
  return (
   <nav className={'navbar' + (navOpen ? 'active' : '') }>
    {
        navItems.map(({className,label,link, ref},key) => (
            <Link key={key} href={link} className={className} ref={ref} onClick={activeCurrentLink}>
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
