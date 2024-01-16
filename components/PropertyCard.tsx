

export const propertycard = () => {
  return (
    <div className='grid sm:grid-cols-2 2xl:grid-cols-3 grid-rows-auto gap-8 py-[100px] w-[90%] mx-auto'>
      { 
          
            <div className='relative text-neutral-600 bg-neutral-200/50 shadow-2xl cursor-pointer ease-in-out duration-300 hover:scale-105 rounded-xl w-[300px] p-[15px]'>
             
              <div className='h-[170px] w-full'>
                <h3 className='text-[20px] font-bold mt-[10px]'>
                  {/* {Property name here}  */}
                </h3>
                <p className='flex mb-[10px]'>
                  {/* {property location here} */}
                </p>
                <ul className='flex flex-col'>
                  <li className='flex justify-between py-[1px]'>
                    <span>Distance</span>
                    {/* <span>{property.distance}</span> */}
                  </li>
                  <li className='flex justify-between py-[1px]'>
                    <span>Rooms</span>
                    {/* <span>{property.rooms}</span> */}
                  </li>
                </ul>
              </div>
            </div>
      }
    </div>
  )
}
