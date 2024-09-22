import React from 'react'

function OurGoals() {
  return (
    // <div>OurGoals</div>
    <>
    <div className=' text-2xl sm:text-3xl md:text-4xl lg:text-5xl pl-12 font-bold'> 
        <span className='text-cyan-400 pl-8'>Our </span>
        <span className='text-white '>Goals </span>
    </div>
    <div className='pl-12 pr-72'>
      <div className='flex justify-center items-center'>
      <div className="bg-[rgba(101,107,108,0.79)] rounded-xl shadow-lg  p-4 sm:p-4  text-base sm:text-[18px]  text-white mt-6   ">
         <h1 className='text-3x text-red-700 font-bold ' >IEEEXplore</h1>
         <div className=" list text-white  ">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae maxime recusandae rem tenetur, autem quisquam animi in neque illo laudantium magni iusto nostrum aut perferendis facere illum modi quas voluptates, veritatis dolorem?</p>
        </div>
      </div>
      <div className=' ml-64 '>
      <img className=' h-[105px] w-[639px]  ' src="https://vishesh-tripathi.github.io/IEEE_SB_MMMUT-landing-Page/ieee-xplore-template-header4_2x.jpg" alt="" />
      </div>
      
      </div>
    
    </div>

    </>
  )
}

export default OurGoals