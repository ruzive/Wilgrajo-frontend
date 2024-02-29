'use client'
import { useEffect, useState } from 'react';
import Cards from "@components/Cards";
import {Page} from '../utils/utils';
import {Result} from '../utils/utils';


export default function Home(
  {
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  })  {
  const [results, setResults] = useState<Result[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData: Result[]| undefined = await Page();
        setResults(responseData!);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.'); // Set error message
      }
    };
    fetchData();
  }, []);
  return (
    <div>
    {error ? (
      <div>Error: {error}</div>
    ) : (
      <Cards results={results} />
    )}
  </div>
    
  )
}
