import Link from "next/link";
import { FaMapSigns } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { MdRoomPreferences } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { Result } from "@app/utils/utils";

interface CardsProps {
  results: Result[];
}

// const Cards = ({ results }: CardsProps) => {
// //   const {searchItem} = useContext(AppContext);
//   return (
//     <div className="grid-cols-1 sm:grid md:grid-cols-2 ">
//     <Link 
//             href='#'
//             className="mx-auto">
//     <div
//       className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-gradient-to-tr from-[#558b00]/60 to-[#fe3e0a]/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    
//         <img
//           className="rounded-t-lg"
//           src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
//           alt="Los Angeles Skyscrapers" />
 
//       <div className="p-6">
//       <h3 className='text-[20px] font-bold mt-[10px]'>
//                   {/* {property.obs} */}
//                 </h3>
//                 <p className='flex mb-[10px]'>
//                 <FaMapSigns />
//                 {/* Location  :{property.city.title}/{property.neighborhood.title} */}
//                 </p>
//                 <ul className='flex flex-col'>
//                   <li className='flex flex-start py-[1px]'>
//                     <GiPathDistance/>Distance
//                     :distance
//                   </li>
//                   <li className='flex flex-start py-[1px]'>
//                     <MdRoomPreferences/>
//                     Rooms
//                     :
//                   </li>
//                   <li className='flex justify-between text-[22px] font-bold py-[1px]'>
//                     <span className="flex-start"><ImPriceTags/></span>
//                     {/* <span className='text-black-600'>ZMW {property.price}</span> */}
//                   </li>
//                 </ul>
//       </div>
//     </div>
//     </Link>
//   </div>
//   )
// }


const Cards = ({ results }: CardsProps) => {
  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-2 ">
      {results.map((result, index) => (
        <Link href={`/details/${result.id}`} key={index}>
          <div key={index} className="mx-auto">
            <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-gradient-to-tr from-[#558b00]/60 to-[#fe3e0a]/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
              <img
                className="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                alt="Los Angeles Skyscrapers"
              />
              <div className="p-6">
                <h3 className="text-[20px] font-bold mt-[10px]">{result.obs}</h3>
                <p className="flex mb-[10px]">
                  <FaMapSigns />
                  Location: {result.city.title}/{result.neighborhood.title}
                </p>
                <ul className="flex flex-col">
                  <li className="flex flex-start py-[1px]">
                    <GiPathDistance /> Condition: {result.conditions}
                  </li>
                  <li className="flex flex-start py-[1px]">
                    {/* <MdRoomPreferences /> : {result.} */}
                  </li>
                  <li className="flex justify-between text-[22px] font-bold py-[1px]">
                    <span className="flex-start">
                      <ImPriceTags />
                    </span>
                    <span className="text-black-600">ZMW {result.price}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
