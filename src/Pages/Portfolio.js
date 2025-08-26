// frontend/src/components/Portfolio.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animate, stagger } from "animejs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projectsData = [
  {
    id: 1,
    name: "Современная Вилла",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Роскошная современная вилла, сочетающая минимализм и комфорт.",
  },
  {
    id: 2,
    name: "Городской Комплекс",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    description: "Многоэтажный городской комплекс с инновационными общественными пространствами.",
  },
  {
    id: 3,
    name: "Эко Дом",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80",
    description: "Устойчивое строительство, интегрированное с природой.",
  },
  {
    id: 4,
    name: "Стеклянная Башня",
    image:
      "https://images.unsplash.com/photo-1529421308361-4b76c0b8d2f1?auto=format&fit=crop&w=1200&q=80",
    description: "Футуристический небоскрёб из стекла, меняющий облик города.",
  },
  {
    id: 5,
    name: "Роскошный Курорт",
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e2a0f1e0f1?auto=format&fit=crop&w=1200&q=80",
    description: "Курорт у моря, сочетающий роскошь и гармонию с природой.",
  },
  {
    id: 6,
    name: "Культурный Центр",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    description: "Знаковый культурный центр, объединяющий традиции и современность.",
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
    animate(".hero-title span", {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: stagger(100),
      easing: "easeOutExpo",
      duration: 1000,
    });

    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

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

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10"></div>

        <div className="relative z-20 text-center px-4 sm:px-6 md:px-8 max-w-4xl">
          <h1 className="hero-title text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-wide text-yellow-300 drop-shadow-[0_5px_20px_rgba(255,215,0,0.9)]">
            {`Наш Портфолио`.split("").map((char, i) => (
              <span key={i} className="inline-block opacity-0">
                {char}
              </span>
            ))}
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-light text-gray-100 drop-shadow-md">
            Подборка проектов, демонстрирующих наше творчество, опыт и видение дизайна.
          </p>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        className="min-h-[60vh] flex items-center justify-center px-4 sm:px-8 md:px-16 py-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-xl border border-yellow-500/30 rounded-2xl md:rounded-3xl shadow-2xl max-w-5xl text-center p-6 sm:p-10 md:p-12 hover:scale-[1.02] transition-transform duration-700">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-yellow-400 mb-4 sm:mb-6">
            Наша Философия
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
            Каждый проект в нашем портфолио отражает баланс креативности, точности и инноваций. 
            Мы стремимся создавать пространства, которые рассказывают истории, вызывают эмоции 
            и воплощают функциональность — при этом сохраняя устойчивость и элегантность.
          </p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 py-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-center text-yellow-400 mb-10 sm:mb-12 md:mb-16">
          Избранные Проекты
        </h2>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {projectsData.map((project, index) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 70, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                  className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-yellow-500/20 shadow-xl hover:shadow-yellow-400/40 hover:scale-[1.05] transition-transform duration-700 cursor-pointer group"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-serif font-bold text-yellow-400 drop-shadow-md">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-200">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 70, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-yellow-500/20 shadow-xl hover:shadow-yellow-400/40 hover:scale-[1.07] transition-transform duration-700 cursor-pointer group"
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
                <p className="mt-2 text-sm text-gray-200">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Showcase Section */}
      <motion.section
        className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center bg-cover bg-center"
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
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-yellow-400 mb-4 sm:mb-6 drop-shadow-lg">
            Знаковый Проект
          </h2>
          <p className="max-w-3xl text-gray-200 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            Демонстрация футуристического дизайна, объединённого с вечной элегантностью, 
            переосмысляющего современный архитектурный ландшафт.
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 sm:px-8 py-2 sm:py-3 bg-yellow-400 text-black text-sm sm:text-base font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Смотреть больше проектов
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
