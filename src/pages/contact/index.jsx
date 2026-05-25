import contact1 from "./assets/images/contact1.webp";
import contact2 from "./assets/images/contact2.webp";
import contact3 from "./assets/images/contact3.jpg";
import contact4 from "./assets/images/contact4.webp";
import contact5 from "./assets/images/contact5.webp";
import contact6 from "./assets/images/contact6.webp";
import contact7 from "./assets/images/contact7.webp";
import contact8 from "./assets/images/contact8.webp";
import contact9 from "./assets/images/contact9.jpg";
import contact10 from "./assets/images/contact10.jpg";
import contact12 from "./assets/images/contact12.webp";
import contact13 from "./assets/images/contact13.webp";
import Button from "../../components/ui/Button/Button";

const Contact = () => {
  return (
    <div id="contact" className="page ">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-4xl scroll-anim" style={{ "--from": "scale(0.9)" }}>
          <div className="flex gap-7 lg:p-22">
            <div className="flex-1">
              <div className="flex flex-col gap-7">
                <div className="rounded-4xl shadow-xl/20 overflow-hidden">
                  <img src={contact5} alt="" />
                </div>
                <div className="rounded-4xl shadow-xl/20 overflow-hidden">
                  <img src={contact2} alt="" />
                </div>
              </div>
            </div>
            <div className="flex-2 rounded-4xl shadow-xl/20 overflow-hidden">
              <img src={contact13} className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-20">
            <div>
              <div className="text-[var(--brand-primary)] tracking-[20px]">
                PANTO
              </div>
              <h2>اولین قدم برای تغییر فضا</h2>
            </div>
            <div className="lg:w-[90%]">
              <form className="mx-auto space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="نام"
                    className="w-full border border-[var(--brand-surface)] shadow-lg rounded-xl p-4 outline-none focus:border-[var(--brand-glow)] transition"
                  />

                  <input
                    type="text"
                    placeholder="نام خانوادگی"
                    className="w-full border border-[var(--brand-surface)] shadow-lg rounded-xl p-4 outline-none focus:border-[var(--brand-glow)] transition"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="شماره تماس"
                    className="w-full text-right border border-[var(--brand-surface)] shadow-lg rounded-xl p-4 outline-none focus:border-[var(--brand-glow)] transition"
                  />

                  <input
                    type="email"
                    placeholder="ایمیل"
                    className="w-full border border-[var(--brand-surface)] shadow-lg rounded-xl p-4 outline-none focus:border-[var(--brand-glow)] transition"
                  />
                </div>
                <textarea
                  rows="5"
                  placeholder="توضیحات"
                  className="w-full border border-[var(--brand-surface)] shadow-lg rounded-xl px-4 py-3 outline-none resize-none focus:border-[var(--brand-glow)] transition"
                />

                {/* <button
                type="submit"
                className="w-fit bg-[var(--brand-primary)] text-white py-3 rounded-xl transition-all duration-300 hover:opacity-90 hover:-translate-y-1"
              >
                ثبت درخواست
              </button> */}
                  <Button variant="pastel" >
                 ثبت درخواست مشاوره
                </Button>
              </form>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
