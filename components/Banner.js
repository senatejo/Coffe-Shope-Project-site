"use client";


import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import Image from 'next/image'

export default function Banner() {

    const banners = [
        '/Banner1.jpg',
        '/Banner2.jpg',
        '/Banner3.jpg',
      ];

  return (
<div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">

    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation
      loop={true}
      className="w-full h-full"
    >
      {banners.map((image, idx) => (
        <SwiperSlide key={idx}>
          <Image
            src={image}
            alt={`Banner ${idx + 1}`}
            fill
            className="object-fit"
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  
  );
}
