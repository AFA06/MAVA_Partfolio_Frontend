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
    description: "A luxurious modern villa blending minimalism and comfort.",
  },
  {
    id: 2,
    name: "Urban Complex",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    description: "High-rise urban complex with innovative public spaces.",
  },
  {
    id: 3,
    name: "Eco House",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80",
    description: "Sustainable architecture integrated with nature.",
  },
  {
    id: 4,
    name: "Luxury Office",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Modern office design for a creative workspace.",
  },
];

const heroImages = [
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1529421308361-4b76c0b8d2f1?auto=format&fit=crop&w=1950&q=80",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const Portfolio = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Animate hero text letter by letter
    animate(".hero-title span", {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: stagger(80),
      easing: "easeOutExpo",
      duration: 900,
    });

    // Crossfade backgrounds
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    // Track scroll for parallax
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Crossfade background images */}
        {heroImages.map((img, i) => (
          <motion.div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
              i === bgIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              transform: `translateY(${scrollY * 0.25}px)`,
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
          />
        ))}

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70 z-10" />

        {/* Hero text */}
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="hero-title text-5xl md:text-7xl font-serif font-bold tracking-wide text-yellow-300 drop-shadow-[0_5px_20px_rgba(0,0,0,0.9)]">
            {"Timeless Architecture".split("").map((char, i) => (
              <span key={i} className="inline-block opacity-0">
                {char}
              </span>
            ))}
          </h1>
          <p className="mt-8 text-lg md:text-2xl font-light text-gray-200 drop-shadow-xl">
            Designing spaces that inspire, connect, and endure.
          </p>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        className="py-24 px-6 md:px-16 flex justify-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="bg-gradient-to-br from-gray-900/80 to-black/70 backdrop-blur-xl border border-yellow-500/20 rounded-3xl shadow-2xl max-w-4xl text-center p-12">
          <h2 className="text-4xl font-serif text-yellow-400 mb-6">
            Our Philosophy
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Architecture is more than structures — it is emotion, connection,
            and legacy. Every masterpiece we create blends culture, luxury,
            sustainability, and timeless beauty.
          </p>
        </div>
      </motion.section>

      {/* Portfolio Grid */}
      <motion.section
        className="py-20 px-6 md:px-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl font-serif text-center text-yellow-400 mb-14">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 70, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.2, duration: 1 }}
              className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-yellow-500/20 shadow-xl hover:shadow-yellow-400/40 hover:scale-[1.05] transition-transform duration-700 cursor-pointer group"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-serif font-bold text-yellow-400 drop-shadow-md">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Showcase Section */}
      <motion.section
        className="relative h-[550px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1950&q=80')`,
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-yellow-400 mb-6 drop-shadow-lg">
            Signature Project
          </h2>
          <p className="max-w-2xl text-lg md:text-xl text-gray-200">
            A fusion of futuristic design and timeless elegance, redefining the
            essence of modern architecture.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
