// About.jsx
import { CircleCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
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
                <CircleCheck  className="text-green-600 w-5 h-5 mt-1" />
                Quality assurance at every stage of sourcing & packaging
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck  className="text-green-600 w-5 h-5 mt-1" />
                Timely and reliable delivery worldwide
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck  className="text-green-600 w-5 h-5 mt-1" />
                Direct sourcing from trusted farmers
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck  className="text-green-600 w-5 h-5 mt-1" />
                Competitive pricing with no compromise on quality
              </li>
            </ul>
          </div>

          {/* Right: Placeholder Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="h-40 rounded-xl bg-gray-200 flex items-center justify-center shadow">
              <span className="text-gray-500">Export Photo 1</span>
            </div>
            <div className="h-40 rounded-xl bg-gray-200 flex items-center justify-center shadow">
              <span className="text-gray-500">Export Photo 2</span>
            </div>
            <div className="h-40 rounded-xl bg-gray-200 flex items-center justify-center shadow">
              <span className="text-gray-500">Export Photo 3</span>
            </div>
            <div className="h-40 rounded-xl bg-gray-200 flex items-center justify-center shadow">
              <span className="text-gray-500">Export Photo 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
