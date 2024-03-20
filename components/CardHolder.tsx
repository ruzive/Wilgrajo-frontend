import { Result, Searchterm, getProperties } from '@app/utils/utils';
import React from 'react'
import Cards from './Cards';
import ErrorBoundary from '@app/utils/error';

// export default async function CardHolder({searchterm }: {searchterm?: Searchterm} )// Update the type of searchParams)
// {
//     try 
//     {
//         console.log("cardholder ..:",searchterm?.query)
//               if (searchterm && searchterm.query) {
//                 // Scenario 1: Fetch properties with a search term
//                 const responseData: Result[] = await getProperties({searchterm});
//                 // setResults(responseData);
//               } else {
//                 // Scenario 2: Fetch properties without a search term
//                 const responseData: Result[] = await getProperties({});
//                 // setResults(responseData);
//               }
//     } catch (error) {
//               console.error('Error fetching data:', error);
//             //   setError('Error fetching data. Please try again later.'); // Set error message
//     }
    
//     // const responseData: Result[] = await getProperties({});
//   return (
//     <div>
//         <Cards results={responseData} />
//     </div>
//   )
// }

interface CardHolderProps {
  results: Result[];
}

export default function CardHolder({ results }: CardHolderProps) {
  return (
    <ErrorBoundary>
    <div>
          <Cards results={results} />
    </div>
    </ErrorBoundary>
  );
}
