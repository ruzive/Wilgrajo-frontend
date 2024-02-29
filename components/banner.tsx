'use client'

import image from '@public/assets/images/wilgrajo_logo.jpeg'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Banner({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
  
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="relative flex flex-col items-center bg-off-white-50 text-neutral-700 bg-clip-text w-[80%] mx-auto">
        <div className="flex">
        <Image 
            src={image}
            alt="Wilgrajo Logo"
            width ={380}
            height={120}
            className="hidden md:block"
            priority/>
        </div>
        <div className="text-[50px] mt-[15px]">
      
        </div>
        <p className="text-[20px] text-center font-semibold">
          Finding your next home made easy! We do it all !
        </p>
        {pathname === '/' && (
        <div className="relative flex-1 flex-shrink-0">
          <input 
            className="flex justify-between items-center text-neutral-600 placeholder-neutral-600 bg-neutral-500/40 rounded-lg shadow-2xl w-full py-[9px] pl-10 min-[1200px]:my-[50px] my-[25px] font-bold focus:outline focus:ring-neutral-400" 
            type="text" 
            placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get('query')?.toString()}
          /> 
          <HiMagnifyingGlass className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
       
      </div>
        )}
        <div className="absolute top-[20%] left-[25%] bg-[#A49DEA] p-[200px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob1"></div>
        <div className="absolute top-[-20%] left-[-15%] bg-[#9CD2F4] p-[200px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob2"></div>
    </div>
  );
}

