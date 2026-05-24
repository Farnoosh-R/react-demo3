import hero from "../../assets/images/layout/hero.png";
import { FaPhone } from "react-icons/fa";
import BlurCircle from "../shared/decoration/BlurCircle";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${hero})` }}
    >
        <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-white via-white/20 to-transparent" />
      <div className="app-container mt-30">
        <div className="flex flex-col gap-7 items-center text-center">
            
          <div className="text-white">
            <h1>فضای داخلی خود را زیباتر کنید</h1>
            <h1>مینیمال و مدرن</h1>
          </div>
          <div className="text-[var(--text-secondary)]">
            <h5>طراحی فضاهایی فراتر از زیبایی،</h5>
            <h5>برای زندگی کردن، آرامش داشتن و ساختن لحظه‌های ماندگار</h5>
          </div>
          <div className="relative flex justify-between p-5 items-center gap-7">
            <div className="absolute backdrop-blur-xs border border-white bg-white/10 top-0 left-0 w-full h-full rounded-[50px]"></div>
            <a className="bg-[var(--brand-primary)] hover:bg-amber-600 rounded-full p-3 z-10">
              <FaPhone color="white" size={20} />
            </a>
            <h5 className="text-white  tracking-[10px] z-10">12345678 - 021</h5>
          </div>
          <div className="relative w-full h-[200px]">
            <BlurCircle style={{left: "-10%", top: "200px"}}/>
            <BlurCircle width={100} height={100} style={{left: "6%", top: "100px"}}/>
            <BlurCircle style={{right: "39%", top: "250px"}}/>
            <BlurCircle style={{right: "-16%", top: "350px"}}/>
          </div>
        </div> 
      </div>
    </section>
  );
};
export default Hero;
