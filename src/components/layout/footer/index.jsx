import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className="bg-[var(--brand-surface)] p-20 md:mt-40">
      <div className="app-container">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-9 justify-center">
          <div className="flex flex-col gap-3">
            <h3 className="text-[var(--brand-accent)]">PANTO</h3>
            <div className="leading-8">
              مزیت همکاری با ما، دریافت خدماتی حرفه‌ای، راحت و قابل اعتماد در
              کنار بهره‌مندی از امکانات کامل و استاندارد است. ما تلاش می‌کنیم با
              ایجاد فضایی منظم، پشتیبانی دقیق و توجه به جزئیات، تجربه‌ای متفاوت
              و رضایت‌بخش برای شما فراهم کنیم تا تمامی مراحل کار با آرامش، کیفیت
              و اطمینان بیشتری انجام شود.
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <h4 className="text-[var(--brand-primary)]">خدمات</h4>
            <Link to="#" className="hover:text-[var(--brand-muted)]">
              طراحی داخلی
            </Link>
            <Link to="#" className="hover:text-[var(--brand-muted)]">
              ساخت و اجرای مبلمان
            </Link>
            <Link to="#" className="hover:text-[var(--brand-muted)]">
              مشاوره و پشتیبانی
            </Link>
          </div>
          <div className="flex flex-col items-center gap-5">
            <h4 className="text-[var(--brand-primary)]">محصولات</h4>
            <Link to="#" className="hover:text-[var(--brand-muted)]">
              مبلمان
            </Link>
            <Link to="#" className="hover:text-[var(--brand-muted)]">
              سرویس خواب
            </Link>
            <Link to="#" className="hover:text-[var(--brand-muted)]">
              سرویس اداری
            </Link>
          </div>
          <div className="flex flex-col items-center gap-5">
            <h4 className="text-[var(--brand-primary)]">ما را دنبال کنید</h4>
            <Link to="#" className="hover:text-[var(--brand-muted)]">
              <div className="flex items-center gap-2">
                <div>Facebook</div>
                <FaFacebook size={20} />
              </div>
            </Link>
            <Link to="#" className="hover:text-[var(--brand-muted)]">
              <div className="flex items-center gap-2">
                <div>Instagram</div>
                <FaInstagram size={20} />
              </div>
            </Link>
            <Link to="#" className="hover:text-[var(--brand-muted)]">
              <div className="flex items-center gap-2">
                <div>Linked in</div>
                <FaLinkedin size={20} />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-1 mt-20">
          <div className="text-[var(--brand-primary)]">Farnoosh</div>
          <div className="flex gap-1 text-[var(--brand-muted)]">
            <div>Designed & Developed by</div>
          <div>|</div>
          <div>2026©</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
