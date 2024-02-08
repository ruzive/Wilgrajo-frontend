import Link from "next/link";
import { FaMapSigns } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { MdRoomPreferences } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";



const Cards = () => {
//   const {searchItem} = useContext(AppContext);
  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-2 ">
         <Link 
            href='#'
            className="mx-auto">
    <div
      className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-gradient-to-tr from-[#558b00]/60 to-[#fe3e0a]/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    
        <img
          className="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
          alt="Hollywood Sign on The Hill" />

      <div className="p-6">
      <h3 className='text-[20px] font-bold mt-[10px]'>
                  propertyName
                </h3>
                <p className='flex mb-[10px]'>
                <FaMapSigns />
                  <span>Location</span>
                </p>
                <ul className='flex flex-col'>
                  <li className='flex justify-between py-[1px]'>
                    <GiPathDistance/>Distance
                    <span>distance</span>
                  </li>
                  <li className='flex justify-between py-[1px]'>
                    <MdRoomPreferences/>
                    Rooms
                    <span>rooms</span>
                  </li>
                  <li className='flex justify-between text-[22px] font-bold py-[1px]'>
                    <ImPriceTags/>
                    Rent
                    <span className='text-black-600'>ZMW rent</span>
                  </li>
                </ul>
      </div>
    </div>
    </Link>
    <Link 
            href='#'
            className="mx-auto">
    <div
      className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-gradient-to-tr from-[#558b00]/60 to-[#fe3e0a]/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">

        <img
          className="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
          alt="Palm Springs Road" />
 
      <div className="p-6">
      <h3 className='text-[20px] font-bold mt-[10px]'>
                  propertyName
                </h3>
                <p className='flex mb-[10px]'>
                <FaMapSigns />
                  <span>Location</span>
                </p>
                <ul className='flex flex-col'>
                  <li className='flex justify-between py-[1px]'>
                    <GiPathDistance/>Distance
                    <span>distance</span>
                  </li>
                  <li className='flex justify-between py-[1px]'>
                    <MdRoomPreferences/>
                    Rooms
                    <span>rooms</span>
                  </li>
                  <li className='flex justify-between text-[22px] font-bold py-[1px]'>
                    <ImPriceTags/>
                    Rent
                    <span className='text-black-600'>ZMW rent</span>
                  </li>
                </ul>
      </div>
    </div>
    </Link>
    <Link 
            href='#'
            className="mx-auto">
    <div
      className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-gradient-to-tr from-[#558b00]/60 to-[#fe3e0a]/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    
        <img
          className="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
          alt="Skyscrapers" />

      <div className="p-6">
      <h3 className='text-[20px] font-bold mt-[10px]'>
                  propertyName
                </h3>
                <p className='flex mb-[10px]'>
                <FaMapSigns />
                  <span>Location</span>
                </p>
                <ul className='flex flex-col'>
                  <li className='flex justify-between py-[1px]'>
                    <GiPathDistance/>Distance
                    <span>distance</span>
                  </li>
                  <li className='flex justify-between py-[1px]'>
                    <MdRoomPreferences/>
                    Rooms
                    <span>rooms</span>
                  </li>
                  <li className='flex justify-between text-[22px] font-bold py-[1px]'>
                    <ImPriceTags/>
                    Rent
                    <span className='text-black-600'>ZMW rent</span>
                  </li>
                </ul>
      </div>
    </div>
    </Link>
    <Link 
            href='#'
            className="mx-auto">
    <div
      className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-gradient-to-tr from-[#558b00]/60 to-[#fe3e0a]/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    
        <img
          className="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
          alt="Los Angeles Skyscrapers" />
 
      <div className="p-6">
      <h3 className='text-[20px] font-bold mt-[10px]'>
                  propertyName
                </h3>
                <p className='flex mb-[10px]'>
                <FaMapSigns />
                  :Location
                </p>
                <ul className='flex flex-col'>
                  <li className='flex flex-start py-[1px]'>
                    <GiPathDistance/>Distance
                    :distance
                  </li>
                  <li className='flex flex-start py-[1px]'>
                    <MdRoomPreferences/>
                    Rooms
                    :rooms
                  </li>
                  <li className='flex justify-between text-[22px] font-bold py-[1px]'>
                  <span className="flex-start"><ImPriceTags/></span>
                    <span className='text-black-600'>ZMW rent</span>
                  </li>
                </ul>
      </div>
    </div>
    </Link>
  </div>
  )
}

export default Cards;
