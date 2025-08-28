export default function Contact() {
    return (
<section id="contact" className="py-20 bg-emerald-50">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-800 mb-12 text-center">
      Get in Touch
    </h3>

    <form className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg p-4 focus:ring-emerald-500 focus:border-emerald-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-lg p-4 focus:ring-emerald-500 focus:border-emerald-500"
          required
        />
      </div>

      <div>
        <input
          type="tel"
          placeholder="Your Phone Number"
          className="border border-gray-300 rounded-lg p-4 w-full focus:ring-emerald-500 focus:border-emerald-500"
          required
        />
      </div>

      <div>
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 rounded-lg p-4 w-full h-32 focus:ring-emerald-500 focus:border-emerald-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-emerald-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-emerald-700 transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

    )
}