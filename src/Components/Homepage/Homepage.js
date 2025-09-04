import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import backVideo from "../../assets/back.mp4"; // ✅ fixed path

function Homepage() {
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
        Ваш браузер не поддерживает видео фон.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto text-white">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-snug tracking-wide mb-4 text-gold drop-shadow-lg">
          Архитектурные решения будущего
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 mb-8">
          Мы проектируем современные здания и пространства в Узбекистане и за его пределами.
        </p>
        <Link
          to="/portfolio"
          className="inline-block px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-full border-2 border-gold text-gold
            hover:bg-gold hover:text-black transition-all duration-300 ease-in-out shadow-lg"
        >
          Смотреть портфолио
        </Link>
      </div>
    </section>
  );
}

export default Homepage;
