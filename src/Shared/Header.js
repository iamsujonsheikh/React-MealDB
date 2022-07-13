import React, { useState } from 'react'
import {AiOutlineMenuUnfold,AiOutlineClose} from 'react-icons/ai'
// import { Link } from 'react-router-dom'
import CustomLink from './CustomLink'

const Header = () => {
    const [open, setOpen] = useState(false)

    const handleOpenNav = () => setOpen(!open)

  return (
    <header className='w-full h-16 z-10 bg-slate-600 px-6 flex justify-between items-center'>

        {/* Logo section */}
        <h1 className='font-bold text-purple-400 text-2xl cursor-pointer'>MealDB.</h1>


        {/* Desktop Nav section */}
        <ul className='hidden md:flex space-x-4 text-slate-200 font-semibold'>
            <CustomLink to='/home' className='cursor-pointer hover:text-purple-200 duration-300'>Home</CustomLink>

            <CustomLink to='/about' className='cursor-pointer hover:text-purple-200 duration-300'>About</CustomLink>

            <CustomLink to='/meal' className='cursor-pointer hover:text-purple-200 duration-300'>Meal</CustomLink>
        </ul>


        {/* Mobile Icon section */}
        <div onClick={handleOpenNav} className='text-white md:hidden cursor-pointer'>
            {
                (!open) ? <AiOutlineMenuUnfold size={25}/> : <AiOutlineClose size={25}/>
            }
            

            {/* Mobile Nav section */}

        <ul className={(!open) ? 'hidden' : 'absolute top-16 left-0 w-full px-10 bg-slate-600 flex flex-col text-slate-200 text-center text-xl py-6'}>

            <CustomLink to='/' className='cursor-pointer hover:text-purple-200 duration-300 border-b py-1'>Home</CustomLink>

            <CustomLink to='/about' className='cursor-pointer hover:text-purple-200 duration-300 border-b py-1'>About</CustomLink>

            <CustomLink to='/meal' className='cursor-pointer hover:text-purple-200 duration-300 border-b py-1'>Meal</CustomLink>
        </ul>

        </div>

    </header>
  )
}

export default Header