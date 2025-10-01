// Banner.jsx
import { useEffect } from "react";
import chilliimg from "../assets/images/banner1.avif";
import turmericimg from "../assets/images/banner2.jpg";
import uraddalimg from "../assets/images/banner3.webp";
import copraimg from "../assets/images/banner4.jpg";
import logo from "../assets/images/logo2.png"
import logo3 from "../assets/images/logo3.png"
import { u } from "framer-motion/client";

export default function Banner() {
  useEffect(() => {
    if (window.innerWidth >= 768) {
      if (!localStorage.getItem("bannerAnimated")) {
        const imgs = document.querySelectorAll(".banner-img");
        imgs.forEach((img, i) => {
          setTimeout(() => {
            img.classList.add("animate-in");
          }, i * 300); // staggered
        });
        localStorage.setItem("bannerAnimated", "true");
      } else {
        document.querySelectorAll(".banner-img").forEach((img) => {
          img.classList.add("animate-in");
        });
      }
    } else {
      // mobile → always visible instantly
      document.querySelectorAll(".banner-img").forEach((img) => {
        img.classList.add("animate-in");
      });
    }
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row justify-between items-center px-5 md:px-[10%] py-16 md:py-20 bg-gradient-to-br from-[#fdf3e7] to-white overflow-hidden">
      {/* Mobile Background with Overlay */}
      <div className="absolute inset-0 md:hidden bg-black/40">
        <div className="grid grid-cols-2 grid-rows-2 gap-1 w-full h-full">
          <img
            src={chilliimg}
            alt="Indian Spices"
            className="w-full h-full object-cover"
          />
          <img
            src={turmericimg}
            alt="Turmeric"
            className="w-full h-full object-cover"
          />
          <img
            src={uraddalimg}
            alt="Urad Dal"
            className="w-full h-full object-cover"
          />
          <img
            src={copraimg}
            alt="Copra"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Slightly stronger overlay + gradient only for mobile */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Banner Content */}
      <div className="relative z-10 flex-1 max-w-full md:max-w-[50%] text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold font-[cursive] lg:text-[2rem] xl:text-[2.8rem] md:font-bold text-white md:text-emerald-900 mb-2">
          <img src={logo} alt="logo" className="hidden md:inline-block w-18 rounded-full mr-1"/>
          <img src={logo3} alt="logo" className="opacity-85 inline-block  md:hidden w-13 rounded-full mr-1 "/>
           Swetcha Naturals
        </h1>
        <p className="text-md xl:text-lg text-white md:text-gray-600 mb-6 ml-8">
          Trusted Exporter of Indian Spices & Agro Products.
        </p>
        <a
          href="#products"
          className="inline-block px-4 md:px-6 py-2 md:py-3 bg-[#e67e22] text-white font-bold rounded-lg shadow hover:bg-[#d35400] transition md:ml-28 xl:ml-36"
        >
          Explore Products
        </a>
      </div>

      {/* Right-side Images (Desktop only) */}
      <div className="hidden md:flex flex-1 justify-center items-center">
        <div className="grid grid-cols-2 gap-4">
          <img
            src={chilliimg}
            alt="Indian Spices"
            className="banner-img w-full h-52 object-cover rounded-xl shadow-md transform opacity-1 scale-95 transition-all duration-1000 ease-out"
          />
          <img
            src={turmericimg}
            alt="Turmeric"
            className="banner-img w-full h-52 object-cover rounded-xl shadow-md transform opacity-1 scale-95 transition-all duration-1000 ease-out"
          />
          <img
            src={uraddalimg}
            alt="Urad Dal"
            className="banner-img w-full h-52 object-cover rounded-xl shadow-md transform opacity-1 scale-95 transition-all duration-1000 ease-out"
          />
          <img
            src={copraimg}
            alt="Copra"
            className="banner-img w-full h-52 object-cover rounded-xl shadow-md transform opacity-1 scale-95 transition-all duration-1000 ease-out"
          />
        </div>
      </div>
    </section>
  );
}
