// src/Components/Homepage/Homepage.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Send, Home, Pencil, Box } from "lucide-react"; // added optional icons
import testImage from "../../assets/test.png";

function Homepage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${testImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main content */}
      <div className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Headings */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wide text-white drop-shadow-2xl mb-3">
          New Era Excellence
        </h1>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-gray-200 drop-shadow-lg mb-6">
          Architects
        </h2>

        {/* Paragraph */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed mb-8 drop-shadow-md">
          Архитектурное бюро, где идеи превращаются в стильные и удобные проекты.
          От концепции до реализации.
        </p>

        {/* CTA Button */}
        <Link
          to="/portfolio"
          className="inline-block px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full 
                     bg-gradient-to-r from-gray-900 via-gray-800 to-black 
                     text-white border border-white/20 
                     hover:from-black hover:via-gray-900 hover:to-gray-800 
                     transition-all duration-300 ease-in-out shadow-xl mb-8"
        >
          Смотреть проекты
        </Link>

        {/* Optional service icons */}
        <div className="flex gap-8 mt-4 text-gray-200">
          <div className="flex flex-col items-center">
            <Home className="w-6 h-6 sm:w-8 sm:h-8 mb-1" />
            <span className="text-sm sm:text-base">Дизайн интерьера</span>
          </div>
          <div className="flex flex-col items-center">
            <Pencil className="w-6 h-6 sm:w-8 sm:h-8 mb-1" />
            <span className="text-sm sm:text-base">Проектирование</span>
          </div>
          <div className="flex flex-col items-center">
            <Box className="w-6 h-6 sm:w-8 sm:h-8 mb-1" />
            <span className="text-sm sm:text-base">3D Моделирование</span>
          </div>
        </div>
      </div>

      {/* Floating contact buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 sm:gap-4 z-50">
        {/* Phone */}
        <a
          href="tel:+998901234567"
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center 
                     rounded-full bg-green-500/90 text-white shadow-lg 
                     backdrop-blur-md hover:scale-110 transition-transform duration-300 relative group"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-40 blur-xl animate-pulse"></span>
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/yourcompany"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center 
                     rounded-full bg-blue-500/90 text-white shadow-lg 
                     backdrop-blur-md hover:scale-110 transition-transform duration-300 relative group"
        >
          <Send className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute inset-0 rounded-full bg-blue-500 opacity-40 blur-xl animate-pulse"></span>
        </a>
      </div>
    </section>
  );
}

export default Homepage;
