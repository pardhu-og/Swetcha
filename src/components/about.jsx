// About.jsx
import { useEffect, useState } from "react";
import { CircleCheck } from "lucide-react";

export default function About() {
  const [showFallback, setShowFallback] = useState(false);
  const [ytLoaded, setYtLoaded] = useState(false);

  useEffect(() => {
    // If YouTube doesn't load within 8 seconds, show fallback
    if (ytLoaded) return;

    const timeoutId = setTimeout(() => {
      if (!ytLoaded) {
        setShowFallback(true);
      }
    }, 8000);

    return () => clearTimeout(timeoutId);
  }, [ytLoaded]);

  return (
    <section id="about" className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-12">
          About Us
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Objective</h3>
            <p className="text-gray-600 mb-6">
              Our objective is to connect farmers and global buyers directly,
              ensuring quality products and fair pricing while maintaining long
              term relationships built on trust.
            </p>

            <h3 className="text-xl font-semibold mb-4">Mission & Vision</h3>
            <p className="text-gray-600 mb-6">
              <strong>Mission:</strong> Deliver premium quality exports with
              integrity and transparency. <br />
              <strong>Vision:</strong> To be recognized globally as a trusted
              partner for agricultural exports.
            </p>

            {/* Why Choose Us */}
            <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <CircleCheck className="text-green-600 w-5 h-5 mt-1" />
                Quality assurance at every stage of sourcing & packaging
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="text-green-600 w-5 h-5 mt-1" />
                Timely and reliable delivery worldwide
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="text-green-600 w-5 h-5 mt-1" />
                Direct sourcing from trusted farmers
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="text-green-600 w-5 h-5 mt-1" />
                Competitive pricing with no compromise on quality
              </li>
            </ul>
          </div>

          {/* Right: Video (YouTube primary with fallback) */}
          <div className="w-full rounded-xl overflow-hidden flex flex-col items-center bg-gray-100 p-4">
            <div className="relative w-full pb-[56.25%]">{/* 16:9 aspect ratio */}
              {!showFallback ? (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/EGrikrfqgNo?si=sCx0zFzdotVRFM3i"
                  title="Swetcha Naturals Overview"
                  className="absolute inset-0 w-full h-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setYtLoaded(true)}
                ></iframe>
              ) : (
                <video
                  className="absolute inset-0 w-full h-full rounded-xl"
                  controls
                  preload="metadata"
                  poster="/thumbnail.jpg"
                >
                  {/* Make sure this file is in /public/swetcha-overview.mp4 */}
                  <source src="/swetcha-overview.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Manual fallback trigger */}
            <button
              type="button"
              onClick={() => setShowFallback(true)}
              className="mt-3 text-sm text-emerald-700 hover:underline"
            >
              If the video is not loading, click here to use the alternate player.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
