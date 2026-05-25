import { HiCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import experience from "../../pages/home/assets/images/experience.png";

const Experience = () => {
  return (
    <section id="experience" className="relative">
      <div className="app-container">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 place-items-center">
          <div className="xl:h-[500px]">
            <div className="hidden xl:block absolute right-0 -top-13 w-120 h-50 bg-[var(--brand-surface)] rounded-2xl "></div>
            <div className="hidden xl:block absolute right-151 top-15 w-21 h-90 bg-[var(--brand-surface)] rounded-tl-2xl rounded-bl-2xl z-10"></div>
            <div className="hidden 2xl:block absolute right-125 -top-5 w-90 h-90 border border-[var(--brand-secondary)] rounded-tl-2xl rounded-bl-2xl z-10"></div>
            <img src={experience} className="relative xl:absolute right-0 top-5 -scale-x-100 shadow-[0_25px_50px_-10px_rgba(154,79,0,0.41)] mb-10" alt="" />
          </div>
          <div className="flex flex-col gap-7 scroll-anim" style={{ "--from": "translateX(-100px)" }}>
            <div>
              <div className="text-[var(--brand-primary)]">تجربه آرامش</div>
              <h2>تجربه‌ای متفاوت و حرفه‌ای</h2>
              <h2>برای شما</h2>
            </div>
            <div className="flex flex-col gap-3 text-lg">
              <div className="flex gap-2">
                <div>
                  <HiCheck className="text-[var(--brand-accent)]" size={25} />
                </div>
                <div>
                  در کنار ما، کیفیت و آرامش را هم‌زمان تجربه خواهید کرد.
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <HiCheck className="text-[var(--brand-accent)]" size={25} />
                </div>
                <div>
                  ما با تکیه بر تخصص، طراحی مدرن و اجرای دقیق، بهترین خدمات را
                  ارائه می‌دهیم.
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <HiCheck className="text-[var(--brand-accent)]" size={25} />
                </div>
                <div>
                  هدف ما خلق تجربه‌ای متفاوت، حرفه‌ای و ماندگار برای شماست.
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <HiCheck className="text-[var(--brand-accent)]" size={25} />
                </div>
                <div>اعتماد شما، انگیزه ما برای ارائه بهترین‌هاست.</div>
              </div>
            </div>
            <Link
              to="#"
              className="flex gap-3 items-center text-[var(--brand-primary)]"
            >
              <HiArrowLongRight size={20} />
              <div>مشاهده همه محصولات</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
