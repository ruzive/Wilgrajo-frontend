'use client'
import area from '@public/assets/images/area-svgrepo-com.svg'
import { useEffect, useState } from 'react';
import { AiOutlineClose} from 'react-icons/ai'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { MdWaterDrop} from 'react-icons/md'
import { FaFan, FaToilet, FaCarSide, FaServicestack} from 'react-icons/fa'
import { CgSmartHomeRefrigerator} from 'react-icons/cg'
import { GiWashingMachine, GiGasStove,GiParkBench, GiCoffeeMug, GiWaterGallon, GiElectric, GiBanknote , GiKitchenKnives, GiOfficeChair ,GiBed, GiKitchenScale} from 'react-icons/gi'
import { BsHouseDoor,BsActivity} from 'react-icons/bs'
import { fetchData, DataAttributes, Params, getRandomPhoto } from '@app/utils/utils';
import Slider from '@components/Slider';
import Image from 'next/image'
import Map from '@components/Map';
import ErrorBoundary from '@app/utils/error';




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

  return (
    <ErrorBoundary>
        <div className='relative flex flex-col md:flex-row w-full'>
            <section className='flex flex-col  justify-between px-[15px] sm:px-[50px] xl:px-[100px] py-[60px] md:w-[60%] w-full ' style={{ marginLeft: '-10px' }}>
                <div>
                    <div className='bg-gradient-to-tr from-[#C2B9F2]/50 to-[#ACDFF2]/50 rounded-lg drop-shadow-2xl border px-5 py-10 my-[30px]'>
                        <h3 className='text-[35px] font-bold'>
                            {/* {results?.property_type} */}
                        </h3>
                        <p className='flex font-bold'>
                            <span><HiOutlineMapPin size={20}/></span>
                            {/* {results?.neighborhood.title}/{results?.city.title}  */}
                        </p>
                        <p className=' flex text-[#228B22] text-2xl mt-1.5'>
                                 <span>
                                 <GiBanknote size={40}/></span>
                                 {/* {Number(results?.price).toLocaleString('en-US', { style: 'currency', currency: 'ZMW' })}  */}
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
                                        <ul>
                                                    {results?.obs.split('#').map((item, index) => (
                                                    <li key={index}>{item.trim()}</li>
                                                    ))}
                                        </ul>
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
                            {results?.total_room !==0 && (
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
                                        
                                    </div>
                                </div>
                            )}
                            {results?.total_bedroom !==0 && results?.property_type !== "commercial" && (
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiBed size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>BedRooms</span>
                                        </div>
                                        <div className="text-md font-bold">
                                             <span>{results?.total_bedroom}</span> 
                                        </div>
                                    </div>
                                </div>
                            )}
                            {results?.total_maids_room !==0 && results?.property_type !== "commercial" && results?.property_type !== "apartment" &&(
                                        <div className='flex items-center px-4 py-2 w-[240px]'>
                                        <div className='text-neutral-700 pr-[10px]'>
                                            <GiBed size={25}/>
                                        </div>
                                        <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Guest Rooms</span>
                                        </div>
                                        <div className="text-md font-bold">
                                             <span>{results?.total_maids_room}</span> 
                                        </div>
                                        </div>
                                </div>
                                        )}
                            {results?.total_office !==0 && (
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiOfficeChair size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Offices</span>
                                        </div>
                                        <div className="text-md font-bold">
                                             <span>{results?.total_office}</span> 
                                        </div>
                                    </div>
                                </div>
                            )}
                            {results?.total_kitchen !==0 && (
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiKitchenKnives size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Kitchen</span>
                                        </div>
                                        <div className="text-md font-bold">
                                             <span>{results?.total_kitchen}</span> 
                                        </div>
                                    </div>
                                </div>
                            )}
                            {results?.total_pantry !==0 && results?.property_type !== "commercial" &&(
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiKitchenScale size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Pantry</span>
                                        </div>
                                        <div className="text-md font-bold">
                                             <span>{results?.total_pantry}</span> 
                                        </div>
                                    </div>
                                </div>
                            )}
                            {results?.total_coffe_room !==0 && results?.property_type !== "commercial" &&(
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiCoffeeMug size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Coffee Room</span>
                                        </div>
                                        <div className="text-md font-bold">
                                             <span>{results?.total_coffe_room}</span> 
                                        </div>
                                    </div>
                                </div>
                            )}
                             {results?.total_leisure_area !==0 && results?.property_type !== "commercial" && results?.property_type !== "apartment" &&(
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiParkBench size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Leisure Area</span>
                                        </div>
                                        <div className="text-md font-bold">
                                             <span>{results?.total_leisure_area}</span> 
                                        </div>
                                    </div>
                                </div>
                            )}
                              {results?.total_hall !==0 && results?.property_type !== "commercial" &&(
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiParkBench size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Hall</span>
                                        </div>
                                        <div className="text-md font-bold">
                                             <span>{results?.total_hall}</span> 
                                        </div>
                                    </div>
                                </div>
                            )}

                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <FaToilet size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Bathrooms</span>
                                        </div>
                                        {results?.property_type !== "apartment" ? (
                                        <div className="text-md font-bold">
                                             <span>{results?.total_bathroom}</span> 
                                        </div>
                                        ):(
                                            <div className="text-md font-bold">
                                            <span>{results?.total_lavatory}</span> 
                                       </div> 
                                        )}

                                        {results?.total_guest_wc !==0 && results?.property_type !== "commercial" && results?.property_type !== "apartment" &&(
                                        <>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Guest Bathrooms</span>
                                        </div>
                                        <div className="text-md font-bold">
                                             <span>{results?.total_guest_wc}</span> 
                                        </div>
                                        </>
                                        )}
                                        
                                    </div>
                                </div>
                                {results?.total_service_area !==0 && (
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <FaServicestack size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Service Area</span>
                                        </div>
                                        <div className="text-md font-bold">
                                             <span>{results?.total_service_area}</span> 
                                        </div>
                                    </div>
                                </div>
                                )}
                                {results?.total_garage !== 0 && (
                                <div className='flex items-center px-4 py-2 w-[240px]'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <FaCarSide size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Garage</span>
                                        </div>
                                        <div className="text-md font-bold">
                                             <span>{results?.total_garage}</span> 
                                        </div>
                                    </div>
                                </div>
                                )}
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
                                                <GiGasStove size={25}/>
                                            </div>
                                            <div className=''>
                                                <div className="text-sm font-bold text-neutral-500">
                                                    <span>Gas/Electric Stove</span>
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
                                                    <span>Water Dispenser</span>
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
                                    Observations
                                </p>
                                <div className='flex flex-col'>
                                    <div className='flex items-center px-4 py-2'>
                                        <div className='text-neutral-700 pr-[10px]'>
                                            <div className="text-sm font-bold text-neutral-500">
                                                <ul>
                                                {results?.description?.split('#').map((item, index) => (
                                                        <li key={index}>{item.trim()}</li>
                                                ))} 
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center px-4 py-2'>
                                        <div className='text-neutral-700 pr-[10px]'>
                                            <div className="text-sm font-bold text-neutral-500">
                                                <ul>
                                                    {results?.obs.split('#').map((item, index) => (
                                                    <li key={index}>{item.trim()}</li>
                                                    ))}
                                                </ul>
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
                        
                    </ul>
                )}
                <ul>
                <li className='bg-white drop-shadow-xl rounded-lg flex justify-between text-[30px] font-bold py-[10px] px-[15px] my-[10px]'>
                            {results?.intent === "rent" ? (
                                <>
                                <span >RENT</span><GiBanknote size={40}/>
                                    <div className='text-[#228B22]'>
                                    <span>{Number(results?.price).toLocaleString('en-US', { style: 'currency', currency: 'ZMW' })}</span> 
                                </div>
                                </>
                                    ) : (
                                        <>
                                        <span >BUY</span><GiBanknote size={40}/>
                                            <div className='text-[#228B22]'>
                                            <span>{Number(results?.price).toLocaleString('en-US', { style: 'currency', currency: 'ZMW' })}</span> 
                                        </div>
                                        </>
                             )}

                        </li>
                </ul>
                </div>
            </section>
            <section className='md:fixed top-20 right-0 flex flex-col justify-between md:h-screen md:w-[40%] w-full drop-shadow-3xl md:drop-shadow-xl px-[15px] sm:px-[50px] md:px-0 mx-auto mb-16'>
                <button className='relative md:min-h-[40%]' onClick={handleSlider} >
                     <div key={results?.uuid} className="flex"> 
                        <div className="h-[100%] w-[100%]">
                             <Image
                                className='relative h-[5%] w-full' 
                                src={getRandomPhoto(results?.photos??[]) || ''} 
                                alt="Property Image"
                                width={250}
                                height={150}
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
                <div className='h-[300px] md:min-h-[60%] w-full mt-10 md:mt-0'>

                {results && <Map property={results} />}
                {/* <Map/> */}
               
                </div>
            </section>
            {slider && results && (
                <div className='fixed top-0 left-0 z-10 flex justify-center items-center bg-neutral-600/70 h-screen w-full'>
                    <div className='w-[80%] h-[80%]'>
                        <Slider photos={results?.photos} />
                    </div>
                    <button className='bg-neutral-800/80 rounded-full fixed top-10 right-10 z-10 text-white p-1'  onClick={handleSlider}>
                        <AiOutlineClose size={25} />
                    </button>
                </div>
            )}
        </div>
        </ErrorBoundary>
    );
};
  

export default PropertyDetails