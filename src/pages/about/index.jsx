import { ImOffice } from "react-icons/im";
import Button from "../../components/ui/Button/Button";
import about3 from "./assets/images/about3.webp";
import about4 from "./assets/images/about4.png";
import about5 from "./assets/images/about5.png";
import {
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

const About = () => {
  return (
    <div id="about" className="page">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 scroll-anim" style={{ "--from": "scale(0.9)" }}>
          <div className="flex flex-col gap-10">
            <div>
              <div className="text-[var(--brand-primary)] tracking-[20px]">
                PANTO
              </div>
              <h2>نگاه ما به طراحی</h2>
            </div>
            <p className="leading-12">
              شرکت ما با تلفیقی از خلاقیت، تجربه و شناخت دقیق از اصول معماری
              داخلی، فضایی متفاوت و الهام‌بخش برای زندگی و کار شما خلق می‌کند.
              ما باور داریم هر فضا می‌تواند بازتابی از شخصیت، سلیقه و سبک زندگی
              افراد باشد؛ به همین دلیل در تمامی پروژه‌ها، طراحی منحصربه‌فرد و
              توجه به جزئیات را در اولویت قرار می‌دهیم. تیم ما با بهره‌گیری از
              متریال باکیفیت و ایده‌های مدرن، محیط‌هایی زیبا، کاربردی و ماندگار
              طراحی می‌کند. از بازسازی و طراحی منازل مسکونی گرفته تا فضاهای
              اداری و تجاری، هدف ما ایجاد تجربه‌ای آرام، لوکس و هماهنگ با
              نیازهای شماست. همراهی با مشتریان در تمام مراحل پروژه، از
              ایده‌پردازی تا اجرا، بخشی از تعهد حرفه‌ای ما به کیفیت و رضایت کامل
              شماست.
            </p>
            <Button variant="pastel">ارتباط با مشاور</Button>
            <div className="flex justify-between text-center gap-4">
              <div className="flex flex-col gap-3">
                <h2 className="text-[var(--brand-glow)]">3200+</h2>
                <div className="text-[var(--text-secondary)]">مشتریان راضی</div>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-[var(--brand-glow)]">700+</h2>
                <div className="text-[var(--text-secondary)]">دکوراسیون یونیک</div>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-[var(--brand-glow)]">10+</h2>
                <div className="text-[var(--text-secondary)]">شعبه در ایران</div>
              </div>
            </div>
            
          </div>
          <div className="flex gap-12">
            <div className="flex-2">
              <div className="flex  flex-col gap-15">
                <div className="flex flex-col gap-3 rounded-4xl shadow-2xl p-5">
                  <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                      <h3>+ 30,000</h3>
                      <FiTrendingUp
                        className="text-[var(--brand-primary)]"
                        size={20}
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="w-[30px] h-[30px] rounded-full bg-[var(--brand-glow)] shadow-xl/20"></div>
                      <div className="w-[30px] h-[30px] rounded-full bg-[#a98024] shadow-xl/20"></div>
                      <div className="w-[30px] h-[30px] rounded-full bg-[#2a2f2c] shadow-xl/20"></div>
                    </div>
                  </div>
                  <hr className="text-[var(--text-muted)] opacity-30"></hr>
                  <div className="text-[var(--text-secondary)] leading-8">
                    در سال ۱۴۰۴ با ارائه خدمات حرفه‌ای و طراحی مدرن، موفق به کسب
                    امتیاز ۵ ستاره و رضایت مشتریان شدیم.
                  </div>
                </div>
                <div className="rounded-4xl shadow-2xl overflow-hidden">
                  <img src={about3} alt="" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-10">
                <div className="rounded-4xl shadow-2xl overflow-hidden">
                  <img src={about4} alt="" />
                </div>
                <div className=" rounded-4xl shadow-2xl overflow-hidden">
                  <img src={about5} alt="" />
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <div className="text-[var(--brand-muted)]">
                    ما را دنبال کنید
                  </div>
                  <div className="flex gap-9 text-[var(--brand-primary)]">
                    <a
                      href="#"
                      className="hover:scale-110 hover:-translate-y-1 hover:text-[var(--brand-primary)] hover:drop-shadow-md"
                    >
                      <FaTelegramPlane size={20} />
                    </a>
                    <a
                      href="#"
                      className="hover:scale-110 hover:-translate-y-1 hover:text-[var(--brand-primary)] hover:drop-shadow-md"
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                    <a
                      href="#"
                      className="hover:scale-110 hover:-translate-y-1 hover:text-[var(--brand-primary)] hover:drop-shadow-md"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="hover:scale-110 hover:-translate-y-1 hover:text-[var(--brand-primary)] hover:drop-shadow-md"
                    >
                      <FaYoutube size={20} />
                    </a>
                  </div>
                  <div className="text-[var(--brand-muted)]">
                    info@panto.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
