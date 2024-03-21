'use client'
import image from '@public/assets/images/wilgrajo_logo.jpeg'
import Image from 'next/image';
import Search from './search';
import ErrorBoundary from '@app/utils/error';
import { Suspense } from 'react';

export default function Banner({ placeholder }: { placeholder: string }) {

  return (
    <ErrorBoundary>
      <Suspense>
            <div className="relative flex flex-col items-center bg-white-70 text-neutral-700 bg-clip-text w-[90%] mx-auto">
              
              <div className="flex bg-gray-100 ">
                <Image src={image} alt="Wilgrajo Logo" width={380} height={120} className="hidden md:block" priority />
              </div>
              <div className="text-[50px] mt-[15px]"></div>
              <p className="text-[20px] text-center font-semibold">
                Finding your next home made easy! We do it all !
              </p>
              <Search placeholder={placeholder} />
            <div className="absolute top-[20%] left-[25%] bg-[#A49DEA] p-[200px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob1"></div>
            <div className="absolute top-[-20%] left-[-15%] bg-[#9CD2F4] p-[200px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob2"></div> 
            </div>
    </Suspense>
     </ErrorBoundary>
  );
}
