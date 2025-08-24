// src/Pages/About.js
import React, { useEffect } from "react";
import { animate, createTimeline } from "animejs";

const About = () => {
  useEffect(() => {
    // Create a timeline for smoother sequencing
    const tl = createTimeline({
      duration: 1000,
      easing: "easeOutExpo",
    });

    // Animate header
    tl.add({
      targets: ".about-header",
      opacity: [0, 1],
      transform: ["translateY(-40px)", "translateY(0px)"],
    });

    // Animate text content after header
    tl.add({
      targets: ".about-text",
      opacity: [0, 1],
      transform: ["translateY(40px)", "translateY(0px)"],
    });

    // Animate each card with stagger
    animate(".about-card", {
      opacity: [0, 1],
      transform: ["translateY(50px)", "translateY(0px)"],
      delay: (el, i) => 300 + i * 200, // stagger effect
      duration: 1000,
      easing: "easeOutCubic",
    });
  }, []);

  return (
    <div className="about-page min-h-screen bg-gray-100 p-10">
      <h1 className="about-header text-4xl font-bold text-center mb-6 opacity-0">
        About Us
      </h1>
      <p className="about-text text-lg text-center max-w-2xl mx-auto mb-12 opacity-0">
        We are passionate architects dedicated to designing innovative,
        sustainable, and user-friendly spaces that inspire creativity and
        comfort. Our mission is to merge functionality with aesthetics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="about-card bg-white p-6 rounded-2xl shadow-md opacity-0">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p>
            To transform architecture into a blend of innovation and human
            connection, shaping cities of tomorrow.
          </p>
        </div>

        <div className="about-card bg-white p-6 rounded-2xl shadow-md opacity-0">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p>
            Deliver high-quality, sustainable designs tailored to enhance both
            lifestyle and environment.
          </p>
        </div>

        <div className="about-card bg-white p-6 rounded-2xl shadow-md opacity-0">
          <h2 className="text-xl font-semibold mb-2">Our Values</h2>
          <p>
            Integrity, creativity, sustainability, and a deep commitment to
            client satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
