import { Swiper, SwiperSlide } from "swiper/react";
import "./carousel.css";
import { BsArrowRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
       <SwiperSlide>
        <div className="head">
          <img
            src="https://midas-theme.myshopify.com/cdn/shop/files/img_bg-001.jpg?v=1614781569"
            alt=""
          />
          
          <div className="bodyMainPhoto">
            <span>Deals and Promotions</span>
            <h1>Wooden <br /> Sideboard Table</h1>
            <button>
              Shop Now <BsArrowRight />
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="head">
          <img
            src="https://midas-theme.myshopify.com/cdn/shop/files/slide-2_5a8a7a52-117c-42dd-95c8-c55690ceda60_x360.jpg?v=1614781569%20180h%20685w,//midas-theme.myshopify.com/cdn/shop/files/slide-2_5a8a7a52-117c-42dd-95c8-c55690ceda60_x400.jpg?v=1614781569%20360h%201370w,//midas-theme.myshopify.com/cdn/shop/files/slide-2_5a8a7a52-117c-42dd-95c8-c55690ceda60.jpg?v=1614781569%20500h%201903w"
            alt=""
          />
          
          <div className="bodyMain">
            <span>Bedroom Furniture</span>
            <h1>Find Comfort That Suits You.</h1>
            <button>
              Shop Now <BsArrowRight />
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="head">
          <img
            src="https://midas-theme.myshopify.com/cdn/shop/files/img_bg-003.jpg?v=1614781569"
            alt=""
          />
          
          <div className="bodyMainPhoto">
            <span>Baskets & Storage</span>
            <h1>Laundry Baskets</h1>
            <h2><span className="colorText">form <span className="colorPrice">$</span></span>9,99</h2>
            <button>
              Shop Now <BsArrowRight />
            </button>
          </div>
        </div>
      </SwiperSlide>
     
    </Swiper>
  );
};

export default Carousel;

