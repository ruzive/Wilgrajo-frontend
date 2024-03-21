'use client';

import { HiMagnifyingGlass } from "react-icons/hi2";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import ErrorBoundary from "@app/utils/error";
import { Suspense } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    
// function handleSearch(term: string) {
  // console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
  
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }
  ,300);
  return (
    <ErrorBoundary>
        <Suspense>
                <div className="relative flex flex-1 flex-shrink-0 w-[100%]">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <input
                  className=" z-10 flex justify-between 
                  items-center text-neutral-600 
                  placeholder-neutral-600 bg-neutral-500/40 
                  rounded-lg shadow-2xl w-full py-[9px] 
                  pl-10 min-[1200px]:my-[50px] my-[25px] 
                  font-bold focus:outline focus:ring-neutral-400"
                    placeholder={placeholder}
                    onChange={(e) => {
                      handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get('query')?.toString()}
                  />
                  <HiMagnifyingGlass className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
    </Suspense>
     </ErrorBoundary>
  );
}
