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

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) setIsVisible(true);
    };
    window.addEventListener("scroll", onScroll);

    // Animate hero text
    animate(".hero-title span", {
      opacity: [0, 1],
      translateY: [50, 0],
      delay: stagger(100),
      easing: "easeOutExpo",
      duration: 1000,
    });

    // Change background every 6s
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with Crossfade Slideshow */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Crossfade backgrounds */}
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
              i === bgIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>

        {/* Hero text */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="hero-title text-5xl md:text-7xl font-serif font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 drop-shadow-2xl">
            {`Timeless Architecture`.split("").map((char, i) => (
              <span key={i} className="inline-block opacity-0">
                {char}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-lg md:text-xl font-light text-gray-200 drop-shadow-lg">
            Designing spaces that inspire, connect, and endure.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-16 flex justify-center">
        <div className="bg-gradient-to-br from-gray-900/70 to-black/60 backdrop-blur-xl border border-yellow-500/20 rounded-3xl shadow-2xl max-w-4xl text-center p-10">
          <h2 className="text-3xl md:text-4xl font-serif text-yellow-400 mb-4">
            Our Philosophy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We believe architecture is not just about buildings — it’s about
            emotions, connections, and experiences. Every project we design is a
            reflection of culture, luxury, and sustainability.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-yellow-400 mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 70 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-yellow-500/20 shadow-xl hover:shadow-yellow-400/40 hover:scale-[1.05] transition-transform duration-700 cursor-pointer group"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-serif font-bold text-yellow-400 drop-shadow-md">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Showcase Section */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-yellow-400 mb-4 drop-shadow-lg">
            Signature Project
          </h2>
          <p className="max-w-2xl text-gray-200">
            A blend of futuristic design and timeless elegance, redefining the
            essence of modern architecture.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
