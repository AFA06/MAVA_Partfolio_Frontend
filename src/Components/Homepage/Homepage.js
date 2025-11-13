import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Send } from "lucide-react";
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
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Main content */}
      <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wide text-white mb-4 leading-tight">
          MAVA GROUP
        </h1>

        <p className="max-w-2xl text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          {t("homepage.hero.desc")}
        </p>

        {/* CTA Button */}
        <Link
          to="/portfolio"
          className="inline-block px-8 py-3 text-sm sm:text-lg font-semibold rounded-full
                     bg-white/10 backdrop-blur-md border border-white/25 text-white
                     hover:bg-white/20 transition-all duration-300 shadow-xl"
        >
          {t("homepage.hero.button")}
        </Link>
      </div>

      {/* Floating contact buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 z-50">
        {/* Phone Button */}
        <div className="relative">
          <button
            onClick={togglePhoneOptions}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:scale-110 transition-transform duration-300 active:scale-95"
          >
            <Phone className="w-6 h-6" />
          </button>

          {/* Dropdown */}
          {showPhoneOptions && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-14 right-0 w-48 p-3 bg-white/95 backdrop-blur-xl
                         border border-gray-200 rounded-xl shadow-xl animate-slideUp space-y-2"
            >
              <p className="text-center text-sm font-semibold text-gray-800 border-b pb-1">
                Call Us
              </p>
              <a
                href="tel:+998999366556"
                className="block text-sm text-gray-800 font-medium hover:text-green-600 transition px-3 py-2 rounded-lg bg-white/60 hover:bg-white"
              >
                📞 +998 99 936 65 56
              </a>
              <a
                href="tel:+998900141444"
                className="block text-sm text-gray-800 font-medium hover:text-green-600 transition px-3 py-2 rounded-lg bg-white/60 hover:bg-white"
              >
                📞 +998 90 014 14 44
              </a>
            </div>
          )}
        </div>

        {/* Telegram */}
        <a
          href="https://t.me/MAVA_GROUP"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:scale-110 transition-transform duration-300 active:scale-95"
        >
          <Send className="w-6 h-6" />
        </a>
      </div>

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
