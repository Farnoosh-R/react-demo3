import { Link } from "react-router-dom";
import article1 from "./assets/images/article1.jpg";
import {
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { RiPlayFill } from "react-icons/ri";
import PostCard from "../../components/blog/PostCard";
import { getPosts } from "../../services/wordpressApi";
import { useEffect, useState } from "react";
import Button from "../../components/ui/Button/Button";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div id="blog" className="page">
      <div className="app-container">
        <div className="flex flex-col gap-10 lg:gap-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-20">
            <div className="xl:h-[700px]">
              <div className="relative lg:absolute top-[15%] -right-12 lg:w-[50%] rounded-4xl shadow-2xl overflow-hidden">
                <img
                  src={article1}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute top-[10%] right-[10%] z-10 flex flex-col gap-5">
                  <div>
                    <div className="text-[var(--brand-primary)]">خط و فضا</div>
                    <h2>ژورنال پنتو</h2>
                  </div>
                  <div className="text-lg text-[var(--text-secondary)] leading-7">
                    <p>نگاهی به معماری داخلی، چیدمان و زیبایی در سادگی</p>
                    <p>ترکیبی از نور، متریال و حس زندگی معاصر</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:gap-3 mt-10 lg:mt-0">
              <h1 className="text-[var(--brand-primary)]">2026</h1>
              <h3>ترندها، ایده‌ها</h3>
              <div className="leading-7 text-lg text-[var(--text-secondary)]">
                <div>و انتخاب‌هایی برای خلق فضایی هماهنگ و دلنشین</div>
                <div>
                جایی برای کشف نگاه‌های تازه به فضا، چیدمان و سبک زندگی معاصر.
از انتخاب متریال و ترکیب رنگ‌ها تا نقش نور و جزئیاتی که می‌توانند فضایی ساده را به محیطی گرم، آرام و ماندگار تبدیل کنند؛
                </div>
                <div></div>
              </div>
              <div className="flex gap-7 justify-between mt-10">
                <div className="flex lg:flex-col items-center gap-3 2xl:gap-15 text-[var(--brand-primary)] w-fit">
                  <a href="#" className="hover:-translate-y-[5px]">
                    <FaTelegramPlane size={20} />
                  </a>
                  <a href="#" className="hover:-translate-y-[5px]">
                    <FaLinkedinIn size={20} />
                  </a>
                  <a href="#" className="hover:-translate-y-[5px]">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="hover:-translate-y-[5px]">
                    <FaYoutube size={20} />
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-5">
                    <div className="text-[var(--text-secondary)]">تماشای پروژه ها</div>
                    <div className="bg-[var(--brand-glow)] p-3 rounded-full shadow-2xl cursor-pointer">
                      <RiPlayFill color="white" size={20} />
                    </div>
                    <Button variant="secondary">
                      <div className="text-lg">ارتباط با مشاور</div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
