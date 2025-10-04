export default function Footer() {
    return (
    <footer className="bg-emerald-900 text-emerald-100 shadow-lg">
  <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Company Info */}
      <div>
        <h4 className="text-xl font-semibold text-white mb-4">Swetcha Naturals</h4>
        <p className="text-emerald-200 leading-relaxed">
          Premium quality Spices and Agri Products exported directly from Indian farms to your business.
        </p>
      </div>
      
      {/* Quick Links */}
      <div className="flex justify-around">
        <div>
        <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li>
            <a href="#about" className="hover:text-white transition-colors duration-200">
              About Us
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-white transition-colors duration-200">
              Products
            </a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-white transition-colors duration-200">
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-colors duration-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
            <div>
        <h4 className="text-xl font-semibold text-white mb-4">Downloads</h4>
        <ul className="space-y-2">
          <li>
            <a href={`/brochures/chillies.pdf`} download className="hover:text-red-400 transition duration-200">
              Chillies Brochure
            </a>
          </li>
        </ul>
      </div>
      </div>
      
      {/* Contact Info */}
      <div>
        <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
        <div className="space-y-2 text-emerald-200">
          <p>Email: <span className="text-white">contact@swetchanaturals.com</span></p>
          <p>Phone: <span className="text-white">+91-8441-997999</span></p>
          <p>Administrative Office: <span className="text-white">301 VBC Grand, Guntur, Andhra Pradesh, India</span></p>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-emerald-800 mt-10 pt-6 text-center text-emerald-300 text-sm">
      <p>Copyright &copy; {new Date().getFullYear()} Swetcha Naturals. All rights reserved.</p>
    </div>
  </div>
</footer>

    )
}