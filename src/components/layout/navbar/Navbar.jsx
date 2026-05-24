import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuItem from "./MenuItem.jsx";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button.jsx";
// import logo from "../../../../src/assets/images/logo.png";

const menuData = [
  {
    label: "صفحه اصلی",
    path: "/",
  },
  {
    label: "درباره ما",
    path: "/about",
  },
  {
    label: "تماس با ما",
    path: "/contact",
  },
  {
    label: "مجله اینترنتی",
    path: "/blog",
  },
  {
    label: "خدمات",
    children: [
      {
        label: "تعمیرات مبل",
        path: "repair",
      },
      {
        label: "شرایط ارسال",
        path: "shipping",
      },
    ],
  },
  {
    label: "فروشگاه",
    children: [
      {
        label: "مبلمان خانگی",
        children: [
          {
            label: "مبل راحتی",
            path: "sofa",
          },
          {
            label: "مبل کلاسیک",
            path: "clasic",
          },
          {
            label: "مبل چستر",
            path: "chester",
          },
        ],
      },
      {
        label: "سرویس ها",
        children: [
          {
            label: "سرویس خواب",
            path: "sleeping-sercive",
          },
          {
            label: "سرویس ناهار خوری",
            path: "dining-service",
          },
          {
            label: "آیینه کنسول",
            path: "console",
          },
          {
            label: "میز تلوزیون",
            path: "tv",
          },
        ],
      },
      {
        label: "تورهای آمریکا",
        path: "america",
      },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between h-[80px] transition-all duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Right Side */}
      <div className="flex w-full app-container justify-between items-center gap-4">
        <Button variant="primary" type="outline">
          <FaPhone style={{ marginLeft: "5px" }} />
          <div className="tracking-widest">021-12345678</div>
        </Button>

        {/* Menu */}
        <div
          className={`
    absolute lg:static
    top-full left-0
    w-full lg:w-auto
    transition-all duration-300
    bg-[var(--text-primary)] lg:bg-transparent
    lg:opacity-100 lg:visible lg:pointer-events-auto

    ${mobileOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
  `}
        >
          <ul
            className="flex flex-col lg:flex-row gap-2 lg:gap-6 p-4 lg:p-0"
            onClick={() => setMobileOpen(false)}
          >
            {menuData.map((item) => (
              <MenuItem key={item.label} item={item} />
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/">
          {/* <img src={logo} className="w-25" /> */}
          <h3 className="text-white">PANTO</h3>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-2xl"
        >
          <GiHamburgerMenu color="white"/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
