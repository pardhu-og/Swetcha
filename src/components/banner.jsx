// Banner.jsx
import { useEffect } from "react";

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
      <div className="absolute inset-0 md:hidden">
        <div className="grid grid-cols-2 gap-2 w-full h-full">
          <img
            src="https://img.freepik.com/free-photo/bowl-full-hot-peppers_1127-112.jpg"
            alt="Indian Spices"
            className="w-full h-40 object-cover"
          />
          <img
            src="https://t3.ftcdn.net/jpg/01/82/27/42/360_F_182274289_RvpPTYZmC3n98ZXuH85d31XBfyEhk6b1.jpg"
            alt="Turmeric"
            className="w-full h-40 object-cover"
          />
          <img
            src="https://spicebasket.com/cdn/shop/products/uzhunnu-dal-whole-urad-400g-458218.jpg?v=1708470118"
            alt="Urad Dal"
            className="w-full h-40 object-cover"
          />
          <img
            src="https://media.istockphoto.com/id/1181621477/photo/dry-coconut-khopara-for-sale-in-market-pune-n.jpg?s=612x612&w=0&k=20&c=dv6WQxGKznjhqx89_9EjTwu910log1JrzbvPBT3JxHs="
            alt="Copra"
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Banner Content */}
      <div className="relative z-10 flex-1 max-w-full md:max-w-[50%] text-center md:text-left">
        <h1 className="text-3xl md:text-[2.8rem] font-bold text-white md:text-emerald-900 mb-5">
          Swetcha Naturals
        </h1>
        <p className="text-lg text-white md:text-gray-600 mb-6">
          Trusted Exporter of Indian Spices & Agro Products.
        </p>
        <a
          href="#products"
          className="inline-block px-6 py-3 bg-[#e67e22] text-white font-bold rounded-lg shadow hover:bg-[#d35400] transition"
        >
          Explore Products
        </a>
      </div>

      {/* Right-side Images (Desktop only) */}
      <div className="hidden md:flex flex-1 justify-center items-center">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://img.freepik.com/free-photo/bowl-full-hot-peppers_1127-112.jpg"
            alt="Indian Spices"
            className="banner-img w-full h-52 object-cover rounded-xl shadow-md transform opacity-0 scale-95 transition-all duration-1000 ease-out"
          />
          <img
            src="https://t3.ftcdn.net/jpg/01/82/27/42/360_F_182274289_RvpPTYZmC3n98ZXuH85d31XBfyEhk6b1.jpg"
            alt="Turmeric"
            className="banner-img w-full h-52 object-cover rounded-xl shadow-md transform opacity-0 scale-95 transition-all duration-1000 ease-out"
          />
          <img
            src="https://spicebasket.com/cdn/shop/products/uzhunnu-dal-whole-urad-400g-458218.jpg?v=1708470118"
            alt="Urad Dal"
            className="banner-img w-full h-52 object-cover rounded-xl shadow-md transform opacity-0 scale-95 transition-all duration-1000 ease-out"
          />
          <img
            src="https://media.istockphoto.com/id/1181621477/photo/dry-coconut-khopara-for-sale-in-market-pune-n.jpg?s=612x612&w=0&k=20&c=dv6WQxGKznjhqx89_9EjTwu910log1JrzbvPBT3JxHs="
            alt="Copra"
            className="banner-img w-full h-52 object-cover rounded-xl shadow-md transform opacity-0 scale-95 transition-all duration-1000 ease-out"
          />
        </div>
      </div>
    </section>
  );
}
