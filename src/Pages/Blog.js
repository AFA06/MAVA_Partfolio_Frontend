// src/Pages/Blog.jsx
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();

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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16 text-center">
          <h1
            className="text-[clamp(1.75rem,6vw,3.5rem)] sm:text-[clamp(2rem,6vw,4rem)] leading-[1.1] font-serif tracking-tight text-neutral-900"
            style={{ filter: "url(#wobble)" }}
          >
            {t("blogPage.title")}
          </h1>
          <div className="mt-3 h-[4px] sm:h-[6px] w-32 sm:w-52 mx-auto">
            <svg width="100%" height="6" viewBox="0 0 300 6">
              <rect width="300" height="6" fill="url(#pencilStroke)" />
            </svg>
          </div>
          <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-[13px] sm:text-[15px] md:text-[17px] leading-relaxed text-neutral-700 italic">
            {t("blogPage.subtitle")}
          </p>
        </div>
      </header>

      {/* VIDEO SECTION */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2
            className="text-[clamp(1.5rem,4vw,2.25rem)] sm:text-[clamp(1.75rem,4vw,2.5rem)] font-serif font-bold text-neutral-900"
            style={{ filter: "url(#wobble)" }}
          >
            {t("blogPage.videoTitle")}
          </h2>
          <div className="mt-2 sm:mt-3 h-[4px] sm:h-[6px] w-40 sm:w-64 mx-auto">
            <svg width="100%" height="6" viewBox="0 0 300 6">
              <rect width="300" height="6" fill="url(#pencilStroke)" />
            </svg>
          </div>
          <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-neutral-600 text-[13px] sm:text-[15px] md:text-[16px]">
            {t("blogPage.videoSubtitle")}
          </p>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Video 1 */}
            <div className="relative rounded-xl sm:rounded-[20px] border border-neutral-300 shadow-[0_6px_16px_rgba(0,0,0,0.06)] overflow-hidden bg-white/80">
              <iframe
                className="w-full h-48 sm:h-64 md:h-80"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allowFullScreen
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-[20px] border-[2px] sm:border-[3px] border-neutral-900/70 opacity-[0.05]"
                style={{ filter: "url(#wobble)" }}
              />
            </div>

            {/* Video 2 */}
            <div className="relative rounded-xl sm:rounded-[20px] border border-neutral-300 shadow-[0_6px_16px_rgba(0,0,0,0.06)] overflow-hidden bg-white/80">
              <iframe
                className="w-full h-48 sm:h-64 md:h-80"
                src="https://www.instagram.com/reel/CyZ5z1wAnkU/embed"
                title="Instagram reel"
                allowFullScreen
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-[20px] border-[2px] sm:border-[3px] border-neutral-900/70 opacity-[0.05]"
                style={{ filter: "url(#wobble)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl rounded-xl sm:rounded-[22px] border border-neutral-300 bg-white/70 shadow-[0_6px_16px_rgba(0,0,0,0.05)] p-4 sm:p-8 text-center">
          <h4
            className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-neutral-900"
            style={{ filter: "url(#wobble)" }}
          >
            {t("blogPage.subscribeTitle")}
          </h4>
          <div className="mt-1 sm:mt-2 h-[4px] sm:h-[6px] w-24 sm:w-40 mx-auto">
            <svg width="100%" height="6" viewBox="0 0 300 6">
              <rect width="300" height="6" fill="url(#pencilStroke)" />
            </svg>
          </div>
          <p className="mt-3 sm:mt-5 text-neutral-700 text-[13px] sm:text-[14.5px] md:text-[15.5px] leading-relaxed">
            {t("blogPage.subscribeSubtitle")}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(t("blogPage.subscribeAlert"));
            }}
            className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center"
          >
            <input
              type="email"
              required
              placeholder={t("blogPage.subscribePlaceholder")}
              className="min-w-[200px] flex-1 px-3 py-2 sm:py-3 rounded-lg border border-neutral-400 text-neutral-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-neutral-800"
            />
            <button
              type="submit"
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-neutral-900 bg-neutral-900 text-white text-sm sm:text-base font-semibold hover:bg-neutral-700 transition"
            >
              {t("blogPage.subscribeButton")}
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
