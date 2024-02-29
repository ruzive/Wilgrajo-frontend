import Link from "next/link";
import { HiOutlineMapPin } from "react-icons/hi2";
import { ImPriceTags } from "react-icons/im";
import { Result,getRandomPhoto } from "@app/utils/utils";
import { GiBanknote } from "react-icons/gi";

interface CardsProps {
  results: Result[];
}




const Cards = ({ results }: CardsProps) => {
  
  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-2 ">
      {/* <div className="grid sm:grid-cols-2 2xl:grid-cols-3 grid-rows-auto gap-8 py-[100px] w-[90%] mx-auto"> */}
      {results.map((result, index) => (
        
        <Link href={`/details/${result.property_type}/${result.id}`} key={index}>
          <div key={index} className="mx-auto">
            <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-gradient-to-tr from-[#558b00]/60 to-[#fe3e0a]/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] shadow-2xl cursor-pointer ease-in-out duration-300 hover:scale-105 dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            {getRandomPhoto(result.photos) && ( // Check if there's a valid photo URL
                // <Image className="rounded-t-lg"
                //   src={getRandomPhoto(result.photos)!} // Use ! to assert non-nullability
                //   alt="Wilgrajo Logo"
  
                //   priority/>
                        <img
                          className="max-h-[300px] max-w-[520px] rounded-t-lg "
                          src={getRandomPhoto(result.photos)!}
                          width="auto"
                          height="auto"
                          alt="Wilgrajo properties" />
              )}
        
        
              <div className="p-6">
              <h3 className="text-[20px] font-bold mt-[10px]">
                  {result.property_type.toUpperCase()} {result.intent === "rent" ? (
                      <span className="text-black-600">FOR RENT</span>
                      ) : (
                      <span className="text-black-600">TO BUY</span>
                      )}
              </h3>

                <p className="flex mb-[10px]">
                  <HiOutlineMapPin />
                 {result.city.title}/{result.neighborhood.title}
                </p>
                <ul className="flex flex-col">
                  <li className="flex justify-between py-[1px]">
                    <span>Condition</span>
                    <span> {result.conditions}</span>
                  </li>
                  <li className="flex justify-between text-[22px] font-bold py-[1px]">
                    <span className="flex-start">
                      <GiBanknote />
                    </span>
                    <span className="text-black-600">{Number(result.price).toLocaleString('en-US', { style: 'currency', currency: 'ZMW' })}</span>

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
