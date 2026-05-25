import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

const WhyChoosingUs = () => {
  return (
    <section id="why-choosing-us" >
      <div className="app-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 leading-9 items-center">
           <div className="flex flex-col gap-3">
             <h2>چرا مشتریان</h2>
            <div className="flex">
              <h2>ما را انتخاب می کنند</h2>
            <span className="text-5xl text-[var(--brand-primary)]">...</span>
            </div>
           </div>
          <div className="flex flex-col gap-3 scroll-anim" style={{ "--from": "translateX(-50px)" }}>
            <h4 className="">طراحی اختصاصی و منحصربه‌فرد</h4>
            <div>
              هر فضا با توجه به سلیقه، نیاز و سبک زندگی شما به‌صورت کاملاً
              اختصاصی طراحی می‌شود تا نتیجه نهایی دقیقاً همان چیزی باشد که تصورش
              را داشتید.
            </div>
            <Link
              to="#"
              className="flex gap-3 items-center text-[var(--brand-primary)]"
            >
              <HiArrowLongRight size={20} />
              <div>اطلاعات بیشتر</div>
            </Link>
          </div>
          <div className="flex flex-col gap-3 scroll-anim" style={{ "--from": "translateX(-150px)" }}>
            <h4 className="">اجرای دقیق و باکیفیت</h4>
            <div>
              تمام مراحل اجرای دکوراسیون با دقت بالا، استفاده از متریال باکیفیت
              و نظارت کامل انجام می‌شود تا نتیجه نهایی بدون نقص و ماندگار باشد.
            </div>
            <Link
              to="#"
              className="flex gap-3 items-center text-[var(--brand-primary)]"
            >
              <HiArrowLongRight size={20} />
              <div>اطلاعات بیشتر</div>
            </Link>
          </div>
          <div className="flex flex-col gap-3 scroll-anim" style={{ "--from": "translateX(-250px)" }}>
            <h4 className="">ترکیب خلاقیت و تجربه</h4>
            <div>
              با تکیه بر تجربه و ایده‌های خلاقانه، فضاهایی طراحی می‌کنیم که
              علاوه بر زیبایی، کاربردی و کاملا هماهنگ با استانداردهای روز طراحی
              باشند.
            </div>
            <Link
              to="#"
              className="flex gap-3 items-center text-[var(--brand-primary)]"
            >
              <HiArrowLongRight size={20} />
              <div>اطلاعات بیشتر</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChoosingUs;
