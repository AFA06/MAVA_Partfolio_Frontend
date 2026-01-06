import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Send, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import hero1 from "../../assets/1.png";
import hero2 from "../../assets/2.png";
import hero3 from "../../assets/3.png";

import { useTheme } from "../../context/ThemeContext";

function Homepage() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [showPhoneOptions, setShowPhoneOptions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  /* -------------------- HERO IMAGES -------------------- */
  const heroImages = useMemo(
    () => [
      { src: hero1, alt: "Modern architecture project" },
      { src: hero2, alt: "Residential architecture design" },
      { src: hero3, alt: "Commercial building concept" },
    ],
    []
  );

  /* -------------------- SLIDER CONTROLS -------------------- */
  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % heroImages.length);

  const goPrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );

  /* -------------------- AUTO SLIDE -------------------- */
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(goNext, 4000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  /* -------------------- PRELOAD IMAGES -------------------- */
  useEffect(() => {
    heroImages.forEach((img) => {
      const i = new Image();
      i.src = img.src;
    });
  }, [heroImages]);

  /* -------------------- GLOBAL EFFECTS -------------------- */
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    window.scrollTo(0, 0);

    const close = () => setShowPhoneOptions(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const togglePhoneOptions = (e) => {
    e.stopPropagation();
    setShowPhoneOptions((prev) => !prev);
  };

  /* -------------------- FLOATING CONTACTS -------------------- */
  const FloatingContacts = () => (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 z-50">
      <div className="relative">
        <button
          onClick={togglePhoneOptions}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg hover:scale-110 active:scale-95 transition"
        >
          <Phone className="w-5 h-5" />
        </button>

        {showPhoneOptions && (
          <div
            onClick={(e) => e.stopPropagation()}
            className={`absolute bottom-14 right-0 w-52 p-3 rounded-xl shadow-2xl animate-slideUp
              ${isDark ? "bg-[#050509]/95 border border-white/10" : "bg-white border border-gray-200"}`}
          >
            <p
              className={`text-center text-xs font-semibold border-b pb-2 mb-2
                ${isDark ? "text-gray-100 border-white/10" : "text-gray-800 border-gray-200"}`}
            >
              Call Studio
            </p>

            <a href="tel:+998999366556" className="block text-xs px-3 py-2 rounded-lg hover:bg-black/5">
              📞 +998 99 936 65 56
            </a>
            <a href="tel:+998900141444" className="block text-xs px-3 py-2 rounded-lg hover:bg-black/5">
              📞 +998 90 014 14 44
            </a>
          </div>
        )}
      </div>

      <a
        href="https://t.me/MAVA_GROUP"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-500 text-white shadow-lg hover:scale-110 active:scale-95 transition"
      >
        <Send className="w-5 h-5" />
      </a>
    </div>
  );

  return (
    <section
      className={`relative w-full min-h-screen flex items-center justify-center px-5 sm:px-8 py-24
        ${isDark ? "bg-[#050509] text-gray-100" : "bg-[#f5f5f6] text-gray-900"}`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div className="text-center md:text-left">
          <p className="text-xs tracking-[0.32em] uppercase mb-4 opacity-70">
            {t("homepage.hero.studio")}
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            {t("homepage.hero.title2")}
          </h1>

          <p className="text-base max-w-md mx-auto md:mx-0 mb-8 opacity-80">
            {t("homepage.hero.desc")}
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link
              to="/portfolio"
              className="px-7 py-3 rounded-full bg-black text-white dark:bg-white/10 dark:text-white"
            >
              {t("homepage.hero.button")}
            </Link>
            <Link
              to="/about"
              className="px-7 py-3 rounded-full border border-gray-400 dark:border-gray-600"
            >
              {t("homepage.hero.secondary")}
            </Link>
          </div>
        </div>

        {/* RIGHT — SLIDESHOW */}
        <div
          className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {heroImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
                ${idx === activeIndex ? "opacity-100" : "opacity-0"}`}
              style={{
                transform: idx === activeIndex ? "scale(1.04)" : "scale(1)",
                filter: isDark
                  ? "brightness(1.08) contrast(1.05)"
                  : "none",
              }}
            />
          ))}

          {/* ✅ SMART OVERLAY (FIXED) */}
          <div className="absolute inset-0 pointer-events-none">
            {isDark && <div className="absolute inset-0 bg-black/15" />}
            <div
              className={`absolute inset-x-0 bottom-0 h-32
                ${isDark
                  ? "bg-gradient-to-t from-black/55 to-transparent"
                  : "bg-gradient-to-t from-black/20 to-transparent"}`}
            />
          </div>

          {/* CONTROLS */}
          <div className="absolute inset-x-0 bottom-4 px-4 flex justify-between items-center">
            <button onClick={goPrev} className="w-10 h-10 rounded-full bg-white/20 text-white">
              <ChevronLeft />
            </button>

            <div className="flex gap-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all
                    ${i === activeIndex ? "w-7 bg-white" : "w-2 bg-white/50"}`}
                />
              ))}
            </div>

            <button onClick={goNext} className="w-10 h-10 rounded-full bg-white/20 text-white">
              <ChevronRight />
            </button>
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
