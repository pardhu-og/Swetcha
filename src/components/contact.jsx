import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY, VITE_RECAPTCHA_SITE_KEY } = import.meta.env;


export default function Contact() {
  const formRef = useRef();
  const [captchaValid, setCaptchaValid] = useState(false);
  const captchaRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [formHeight, setFormHeight] = useState(0); // ✅ store form height

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaValid) {
      alert("Please verify the reCAPTCHA ✅");
      return;
    }

    emailjs
      .sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          // ✅ set height before replacing form
          if (formRef.current) setFormHeight(formRef.current.offsetHeight);
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
          alert("❌ Something went wrong. We will be clearing this issue as soon as possible. In the meantime, please contact us at the given email/phone number.");
        }
      );
  };

  return (
    <section id="contact" className="py-10 md:py-20 md:px-8 bg-emerald-50 ">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-12 text-center">
          Enquire Now
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed md:hidden text-center mb-5 -mt-6">
              Share your requirements, and we’ll provide a tailored quote. Feel free to contact us with any questions.
        </p>

        <div className="md:flex md:space-x-10 items-start">
          {/* Side Text */}
          <div className="mt-10 md:mt-0 md:w-1/2 flex flex-col justify-center text-center pt-40 hidden md:block md:text-left">
            <h4 className="text-2xl font-semibold text-emerald-700 mb-4">
              Get Your Personalized Quotation
            </h4>
            <p className="text-gray-700 text-lg leading-relaxed">
              Share your requirements, and we’ll provide a tailored quote. Feel free to contact us with any questions.
            </p>
          </div>

          {/* Form or Success Message */}
          {isSent ? (
            <div
              className="bg-white rounded-2xl shadow-lg p-8 space-y-6 md:w-1/2 w-full flex flex-col justify-center items-center text-center"
              style={{ minHeight: formHeight }} // ✅ maintain same height
            >
              <p className="text-xl font-semibold text-emerald-700">
                Thank you for your message!
              </p>
              <p className="text-gray-700 mt-2">
                We've received your inquiry and will reply to you within a few hours.
              </p>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-white rounded-2xl shadow-lg p-8 space-y-6 md:w-1/2 w-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="border border-gray-300 rounded-lg p-4 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-lg p-4 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-lg p-4 w-full focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="border border-gray-300 rounded-lg p-4 w-full h-32 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                ></textarea>
              </div>

              <ReCAPTCHA
                sitekey={VITE_RECAPTCHA_SITE_KEY}
                onChange={() => setCaptchaValid(true)}
                className="my-4"
              />

              <button
                type="submit" 
                className="w-full px-6 py-3 bg-emerald-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-emerald-700 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
