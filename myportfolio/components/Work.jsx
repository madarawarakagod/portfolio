import { workData,assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Work = () => {
  return (
   

<div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>my portfolio</h4>
        <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I am Full-Stack developer from Sri Lanka,and Undergratuated Student in University of Jaffna.</p>

            <div className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
              {workData.map((project,index)=>(
                <div key={index} 

                   className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group
                  'style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex
                     items-center justify-between duration-500 group-hover:bottom-7'>
                      <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                  </div>

                <div>
                <Image src={assets.send_icon} alt='send_icon' className='w-5'/>
                </div>
                </div>
            </div>
              ))}
           </div> 
    </div>
  )
}

export default Work

