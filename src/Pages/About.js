// src/Pages/About.js
import React, { useEffect } from "react";
import { animate, stagger } from "animejs";

const About = () => {
  useEffect(() => {
    // Animate header
    animate(".about-header", {
      opacity: [0, 1],
      translateY: [-40, 0],
      duration: 1200,
      easing: "easeOutExpo",
    });

    // Animate paragraph
    animate(".about-text", {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: 400,
      duration: 1200,
      easing: "easeOutExpo",
    });

    // Animate cards with stagger
    animate(".about-card", {
      opacity: [0, 1],
      translateY: [60, 0],
      delay: stagger(300, { start: 800 }),
      duration: 1200,
      easing: "easeOutCubic",
    });
  }, []);

  return (
    <div className="about-page relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Decorative background aura */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-20 right-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-10 md:p-20">
        <h1 className="about-header text-5xl md:text-6xl font-extrabold text-center mb-6 opacity-0 tracking-tight">
          About Us
        </h1>
        <p className="about-text text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 leading-relaxed opacity-0">
          At <span className="text-white font-semibold">MaxArchitects</span>, we
          craft spaces that merge innovation, sustainability, and cultural
          heritage of Uzbekistan. Our designs are not just buildings—they are{" "}
          <span className="text-purple-400">living experiences</span> that
          inspire creativity, comfort, and connection.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="about-card bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl opacity-0 hover:scale-105 transition-transform duration-500">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To transform Uzbekistan’s architecture into a global symbol of{" "}
              <span className="font-medium text-white">
                innovation and human connection
              </span>, shaping the skylines of tomorrow.
            </p>
          </div>

          <div className="about-card bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl opacity-0 hover:scale-105 transition-transform duration-500">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Deliver sustainable, high-quality designs that{" "}
              <span className="font-medium text-white">
                elevate lifestyles
              </span>{" "}
              while respecting the environment and cultural roots.
            </p>
          </div>

          <div className="about-card bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl opacity-0 hover:scale-105 transition-transform duration-500">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">
              Our Values
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Integrity, creativity, sustainability, and{" "}
              <span className="font-medium text-white">
                unwavering client dedication
              </span>{" "}
              guide every project we bring to life.
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Every blueprint we draw is more than a design—it’s{" "}
            <span className="text-purple-400 font-semibold">a promise</span> to
            shape a better, more beautiful Uzbekistan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
