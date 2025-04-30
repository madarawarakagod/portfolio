import {assets} from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


function Navbar() {
  return (
    <>
 
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
      <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href="#top">
            <Image src={assets.logo} className='w-35 cursor-pointer mr-14' alt="" />
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-serif'>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#work">My Work</a></li>
            <li><a href="#contact">Contact me</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon}alt=' ' className='w-6'/>
          </button>

                   <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-grey-500 rounded-full ml-4'>
                    Contact<Image src={assets.arrow_icon} alt="" className='w-3'/> </a>

                    <button className='block md:hidden ml-3'>
                      <Image src={assets.menu_black} alt='' className='w-6'/>

                    </button>

        </div>

        {/*mobile menu*/}
        <ul className='flex md:hidden flex-col gap-4 py-20
         px-10 fixed-right-0 top-0 bottom-0 w-64 z-50 h-screen
          bg-rose-50 transsition duration-500'>
   
        
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#work">My Work</a></li>
            <li><a href="#contact">Contact me</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar