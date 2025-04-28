import React from 'react'

function Navbar() {
  return (
    <>
    <nav>
        <a href="">
            <Image src={assets.th} className='w-28 cursor-pointer mr-14' />
        </a>
        <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#work">My Work</a></li>
            <li><a href="#contact">Contact me</a></li>
        </ul>
        <div>
            <a href="#contact">Contact<Image src={assets.logo}className='w-3'/> </a>
        </div>
    </nav>
    </>
  )
}

export default Navbar