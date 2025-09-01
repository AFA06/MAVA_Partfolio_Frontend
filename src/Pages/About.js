// frontend/src/components/About.js
import React from "react";

const About = () => {
  return (
    <div className="w-full bg-[#eeece8] text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 bg-gradient-to-b from-[#eeece8] to-[#e2e0dc] border-b border-gray-400">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]"></div>
        <div className="relative z-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2990/2990510.png"
            alt="about icon"
            className="w-20 h-20 mb-6 opacity-80 mx-auto"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-4 tracking-tight">
            О нас
          </h1>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed">
            <span className="font-semibold">MaxArchitects</span> — архитектурная студия из
            Узбекистана, создающая пространства, которые отражают{" "}
            <span className="font-medium">традиции, современность и устойчивость</span>.
          </p>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="py-20 px-6 sm:px-12 md:px-20 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]"></div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-[#fdfdfb] p-8 border border-gray-300 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-serif text-gray-800 mb-4 border-l-4 border-gray-600 pl-4">
              Наша Визия
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Сделать архитектуру Узбекистана{" "}
              <span className="font-medium">символом инноваций</span> и культурной идентичности.
            </p>
          </div>

          <div className="bg-[#fdfdfb] p-8 border border-gray-300 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-serif text-gray-800 mb-4 border-l-4 border-gray-600 pl-4">
              Наша Миссия
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Создавать устойчивые и функциональные проекты, которые{" "}
              <span className="font-medium">улучшают жизнь людей</span> и уважают природу.
            </p>
          </div>

          <div className="bg-[#fdfdfb] p-8 border border-gray-300 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-serif text-gray-800 mb-4 border-l-4 border-gray-600 pl-4">
              Наши Ценности
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Честность, креативность и{" "}
              <span className="font-medium">ответственность перед клиентами</span> лежат в основе каждого проекта.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-[#e2e0dc] to-[#eeece8] border-y border-gray-400 relative">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-800 mb-14 relative">
          Наш Путь
          <span className="block w-24 h-1 bg-gray-700 mx-auto mt-4"></span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-12 relative border-l-2 border-gray-400 pl-8">
          <div>
            <h3 className="text-xl font-serif font-semibold text-gray-800">2015 – Начало</h3>
            <p className="text-gray-700 mt-2">
              Компания основана в Ташкенте с целью переосмыслить архитектуру страны.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold text-gray-800">2018 – Первый крупный проект</h3>
            <p className="text-gray-700 mt-2">
              Реализован жилой комплекс, объединивший инновации и культурные традиции.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold text-gray-800">2023 – Международное сотрудничество</h3>
            <p className="text-gray-700 mt-2">
              Выход на зарубежные рынки и внедрение устойчивых решений вместе с международными партнёрами.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 sm:px-12 md:px-20 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-800 mb-14 relative">
          Наша Команда
          <span className="block w-24 h-1 bg-gray-700 mx-auto mt-4"></span>
        </h2>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
          {[
            { name: "Абдурашид Каримов", role: "Основатель и Главный Архитектор" },
            { name: "Лайло Исматова", role: "Креативный Директор" },
            { name: "Жавлонбек Турсунов", role: "Эксперт по Устойчивости" },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-[#fdfdfb] p-8 border border-gray-300 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-800">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg font-serif font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outro */}
      <section className="relative py-28 px-6 bg-[#e8e6e2]">
        <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/graph-paper.png')]"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2990/2990512.png"
            alt="contact"
            className="w-16 h-16 mx-auto mb-6 opacity-80"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Каждый проект — шаг в будущее
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-8">
            MaxArchitects строит гармоничный Узбекистан, где архитектура соединяет прошлое и будущее.
          </p>
          <button className="px-6 sm:px-8 py-3 bg-gray-800 text-white text-sm sm:text-base font-semibold rounded-full shadow hover:bg-gray-700 transition">
            Связаться с нами
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
