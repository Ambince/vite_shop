import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { shops } from "../data";
import { useNavigate } from "react-router-dom";

export function SwiperHeader() {
  const navigate = useNavigate();

  const onClickDetail = (id: any) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className="h-1/4 w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2000 }}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {shops.map((shop) => {
          return (
            <SwiperSlide key={shop.name} onClick={() => onClickDetail(shop.id)}>
              <img src={`/${shop.img ?? "default.jpg"}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
