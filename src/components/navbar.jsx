import { useState } from "react";
import logo from "../assets/images/logo2.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 animate-slideDown">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="#" className="md:text-lg xl:text-xl font-extrabold text-emerald-900">
         <img src={logo} alt="logo" className="inline-block w-8" /> Swetcha Naturals
        </a>

        {/* Links (Desktop) */}
        <div className="hidden md:flex md:space-x-5 xl:space-x-8 text-emerald-900 font-medium items-center">
          <a href="#about" className="hover:text-[#e67e22] transition">
            About
          </a>
          <a href="#products" className="hover:text-[#e67e22] transition">
            Products
          </a>
          <a href="#certifications" className="hover:text-[#e67e22] transition">
            Certifications
          </a>
          <a href="#contact" className="hover:text-[#e67e22] transition">
            Enquiry
          </a>

          {/* Contact Info (Desktop) */}
          <div className="flex items-center space-x-4 text-sm font-semibold">
            <a href="tel:+918441997999" className="hover:text-[#e67e22]">
              📞 +91 8441 997999
            </a>
            <a
              href="mailto:contact@swetchanaturals.com"
              className="hover:text-[#e67e22]"
            >
              ✉ contact@swetchanaturals.com
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-emerald-900 focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-4 text-emerald-900 font-medium">
            <a
              href="#about"
              className="hover:text-[#e67e22] transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#products"
              className="hover:text-[#e67e22] transition"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a
              href="#certifications"
              className="hover:text-[#e67e22] transition"
              onClick={() => setIsOpen(false)}
            >
              Certifications
            </a>
            <a
              href="#contact"
              className="hover:text-[#e67e22] transition"
              onClick={() => setIsOpen(false)}
            >
              Enquiry
            </a>

            {/* Contact Info (Mobile) */}
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-2 text-sm font-semibold">
              <a
                href="tel:+918441997999"
                className="hover:text-[#e67e22] transition"
                onClick={() => setIsOpen(false)}
              >
                📞 +91 8441 997999
              </a>
              <a
                href="mailto:contact@swetchanaturals.com"
                className="hover:text-[#e67e22] transition"
                onClick={() => setIsOpen(false)}
              >
                ✉ contact@swetchanaturals.com
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
