
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Photo } from '@app/utils/utils'; // Assuming Photo type is defined in utils

interface SliderProps {
  photos: Photo[];
}

const Slider = ({ photos }: SliderProps) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    navigation={{
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       }}
       className="mySwiper h-full w-full rounded-xl"
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
     {photos.map((pic) => (
        
             <SwiperSlide key={pic.id} className='flex justify-center items-center min-[1200px]:px-[1px] px-[1px]'>
               <Image 
                 className="rounded-xl" 
                 src={pic.image[0]} // Assuming the image URL is stored at index 0
                 alt="property"
                 height={700}
                 width={900}
               />
             </SwiperSlide>
           ))}
     <div className="swiper-button-next"></div>
     <div className="swiper-button-prev"></div>
  </Swiper>
  );
};

export default Slider;
