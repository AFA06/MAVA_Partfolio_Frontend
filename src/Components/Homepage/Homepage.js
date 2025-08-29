import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import backVideo from "../../assets/back.mp4"; // ✅ fixed path

function Homepage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-white min-h-screen bg-black">
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen flex items-center justify-center text-center pt-16">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backVideo} type="video/mp4" />
          Ваш браузер не поддерживает видео фон.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-wide mb-6 text-gold drop-shadow-lg">
            Архитектурные решения будущего
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-200 mb-10">
            Мы проектируем современные здания и пространства в Узбекистане и за его пределами.
          </p>
          <Link
            to="/portfolio"
            className="inline-block px-8 py-3 text-lg font-semibold rounded-full border-2 border-gold text-gold
              hover:bg-gold hover:text-black transition-all duration-300 ease-in-out shadow-lg"
          >
            Смотреть портфолио
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
