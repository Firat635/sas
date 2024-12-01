import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './carousel.css';
import { Navigation } from 'swiper/modules';

const CarouselMini = () => {
  const logos = [
    { name: "COSTA BRAVA", img: "https://midas-theme.myshopify.com/cdn/shop/files/logo-2_240x.png?v=1614721579" },
    { name: "OCEANIC & CO", img: "https://midas-theme.myshopify.com/cdn/shop/files/logo-4_240x.png?v=1614721579" },
    { name: "HUGO STUDIO", img: "https://midas-theme.myshopify.com/cdn/shop/files/logo-3_240x.png?v=1614721579" },
    { name: "MR BOOKERS", img: "https://midas-theme.myshopify.com/cdn/shop/files/logo-8_240x.png?v=1614721579" },
    { name: "BLACK BIRDS", img: "https://midas-theme.myshopify.com/cdn/shop/files/logo98_240x.png?v=1614721579" },
    { name: "LE BARREL", img: "https://midas-theme.myshopify.com/cdn/shop/files/logo-1_240x.png?v=1614721579" },
    { name: "LE BARREL", img: "https://midas-theme.myshopify.com/cdn/shop/files/logo-6_240x.png?v=1614721580" },
    { name: "LE BARREL", img: "https://midas-theme.myshopify.com/cdn/shop/files/logo_240x.png?v=1614721580" },
    { name: "LE BARREL", img: "https://midas-theme.myshopify.com/cdn/shop/files/logo-5_240x.png?v=1614721580" },
    { name: "LE BARREL", img: "https://midas-theme.myshopify.com/cdn/shop/files/logo-7_240x.png?v=1614721580" },
  ];

  return (
    <div className="carousel-container">
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        navigation={true}
        grabCursor={true}
        loop={true}
        className="mySwiper"
        breakpoints={{
          280: { slidesPerView: 2, spaceBetween: 10 }, 
          576: { slidesPerView: 4, spaceBetween: 15 },
          768: { slidesPerView: 5, spaceBetween: 20 }, 
          1024: { slidesPerView: 6, spaceBetween: 20 }, 
        }}
        modules={[Navigation]}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={logo.img} alt={logo.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselMini;
