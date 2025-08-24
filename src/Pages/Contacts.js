// src/Pages/Contacts.js
import React, { useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { animate, stagger } from "animejs";

function Contacts() {
  const formRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    const fast = isMobile ? 600 : 1200;
    const medium = isMobile ? 400 : 800;

    // Hero title fade-in + shimmer
    animate(".contact-title", {
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: fast,
      easing: "easeOutExpo",
    });

    const hero = document.querySelector(".contact-hero");
    if (hero) {
      animate(".contact-title", {
        backgroundPositionX: ["-200%", "200%"],
        duration: 3000,
        loop: true,
        easing: "linear",
      });
    }

    // Contact cards fade-in + bounce
    const cards = document.querySelectorAll(".contact-card");
    animate(cards, {
      opacity: [0, 1],
      translateY: [30, 0],
      delay: stagger(isMobile ? 100 : 200),
      easing: "easeOutExpo",
      duration: medium,
    });

    const bounceCards = () => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && !card.classList.contains("bounced")) {
          card.classList.add("bounced");
          animate(card, {
            translateY: [-10, 0, -5, 0],
            duration: 1200,
            easing: "easeOutElastic(1, .5)",
          });
        }
      });
    };

    // Scroll reveal & form animation
    const sections = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80 && !section.classList.contains("animated")) {
          section.classList.add("animated");
          animate(section, {
            opacity: [0, 1],
            translateY: [40, 0],
            duration: fast,
            easing: "easeOutExpo",
          });

          const inputs = section.querySelectorAll("input, textarea, button");
          if (inputs.length > 0) {
            animate(inputs, {
              opacity: [0, 1],
              translateY: [30, 0],
              delay: stagger(100),
              duration: fast,
              easing: "easeOutExpo",
            });
          }
        }
      });
      bounceCards();
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  // Mouse move effect for floating dots
  useEffect(() => {
    const hero = document.querySelector(".contact-hero");
    if (!hero) return;

    const dots = hero.querySelectorAll(".floating-dot");

    const moveDots = (e) => {
      const { innerWidth, innerHeight } = window;
      const xRatio = (e.clientX / innerWidth - 0.5) * 20; // horizontal shift
      const yRatio = (e.clientY / innerHeight - 0.5) * 20; // vertical shift

      dots.forEach((dot, i) => {
        const offset = (i % 10) / 2; // small variation per dot
        dot.style.transform = `translate(${xRatio * offset}px, ${yRatio * offset}px)`;
      });
    };

    window.addEventListener("mousemove", moveDots);
    return () => window.removeEventListener("mousemove", moveDots);
  }, []);

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section
        className="contact-hero relative h-[40vh] sm:h-[50vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505842465776-3d90f616310d?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        {/* Floating Dots */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <span
              key={i}
              className="floating-dot absolute w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-50 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            ></span>
          ))}
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="contact-title text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide uppercase bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent animate-shimmer">
            Get in Touch
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
            Let’s discuss your next architectural vision. We’re here to bring
            concepts to life.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-4 sm:px-6 md:px-16 py-14 sm:py-20 max-w-7xl mx-auto reveal">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 text-center">
          {[
            { icon: MapPin, title: "Office Address", text: "Tashkent, Uzbekistan\nSamarkand Darvoza" },
            { icon: Phone, title: "Phone", text: "+998 90 123 45 67" },
            { icon: Mail, title: "Email", text: "info@architecture.com" },
            { icon: Clock, title: "Working Hours", text: "Mon - Sat\n9:00 AM - 7:00 PM" },
          ].map((item, i) => (
            <div
              key={i}
              className="contact-card bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow hover:scale-105 duration-500 cursor-pointer overflow-hidden relative group"
            >
              <item.icon className="mx-auto h-8 w-8 sm:h-10 sm:w-10 text-yellow-400 mb-3" />
              <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-400 whitespace-pre-line">{item.text}</p>

              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none animate-shimmer-fast"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-800 py-14 sm:py-20 px-4 sm:px-6 md:px-16 reveal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center uppercase tracking-wider">
            Send Us a Message
          </h2>
          <form ref={formRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 sm:p-4 rounded-xl bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 sm:p-4 rounded-xl bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 sm:p-4 rounded-xl bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none sm:col-span-2"
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="p-3 sm:p-4 rounded-xl bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none sm:col-span-2"
            ></textarea>
            <button
              type="submit"
              className="sm:col-span-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="h-[300px] sm:h-[400px] reveal">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.592480404966!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3b2bde39df%3A0x9d184f7a7d0c25b0!2sTashkent!5e0!3m2!1sen!2s!4v1673000000000!5m2!1sen!2s"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* CSS */}
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .animate-shimmer { background-size: 200% auto; animation: shimmer 3s linear infinite; }
          .animate-shimmer-fast { background-size: 200% auto; animation: shimmer 1.5s linear infinite; }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          .animate-float { animation: float linear infinite; }
        `}
      </style>
    </div>
  );
}

export default Contacts;
