import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import Button from "../Button/Button";
import { useRef } from "react";

export default function SwiperSlider({ items }) {
  const paginationRef = useRef(null);

  return (
    <div className="w-full mr-auto min-w-0 mr-auto">
      <Swiper
        slidesPerView={1}
        modules={[Pagination, Navigation]}
    
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
           onBeforeInit={(swiper) => {
          swiper.params.pagination.el = paginationRef.current;
        }}
        navigation
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="relative h-full pb-16"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-auto">
              <div className="flex flex-col gap-4">
                <div className="h-[300px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-fit object-cove mx-auto"
                  />
                </div>
                <div className="flex flex-col bg-white rounded-bl-2xl rounded-br-2xl p-5">
                  <div className="text-[var(--text-secondary)]">{item.cat}</div>
                  <h5>{item.title}</h5>
                  <div className="flex">
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                  </div>
                  <div className="flex justify-between mt-7 items-center">
                    <div className="font-bold">{item.price}</div>
                    <Button variant="primary" type="outline">
                      تماس جهت سفارش
                    </Button>
                  </div>
                </div>
              </div>
          
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
            <div
        ref={paginationRef}
        className="flex justify-center mt-6 gap-2"
      />
    
    </div>
  );
}
