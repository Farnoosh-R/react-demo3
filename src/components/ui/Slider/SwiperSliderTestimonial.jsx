import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import Button from "../Button/Button";
import { useRef } from "react";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

export default function SwiperSliderTestimonial({ items }) {
  const paginationRef = useRef(null);

  return (
    <div className="relative w-full mr-auto min-w-0 mr-auto">
      <button
        className="custom-prev
      absolute
      flex
      justify-center
      items-center
      -left-7
      top-1/2
      -translate-y-1/2
      z-10
      w-12
      h-12
      rounded-full
      shadow-2xl
      cursor-pointer
      bg-white
      hover:bg-black/5
      text-[var(--text-primary)]
      backdrop-blur"
      >
        <HiArrowLongLeft size={25} />
      </button>
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
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        spaceBetween={50}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="relative h-full pb-16"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-auto">
              <div className="flex flex-col gap-4">
                <div className="h-[600px]">
                  <div
                    className="flex justify-center p-5 h-full bg-cover bg-center rounded-3xl"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="relative bg-white h-64 w-full rounded-3xl translate-y-75 shadow-2xl">
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-17 h-13 bg-white rounded-t-full pt-2">
                        <img
                          src={item.tinyImage}
                          className="w-fit object-cover mx-auto shadow-2xl rounded-full"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center gap-4 p-12 text-center">
                        <div>
                          <h3>{item.productName}</h3>
                          <div className="text-[var(--text-secondary)]">{item.customerName}</div>
                        </div>
                        <div className="leading-7">{item.des}</div>
                        <div className="flex gap-3">
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="      custom-next
      absolute
      flex
      justify-center
      items-center
      -right-7
      top-1/2
      -translate-y-1/2
      z-10
      w-12
      h-12
      rounded-full
      cursor-pointer
      shadow-2xl
      bg-white
      hover:bg-black/5
      text-[var(--text-primary)]
      backdrop-blur"
      >
        <HiArrowLongRight size={25} />
      </button>
      <div ref={paginationRef} className="flex justify-center mt-6 gap-2" />
    </div>
  );
}
