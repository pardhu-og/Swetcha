// src/components/Certifications.jsx
import { useState, useEffect, useRef } from "react";
import iecthumb from "../assets/images/IEC-thumb.jpg";
import iec from "../assets/images/IEC.jpg";
import spice from "../assets/images/spice.jpg";
import spicethumb from "../assets/images/spice-thumb.jpg";
import fassaithumb from "../assets/images/fassai-thumb.jpg";
import fassai from "../assets/images/fassai.jpg";
import { CircleArrowRight, CircleArrowLeft } from "lucide-react";

const certificationsData = [
  {
    title: "IEC Certificate",
    thumb: iecthumb,
    full: iec
  },
  {
    title: "Spice Board of India",
    thumb: spicethumb,
    full: spice
  },
  {
    title: "FSSAI",
    thumb: fassaithumb,
    full: fassai
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const scrollRef = useRef(null);

  // Disable background scroll when modal open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [selectedCert]);

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
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-12 text-center">
          Certifications
        </h3>

      {/* Certificates List Desktop */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-10">
        {certificationsData.map((cert, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => setSelectedCert(cert)}
          >
            <img
              src={cert.thumb}
              alt={cert.title}
              className="w-56 h-72 object-fill rounded-lg shadow-md border border-gray-200 hover:border-gray-400 transition cursor-disabled"
            />
            <p className="mt-4 text-gray-700 font-medium text-lg">{cert.title}</p>
          </div>
        ))}
      </div>

        {/* Mobile Horizontal Scroll with Arrows */}
        <div className="relative sm:hidden">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="min-w-[100%]  snap-center flex-shrink-0 flex flex-col items-center cursor-pointer group"
                onClick={() => setSelectedCert(cert)}
              >
                <img
                  src={cert.thumb}
                  alt={cert.title}
                  className="w-[60vw] h-64 object-fit rounded-lg shadow-md border border-gray-400 group-hover:scale-105 transition"
                />
                <p className="mt-3 text-gray-700 font-medium">{cert.title}</p>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2"
          >
            <CircleArrowLeft className="stroke-blue-500 fill-gray-100  rounded" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2"
          >
            <CircleArrowRight className="stroke-blue-500 fill-gray-100  rounded" />
          </button>
        </div>

        {/* Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="bg-white/90 rounded-2xl shadow-2xl max-w-4xl w-full relative p-6 flex flex-col max-h-[90vh]">
              {/* Close Button */}
              <button
                className="absolute top-1 right-2 text-gray-600 hover:text-red-500 text-xl font-bold hover:cursor-pointer hover:scale-110 transition"
                onClick={() => setSelectedCert(null)}
              >
                ✕
              </button>

              {/* Scrollable Certificate */}
              <div className="overflow-auto flex-1">
                <img
                  src={selectedCert.full}
                  alt={selectedCert.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Title */}
              <p className="mt-4 text-center text-gray-800 font-semibold text-lg">
                {selectedCert.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
