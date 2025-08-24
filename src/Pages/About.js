// src/Pages/About.js
import React, { useEffect } from "react";
import { animate, stagger } from "animejs";

const About = () => {
  useEffect(() => {
    // Header animation
    animate(".about-header", {
      opacity: [0, 1],
      translateY: [-40, 0],
      duration: 1200,
      easing: "easeOutExpo",
    });

    // Intro text animation
    animate(".about-text", {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: 400,
      duration: 1200,
      easing: "easeOutExpo",
    });

    // Card animation
    animate(".about-card", {
      opacity: [0, 1],
      translateY: [60, 0],
      delay: stagger(300, { start: 800 }),
      duration: 1200,
      easing: "easeOutCubic",
    });

    // Timeline animation
    animate(".timeline-item", {
      opacity: [0, 1],
      translateX: [-50, 0],
      delay: stagger(400, { start: 1200 }),
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <div className="about-page relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-purple-500/30 rounded-full blur-3xl top-10 left-5 sm:left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-5 sm:right-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-20 py-12">
        {/* Title */}
        <h1 className="about-header text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 opacity-0 tracking-tight leading-tight">
          About Us
        </h1>

        {/* Subtitle */}
        <p className="about-text text-base sm:text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed opacity-0">
          At <span className="text-white font-semibold">MaxArchitects</span>, we
          craft spaces that merge innovation, sustainability, and cultural
          heritage of Uzbekistan. Our designs are{" "}
          <span className="text-purple-400">living experiences</span> that
          inspire creativity, comfort, and connection.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="about-card bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-2xl shadow-2xl opacity-0 hover:scale-105 transition-transform duration-500">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-purple-300">
              Our Vision
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              To transform Uzbekistan’s architecture into a global symbol of{" "}
              <span className="font-medium text-white">
                innovation and human connection
              </span>
              , shaping the skylines of tomorrow.
            </p>
          </div>

          <div className="about-card bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-2xl shadow-2xl opacity-0 hover:scale-105 transition-transform duration-500">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-purple-300">
              Our Mission
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Deliver sustainable, high-quality designs that{" "}
              <span className="font-medium text-white">elevate lifestyles</span>{" "}
              while respecting the environment and cultural roots.
            </p>
          </div>

          <div className="about-card bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-2xl shadow-2xl opacity-0 hover:scale-105 transition-transform duration-500">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-purple-300">
              Our Values
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Integrity, creativity, sustainability, and{" "}
              <span className="font-medium text-white">
                unwavering client dedication
              </span>{" "}
              guide every project we bring to life.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-20 sm:mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 text-purple-300">
            Our Journey
          </h2>
          <div className="space-y-6 sm:space-y-10 max-w-3xl mx-auto">
            <div className="timeline-item bg-white/10 border border-white/20 p-5 sm:p-6 rounded-xl shadow-lg opacity-0">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                2015 – The Beginning
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mt-2">
                Founded in Tashkent with a vision to redefine modern
                architecture in Uzbekistan.
              </p>
            </div>
            <div className="timeline-item bg-white/10 border border-white/20 p-5 sm:p-6 rounded-xl shadow-lg opacity-0">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                2018 – First Landmark Project
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mt-2">
                Completed our first large-scale residential complex, merging
                innovation and culture.
              </p>
            </div>
            <div className="timeline-item bg-white/10 border border-white/20 p-5 sm:p-6 rounded-xl shadow-lg opacity-0">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                2023 – Expanding Horizons
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mt-2">
                Partnered with global firms to bring sustainable designs to
                international markets.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 sm:mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 text-purple-300">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Abdurashid Karimov", role: "Founder & Lead Architect" },
              { name: "Laylo Ismatova", role: "Creative Director" },
              { name: "Javlonbek Tursunov", role: "Sustainability Expert" },
            ].map((member, idx) => (
              <div
                key={idx}
                className="about-card bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 opacity-0 text-center hover:scale-105 transition-transform duration-500"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-xl sm:text-2xl font-bold text-white mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-20 sm:mt-24 text-center">
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Every blueprint we draw is{" "}
            <span className="text-purple-400 font-semibold">a promise</span> to
            shape a better, more beautiful Uzbekistan.
          </p>
          <button className="px-6 sm:px-8 py-3 bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold rounded-full shadow-lg text-sm sm:text-base">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
