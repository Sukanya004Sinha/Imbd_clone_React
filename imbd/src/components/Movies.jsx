import React from 'react'
import Image from "./image.jpg";

function Movies() {
  return (
    <div className="-mt-8">
    <div className="mb-8 font-bold text-2xl text-center">
    Trending Movies</div>
    <div className="flex 
    flex-wrap 
     justify-center">
  
     <div className='
     bg-[url(https://image.tmdb.org/t/p/original//dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg)]
     w-[160px]
    h-[30vh]
    m-4
    rounded-xl
    hover:scale-110
    duration-300 border-4'></div>
    <img src={Image} className='w-[160px]
    h-[30vh] m-4 
    rounded-xl
    hover:scale-110
    duration-300
    ' alt="" />
    <img src={Image} className='w-[160px]
    h-[30vh] m-4 
    rounded-xl
    hover:scale-110
    duration-300
    ' alt="" />
    <img src={Image} className='w-[160px]
    h-[30vh] m-4
    rounded-xl
    hover:scale-110
    duration-300
    ' alt="" />
    <img src={Image} className='w-[160px]
    h-[30vh] m-4 
    rounded-xl
    hover:scale-110
    duration-300
    ' alt="" />
    <img src={Image} className='w-[160px]
    h-[30vh] m-4 
    rounded-xl
    hover:scale-110
    duration-300
    ' alt="" />
    <img src={Image} className='w-[160px]
    h-[30vh] m-4 
    rounded-xl
    hover:scale-110
    duration-300
    ' alt="" />
    <img src={Image} className='w-[160px]
    h-[30vh] m-4 
    rounded-xl
    hover:scale-110
    duration-300
    ' alt="" />
    <img src={Image} className='w-[160px]
    h-[30vh] m-4 
    rounded-xl
    hover:scale-110
    duration-300
    ' alt="" />
    
    </div>
    </div>
    
  )
}

export default Movies