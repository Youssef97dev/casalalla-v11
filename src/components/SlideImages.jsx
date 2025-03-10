"use client";
import React from "react";
import Image from "next/image";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";

const images = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/hg0ykixiwpvehv9hdm4s",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/hg0ykixiwpvehv9hdm4s",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/jfdaoehyg6ro3ei6eeqs",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/jfdaoehyg6ro3ei6eeqs",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/prpqg6qvbzkgcrqhqlpz",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/prpqg6qvbzkgcrqhqlpz",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/j3micvmlxad8p74qiqmv",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/j3micvmlxad8p74qiqmv",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/al4bcdkfinrevudk8zeq",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/al4bcdkfinrevudk8zeq",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/cgww8rhzu6tppbuijmei",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/cgww8rhzu6tppbuijmei",
  },
];

const secondImages = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/alq72roudpmfktyfu5k2",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/alq72roudpmfktyfu5k2",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/kgr2b6b6i6llhc3o6rtb",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/kgr2b6b6i6llhc3o6rtb",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/gvm2chmpykmfngrchsn3",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/gvm2chmpykmfngrchsn3",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/ud4poelfjicsedkvxc6q",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/ud4poelfjicsedkvxc6q",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/drefbaza84g3qdz1gkwj",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/drefbaza84g3qdz1gkwj",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/fz283m11oevyue91bn8h",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/fz283m11oevyue91bn8h",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/irjsnwijta06o7jrx8yf",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/irjsnwijta06o7jrx8yf",
  },
];

const SlideImages = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3 mt-8">
      <div className="w-full h-full flex justify-center items-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next-ex1",
            prevEl: ".swiper-button-prev-ex1",
          }}
          className="relative"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                width={800}
                height={800}
                loading="lazy"
                className="object-cover w-full h-full"
                alt={`Casa lalla htakerkoust ${index}`}
              />
            </SwiperSlide>
          ))}
          <button className="swiper-button-prev-ex1 grid place-content-center left-8 transition text-white absolute z-[999] top-1/2 -translate-y-1/2">
            <MdOutlineArrowBackIos size={28} />
          </button>
          <button className="swiper-button-next-ex1 grid place-content-center right-8 transition text-white absolute z-[999] top-1/2 -translate-y-1/2">
            <MdOutlineArrowForwardIos size={28} />
          </button>
        </Swiper>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next-ex1",
            prevEl: ".swiper-button-prev-ex1",
          }}
          className="relative"
        >
          {secondImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                width={800}
                height={800}
                loading="lazy"
                className="object-cover w-full h-full"
                alt={`Casa lalla htakerkoust ${index}`}
              />
            </SwiperSlide>
          ))}
          <button className="swiper-button-prev-ex1 grid place-content-center left-8 transition text-white absolute z-[999] top-1/2 -translate-y-1/2">
            <MdOutlineArrowBackIos size={28} />
          </button>
          <button className="swiper-button-next-ex1 grid place-content-center right-8 transition text-white absolute z-[999] top-1/2 -translate-y-1/2">
            <MdOutlineArrowForwardIos size={28} />
          </button>
        </Swiper>
      </div>
    </div>
  );
};

export default SlideImages;
