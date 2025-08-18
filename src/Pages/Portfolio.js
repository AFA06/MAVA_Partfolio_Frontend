// frontend/src/components/Portfolio.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        className="relative h-96 md:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light">
            Architectural designs that inspire and amaze
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="relative rounded-xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md hover:scale-105 transition-transform duration-500 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
