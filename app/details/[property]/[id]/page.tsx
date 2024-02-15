'use client'
import Link from 'next/link'
import area from '@public/assets/images/area-svgrepo-com.svg'
import desc from '@public/assets/images/description-svgrepo-com.svg'
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { MdOutlineCall, MdOutlineFastfood, MdWaterDrop } from 'react-icons/md'
import { FaFan, FaToilet } from 'react-icons/fa'
import { CgSmartHomeRefrigerator } from 'react-icons/cg'
import { GiWashingMachine, GiRotaryPhone, GiWaterGallon, GiElectric } from 'react-icons/gi'
import { IoIosPeople } from 'react-icons/io'
import { IoReturnDownBack } from 'react-icons/io5'
import { BsFillPersonFill, BsWifi, BsHouseDoor, BsClock, BsCurrencyDollar, BsActivity, BsCashStack } from 'react-icons/bs'
import { fetchData, DataAttributes, Params, Photo } from '@app/utils/utils';
import Slider from '@components/Slider';
import Image from 'next/image'
import Map from '@components/Map'



  
  const PropertyDetails = ({ params }: { params: Params }) => {
    const [results, setResults] = useState<DataAttributes>();
    const [error, setError] = useState<string | null>(null);
    const [slider, setSlider] = useState<boolean>(false);
  
    useEffect(() => {
      const getPropData = async () => {
        try {
          const results = await fetchData({params});
          console.log('pages received data'+ results?.city)
          setResults(results);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError('Error fetching data. Please try again later.'); // Set error message
        }
      };
  
      getPropData();
    }, [params]);
    
    const handleSlider = () => {
        console.log('click')
        setSlider(!slider); // Toggle slider state
      };
      const getRandomPhoto = (photos: Photo[]): string | undefined => {
        if (photos.length === 0) return undefined; // Return undefined if the photos array is empty
        const randomIndex = Math.floor(Math.random() * photos.length); // Generate a random index
        return photos[randomIndex].image[0]; // Return the URL of the random photo
      };
  return (
        <div className='relative flex flex-col md:flex-row w-full'>
            <section className='flex flex-col  justify-between px-[15px] sm:px-[50px] xl:px-[100px] py-[60px] md:w-[75%] w-full ' style={{ marginLeft: '-55px' }}>
                <div>
                    <div className='bg-gradient-to-tr from-[#C2B9F2]/50 to-[#ACDFF2]/50 rounded-lg drop-shadow-2xl border px-5 py-10 my-[30px]'>
                        <h3 className='text-[35px] font-bold'>
                            {results?.property_type}
                        </h3>
                        <p className='flex font-bold'>
                            <span><HiOutlineMapPin size={20}/></span>
                            {results?.neighborhood.title}/{results?.city.title} 
                        </p>
                        <p className='text-[#228B22] text-2xl mt-1.5'>
                                 <span>{Number(results?.price).toLocaleString('en-US', { style: 'currency', currency: 'ZMW' })}</span> 
                        </p>
                    </div>
                    {results?.property_type === "land" ?(
                      
                    <ul className='bg-white drop-shadow-xl rounded-lg p-5 my-[10px]'>
                            <p className='text-lg font-bold border-b border-neutral-400/60 pb-1.5 mb-5'>
                                Property Details for { results?.property_type.toUpperCase()} ID {params.id }
                            </p>
                        <div className='flex flex-wrap'>
                            <div className='flex items-center px-4 py-2 w-[240px]'>
                                <div className='text-neutral-700 pr-[10px]'>
                                   <BsActivity/>        
                                </div>
                                <div className=''>
                                    <div className="text-sm font-bold text-neutral-500">
                                        <span>Description</span>
                                    </div>
                                    <div className="text-md font-bold">
                                         <span>{results?.obs}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center px-4 py-2 w-[240px]'>
                                <div className='text-neutral-700 pr-[10px]'>
                                    <Image
                                        src={area}
                                        height={25}
                                        width={25}
                                        alt="area"
                                        priority/>
                                </div>
                                <div className=''>
                                    <div className="text-sm font-bold text-neutral-500">
                                        <span>Area</span>
                                    </div>
                                    <div className="text-md font-bold">
                                         <span>{results?.title}</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                    ):(
                    <ul className='flex flex-col'>  
                        <li className='bg-white drop-shadow-xl rounded-lg p-5 my-[10px]'>
                            <p className='text-lg font-bold border-b border-neutral-400/60 pb-1.5 mb-5'>
                                Property Details for { results?.property_type.toUpperCase()} ID {params.id }
                            </p>
                            <div className='flex flex-wrap'>
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <BsHouseDoor size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Rooms</span>
                                        </div>
                                        <div className="text-md font-bold">
                                             <span>{results?.total_room}</span> 
                                        </div>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>BedRooms</span>
                                        </div>
                                        <div className="text-md font-bold">
                                             <span>{results?.total_bedroom}</span> 
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
                                             <span>{results?.total_bathroom}</span> 
                                        </div>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Guest Bathrooms</span>
                                        </div>
                                        <div className="text-md font-bold">
                                             <span>{results?.total_guest_wc}</span> 
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
                                             <span>{}</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {results?.property_type === "apartment" ?(
                            <>
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
                            </>
                        ):(
                                <>
                                </>
                        )};
                       
                       
    
                        <li className='bg-white drop-shadow-xl rounded-lg flex justify-between text-[30px] font-bold py-[10px] px-[15px] my-[10px]'>
                            {results?.intent === "rent" ? (
                                <>
                                <span >RENT</span>
                                    <div className='text-[#228B22]'>
                                    <span>{Number(results?.price).toLocaleString('en-US', { style: 'currency', currency: 'ZMW' })}</span> 
                                </div>
                                </>
                                    ) : (
                                        <>
                                        <span >BUY</span>
                                            <div className='text-[#228B22]'>
                                            <span>{Number(results?.price).toLocaleString('en-US', { style: 'currency', currency: 'ZMW' })}</span> 
                                        </div>
                                        </>
                             )}

                        </li>
                    </ul>
                )}
                </div>
            </section>
            <section className='md:fixed top-20 right-0 flex flex-col justify-between md:h-screen md:w-[27%] w-full drop-shadow-3xl md:drop-shadow-xl px-[15px] sm:px-[50px] md:px-0 mx-auto mb-16'>
                <button className='relative md:min-h-[40%]' onClick={handleSlider} >
                     <div key={results?.uuid} className="flex"> 
                        <div className="relative h-full w-full">
                             <img 
                                className='relative h-[5%] w-full' 
                                src={results?.photos[0].image[0]} 
                                alt="Property Image"
                                />
                        </div>
                        <div className='absolute top-0 left-0 text-white text-left font-bold bg-neutral-600/50 h-full w-full p-3'>
                            <p className='text-xl'>
                                Photos
                            </p>
                            <p>
                                Click to View in Full Screen
                            </p>
                        </div>
                     </div> 
                </button>
                {/* <div className='h-[300px] md:min-h-[60%] w-full mt-10 md:mt-0'>
                     <Map property={results}/>
                </div> */}
            </section>
            {slider && results && (
                <div className='fixed top-0 left-0 z-10 flex justify-center items-center bg-neutral-600/70 h-screen w-full'>
                    <div className='w-[80%] h-[80%]'>
                        <Slider photos={results.photos} />
                    </div>
                    <button className='bg-neutral-800/80 rounded-full fixed top-10 right-10 z-10 text-white p-1'  onClick={handleSlider}>
                        <AiOutlineClose size={25} />
                    </button>
                </div>
            )}
        </div>
    
    )
}

export default PropertyDetails