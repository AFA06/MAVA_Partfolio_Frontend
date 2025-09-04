import React, { useMemo } from "react";

export default function About() {
  const paperDataUrl = useMemo(() => {
    const canvas = document.createElement("canvas");
    const s = 120;
    canvas.width = s;
    canvas.height = s;
    const ctx = canvas.getContext("2d");
    const imgData = ctx.createImageData(s, s);
    for (let i = 0; i < imgData.data.length; i += 4) {
      const v = 245 + Math.floor(Math.random() * 10);
      imgData.data[i] = v;
      imgData.data[i + 1] = v;
      imgData.data[i + 2] = v;
      imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
    return canvas.toDataURL();
  }, []);

  const timeline = [
    {
      year: "2015 – Начало",
      text: "Компания основана в Ташкенте с целью переосмыслить архитектуру страны.",
    },
    {
      year: "2018 – Первый крупный проект",
      text: "Реализован жилой комплекс, объединивший инновации и культурные традиции.",
    },
    {
      year: "2023 – Международное сотрудничество",
      text: "Выход на зарубежные рынки и внедрение устойчивых решений вместе с международными партнёрами.",
    },
  ];

  const team = [
    { name: "Абдурашид Каримов", role: "Основатель и Главный Архитектор" },
    { name: "Лайло Исматова", role: "Креативный Директор" },
    { name: "Жавлонбек Турсунов", role: "Эксперт по Устойчивости" },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#f8f7f3] text-[#232323] antialiased selection:bg-neutral-800 selection:text-white">
      {/* Sketch filters */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="wobble" filterUnits="objectBoundingBox">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="1"
              seed="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="0.6"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <pattern
            id="pencilStroke"
            width="300"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <rect width="300" height="6" fill="transparent" />
            <path
              d="M2 3 Q 60 0 120 3 T 298 3"
              stroke="#1f2937"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </pattern>
        </defs>
      </svg>

      {/* Paper grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url(${paperDataUrl})`,
          mixBlendMode: "multiply",
        }}
      />

      {/* Hero */}
      <header className="relative px-6 sm:px-10 pt-20 sm:pt-24 pb-16 sm:pb-20 text-center">
        <h1
          className="text-[clamp(2rem,6vw,4rem)] font-serif font-bold text-neutral-900 tracking-tight"
          style={{ filter: "url(#wobble)" }}
        >
          О нас
        </h1>
        <div className="mt-3 h-[6px] w-32 sm:w-48 mx-auto">
          <svg
            width="100%"
            height="6"
            viewBox="0 0 300 6"
            preserveAspectRatio="none"
          >
            <rect width="300" height="6" fill="url(#pencilStroke)" />
          </svg>
        </div>
        <p className="mt-6 max-w-2xl mx-auto text-[15px] sm:text-[17px] leading-relaxed text-neutral-700">
          <span className="font-semibold">MaxArchitects</span> — архитектурная
          студия из Узбекистана, создающая пространства, отражающие{" "}
          <span className="font-medium">традиции, современность и устойчивость</span>.
        </p>
      </header>

      {/* Vision / Mission / Values */}
      <section className="px-6 sm:px-10 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Наша Визия",
              text: "Сделать архитектуру Узбекистана символом инноваций и культурной идентичности.",
            },
            {
              title: "Наша Миссия",
              text: "Создавать устойчивые и функциональные проекты, которые улучшают жизнь людей и уважают природу.",
            },
            {
              title: "Наши Ценности",
              text: "Честность, креативность и ответственность перед клиентами лежат в основе каждого проекта.",
            },
          ].map((block, idx) => (
            <div
              key={idx}
              className="relative rounded-[22px] border border-neutral-300 bg-white/70 backdrop-blur-[1px] p-6 sm:p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)]"
            >
              <h2
                className="text-xl sm:text-2xl font-serif text-neutral-900"
                style={{ filter: "url(#wobble)" }}
              >
                {block.title}
              </h2>
              <div className="mt-2 h-[6px] w-24 sm:w-32">
                <svg
                  width="100%"
                  height="6"
                  viewBox="0 0 300 6"
                  preserveAspectRatio="none"
                >
                  <rect width="300" height="6" fill="url(#pencilStroke)" />
                </svg>
              </div>
              <p className="mt-4 text-[14.5px] sm:text-[15.5px] leading-[1.8] text-neutral-700">
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 sm:px-10 py-16 sm:py-20 bg-[#f3f2ef] border-y border-neutral-200">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-serif text-center text-neutral-900"
          style={{ filter: "url(#wobble)" }}
        >
          Наш Путь
        </h2>
        <div className="mt-10 max-w-3xl mx-auto space-y-10 sm:space-y-12 relative border-l-2 border-neutral-400 pl-6 sm:pl-8">
          {timeline.map((t, idx) => (
            <div key={idx}>
              <h3 className="text-base sm:text-lg font-serif font-semibold text-neutral-900">
                {t.year}
              </h3>
              <p className="mt-2 text-[14px] sm:text-[15px] text-neutral-700">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-6 sm:px-10 py-16 sm:py-20">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-serif text-center text-neutral-900"
          style={{ filter: "url(#wobble)" }}
        >
          Наша Команда
        </h2>
        <div className="mt-10 sm:mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          {team.map((m, idx) => (
            <div
              key={idx}
              className="relative rounded-[22px] border border-neutral-300 bg-white/70 p-6 sm:p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)]"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-neutral-200 flex items-center justify-center text-base sm:text-lg font-bold text-neutral-800">
                {m.name.charAt(0)}
              </div>
              <h3 className="text-base sm:text-lg font-serif font-semibold text-neutral-900">
                {m.name}
              </h3>
              <p className="mt-1 text-[13px] sm:text-[14px] text-neutral-700">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Outro */}
      <section className="px-6 sm:px-10 py-20 sm:py-28 text-center bg-[#f3f2ef]">
        <h2
          className="text-[clamp(1.5rem,4vw,2.5rem)] font-serif font-bold text-neutral-900 mb-6"
          style={{ filter: "url(#wobble)" }}
        >
          Каждый проект — шаг в будущее
        </h2>
        <p className="max-w-2xl mx-auto text-[15px] sm:text-[16px] leading-relaxed text-neutral-700 mb-8">
          MaxArchitects строит гармоничный Узбекистан, где архитектура соединяет
          прошлое и будущее.
        </p>
        <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-neutral-900 text-white text-sm sm:text-base font-semibold rounded-full shadow hover:bg-neutral-700 transition">
          Связаться с нами
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200/80">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-8 sm:py-10 text-[12.5px] sm:text-[13.5px] text-neutral-500 text-center sm:text-left">
          © {new Date().getFullYear()} — Архитектурная студия. Все права
          защищены.
        </div>
      </footer>
    </div>
  );
}
