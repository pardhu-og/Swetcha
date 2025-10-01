import { CircleCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-12">
          About Us
        </h2>

        {/* Content */}
        <div>
          <p className="text-gray-600 mb-6">
            At Swetcha Naturals, we connect India’s farmers with global buyers, delivering authentic agri products with reliability and care. Our focus is simple: consistent quality, fair pricing, and long-term relationships built on trust.
          </p>
          <h3 className="text-xl font-semibold mb-4">Mission & Vision</h3>
          <p className="text-gray-600 mb-2">
            <strong>Mission:</strong> To export premium agri products with transparency, integrity, and efficiency.
          </p>
          <p className="text-gray-600 mb-6">
            <strong>Vision:</strong> To be recognized globally as a trusted
            partner for agricultural exports.
          </p>

          {/* Why Choose Us */}
          <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
          <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <CircleCheck className="text-green-600 flex-shrink-0 w-5 h-5" />
                <span>Direct sourcing from trusted farmers</span>
              </li>
              <li className="flex items-center gap-2">
                <CircleCheck className="text-green-600 flex-shrink-0 w-5 h-5" />
                <span>Quality assurance at every stage of sourcing & packaging</span>
              </li>
              <li className="flex items-center gap-2">
                <CircleCheck className="text-green-600 flex-shrink-0 w-5 h-5" />
                <span>Flexible packaging & shipping options</span>
              </li>
              <li className="flex items-center gap-2">
                <CircleCheck className="text-green-600 flex-shrink-0 w-5 h-5" />
                <span>Timely and reliable delivery worldwide</span>
              </li>
              <li className="flex items-center gap-2">
                <CircleCheck className="text-green-600 flex-shrink-0 w-5 h-5" />
                <span>Competitive pricing with no compromise on quality</span>
              </li>
</ul>

        </div>
      </div>
    </section>
  );
}
