// src/Pages/About.js
import React from "react";

const About = () => {
  return (
    <div className="about-page min-h-screen bg-gray-50 text-gray-800 px-6 sm:px-12 md:px-20 py-16">
      {/* Заголовок */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 tracking-tight">
        О нас
      </h1>

      {/* Вступительный текст */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
          <span className="font-semibold">MaxArchitects</span> — архитектурная студия из Узбекистана,
          создающая пространства, которые отражают{" "}
          <span className="font-medium">традиции, современность и устойчивость</span>.
          Мы разрабатываем проекты, где простота и гармония играют ключевую роль.
        </p>
      </div>

      {/* Три ключевых блока */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24">
        <div className="bg-white p-8 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Наша Визия</h2>
          <p className="text-gray-600">
            Сделать архитектуру Узбекистана{" "}
            <span className="font-medium">символом инноваций</span> и
            культурной идентичности на международной арене.
          </p>
        </div>

        <div className="bg-white p-8 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Наша Миссия</h2>
          <p className="text-gray-600">
            Создавать устойчивые и функциональные проекты,
            которые <span className="font-medium">улучшают жизнь людей</span> и уважают природу.
          </p>
        </div>

        <div className="bg-white p-8 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Наши Ценности</h2>
          <p className="text-gray-600">
            Честность, креативность и{" "}
            <span className="font-medium">ответственность перед клиентами</span>
            лежат в основе каждого проекта.
          </p>
        </div>
      </div>

      {/* Таймлайн */}
      <div className="max-w-4xl mx-auto mb-24">
        <h2 className="text-2xl font-bold text-center mb-12">Наш Путь</h2>
        <div className="space-y-10 border-l border-gray-300 pl-6">
          <div>
            <h3 className="text-lg font-semibold">2015 – Начало</h3>
            <p className="text-gray-600">
              Компания основана в Ташкенте с целью переосмыслить архитектуру страны.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">2018 – Первый крупный проект</h3>
            <p className="text-gray-600">
              Реализован жилой комплекс, объединивший инновации и культурные традиции.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">2023 – Международное сотрудничество</h3>
            <p className="text-gray-600">
              Выход на зарубежные рынки и внедрение устойчивых решений вместе с международными партнёрами.
            </p>
          </div>
        </div>
      </div>

      {/* Команда */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-2xl font-bold text-center mb-12">Наша Команда</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
          {[
            { name: "Абдурашид Каримов", role: "Основатель и Главный Архитектор" },
            { name: "Лайло Исматова", role: "Креативный Директор" },
            { name: "Жавлонбек Турсунов", role: "Эксперт по Устойчивости" },
          ].map((member, idx) => (
            <div key={idx} className="bg-white p-8 border border-gray-200">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-800">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Заключение */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-gray-700 text-lg mb-6">
          Каждый проект MaxArchitects — это{" "}
          <span className="font-medium">шаг к созданию гармоничного Узбекистана</span>,
          где архитектура соединяет прошлое и будущее.
        </p>
        <button className="px-6 py-3 border border-gray-800 text-gray-800 font-medium rounded-md hover:bg-gray-800 hover:text-white transition-colors">
          Связаться с нами
        </button>
      </div>
    </div>
  );
};

export default About;
