// src/Pages/Contacts.js
import React, { useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { animate, stagger } from "animejs"; // ✅ anime.js v4

function Contacts() {
  const formRef = useRef(null);

  useEffect(() => {
    // Fade in hero text
    animate(".contact-title", {
      opacity: [0, 1],
      translateY: [-30, 0],
      duration: 1200,
      easing: "easeOutExpo",
    });

    // Animate contact cards
    animate(".contact-card", {
      opacity: [0, 1],
      translateY: [50, 0],
      delay: stagger(200),
      easing: "easeOutExpo",
      duration: 1000,
    });

    // Scroll-based reveal
    const sections = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && !section.classList.contains("animated")) {
          section.classList.add("animated");
          animate(section, {
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 1200,
            easing: "easeOutExpo",
          });
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505842465776-3d90f616310d?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center">
          <h1 className="contact-title text-5xl md:text-6xl font-bold tracking-wide uppercase">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Let’s discuss your next architectural vision. We’re here to bring
            concepts to life.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto reveal">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div className="contact-card bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
            <MapPin className="mx-auto h-10 w-10 text-yellow-400" />
            <h3 className="mt-4 text-xl font-semibold">Office Address</h3>
            <p className="mt-2 text-gray-400">
              Tashkent, Uzbekistan
              <br />
              Samarkand Darvoza
            </p>
          </div>

          <div className="contact-card bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
            <Phone className="mx-auto h-10 w-10 text-yellow-400" />
            <h3 className="mt-4 text-xl font-semibold">Phone</h3>
            <p className="mt-2 text-gray-400">+998 90 123 45 67</p>
          </div>

          <div className="contact-card bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
            <Mail className="mx-auto h-10 w-10 text-yellow-400" />
            <h3 className="mt-4 text-xl font-semibold">Email</h3>
            <p className="mt-2 text-gray-400">info@architecture.com</p>
          </div>

          <div className="contact-card bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
            <Clock className="mx-auto h-10 w-10 text-yellow-400" />
            <h3 className="mt-4 text-xl font-semibold">Working Hours</h3>
            <p className="mt-2 text-gray-400">
              Mon - Sat
              <br />
              9:00 AM - 7:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-800 py-20 px-6 md:px-16 reveal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center uppercase tracking-wider">
            Send Us a Message
          </h2>
          <form ref={formRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-4 rounded-xl bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none md:col-span-2"
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="p-4 rounded-xl bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none md:col-span-2"
            ></textarea>
            <button
              type="submit"
              className="md:col-span-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 px-8 rounded-xl shadow-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Embed */}
      <section className="h-[400px] reveal">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.592480404966!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3b2bde39df%3A0x9d184f7a7d0c25b0!2sTashkent!5e0!3m2!1sen!2s!4v1673000000000!5m2!1sen!2s"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

export default Contacts;
