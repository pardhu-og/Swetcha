// Navbar.jsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="#" className="text-xl font-bold text-[#2c3e50]">
          Swetcha Naturals
        </a>

        {/* Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-[#e67e22] transition">
            About
          </a>
          <a href="#products" className="hover:text-[#e67e22] transition">
            Products
          </a>
          <a href="#contact" className="hover:text-[#e67e22] transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button (optional for later) */}
        <button className="md:hidden text-gray-700">
          ☰
        </button>
      </div>
    </nav>
  );
}
