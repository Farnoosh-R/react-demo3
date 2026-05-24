import { HiCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import material1 from "../../pages/home/assets/images/material1.png";
import material2 from "../../pages/home/assets/images/material2.png";
import material3 from "../../pages/home/assets/images/material3.png";

const Material = () => {
  return (
    <section id="material" className="relative">
      <div className="app-container">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 place-items-center items-center">
          <div className="flex flex-col gap-7 mt-20">
            <div>
              <div className="text-[var(--brand-primary)]">مواد اولیه</div>
              <h2>ترکیبی از سادگی،</h2>
              <h2>استحکام و ماندگاری</h2>
              <h2>در هر جزئیات طراحی</h2>
            </div>
            <div className="flex flex-col gap-3 text-lg">
              <p className="leading-12">
                ترکیبی از سادگی، استحکام و ماندگاری در هر جزئیات طراحی، با دقت
                بالا و توجه ویژه به کیفیت در تمامی مراحل ساخت شکل می‌گیرد تا
                محصول نهایی علاوه بر زیبایی ظاهری، دوام و عملکرد طولانی‌مدت
                داشته باشد و تجربه‌ای قابل اعتماد، کاربردی و در عین حال چشم‌نواز
                برای شما ایجاد کند.
              </p>
            </div>
            <Link
              to="#"
              className="flex gap-3 items-center text-[var(--brand-primary)]"
            >
              <HiArrowLongRight size={20} />
              <div>مشاهده همه محصولات</div>
            </Link>
          </div>
          <div className="relative xl:absolute left-0 top-0">
            <div className="hidden xl:block absolute left-0 -top-15 w-90 h-50 bg-[var(--brand-surface)] rounded-2xl"></div>
            <div className="hidden 2xl:block absolute left-140 -top-10 w-75 h-45 border border-[var(--brand-secondary)] rounded-tr-2xl rounded-br-2xl z-10"></div>
            <div className="flex gap-10">
              <div className="flex flex-col gap-10">
                <img src={material2} className="shadow-xl" alt="" />
                <img src={material3} className="shadow-xl" alt="" />
              </div>
              <img src={material1} className="-scale-x-100 shadow-[0_25px_50px_-10px_rgba(154,79,0,0.41)]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Material;
