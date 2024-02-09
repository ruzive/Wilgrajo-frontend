'use client'
import { useEffect, useState } from 'react';
import Cards from "@components/Cards";
import Page from './utils/utils';
import {Result} from './utils/utils';


export default function Home() {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData: Result[] = await Page();
        setResults(responseData);
        // console.log("from page.tsx:");
        // responseData.forEach((item, index) => {
        //   console.log(`Object ${index + 1}:`, item);
        // });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <Cards results={results} />
    
  )
}
