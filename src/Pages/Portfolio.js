// frontend/src/components/Portfolio.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animate, stagger } from "animejs";

const projectsData = [
  {
    id: 1,
    name: "Modern Villa",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "A private residence where contemporary design meets serenity.",
  },
  {
    id: 2,
    name: "Urban Complex",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    description: "A vibrant multi-use complex redefining city living.",
  },
  {
    id: 3,
    name: "Eco House",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80",
    description: "Sustainable architecture designed in harmony with nature.",
  },
  {
    id: 4,
    name: "Luxury Office",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "A workspace that combines functionality with elegance.",
  },
];

const heroImages = [
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1529421308361-4b76c0b8d2f1?auto=format&fit=crop&w=1950&q=80",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Portfolio = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Animate hero text
    animate(".hero-title span", {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: stagger(100),
      easing: "easeOutExpo",
      duration: 1000,
    });

    // Cycle background images
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    // Track scroll
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden scroll-smooth snap-y snap-mandatory">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
        {/* Crossfade Backgrounds */}
        {heroImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: i === bgIndex ? 1 : 0,
              scale: i === bgIndex ? 1 : 1.05,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${img})`,
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        {/* Hero Text */}
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="hero-title text-5xl md:text-7xl font-serif font-bold tracking-wide text-yellow-300 drop-shadow-2xl">
            {`Architecture That Inspires`.split("").map((char, i) => (
              <span key={i} className="inline-block opacity-0">
                {char}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-lg md:text-xl font-light text-gray-100 drop-shadow-md">
            Crafting timeless spaces where design meets innovation.
          </p>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        className="py-20 px-6 md:px-16 flex justify-center snap-start"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-gradient-to-br from-gray-900/70 to-black/60 backdrop-blur-xl border border-yellow-500/20 rounded-3xl shadow-2xl max-w-4xl text-center p-10">
          <h2 className="text-3xl md:text-4xl font-serif text-yellow-400 mb-4">
            Our Design Philosophy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We see architecture as more than structures — it’s a language of
            culture, emotion, and identity. Each project balances innovation
            with sustainability, blending functionality with beauty.
          </p>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        className="py-20 px-6 md:px-16 snap-start"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif text-center text-yellow-400 mb-12">
          Our Portfolio Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 70, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-yellow-500/20 shadow-xl hover:shadow-yellow-400/40 hover:scale-[1.05] transition-transform duration-700 cursor-pointer group"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-serif font-bold text-yellow-400 drop-shadow-md">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Showcase Section */}
      <motion.section
        className="relative h-[500px] bg-cover bg-center snap-start"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1950&q=80')`,
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-yellow-400 mb-4 drop-shadow-lg">
            Signature Work
          </h2>
          <p className="max-w-2xl text-gray-200">
            Our landmark projects define skylines and communities, leaving a
            legacy of design excellence and cultural impact.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
