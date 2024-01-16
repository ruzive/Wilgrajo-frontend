'use client'

import image from '@public/assets/images/wilgrajo_logo.jpeg'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="relative flex flex-col items-center bg-off-white-50 text-neutral-700 bg-clip-text w-[80%] mx-auto">
        <div className="flex">
        <Image 
            src={image}
            alt="Wilgrajo Logo"
            width={380}
            height={120}
            priority/>
        </div>
        <div className="text-[50px] mt-[15px]">
      
        </div>
        <p className="text-[20px] text-center font-semibold">
          Finding your next home made easy! We do it all !
        </p>
        <input 
          className="z-10 flex justify-between items-center text-neutral-600 placeholder-neutral-600 bg-neutral-500/40 rounded-lg shadow-2xl w-full px-[20px] py-[10px] min-[1200px]:my-[50px] my-[25px] font-bold focus:outline focus:ring-neutral-400" 
          placeholder="Search for Plot for Sale and Apartments." 
          type="text" 
        /> 
        <div className="absolute top-[20%] left-[25%] bg-[#A49DEA] p-[200px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob1"></div>
        <div className="absolute top-[-20%] left-[-15%] bg-[#9CD2F4] p-[200px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob2"></div>
    </div>
  )
}

export default Banner
