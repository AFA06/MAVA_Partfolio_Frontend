// src/Components/Homepage.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Phone, Send } from "lucide-react"; // icons
import backVideo from "../../assets/back.mp4";

function Homepage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={backVideo} type="video/mp4" />
        {t("homepage.hero.videoNotSupported")}
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto text-white">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold leading-snug tracking-wide mb-4 text-gold drop-shadow-lg">
          {t("homepage.hero.title")}
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-xl text-gray-200 mb-8">
          {t("homepage.hero.desc")}
        </p>
        <Link
          to="/portfolio"
          className="inline-block px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-semibold rounded-full border-2 border-gold text-gold
            hover:bg-gold hover:text-black transition-all duration-300 ease-in-out shadow-lg"
        >
          {t("homepage.hero.button")}
        </Link>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 sm:gap-4 z-50">
        {/* 📞 Phone Button */}
        <a
          href="tel:+998083616"
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-transform duration-300 relative group"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-40 blur-xl animate-pulse"></span>
        </a>

        {/* 💬 Telegram Button */}
        <a
          href="https://t.me/abdukarimov_arch" // ✅ Opens chat with @abdukarimov_arch
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:scale-110 transition-transform duration-300 relative group"
        >
          <Send className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute inset-0 rounded-full bg-blue-500 opacity-40 blur-xl animate-pulse"></span>
        </a>
      </div>
    </section>
  );
}

export default Homepage;
