import React from "react";

const Videos = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f7f3] text-center px-6">
      {/* Заголовок */}
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
        Наши обучающие курсы
      </h1>

      {/* Подзаголовок */}
      <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mb-12 leading-relaxed">
        Выбирайте направление и начинайте обучение в удобное для вас время.
      </p>

      {/* Кнопка */}
      <a
        href="https://yourcompanywebsite.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-10 py-4 bg-neutral-900 text-white text-lg font-medium rounded-full shadow hover:bg-neutral-700 transition"
      >
        Перейти на сайт компании
      </a>
    </div>
  );
};

export default Videos;
