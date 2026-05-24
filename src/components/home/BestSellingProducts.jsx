import SwiperSlider from "../ui/Slider/SwiperSlider";
import slide1 from "../../pages/home/assets/images/product1.png";
import slide2 from "../../pages/home/assets/images/product2.png";
import slide3 from "../../pages/home/assets/images/product3.png";
import slide4 from "../../pages/home/assets/images/product4.png";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

const BestSellingProducts = () => {
  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Nyantuy Chair",
      cat: "صندلی",
      price: "1000,000 تومان",
    },
    {
      id: 2,
      image: slide2,
      title: "Anjay Chair",
      cat: "صندلی",
      price: "1000,000 تومان",
    },
    {
      id: 3,
      image: slide3,
      title: "Baltsar Chair",
      cat: "صندلی",
      price: "1000,000 تومان",
    },
    {
      id: 4,
      image: slide4,
      title: "Sakarias Armchair",
      cat: "صندلی",
      price: "1000,000 تومان",
    },
    {
      id: 5,
      image: slide1,
      title: "Nyantuy Chair",
      cat: "chair",
      price: "1$",
    },
  ];

  return (
    <section
      id="best-selling-products"
      className="bg-[var(--brand-surface)] py-20"
    >
      <div className="app-container text-center">
        <h2 className="mb-30">پرفروش ترین محصولات</h2>
        <SwiperSlider items={slides} />
        <Link
          to="#"
          className="flex gap-3 items-center text-[var(--brand-primary)] justify-center mt-20"
        >
          <HiArrowLongRight size={20} />
          <div>مشاهده همه محصولات</div>
        </Link>
      </div>
    </section>
  );
};
export default BestSellingProducts;
