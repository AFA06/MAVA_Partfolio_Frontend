import React, { useMemo, useState } from "react";

/**
 * Hand‑drawn, premium‑minimal Portfolio page for an architecture studio.
 *  ‑ White/neutral palette (paper feel), no icons, sketchy lines, tactile micro‑details
 *  ‑ Simple structure, elevated typography, hand‑drawn underlines and borders
 *  ‑ Grid on desktop, smooth horizontal scroll on mobile, click to focus a project
 *  ‑ No external icon libs; pure React + Tailwind CSS
 */

const projectsData = [
  {
    id: 1,
    name: "Современная Вилла",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    description:
      "Роскошная современная вилла, сочетающая минимализм и комфорт.",
  },
  {
    id: 2,
    name: "Городской Комплекс",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=85",
    description:
      "Многоэтажный городской комплекс с инновационными общественными пространствами.",
  },
  {
    id: 3,
    name: "Эко Дом",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1800&q=85",
    description:
      "Устойчивое строительство, интегрированное с природой.",
  },
  {
    id: 4,
    name: "Стеклянная Башня",
    image:
      "https://images.unsplash.com/photo-1529421308361-4b76c0b8d2f1?auto=format&fit=crop&w=1800&q=85",
    description:
      "Футуристический небоскрёб из стекла, меняющий облик города.",
  },
  {
    id: 5,
    name: "Роскошный Курорт",
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e2a0f1e0f1?auto=format&fit=crop&w=1800&q=85",
    description:
      "Курорт у моря, сочетающий роскошь и гармонию с природой.",
  },
  {
    id: 6,
    name: "Культурный Центр",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1800&q=85",
    description:
      "Знаковый культурный центр, объединяющий традиции и современность.",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState(projectsData[0]);

  // Generate a subtle paper grain as a data‑URI once
  const paperDataUrl = useMemo(() => {
    const canvas = document.createElement("canvas");
    const s = 120;
    canvas.width = s; canvas.height = s;
    const ctx = canvas.getContext("2d");
    const imgData = ctx.createImageData(s, s);
    for (let i = 0; i < imgData.data.length; i += 4) {
      const v = 245 + Math.floor(Math.random() * 10); // near‑white speckle
      imgData.data[i] = v; imgData.data[i + 1] = v; imgData.data[i + 2] = v; imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
    return canvas.toDataURL();
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#f8f7f3] text-[#232323] antialiased selection:bg-neutral-800 selection:text-white">
      {/* SVG defs for hand‑drawn effects */}
      <svg width="0" height="0" className="absolute">
        <defs>
          {/* Slight irregularity for borders */}
          <filter id="wobble" filterUnits="objectBoundingBox">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="1" seed="2" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.6" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          {/* Pencil underline stroke */}
          <pattern id="pencilStroke" width="300" height="6" patternUnits="userSpaceOnUse">
            <rect width="300" height="6" fill="transparent"/>
            <path d="M2 3 Q 60 0 120 3 T 298 3" stroke="#1f2937" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </pattern>
          {/* Paper torn mask (soft edge) */}
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.15"/>
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      {/* Paper grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        style={{ backgroundImage: `url(${paperDataUrl})`, mixBlendMode: "multiply" }}
      />

      {/* Header / Hero */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 pt-16 pb-14">
          <div className="inline-block">
            <h1
              className="text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.05] font-serif tracking-tight text-neutral-900"
              style={{ filter: "url(#wobble)" }}
            >
              Наше Портфолио
            </h1>
            <div className="mt-3 h-[6px] w-64" style={{ background: "url(#)" }}>
              {/* Fake node: Tailwind can't set pattern fills; use an inline SVG */}
              <svg width="100%" height="6" viewBox="0 0 300 6" preserveAspectRatio="none">
                <rect width="300" height="6" fill="url(#pencilStroke)" />
              </svg>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-neutral-700">
            Архитектура без шума и пыли: чистые линии, ручные акценты, 
            спокойная палитра. Премиум‑минимализм без лишней декоративности.
          </p>
        </div>
      </header>

      {/* Featured panel (selected project) */}
      <section className="px-6 sm:px-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 relative group">
            <figure className="relative rounded-[22px] bg-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-neutral-300 overflow-hidden">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-[42vh] sm:h-[54vh] object-cover filter grayscale-[35%] contrast-110 [image-rendering:auto]"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white/90 via-white/70 to-transparent">
                <div className="inline-block bg-white/90 border border-neutral-300 rounded-xl px-3 py-1 text-[13px] tracking-wide uppercase">
                  {selected.name}
                </div>
                <p className="mt-2 text-neutral-700 text-[15px] leading-snug">
                  {selected.description}
                </p>
              </figcaption>
            </figure>
            {/* hand‑drawn frame lines */}
            <div className="pointer-events-none absolute -inset-2" aria-hidden>
              <div className="absolute inset-0 rounded-[28px] border-[3px] border-neutral-900/70 opacity-[0.06]" style={{ filter: "url(#wobble)" }} />
            </div>
          </div>

          {/* About / Philosophy card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[22px] border border-neutral-300 bg-white/70 backdrop-blur-[1px] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl sm:text-[28px] font-serif text-neutral-900">
                Наша Философия
              </h2>
              <div className="mt-2 h-[6px] w-40">
                <svg width="100%" height="6" viewBox="0 0 300 6" preserveAspectRatio="none">
                  <rect width="300" height="6" fill="url(#pencilStroke)" />
                </svg>
              </div>
              <p className="mt-4 text-[15.5px] leading-[1.8] text-neutral-700">
                Каждый проект — это баланс функциональности и поэтики формы. Мы работаем
                с пространством аккуратно: минимализм в цвете, щедрость в деталях,
                ручные акценты вместо иконок.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects scroller (mobile) + grid (desktop) */}
      <section className="mt-16 sm:mt-20 px-6 sm:px-10 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-xl sm:text-2xl font-serif">Избранные проекты</h3>
            <span className="text-[12.5px] text-neutral-500">перетащите • скролл</span>
          </div>

          {/* Mobile/Tablet horizontal scroller */}
          <div className="mt-6 lg:hidden">
            <div className="-mx-6 px-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]" style={{ WebkitOverflowScrolling: 'touch' }}>
              <div className="flex gap-5 min-w-max pr-6">
                {projectsData.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelected(p)}
                    className="group relative w-[82vw] sm:w-[62vw] rounded-[20px] bg-white/80 border border-neutral-300 shadow-[0_8px_18px_rgba(0,0,0,0.06)] overflow-hidden text-left"
                  >
                    <img src={p.image} alt={p.name} className="h-56 w-full object-cover filter grayscale-[35%] contrast-110" />
                    <div className="p-4">
                      <div className="inline-block bg-neutral-900/90 text-white text-[12px] tracking-wide uppercase px-2.5 py-1 rounded-md" style={{ filter: "url(#wobble)" }}>{p.name}</div>
                      <p className="mt-2 text-[13.5px] text-neutral-700 line-clamp-2">{p.description}</p>
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-[20px] border-[2.5px] border-neutral-900/60 opacity-[0.05]" style={{ filter: "url(#wobble)" }} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop grid */}
          <div className="mt-8 hidden lg:grid grid-cols-12 gap-6">
            {projectsData.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelected(p)}
                className="group col-span-6 xl:col-span-4 text-left"
              >
                <div className="relative rounded-[22px] bg-white/80 border border-neutral-300 overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.06)] transition-transform duration-300 will-change-transform hover:-translate-y-1">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-[260px] w-full object-cover filter grayscale-[35%] contrast-110"
                  />
                  <div className="p-5">
                    <div className="inline-block bg-neutral-900 text-white text-[12px] tracking-wide uppercase px-2.5 py-1 rounded-md" style={{ filter: "url(#wobble)" }}>{p.name}</div>
                    <p className="mt-2 text-[14px] text-neutral-700 line-clamp-2">{p.description}</p>
                  </div>
                  {/* sketch frame */}
                  <div className="pointer-events-none absolute inset-0 rounded-[22px] border-[3px] border-neutral-900/70 opacity-[0.05]" style={{ filter: "url(#wobble)" }} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

     

      {/* Subtle global grain tint (do not overdo) */}
      <div className="pointer-events-none fixed inset-0" aria-hidden style={{ filter: 'url(#grain)' }} />
    </div>
  );
}
