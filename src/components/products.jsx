// src/components/products.jsx
import { useState } from "react";

const productsData = [
  {
    name: "Chillies",
    desc: "Premium quality Indian chillies exported worldwide.",
    placeholder: "https://img.freepik.com/free-photo/red-hot-chilli-pepper-isolated_144627-15365.jpg",
    variants: [
      {
        name: "Teja",
        photo: "https://img.freepik.com/free-photo/red-chilli-peppers_144627-13457.jpg",
        details: "High pungency, vibrant red color, widely used in spice powders."
      },
      {
        name: "Byadgi",
        photo: "https://img.freepik.com/free-photo/dry-red-chilli-peppers_144627-16301.jpg",
        details: "Known for deep red color, mild heat, perfect for natural coloring."
      }
    ]
  },
  {
    name: "Turmeric",
    desc: "Fresh and dried turmeric fingers sourced from trusted farms.",
    placeholder: "https://img.freepik.com/free-photo/turmeric-powder-fresh-turmeric-roots_1150-28479.jpg",
    variants: [
      {
        name: "Erode Turmeric",
        photo: "https://img.freepik.com/free-photo/turmeric-powder-fresh-roots_1150-28478.jpg",
        details: "Bright yellow color, high curcumin content."
      },
      {
        name: "Salem Turmeric",
        photo: "https://img.freepik.com/free-photo/heap-turmeric-powder-spoon_1150-29181.jpg",
        details: "Popular variety from Tamil Nadu with strong aroma."
      }
    ]
  },
  {
    name: "Coconut",
    desc: "High quality dried coconuts and copra for multiple uses.",
    placeholder: "https://img.freepik.com/free-photo/top-view-coconuts-white-background_23-2148234395.jpg",
    variants: [
      {
        name: "Dried Copra",
        photo: "https://img.freepik.com/free-photo/coconut-pieces_144627-18354.jpg",
        details: "Used in oil extraction, rich in taste."
      },
      {
        name: "Ball Copra",
        photo: "https://img.freepik.com/free-photo/coconut-half_144627-18714.jpg",
        details: "Round dried coconut, preferred for religious and culinary uses."
      }
    ]
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-800 mb-12 text-center">
          Our Products
        </h3>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <button
              key={product.name}
              className="p-6 border rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => setSelectedProduct(product)}
              type="button"
            >
              <img
                src={product.placeholder}
                alt={product.name}
                className="mb-3 w-24 h-24 object-cover rounded-full bg-gray-100"
              />
              <h4 className="text-xl font-bold mb-2">{product.name}</h4>
              <p className="text-gray-600 text-center">{product.desc}</p>
            </button>
          ))}
        </div>

        {/* Modal for Variants */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-6 relative">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
                onClick={() => setSelectedProduct(null)}
              >
                ✕
              </button>
              <h4 className="text-2xl font-bold mb-6 text-emerald-700 text-center">
                {selectedProduct.name} Varieties
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {selectedProduct.variants.map((variant, idx) => (
                  <div
                    key={idx}
                    className="p-4 border rounded-lg shadow-sm hover:shadow-md transition flex items-center space-x-4 bg-gray-50"
                  >
                    <img
                      src={variant.photo}
                      alt={variant.name}
                      className="w-20 h-20 object-cover rounded bg-gray-100"
                    />
                    <div>
                      <div className="font-semibold text-lg">{variant.name}</div>
                      <div className="text-gray-600">{variant.details}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
