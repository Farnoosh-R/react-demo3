import BestSellingProducts from "../../components/home/BestSellingProducts";
import Experience from "../../components/home/Experience";
import Hero from "../../components/home/Hero";
import Material from "../../components/home/Material";
import Testimonials from "../../components/home/Testimonials";
import WhyChoosingUs from "../../components/home/WhyChoosingUs";

const Home = () => {
  return (
    <>
      <div id="home" className="flex flex-col gap-10 lg:gap-50">
      <Hero />
      <WhyChoosingUs />
      <BestSellingProducts />
      <Experience />
      <Material />
      <Testimonials />
      </div>
    </>
  );
};
export default Home;
