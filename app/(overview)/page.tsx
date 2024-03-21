'use client'
import { useEffect, useState } from 'react';
import { Result, Searchterm, getProperties } from '../utils/utils';
import CardHolder  from '@components/CardHolder';
import ErrorBoundary from '@app/utils/error';

interface HomeProps {
  searchParams?: Searchterm;
}

export default function Home({ searchParams }: HomeProps) {
  const [responseData, setResponseData] = useState<Result[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        if (searchParams && searchParams.query) {
          const responseData: Result[] = await getProperties({ searchterm: searchParams });
          setResponseData(responseData);
        } else {
          const responseData: Result[] = await getProperties({});
          setResponseData(responseData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [searchParams]); 
  return (
    <ErrorBoundary>
              <div>
                  <CardHolder results={responseData} />
              </div>
    </ErrorBoundary>
  );
}

