import React from 'react'

function NewsSection() {
  return (
    <>
     <div className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:pl-20 pl-8'>
        <h1 className='text-white'>Top</h1>
      
        <h1 className='text-cyan-400'>NEWS</h1> 
     
        <h1 className='text-white'>from the house</h1>
     </div>
    <div className='pl-12 pr-20'>
    <div className="bg-[rgba(101,107,108,0.79)] rounded-xl shadow-lg p-4 sm:p-4  text-base sm:text-[18px]  text-white mt-6">
     <ul className=" list text-white  ">
     <li> 1- Now this is a story all about how, my life got flipped-turned upside down</li>
     <li> 2- Now this is a story all about how, my life got flipped-turned upside down</li>
     <li> 1- Now this is a story all about how, my life got flipped-turned upside down</li>
     <li> 2- Now this is a story all about how, my life got flipped-turned upside down</li>
        </ul>
      </div>
    </div>
        

    </>

  )
}

export default NewsSection