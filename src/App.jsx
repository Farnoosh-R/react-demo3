import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';
import Home from './pages/home';
import Footer from './components/layout/footer';

export function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-anim");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("show");
          void entry.target.offsetWidth;
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, {
      threshold: 0.2,
    });
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [count, setCount] = useState(0)
  useScrollAnimation();
  

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
