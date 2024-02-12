// import { Swiper, SwiperSlide } from "swiper/react";
 import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import Image from 'next/image'
//  import {DataAttributes} from '@app/utils/utils'

// const Slider = ({ photos }: DataAttributes) => {
//   return (
//     <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         slidesPerGroup={1}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper h-full w-full rounded-xl"
//       >
//         {
//           photos.map((pic) => (
//             <SwiperSlide key={pic.id} className='flex justify-center items-center min-[1200px]:px-[1px] px-[1px]'>
//               <img 
//                 className="rounded-xl" 
//                 src={pic.image} 
//                 alt="property"/>
//             </SwiperSlide>
//           ))
//         }
//       </Swiper>
//   )
// }

// export default Slider

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { DataAttributes, Photo } from '@app/utils/utils';
import Image from 'next/image';

interface SliderProps {
  photos: Photo[];
}

const Slider = ({ photos }: SliderProps) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      slidesPerGroup={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      className="mySwiper h-full w-full rounded-xl"
    >
      {photos.map((pic) => (
        <SwiperSlide key={pic.id} className='flex justify-center items-center min-[1200px]:px-[1px] px-[1px]'>
          <Image
            src={pic.image[0]} // Assuming the image URL is stored at index 0
            alt="property"
            width={500} // Adjust width and height as per your design
            height={300}
            className="rounded-xl"
          />
        </SwiperSlide>
      ))}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default Slider;
