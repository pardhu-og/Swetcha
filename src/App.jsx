import { useEffect, useState } from "react";
import About from "./components/about";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import Products from "./components/products";
import Certifications from "./components/certifications";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.querySelector("section")?.offsetHeight || 0;
      if (window.scrollY > bannerHeight - 80) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {showNav && <Navbar/>} 
      <Banner />
      <About />
      <Products />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
