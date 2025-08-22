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
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10"></div>

       {/* Hero Text */}
<div className="relative z-20 text-center px-4 max-w-4xl">
  <h1 className="hero-title text-5xl md:text-7xl font-serif font-bold tracking-wide text-yellow-300 drop-shadow-[0_5px_20px_rgba(255,215,0,0.9)]">
    {`Our Portfolio`.split("").map((char, i) => (
      <span key={i} className="inline-block opacity-0">
        {char}
      </span>
    ))}
  </h1>
  <p className="mt-6 text-lg md:text-xl font-light text-gray-100 drop-shadow-md">
    Showcasing selected projects that highlight our creativity,
    expertise, and design vision.
  </p>
</div>

      </section>

      {/* About Section */}
      <motion.section
        className="min-h-[70vh] flex items-center justify-center px-6 md:px-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-xl border border-yellow-500/30 rounded-3xl shadow-2xl max-w-5xl text-center p-12 hover:scale-[1.02] transition-transform duration-700">
          <h2 className="text-4xl md:text-5xl font-serif text-yellow-400 mb-6">
            Our Philosophy
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Each project in our portfolio reflects a balance of creativity,
            precision, and innovation. We aim to design spaces that tell stories,
            capture emotions, and embody functionality — all while maintaining
            sustainability and elegance.
          </p>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        className="min-h-screen flex flex-col justify-center px-6 md:px-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-serif text-center text-yellow-400 mb-16">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 70, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-yellow-500/20 shadow-xl hover:shadow-yellow-400/40 hover:scale-[1.07] transition-transform duration-700 cursor-pointer group"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-serif font-bold text-yellow-400 drop-shadow-md">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Showcase Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1950&q=80')`,
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-yellow-400 mb-6 drop-shadow-lg">
            Signature Project
          </h2>
          <p className="max-w-3xl text-gray-200 text-lg mb-8">
            A showcase of futuristic design fused with timeless elegance,
            redefining modern architectural landscapes.
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            View More Projects
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
