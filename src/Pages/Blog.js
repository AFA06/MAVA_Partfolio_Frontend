// src/Pages/Blog.jsx
import React, { useMemo } from "react";

export default function Blog() {
  // Generate paper grain dataURL once
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
    <div className="relative min-h-screen w-full bg-[#f8f7f3] text-[#232323] antialiased selection:bg-neutral-800 selection:text-white">
      {/* SVG defs for sketch effects */}
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

      {/* Paper grain */}
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
        <div className="mx-auto max-w-4xl px-6 sm:px-10 pt-20 pb-16 text-center">
          <h1
            className="text-[clamp(2.25rem,6vw,4rem)] leading-[1.1] font-serif tracking-tight text-neutral-900"
            style={{ filter: "url(#wobble)" }}
          >
            Наш Блог
          </h1>
          <div className="mt-4 h-[6px] w-52 mx-auto">
            <svg width="100%" height="6" viewBox="0 0 300 6">
              <rect width="300" height="6" fill="url(#pencilStroke)" />
            </svg>
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-[17px] leading-relaxed text-neutral-700 italic">
            Истории, заметки и вдохновение из нашей студии.
          </p>
        </div>
      </header>

      {/* VIDEO SECTION */}
      <section className="px-6 sm:px-10 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2
            className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900"
            style={{ filter: "url(#wobble)" }}
          >
            Видео из нашей жизни
          </h2>
          <div className="mt-3 h-[6px] w-64 mx-auto">
            <svg width="100%" height="6" viewBox="0 0 300 6">
              <rect width="300" height="6" fill="url(#pencilStroke)" />
            </svg>
          </div>
          <p className="mt-5 max-w-2xl mx-auto text-neutral-600 text-lg">
            Короткие ролики о нашей команде, проектах и вдохновении.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative rounded-[20px] border border-neutral-300 shadow-[0_8px_20px_rgba(0,0,0,0.06)] overflow-hidden bg-white/80">
              <iframe
                className="w-full h-64 md:h-80"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 rounded-[20px] border-[3px] border-neutral-900/70 opacity-[0.05]" style={{ filter: "url(#wobble)" }} />
            </div>

            <div className="relative rounded-[20px] border border-neutral-300 shadow-[0_8px_20px_rgba(0,0,0,0.06)] overflow-hidden bg-white/80">
              <iframe
                className="w-full h-64 md:h-80"
                src="https://www.instagram.com/reel/CyZ5z1wAnkU/embed"
                title="Instagram reel"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 rounded-[20px] border-[3px] border-neutral-900/70 opacity-[0.05]" style={{ filter: "url(#wobble)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="relative px-6 sm:px-10 py-16">
        <div className="mx-auto max-w-2xl rounded-[22px] border border-neutral-300 bg-white/70 shadow-[0_8px_20px_rgba(0,0,0,0.05)] p-8 text-center">
          <h4
            className="text-2xl font-serif font-bold text-neutral-900"
            style={{ filter: "url(#wobble)" }}
          >
            Будьте в курсе
          </h4>
          <div className="mt-2 h-[6px] w-40 mx-auto">
            <svg width="100%" height="6" viewBox="0 0 300 6">
              <rect width="300" height="6" fill="url(#pencilStroke)" />
            </svg>
          </div>
          <p className="mt-5 text-neutral-700 text-[15.5px] leading-relaxed">
            Подпишитесь на нашу рассылку — ежемесячные заметки, полезные
            материалы и новости о проектах.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Подписка оформлена (демо).");
            }}
            className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="min-w-[240px] flex-1 px-4 py-3 rounded-lg border border-neutral-400 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-800"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg border border-neutral-900 bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-700 transition"
            >
              Подписаться
            </button>
          </form>
        </div>
      </section>

      {/* Global subtle grain tint */}
      <div
        className="pointer-events-none fixed inset-0"
        aria-hidden
        style={{ filter: "url(#grain)" }}
      />
    </div>
  );
}
