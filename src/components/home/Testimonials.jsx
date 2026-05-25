import SwiperSliderTestimonial from "../ui/Slider/SwiperSliderTestimonial";
import slide1 from "../../pages/home/assets/images/testimonials1.png"
import slide2 from "../../pages/home/assets/images/testimonials2.png"
import slide3 from "../../pages/home/assets/images/testimonials3.png"
import slide4 from "../../pages/home/assets/images/testimonials4.png"
import slideTiny1 from "../../pages/home/assets/images/customer1.png"
import slideTiny2 from "../../pages/home/assets/images/customer2.png"
import slideTiny3 from "../../pages/home/assets/images/customer3.png"

const Testimonials = () => {

    const slides = [
        {
          id: 1,
          image: slide1,
          tinyImage: slideTiny1,
          productName: "صندلی",
          customerName: "فرنوش رمضانعلی",
          des: "کیفیت کار بسیار خوب بود و همه مراحل با دقت و نظم انجام شد. نتیجه نهایی دقیقاً چیزی بود که انتظار داشتم.",
        },
              {
          id: 2,
          image: slide2,
          tinyImage: slideTiny2,
          productName: "صندلی",
          customerName: "فرنوش رمضانعلی",
          des: "از خدمات این مجموعه خیلی راضی بودم، همه چیز دقیق و مطابق انتظار انجام شد و تجربه خوبی داشتم.",
        },
              {
          id: 3,
          image: slide3,
          tinyImage: slideTiny3,
          productName: "صندلی",
          customerName: "فرنوش رمضانعلی",
          des: "از همکاری با این مجموعه کاملاً رضایت دارم. کیفیت اجرا، دقت در جزئیات و تعهد به زمان‌بندی بسیار قابل قبول بود.",
        },
              {
          id: 4,
          image: slide4,
          tinyImage: slideTiny1,
          productName: "صندلی",
          customerName: "فرنوش رمضانعلی",
          des: "کیفیت کار بسیار خوب بود و همه مراحل با دقت و نظم انجام شد. نتیجه نهایی دقیقاً چیزی بود که انتظار داشتم.",
        },
    ]
  return (
    <section id="testimonials">
      <div className="app-container">
        <div className="flex flex-col justify-center items-center gap-20 scroll-anim" style={{ "--from": "scale(0.9)" }}>
          <div className="text-center">
            <div className="text-[var(--brand-primary)]">بازخورد</div>
            <h2>نظر برخی از مشتریان</h2>
          </div>
       <SwiperSliderTestimonial items={slides}/>

        </div>
      </div>
    </section>
  );
};
export default Testimonials;
