import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Box from "../Box/Box";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/feature/product/ProductSlice";

import "./carousel.css";

const CarouselMini = () => { 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  let { data, loading } = useSelector((state) => state.product);

  const handleSetTranslate = (swiper, translate) => {
    const maxTranslate = -3800;
    if (translate < maxTranslate) {
      swiper.setTranslate(maxTranslate);
    }
  };

  return (
    <div className="my-3">
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        id="carouselone"
        onSetTranslate={(swiper, translate) =>
          handleSetTranslate(swiper, translate)
        }
      >
        {loading ? (
          <h2 className="text-center">Loading...</h2>
        ) : (
          data &&
          data.map((item) => (
            <SwiperSlide key={item.id}>
              <Box item={item} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default CarouselMini;
