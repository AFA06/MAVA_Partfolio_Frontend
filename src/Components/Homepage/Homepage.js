import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import testImage from "../../assets/test.png";
import { useTheme } from "../../context/ThemeContext";

function Homepage() {
  const { t } = useTranslation();
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

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

  /* -------------------- FLOATING CONTACT BUTTONS -------------------- */
  const FloatingContacts = () => (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 z-50">
      {/* Phone Button */}
      <div className="relative">
        <button
          onClick={togglePhoneOptions}
          className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300"
        >
          <Phone className="w-5 h-5" />
        </button>

        {showPhoneOptions && (
          <div
            onClick={(e) => e.stopPropagation()}
            className={`absolute bottom-14 right-0 w-48 sm:w-52 p-3 rounded-xl shadow-2xl animate-slideUp space-y-2
              ${isDark ? "bg-[#050509]/95 border border-white/10" : "bg-white border border-gray-200"}`}
          >
            <p
              className={`text-center text-xs font-semibold border-b pb-2
                ${isDark ? "text-gray-100 border-white/10" : "text-gray-800 border-gray-200"}`}
            >
              Call Studio
            </p>

            <a
              href="tel:+998999366556"
              className={`block text-xs font-medium rounded-lg px-3 py-2 shadow-sm active:scale-95 transition-all
                ${isDark ? "text-gray-100 bg-white/5 hover:text-[#f5c15d]" : "text-gray-800 bg-gray-50 hover:bg-gray-100"}`}
            >
              📞 +998 99 936 65 56
            </a>
            <a
              href="tel:+998900141444"
              className={`block text-xs font-medium rounded-lg px-3 py-2 shadow-sm active:scale-95 transition-all
                ${isDark ? "text-gray-100 bg-white/5 hover:text-[#f5c15d]" : "text-gray-800 bg-gray-50 hover:bg-gray-100"}`}
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
        className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-sky-500 text-white shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300"
      >
        <Send className="w-5 h-5" />
      </a>
    </div>
  );

  return (
    <section
      className={`relative w-full min-h-screen flex items-center justify-center px-5 sm:px-8 py-24 sm:py-0 transition-all duration-500
        ${isDark ? "bg-[#050509] text-gray-100" : "bg-[#f5f5f6] text-gray-900"}`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT — Text */}
        <div className="text-center md:text-left">
          <p
            className={`text-[10px] sm:text-xs tracking-[0.32em] uppercase mb-4
              ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            {t("homepage.hero.studio")}
          </p>

          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-semibold leading-[1.15] mb-4
              ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {t("homepage.hero.title2")}
          </h1>

          <p
            className={`text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0 mb-8
              ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            {t("homepage.hero.desc")}
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center md:justify-start">
            <Link
              to="/portfolio"
              className={`inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold transition
                ${
                  isDark
                    ? "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    : "bg-gray-900 text-white hover:bg-black"
                }`}
            >
              {t("homepage.hero.button")}
            </Link>

            <Link
              to="/about"
              className={`inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-medium transition border
                ${
                  isDark
                    ? "border-gray-500 text-gray-200 hover:border-[#f5c15d] hover:text-[#f5c15d]"
                    : "border-gray-300 text-gray-800 hover:border-gray-900 hover:text-gray-900"
                }`}
            >
              {t("homepage.hero.secondary")}
            </Link>
          </div>
        </div>

        {/* RIGHT — Image */}
        <div className="w-full max-w-md md:max-w-full mx-auto md:mx-0">
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src={testImage}
              alt="Architecture"
              className="w-full h-full object-cover"
            />
            {isDark && <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />}
          </div>
        </div>
      </div>

      <FloatingContacts />

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
