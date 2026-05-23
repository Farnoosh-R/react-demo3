import BestSellingProducts from "../../components/home/BestSellingProducts";
import Hero from "../../components/home/Hero";
import WhyChoosingUs from "../../components/home/WhyChoosingUs";

const Home = () => {
  return (
    <>
      <div id="home" className="flex flex-col gap-25">
      <Hero />
      <WhyChoosingUs />
      <BestSellingProducts />
      </div>
    </>
  );
};
export default Home;
