'use client'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
  return (
    <div>

    <div className=' flex justify-between w-full h-10 p-8 items-center'>
        <div className=' flex items-center gap-3'>
            <Image src={'/images/komalportfolio.jpg'} priority width={40} height={40} alt='My portfolio image ' className='rounded-full'/>
            {/* <h3 className='font-bold'>Komal's Portfolio</h3> */}
        </div>
        <div className='md:hidden'>
        {
            isOpen ?(
                <CloseIcon onClick={()=>{setOpen(false)}}/>
            ):(
                <MenuIcon onClick={()=>{setOpen(true)}}/>
            )
        }
          
        </div>
        {/* large devices  */}
        <div className=' max-md:hidden'>
           <nav className='flex gap-10 text-lg	list-none'>
            <li>Home</li>
            <li>About me </li>
            <li>Projects</li>
            <li>Contact me </li>
            <li>Testimonials</li>
           </nav>
        </div>
    </div>
    {/* </div> */}
  {
      isOpen && (
          <nav className=' flex justify-center  w-full h-full items-center  bg-black  p-10 fixed z-50 '>
          <ol className='flex gap-9 flex-col h-full'>
          <li>Home</li>
          <li>About me </li>
          <li>Projects</li>
          <li>Contact me </li>
          <li>Testimonials</li>
          </ol>
          </nav>
    )
}
    </div>
)}
export default Navbar