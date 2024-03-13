import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to={"/"}>
            <img src='/images/logo.png' alt='Nivak' className='w-10 h-10 object-contain'/>
        </NavLink>

        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to={"/about"} className={({isActive})=> isActive ? "text-green-500":"text-black"}>About</NavLink>
            <NavLink to={"/project"} className={({isActive})=> isActive ? "text-green-500":"text-black"}>projects</NavLink>
        </nav>
    </header>
  )
}

export default Navbar
