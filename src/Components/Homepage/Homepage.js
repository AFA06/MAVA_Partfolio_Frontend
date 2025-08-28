import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Hook for section visibility animation
const useOnScreen = (ref, rootMargin = "0px") => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const current = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, [ref, rootMargin]);

  return isIntersecting;
};

// Icons
const IconProject = () => (
  <svg className="w-12 h-12 sm:w-10 sm:h-10 mx-auto mb-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
  </svg>
);

const IconClients = () => (
  <svg className="w-12 h-12 sm:w-10 sm:h-10 mx-auto mb-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a6.5 6.5 0 0113 0" />
  </svg>
);

const IconRevenue = () => (
  <svg className="w-12 h-12 sm:w-10 sm:h-10 mx-auto mb-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 8v4l3 3" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const IconAwards = () => (
  <svg className="w-12 h-12 sm:w-10 sm:h-10 mx-auto mb-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polygon points="12 2 15 8.5 22 9.3 17 14 18.3 21 12 17.5 5.7 21 7 14 2 9.3 9 8.5" />
  </svg>
);

function Homepage() {
  // Section refs
  const aboutRef = useRef();
  const advantagesRef = useRef();
  const reviewsRef = useRef();
  const contactRef = useRef();

  // Visibility states
  const aboutVisible = useOnScreen(aboutRef, "-100px");
  const advantagesVisible = useOnScreen(advantagesRef, "-100px");
  const reviewsVisible = useOnScreen(reviewsRef, "-100px");
  const contactVisible = useOnScreen(contactRef, "-100px");

  // Advantages (hardcoded Russian)
  const advantages = [
    {
      icon: <IconProject />,
      title: "Реализованные проекты",
      description: "Мы успешно завершили десятки проектов в различных отраслях.",
    },
    {
      icon: <IconClients />,
      title: "Довольные клиенты",
      description: "Нас выбирают сотни клиентов по всему миру.",
    },
    {
      icon: <IconRevenue />,
      title: "Рост дохода",
      description: "Наши решения помогают компаниям увеличивать прибыль.",
    },
    {
      icon: <IconAwards />,
      title: "Награды и признание",
      description: "Мы получили престижные награды за качество и инновации.",
    },
  ];

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-black text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-75"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1650&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90"></div>

        <div className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-wide mb-4">
            Добро пожаловать в нашу студию
          </h1>
          <span className="block text-indigo-400 font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight tracking-wide mb-8">
            Мы создаём будущее
          </span>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-2xl text-gray-300 mb-10">
            Мы объединяем технологии и креативность, чтобы создавать современные решения для вашего бизнеса.
          </p>
          <Link
            to="/portfolio"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 text-indigo-400 font-semibold rounded-full border-2 border-indigo-400
              hover:bg-indigo-400 hover:text-black transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500"
          >
            Смотреть портфолио
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className={`max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 transition-all duration-700 ${
          aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-8 uppercase border-l-4 border-gold pl-4 inline-block">
          О нас
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
          Мы — команда профессионалов, объединённых одной целью: создавать инновационные продукты и сервисы.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-400">
          Наша миссия — помогать компаниям расти, внедряя передовые технологии и предоставляя лучшие решения на рынке.
        </p>
      </section>

      {/* Advantages Section */}
      <section
        ref={advantagesRef}
        className={`bg-[#1a1a1a] py-16 sm:py-20 px-4 sm:px-6 transition-all duration-700 ${
          advantagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gold uppercase mb-12">
          Наши преимущества
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {advantages.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="bg-black rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {icon}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section
        ref={reviewsRef}
        className={`max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 transition-all duration-700 ${
          reviewsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-10 sm:mb-12 text-center uppercase">
          Отзывы
        </h2>
        <div className="space-y-6 sm:space-y-8">
          <blockquote className="bg-[#111] p-6 sm:p-8 rounded-xl shadow-md italic text-gray-300">
            Отличная команда! Они помогли нам создать современный сайт, который выделяет нас на рынке.
            <footer className="mt-4 font-semibold text-gold">— Анна Петрова</footer>
          </blockquote>
          <blockquote className="bg-[#111] p-6 sm:p-8 rounded-xl shadow-md italic text-gray-300">
            Профессиональный подход и качественный результат. Очень довольны сотрудничеством.
            <footer className="mt-4 font-semibold text-gold">— Иван Смирнов</footer>
          </blockquote>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className={`max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 transition-all duration-700 ${
          contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-8 uppercase border-l-4 border-gold pl-4 inline-block">
          Связаться с нами
        </h2>
        <p className="text-gray-400 mb-6 max-w-2xl">
          Заполните форму, и мы свяжемся с вами в ближайшее время.
        </p>
        <form className="max-w-2xl space-y-4">
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full p-4 rounded-lg bg-[#222] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="email"
            placeholder="Ваш email"
            className="w-full p-4 rounded-lg bg-[#222] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <textarea
            placeholder="Ваше сообщение"
            rows="5"
            className="w-full p-4 rounded-lg bg-[#222] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
          ></textarea>
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-gold text-black font-semibold rounded-full shadow-xl hover:bg-yellow-600 hover:shadow-[0_0_15px_rgba(255,215,0,0.9)] transition-all"
          >
            Отправить
          </button>
        </form>
      </section>
    </div>
  );
}

export default Homepage;
