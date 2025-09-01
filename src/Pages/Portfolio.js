// frontend/src/components/Portfolio.js
import React from "react";
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
    description:
      "Многоэтажный городской комплекс с инновационными общественными пространствами.",
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
    description:
      "Футуристический небоскрёб из стекла, меняющий облик города.",
  },
  {
    id: 5,
    name: "Роскошный Курорт",
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e2a0f1e0f1?auto=format&fit=crop&w=1200&q=80",
    description:
      "Курорт у моря, сочетающий роскошь и гармонию с природой.",
  },
  {
    id: 6,
    name: "Культурный Центр",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    description:
      "Знаковый культурный центр, объединяющий традиции и современность.",
  },
];

const Portfolio = () => {
  return (
    <div className="w-full bg-[#f4f4f2] text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 bg-gradient-to-b from-[#f4f4f2] to-[#ececea] border-b border-gray-300">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]"></div>
        <div className="relative z-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2990/2990502.png"
            alt="architectural drawing"
            className="w-20 h-20 mb-6 opacity-80 mx-auto"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-4 tracking-tight">
            Наше Портфолио
          </h1>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed">
            Современные архитектурные решения с акцентом на эстетику,
            функциональность и устойчивость.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 sm:px-12 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Наша Философия
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Каждый проект отражает баланс креативности, точности и инноваций.
              Мы создаём пространства, которые вдохновляют и соединяют эстетику
              с функциональностью, сохраняя при этом элегантность и
              устойчивость.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2990/2990509.png"
              alt="architectural sketch"
              className="w-72 h-72 opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-[#ececea] to-[#f4f4f2] border-y border-gray-300"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-800 mb-14">
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
            {projectsData.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-gray-800">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow hover:shadow-lg transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-gray-800">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Section */}
      <section className="relative py-28 px-6 bg-[#f0f0ee]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graph-paper.png')]"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2990/2990515.png"
            alt="blueprint drawing"
            className="w-16 h-16 mx-auto mb-6 opacity-70"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Знаковый Проект
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-8">
            Демонстрация современного архитектурного мышления, где каждая линия
            и форма создают гармоничное пространство.
          </p>
          <a
            href="#projects"
            className="px-6 sm:px-8 py-3 bg-gray-800 text-white text-sm sm:text-base font-semibold rounded-full shadow hover:bg-gray-700 transition"
          >
            Смотреть проекты
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
