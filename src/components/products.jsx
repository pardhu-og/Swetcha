// src/components/products.jsx
import { useState, useEffect, useRef } from "react";
import teja from "../assets/images/teja.png";
import sannam from "../assets/images/Sannam.png";
import byadgi from "../assets/images/byadagi.png";
import guntur341 from "../assets/images/341.jpg";
import chilli1 from "../assets/images/chilli1.avif";
import turmeric1 from "../assets/images/turmeric.jpg";
import turmeric2 from "../assets/images/turmeric2.webp";
import copra1 from "../assets/images/copra1.webp";
import copra2 from "../assets/images/copra2.webp";
import uraddal from "../assets/images/uraddal.webp";
import urad2 from "../assets/images/urad2.jpg";
import { CircleArrowRight, CircleArrowLeft } from 'lucide-react';
const productsData = [
  {
    name: "Chillies",
    desc: "Premium quality Indian chillies exported worldwide.",
    placeholder: chilli1,
    variants: [
      {
        name: "Teja",
        photo: teja,
        details: (
          <>
            <div className="flex flex-wrap gap-2 mb-1">
              <span className="px-2 py-0.5 text-xs font-semibold bg-red-100 text-red-700 rounded-full">
                SHU: 50,000–170,000
              </span>
              <span className="px-2 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
                ASTA: 60–100
              </span>
            </div>
            Very high heat level, deep red glossy skin. Widely used in spice
            blends, pickles, sauces, and also valued in pharma and cosmetics.
          </>
        )
      },
      {
        name: "Sannam S4 (334)",
        photo: sannam,
        details: (
          <>
            <div className="flex flex-wrap gap-2 mb-1">
              <span className="px-2 py-0.5 text-xs font-semibold bg-red-100 text-red-700 rounded-full">
                SHU: 25,000–35,000
              </span>
              <span className="px-2 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
                ASTA: 50–80
              </span>
            </div>
            Moderately spicy, medium pods with thick skin. Popular in powders,
            pickles & sauces; strong demand in domestic & export markets.
          </>
        )
      },
      {
        name: "Byadgi",
        photo: byadgi,
        details: (
          <>
            <div className="flex flex-wrap gap-2 mb-1">
              <span className="px-2 py-0.5 text-xs font-semibold bg-red-100 text-red-700 rounded-full">
                SHU: 8,000–15,000
              </span>
              <span className="px-2 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
                ASTA: 100–160
              </span>
            </div>
            Mild heat level, long wrinkled pods, deep red. Famous for rich natural
            color, widely used in spice blends, sauces, and food coloring.
          </>
        )
      },
      {
        name: "Guntur-341",
        photo:guntur341,
        details: (
          <>
            <div className="flex flex-wrap gap-2 mb-1">
              <span className="px-2 py-0.5 text-xs font-semibold bg-red-100 text-red-700 rounded-full">
                SHU: 35,000–50,000
              </span>
              <span className="px-2 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
                ASTA: 40–60
              </span>
            </div>
            Hot and aromatic, long bright red pods with thick skin. Widely used
            in chili powders, sauces & pickles; popular in Asian & European
            markets.
          </>
        )
      }
    ]
  },

  {
    name: "Turmeric",
    desc: "Fresh and dried turmeric fingers sourced from trusted farms.",
    placeholder: turmeric1,
    variants: [
      {
        name: "",
        photo: turmeric2,
        details: (
          <>
          {/* Turmeric Card */}
<div className="bg-white rounded-2xl shadow-md p-6 flex flex-col space-y-4">
  {/* Product Title */}
  <h4 className="text-2xl font-bold text-emerald-800">Turmeric Fingers</h4>

  {/* Product Details */}
  <div>
    <h5 className="text-lg font-semibold text-emerald-700 mb-1">Product Details</h5>
    <ul className="list-disc list-inside text-gray-700">
      <li><span className="font-semibold">Product Name:</span> Whole Turmeric Finger</li>
      <li><span className="font-semibold">Origin:</span> India</li>
    </ul>
  </div>

  {/* Varieties */}
  <div>
    <h5 className="text-lg font-semibold text-emerald-700 mb-1">Varieties</h5>
    <ul className="list-disc list-inside text-gray-700">
      <li><span className="font-semibold">Maharashtra Turmeric:</span> Standard variety, bright yellow color</li>
      <li><span className="font-semibold">Salem Turmeric:</span> Polished variety with medium curcumin</li>
      <li><span className="font-semibold">Kaddapa Turmeric:</span> Large size, rich aroma</li>
      <li><span className="font-semibold">Nizamabad Turmeric:</span> Small to medium size</li>
    </ul>
  </div>

  {/* Key Features */}
  <div>
    <h5 className="text-lg font-semibold text-emerald-700 mb-1">Key Features</h5>
    <ul className="list-disc list-inside text-gray-700">
      <li>High curcumin content (2–5%) ensures vibrant color and health benefits.</li>
      <li>Polished and unpolished turmeric available based on requirement.</li>
      <li>Free from dust, stones, and foreign impurities.</li>
      <li>Suitable for grinding into powder, spice blends, medicinal uses, and curcumin extraction.</li>
    </ul>
  </div>

  {/* Disclaimer */}
  <p className="text-sm text-gray-600 italic mt-4">
    <strong className="text-gray-600">Disclaimer:</strong> Turmeric is not part of our immediate supply line yet. Full specifications, varieties, and packaging details will be added soon. Meanwhile, we are open to discussions, collaborations, and leads to build these product profiles faster.
  </p>

  {/* Optional Redirection */}
  <p className="text-sm text-gray-500 mt-2 text-center">
    ✨ For now, our primary product is <span className="font-semibold text-emerald-700">Dry Chillies</span>. 
    Please explore our chillies page for full details and ready availability.
  </p>
</div>

          </>
        )
      },
    ]
  },
  {
    name: "Urad Dal",
    desc: "Fresh and dried turmeric fingers sourced from trusted farms.",
    placeholder: uraddal,
    variants: [
      {
        name: "",
        photo: urad2,
        details: (
          <>
          {/* Urad Dal Card */}
<div className="bg-white rounded-2xl shadow-md p-6 flex flex-col space-y-4">
  {/* Product Title */}
  <h4 className="text-2xl font-bold text-emerald-800">Urad Dal</h4>

  {/* Product Details */}
  <div>
    <h5 className="text-lg font-semibold text-emerald-700 mb-1">Product Details</h5>
    <ul className="list-disc list-inside text-gray-700">
      <li><span className="font-semibold">Product Name:</span> Whole & Split Urad Dal</li>
      <li><span className="font-semibold">Origin:</span> India</li>
      <li><span className="font-semibold">Grade / Quality:</span> Graded, cleaned, free from foreign matters</li>
    </ul>
  </div>

  {/* Varieties / Forms */}
  <div>
    <h5 className="text-lg font-semibold text-emerald-700 mb-1">Varieties / Forms</h5>
    <ul className="list-disc list-inside text-gray-700">
      <li><span className="font-semibold">Whole with Skin:</span> Intact dals with outer skin / husk</li>
      <li><span className="font-semibold">Whole without Skin:</span> Whole dal with skin removed (polished)</li>
      <li><span className="font-semibold">Split with Skin:</span> Split halves retaining skin (black coating)</li>
      <li><span className="font-semibold">Split without Skin:</span> Split dal after removing skin (white inside)</li>
    </ul>
  </div>

  {/* Key Features */}
  <div>
    <h5 className="text-lg font-semibold text-emerald-700 mb-1">Key Features</h5>
    <ul className="list-disc list-inside text-gray-700">
      <li>High protein content, good source of dietary fiber.</li>
      <li>Carefully hulled, sorted and graded to avoid dust & stones.</li>
      <li>Available in polished/unpolished forms as per requirement.</li>
      <li>Suitable for dals, soups, soups mixes, dals & pulse blends.</li>
    </ul>
  </div>

  {/* Disclaimer */}
  <p className="text-sm text-gray-600 italic mt-4">
    <strong className="text-gray-600">Disclaimer:</strong> Urad Dal is not part of our immediate supply line yet. Full specifications, varieties, and packaging details will be added soon. Meanwhile, we are open to discussions, collaborations, and leads to build these product profiles faster.
  </p>

  {/* Optional Redirection Note */}
  <p className="text-sm text-gray-500 mt-2 text-center">
    ✨ For now, our primary product is <span className="font-semibold text-emerald-700">Dry Chillies</span>. 
    Please explore our chillies page for full details and ready availability.
  </p>
</div>

          </>
        )
      }
    ]
  },
  {
    name: "Copra",
    desc: "High quality dried coconuts and copra for multiple uses.",
    placeholder: copra1,
    variants: [
      {
        name: "",
        photo: copra2,
        details: (
          <>
          {/* Copra Card */}
<div className="bg-white rounded-2xl shadow-md p-6 flex flex-col space-y-4">
  {/* Title */}
  <h4 className="text-2xl font-bold text-emerald-800">Copra</h4>

    {/* Description / Additional Info */}
  <div className="text-gray-700">
    <p>
      Edible copra (also known as khopra or ball copra) is the dried meat or kernel of the coconut, processed from fully matured, freshly harvested nuts.  
      Copra is widely used in the extraction of coconut oil, as feed (copra meal), and in cosmetic & industrial applications.  
      Because of its high oil content, copra requires careful drying and handling to avoid moisture, mold, or spontaneous heating risks. 
    </p>
  </div>

  {/* Product Details & Specs */}
  <div>
    <h5 className="text-lg font-semibold text-emerald-700 mb-1">Product Specifications</h5>
    <ul className="list-disc list-inside text-gray-700">
      <li><span className="font-semibold">Product Name:</span> Dried Coconut Kernel (Copra)</li>
      <li><span className="font-semibold">Origin:</span> India</li>
      <li><span className="font-semibold">Moisture (max approximate):</span> ~5 % (for well dried copra) </li>
      <li><span className="font-semibold">Oil Content (approx):</span> 55–72 % depending on drying & quality </li>
      <li><span className="font-semibold">Drying Method:</span> Sun-drying, smoke drying or kiln drying </li>
    </ul>
  </div>

  {/* Varieties / Forms */}
  <div>
    <h5 className="text-lg font-semibold text-emerald-700 mb-1">Varieties / Forms</h5>
    <ul className="list-disc list-inside text-gray-700">
      <li><span className="font-semibold">Ball Copra:</span> Whole dried coconut kernel (complete) — edible copra made by drying whole kernel in shell or after dehusking.</li>
      <li><span className="font-semibold">Cut / Cup Copra:</span> Copra cut or “cup” pieces (half or partial nut pieces) for table or oil use.</li>
    </ul>
  </div>


  {/* Key Features */}
  <div>
    <h5 className="text-lg font-semibold text-emerald-700 mb-1">Key Features</h5>
    <ul className="list-disc list-inside text-gray-700">
      <li>Natural aroma of coconut retained through proper drying.</li>
      <li>Processed to remove foreign matter, stones, dust.</li>
      <li>Option of full ball or cut copra depending on buyer requirement.</li>
      <li>Suitable for oil extraction, edible copra, feed, cosmetics.</li>
    </ul>
  </div>

  {/* Disclaimer */}
  <p className="text-sm text-gray-600 italic mt-4">
    <strong className="text-gray-600">Disclaimer:</strong> Copra is not part of our immediate supply line yet. Full specifications, varieties, and packaging details will be added soon. Meanwhile, we are open to discussions, collaborations, and leads to build these product profiles faster.
  </p>

  {/* Redirection / Note */}
  <p className="text-sm text-gray-500 mt-2 text-center">
    ✨ For now, our primary product is <span className="font-semibold text-emerald-700">Dry Chillies</span>. 
    Please explore our chillies page for full details and ready availability.
  </p>
</div>

          </>
        )
      }
    ]
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const scrollRef = useRef(null);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [selectedProduct]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const newScroll =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-12 text-center">
          Our Products
        </h3>

        {/* Product Grid for Desktop */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {productsData.map((product) => (
            <button
              key={product.name}
              className="p-4 border rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center bg-white focus:outline-none focus:ring-2 focus:ring-green-500 hover:cursor-pointer hover:scale-101 transition duration-200"
              onClick={() => setSelectedProduct(product)}
              type="button"
            >
              <img
                src={product.placeholder}
                alt={product.name}
                className="mb-3 md:w-full md:h-36 object-cover rounded bg-gray-100"
              />
              <h4 className="text-xl font-bold mb-2">{product.name}</h4>
              <p className="text-gray-600 text-center">{product.desc}</p>
            </button>
          ))}
        </div>

        {/* Horizontal Scroll for Mobile */}
        <div className="relative sm:hidden">
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
          >
            {productsData.map((product) => (
              <button
                key={product.name}
                className="min-w-[80%] snap-center p-6 border rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => setSelectedProduct(product)}
                type="button"
              >
                <img
                  src={product.placeholder}
                  alt={product.name}
                  className="mb-3 w-40 h-32 object-cover rounded bg-gray-100"
                />
                <h4 className="text-xl font-bold mb-2">{product.name}</h4>
                <p className="text-gray-600 text-center">{product.desc}</p>
              </button>
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2  p-2 "
          >
            <CircleArrowLeft className="stroke-blue-500 fill-gray-100 shdow-md rounded"/>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2  p-2 rounded-full "
          >
            <CircleArrowRight className="stroke-blue-500 fill-gray-100 shdow-md rounded"/>
          </button>
        </div>

        {/* Modal for Variants */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 hover:cursor-pointer hover:scale-105 text-lg"
                onClick={() => setSelectedProduct(null)}
              >
                ✕
              </button>
              <h4 className="text-2xl font-bold mb-6 text-emerald-700 text-center">
                {selectedProduct.name} Varieties
              </h4>
              <div className={`grid  gap-6 mb-6 ${selectedProduct.name !== "Chillies" ? "md:grid-cols-1" : "md:grid-cols-2"}`}>
                {selectedProduct.variants.map((variant, idx) => (
                  <div
                    key={idx}
                    className={`p-4 border rounded-lg shadow-sm hover:shadow-md transition items-center space-x-4 bg-gray-50 ${selectedProduct.name === "Chillies" ? "flex" : "flex-col"} `}
                  >
                    <img
                      src={variant.photo}
                      alt={variant.name}
                      className={`rounded bg-gray-100 ${selectedProduct.name === "Chillies" ? "w-30 h-30 object-cover" : "w-full h-48 object-cover"}`}
                    />
                    <div>
                      <div className="font-semibold text-lg">
                        {variant.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {variant.details}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex justify-center space-x-4">
                {/* Download Brochure */}
                {selectedProduct.name == "Chillies" && <a
                  href={`/brochures/${selectedProduct.name.toLowerCase()}.pdf`}
                  download
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition text-center"
                >
                  Download Brochure
                </a>}
                {/* Enquire Now */}

                <a
                  href={selectedProduct.name === `Chillies`?`#contact`:`#products`}
                  onClick={() => setSelectedProduct(null)}
                  className="inline-block px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition text-center"
                >
                  {selectedProduct.name === `Chillies`?`Request a Quote`:`Explore Dry Chillies`}
                </a>

                
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
