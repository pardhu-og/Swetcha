// src/components/Certifications.jsx
import { useState } from "react";

const certificationsData = [
  {
    title: "Organic Certification",
    thumb: "https://via.placeholder.com/150x100.png?text=Organic+Cert",
    full: "https://via.placeholder.com/800x600.png?text=Organic+Certificate"
  },
  {
    title: "ISO 22000",
    thumb: "https://via.placeholder.com/150x100.png?text=ISO+22000",
    full: "https://via.placeholder.com/800x600.png?text=ISO+22000+Certificate"
  },
  {
    title: "APEDA Registration",
    thumb: "https://via.placeholder.com/150x100.png?text=APEDA",
    full: "https://via.placeholder.com/800x600.png?text=APEDA+Certificate"
  },
  {
    title: "FSSAI License",
    thumb: "https://via.placeholder.com/150x100.png?text=FSSAI",
    full: "https://via.placeholder.com/800x600.png?text=FSSAI+Certificate"
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-800 mb-12 text-center">
          Certifications
        </h3>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => setSelectedCert(cert)}
            >
              <img
                src={cert.thumb}
                alt={cert.title}
                className="w-40 h-28 object-cover rounded-lg shadow-md border border-gray-200 group-hover:scale-105 transition"
              />
              <p className="mt-3 text-gray-700 font-medium">{cert.title}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full relative p-4">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
                onClick={() => setSelectedCert(null)}
              >
                ✕
              </button>
              <img
                src={selectedCert.full}
                alt={selectedCert.title}
                className="w-full h-auto rounded-lg"
              />
              <p className="mt-4 text-center text-gray-700 font-semibold">
                {selectedCert.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
