export default function Footer() {
    return (
    <footer className="bg-emerald-900 text-emerald-100 shadow-lg mt-20">
  <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Company Info */}
      <div>
        <h4 className="text-xl font-semibold text-white mb-4">Swetcha Naturals</h4>
        <p className="text-emerald-200 leading-relaxed">
          Premium quality spices exported directly from Indian farms to your business.
        </p>
      </div>
      
      {/* Quick Links */}
      <div>
        <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
        <ul className="space-y-2">
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
      
      {/* Contact Info */}
      <div>
        <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
        <div className="space-y-2 text-emerald-200">
          <p>Email: <span className="text-white">contact@swetchanaturals.com</span></p>
          <p>Phone: <span className="text-white">+91-8977656377</span></p>
          <p>Address: <span className="text-white">Guntur, Andhra Pradesh, India</span></p>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-emerald-800 mt-10 pt-6 text-center text-emerald-300 text-sm">
      <p>&copy; {new Date().getFullYear()} Swetcha Naturals. All rights reserved.</p>
    </div>
  </div>
</footer>

    )
}