// src/Pages/Contacts.jsx
import React, { useMemo } from "react";

export default function Contacts() {
  // generate paper grain once
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

  return (
    <div className="relative min-h-screen w-full bg-[#f8f7f3] text-[#232323] antialiased selection:bg-neutral-800 selection:text-white overflow-x-hidden">
      {/* sketchy defs */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="wobble">
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
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.15" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      {/* paper grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url(${paperDataUrl})`,
          mixBlendMode: "multiply",
        }}
      />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-10 pt-20 pb-14 sm:pb-16 text-center">
          <h1
            className="text-[clamp(2rem,6vw,3.5rem)] leading-[1.1] font-serif tracking-tight text-neutral-900"
            style={{ filter: "url(#wobble)" }}
          >
            Контакты
          </h1>
          <div className="mt-4 h-[6px] w-40 sm:w-52 mx-auto">
            <svg width="100%" height="6" viewBox="0 0 300 6">
              <rect width="300" height="6" fill="url(#pencilStroke)" />
            </svg>
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-[17px] leading-relaxed text-neutral-700 px-2">
            Свяжитесь с нами для обсуждения проектов или консультации.
          </p>
        </div>
      </header>

      {/* CONTACT INFO */}
      <section className="px-4 sm:px-6 md:px-10 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-neutral-900"
            style={{ filter: "url(#wobble)" }}
          >
            Наши контакты
          </h2>
          <div className="mt-3 h-[6px] w-44 sm:w-64 mx-auto">
            <svg width="100%" height="6" viewBox="0 0 300 6">
              <rect width="300" height="6" fill="url(#pencilStroke)" />
            </svg>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Адрес",
                text: "Ташкент, Узбекистан\nСамарканд Дарвоза",
              },
              { title: "Телефон", text: "+998 90 123 45 67" },
              { title: "Email", text: "info@architecture.com" },
              { title: "Рабочие часы", text: "Пн - Сб\n9:00 - 19:00" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative rounded-[20px] border border-neutral-300 bg-white/80 p-5 sm:p-6 shadow-[0_8px_20px_rgba(0,0,0,0.06)]"
              >
                <h3
                  className="font-serif font-semibold text-lg text-neutral-900"
                  style={{ filter: "url(#wobble)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base whitespace-pre-line text-neutral-700">
                  {item.text}
                </p>
                <div
                  className="pointer-events-none absolute inset-0 rounded-[20px] border-[3px] border-neutral-900/70 opacity-[0.05]"
                  style={{ filter: "url(#wobble)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="relative px-4 sm:px-6 md:px-10 py-14 sm:py-16">
        <div className="mx-auto max-w-2xl rounded-[22px] border border-neutral-300 bg-white/70 shadow-[0_8px_20px_rgba(0,0,0,0.05)] p-6 sm:p-8 text-center">
          <h4
            className="text-xl sm:text-2xl font-serif font-bold text-neutral-900"
            style={{ filter: "url(#wobble)" }}
          >
            Отправьте нам сообщение
          </h4>
          <div className="mt-2 h-[6px] w-32 sm:w-40 mx-auto">
            <svg width="100%" height="6" viewBox="0 0 300 6">
              <rect width="300" height="6" fill="url(#pencilStroke)" />
            </svg>
          </div>
          <p className="mt-4 text-sm sm:text-[15.5px] text-neutral-700 leading-relaxed px-1">
            Мы ответим на ваши вопросы и обсудим детали проекта.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Сообщение отправлено (демо).");
            }}
            className="mt-6 grid grid-cols-1 gap-4"
          >
            <input
              type="text"
              placeholder="Ваше имя"
              className="p-3 rounded-lg border border-neutral-400 text-neutral-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-neutral-800"
              required
            />
            <input
              type="email"
              placeholder="Ваш email"
              className="p-3 rounded-lg border border-neutral-400 text-neutral-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-neutral-800"
              required
            />
            <textarea
              rows="5"
              placeholder="Ваше сообщение"
              className="p-3 rounded-lg border border-neutral-400 text-neutral-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-neutral-800"
              required
            />
            <button
              type="submit"
              className="mt-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-neutral-900 bg-neutral-900 text-white text-sm sm:text-base font-semibold hover:bg-neutral-700 transition"
            >
              Отправить
            </button>
          </form>
        </div>
      </section>

      {/* MAP */}
      <section className="h-[280px] sm:h-[320px] md:h-[420px] mt-10 sm:mt-12">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.592480404966!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3b2bde39df%3A0x9d184f7a7d0c25b0!2sTashkent!5e0!3m2!1sru!2s!4v1673000000000!5m2!1sru!2s"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        />
      </section>

      {/* subtle grain tint */}
      <div
        className="pointer-events-none fixed inset-0"
        aria-hidden
        style={{ filter: "url(#grain)" }}
      />
    </div>
  );
}
