import React from 'react'
import Image from "./image.jpg";
import "./Banner.css"

function Banner () {
  return (
    <>
    
  {/*  <div className="banner-head
  ">
    <div 
    className="
    bg-gray-900
    bg-opacity-40
    text-white
    text-2xl
    font-bold
    py-10
    bg-opacity-40
    text-center">
    M3GAN
    </div>
    </div>
  */}
  <div className='bg-banner h-[40vh] 
    bg-center bg-cover flex items-end'></div>
    <div className='text-xl text-white 
    bg-grey-900 p-6 
    text-center
    w-full
    '>
    M3GAN</div>
    </>
  )
}

export default  Banner;
