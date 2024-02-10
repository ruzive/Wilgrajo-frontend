'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { MdOutlineCall, MdOutlineFastfood, MdWaterDrop } from 'react-icons/md'
import { FaFan, FaToilet } from 'react-icons/fa'
import { CgSmartHomeRefrigerator } from 'react-icons/cg'
import { GiWashingMachine, GiPathDistance, GiRotaryPhone, GiWaterGallon, GiElectric } from 'react-icons/gi'
import { IoIosPeople } from 'react-icons/io'
import { IoReturnDownBack } from 'react-icons/io5'
import { BsFillPersonFill, BsWifi, BsHouseDoor, BsCurrencyDollar, BsClock, BsCashStack } from 'react-icons/bs'
// import Map from './Map'
// import Slider from './Slider'

// import { PropertyType } from '../typings'
// interface Props {
//     property: PropertyType,
//   }

const PropertyDetails = ({params}:{params:{ property:string, id: string}}) => {
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
        <div className='relative flex flex-col md:flex-row w-full'>
            <section className='flex flex-col  justify-between px-[15px] sm:px-[50px] xl:px-[100px] py-[60px] md:w-[75%] w-full ' style={{ marginLeft: '-55px' }}>
                <div>
                    <div className='bg-gradient-to-tr from-[#C2B9F2]/50 to-[#ACDFF2]/50 rounded-lg drop-shadow-2xl border px-5 py-10 my-[30px]'>
                        <h3 className='text-[35px] font-bold'>
                            {/* {property.propertyName} */}
                        </h3>
                        <p className='flex font-bold'>
                            <span><HiOutlineMapPin size={20}/></span>
                            {/* {property.location} */}
                        </p>
                        <p className='text-[#228B22] text-2xl mt-1.5'>
                                {/* <span>Rs.{property.rent}</span> */}
                        </p>
                    </div>
                    <ul className='flex flex-col'>
                        <li className='bg-white drop-shadow-xl rounded-lg p-5 my-[10px]'>
                            <p className='text-lg font-bold border-b border-neutral-400/60 pb-1.5 mb-5'>
                                Property Details for { params.property.toUpperCase()} ID {params.id }
                            </p>
                            <div className='flex flex-wrap'>
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <BsFillPersonFill size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Gender</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.gender}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiPathDistance size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Distance from Campus</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.distance}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <BsHouseDoor size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Rooms</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.rooms}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <FaToilet size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Bathrooms</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.bathrooms}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <BsClock size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>In-Time</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.inTime}</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='bg-white drop-shadow-xl rounded-lg p-5 my-[10px]'>
                            <p className='text-lg font-bold border-b border-neutral-400/60 pb-1.5 mb-5'>
                                Amenities
                            </p>
                            <div className='flex flex-wrap'>
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <BsWifi size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Wifi</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.wifi}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <CgSmartHomeRefrigerator size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Refrigerator</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.refrigerator}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiWashingMachine size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Washing Machine</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.washingMachine}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <FaFan size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Air Conditioner</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.airConditioner}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiElectric size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Power Back-up</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.powerBackup}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <MdWaterDrop size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>R.O. Unit</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.ro}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiWaterGallon size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Can Water</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.canWater}</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='bg-white drop-shadow-xl rounded-lg p-5 my-[10px]'>
                            <p className='text-lg font-bold border-b border-neutral-400/60 pb-1.5 mb-5'>
                                Variables
                            </p>
                            <div className='flex flex-col'>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <MdOutlineFastfood size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Food</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.food}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <IoIosPeople size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Sharing Options</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.sharingOptions}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <BsCurrencyDollar size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Extra Charges for AC</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.extraEB}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <BsCashStack size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Booking Charges</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.bookingCharges}</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='bg-white drop-shadow-xl rounded-lg p-5 my-[10px]'>
                            <p className='text-lg font-bold border-b border-neutral-400/60 pb-1.5 mb-5'>
                                Contact Details
                            </p>
                            <div className='flex flex-wrap'>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <BsFillPersonFill size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Property In-Charge</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.propertyInChargeName}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <MdOutlineCall size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Phone Number</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.phoneNumber}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiRotaryPhone size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Landline</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            {/* <span>{property.landline}</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='bg-white drop-shadow-xl rounded-lg flex justify-between text-[30px] font-bold py-[10px] px-[15px] my-[10px]'>
                            <span>Rent</span>
                            <div className='text-[#228B22]'>
                                {/* <span>Rs.{property.rent}</span> */}
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='md:fixed top-20 right-0 flex flex-col justify-between md:h-screen md:w-[27%] w-full drop-shadow-3xl md:drop-shadow-xl px-[15px] sm:px-[50px] md:px-0 mx-auto mb-16'>
                <button className='relative md:min-h-[35%]' >
                    {/* <div key={property._id} className="flex"> */}
                        <div className="h-full w-full">
                            {/* <img className='h-full w-full object-contain' src={property.images[0]} alt="Property Image"/> */}
                        </div>
                        <div className='absolute top-0 left-0 text-white text-left font-bold bg-neutral-600/50 h-full w-full p-3'>
                            <p className='text-xl'>
                                Photos
                            </p>
                            <p>
                                Click to View in Full Screen
                            </p>
                        </div>
                    {/* </div> */}
                </button>
                <div className='h-[300px] md:min-h-[60%] w-full mt-10 md:mt-0'>
                    {/* <Map property={property}/> */}
                </div>
            </section>
            {/* {slider 
                    ? 
                        <div className='fixed top-0 left-0 z-10 flex justify-center items-center bg-neutral-600/70 h-screen w-full'>
                            <div className='w-[80%] h-[80%]'>
                                <Slider property={property}/>
                            </div>
                            <button className='bg-neutral-800/80 rounded-full fixed top-10 right-10 z-10 text-white p-1' onClick={handleSlider}>
                                <AiOutlineClose size={25}/>
                            </button>
                        </div>
                    : null
            } */}
        </div>
    
    )
}

export default PropertyDetails