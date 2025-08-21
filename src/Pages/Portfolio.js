// frontend/src/components/Portfolio.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { animate, stagger } from 'animejs';

const projectsData = [
  {
    id: 1,
    name: 'Modern Villa',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'A luxurious modern villa blending minimalism and comfort.',
  },
  {
    id: 2,
    name: 'Urban Complex',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    description: 'High-rise urban complex with innovative public spaces.',
  },
  {
    id: 3,
    name: 'Eco House',
    image: 'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80',
    description: 'Sustainable architecture integrated with nature.',
  },
  {
    id: 4,
    name: 'Luxury Office',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    description: 'Modern office design for a creative workspace.',
  },
  {
    id: 5,
    name: 'Minimal Apartment',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
    description: 'Compact living with a minimal and functional design.',
  },
  {
    id: 6,
    name: 'Futuristic Museum',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Cutting-edge museum design with innovative architecture.',
  },
];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) setIsVisible(true);
    };
    window.addEventListener('scroll', onScroll);

    // Hero text animation
    animate('.hero-title span', {
      opacity: [0, 1],
      translateY: [50, 0],
      delay: stagger(100),
      easing: 'easeOutExpo',
      duration: 1000,
    });

    // Floating golden particles
    animate('.particle', {
      translateY: [
        { value: -15, duration: 2000 },
        { value: 15, duration: 2000 },
      ],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: (_, i) => i * 150,
    });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden font-sans">
      
      {/* Golden Particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-70 blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
{/* Hero Section */}
<section
  className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80')`,
  }}
>
  {/* Golden overlay instead of solid black */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

  <div className="relative text-center z-10 max-w-3xl px-4">
    <h1 className="hero-title text-5xl md:text-7xl font-serif font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 drop-shadow-xl">
      {`Our Portfolio`.split('').map((char, i) => (
        <span key={i} className="inline-block opacity-0">
          {char}
        </span>
      ))}
    </h1>
    <div className="w-32 h-1 mx-auto mt-6 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full shadow-lg"></div>
    <p className="mt-6 text-lg md:text-xl font-light text-gray-200 drop-shadow-lg">
      Masterpieces of architecture — blending art and innovation.
    </p>
  </div>
</section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 70 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-yellow-500/20 shadow-xl hover:shadow-yellow-400/40 hover:scale-[1.05] hover:-rotate-1 transition-transform duration-700 cursor-pointer group"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-serif font-bold text-yellow-400 drop-shadow-md">{project.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
