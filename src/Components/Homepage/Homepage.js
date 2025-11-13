import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Send, Home, Pencil, Box } from "lucide-react";
import { useTranslation } from "react-i18next";
import testImage from "../../assets/test.png";

function Homepage() {
  const { t } = useTranslation();
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    window.scrollTo(0, 0);

    const handleClickOutside = () => setShowPhoneOptions(false);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const togglePhoneOptions = (e) => {
    e.stopPropagation();
    setShowPhoneOptions((prev) => !prev);
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${testImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main content */}
      <div className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-wide text-white drop-shadow-2xl mb-2">
          Mava Group
        </h1>
        <p className="max-w-xl text-sm xs:text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed mb-6 drop-shadow-md">
          {t("homepage.hero.desc")}
        </p>

        {/* CTA Button */}
        <Link
          to="/portfolio"
          className="inline-block px-6 sm:px-10 py-2.5 sm:py-3.5 text-sm sm:text-lg font-semibold rounded-full 
                     bg-gradient-to-r from-gray-900 via-gray-800 to-black 
                     text-white border border-white/20 
                     hover:from-black hover:via-gray-900 hover:to-gray-800 
                     transition-all duration-300 ease-in-out shadow-xl mb-8"
        >
          {t("homepage.hero.button")}
        </Link>

        {/* Services */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-2 text-gray-200">
          <div className="flex flex-col items-center">
            <Home className="w-6 h-6 sm:w-8 sm:h-8 mb-1" />
            <span className="text-xs sm:text-base">
              {t("homepage.hero.services.interior")}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Pencil className="w-6 h-6 sm:w-8 sm:h-8 mb-1" />
            <span className="text-xs sm:text-base">
              {t("homepage.hero.services.planning")}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Box className="w-6 h-6 sm:w-8 sm:h-8 mb-1" />
            <span className="text-xs sm:text-base">
              {t("homepage.hero.services.modeling")}
            </span>
          </div>
        </div>
      </div>

      {/* Floating contact buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 sm:gap-4 z-50">
        {/* 📞 Phone Button */}
        <div className="relative">
          <button
            onClick={togglePhoneOptions}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
                       rounded-full bg-gradient-to-br from-green-500 to-green-600 
                       text-white shadow-lg backdrop-blur-md 
                       hover:scale-110 transition-transform duration-300 relative group"
          >
            <Phone className="w-4 h-4 sm:w-6 sm:h-6" />
            <span className="absolute inset-0 rounded-full bg-green-500 opacity-40 blur-xl animate-pulse"></span>
          </button>

          {/* Dropdown for numbers */}
          {showPhoneOptions && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-14 right-0 w-52 sm:w-56 p-3 bg-white/90 
                         backdrop-blur-xl border border-green-100 rounded-2xl shadow-[0_0_25px_rgba(16,185,129,0.25)] 
                         animate-slideUp space-y-2"
            >
              <p className="text-center text-sm font-semibold text-gray-700 border-b border-gray-200 pb-1">
                Call Us
              </p>
              <a
                href="tel:+998999366556"
                className="block text-sm sm:text-base text-gray-800 font-medium 
                           hover:text-green-600 transition-all duration-200 bg-white/50 
                           rounded-lg px-3 py-2 shadow-sm hover:shadow-md"
              >
                📞 +998 99 936 65 56
              </a>
              <a
                href="tel:+998900141444"
                className="block text-sm sm:text-base text-gray-800 font-medium 
                           hover:text-green-600 transition-all duration-200 bg-white/50 
                           rounded-lg px-3 py-2 shadow-sm hover:shadow-md"
              >
                📞 +998 90 014 14 44
              </a>
            </div>
          )}
        </div>

        {/* 💬 Telegram Button */}
        <a
          href="https://t.me/MAVA_GROUP"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
                     rounded-full bg-gradient-to-br from-blue-500 to-blue-600 
                     text-white shadow-lg backdrop-blur-md 
                     hover:scale-110 transition-transform duration-300 relative group"
        >
          <Send className="w-4 h-4 sm:w-6 sm:h-6" />
          <span className="absolute inset-0 rounded-full bg-blue-500 opacity-40 blur-xl animate-pulse"></span>
        </a>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.25s ease-out;
        }
      `}</style>
    </section>
  );
}

export default Homepage;
