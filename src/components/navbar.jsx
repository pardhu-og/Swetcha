import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="#" className="text-xl font-extrabold text-emerald-900">
          Swetcha Naturals
        </a>

        {/* Links (Desktop) */}
        <div className="hidden md:flex space-x-8 text-emerald-900 font-medium">
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
            Contact
          </a>
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
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
