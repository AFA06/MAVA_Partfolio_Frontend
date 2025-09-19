import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

// Import images directly
import img1 from "/Users/macbook/Desktop/Website_Original/architecture-website/frontend/src/assets/1.jpg";
import img2 from "/Users/macbook/Desktop/Website_Original/architecture-website/frontend/src/assets/2.jpg";
import img3 from "/Users/macbook/Desktop/Website_Original/architecture-website/frontend/src/assets/3.jpg";

export default function Portfolio() {
  const { t } = useTranslation();

  // Project data from translations
  const projectsData = t("portfolioPage.projects", { returnObjects: true });

  // Inject images into translated projects
  const projectsWithImages = projectsData.map((project, index) => ({
    ...project,
    image: [img1, img2, img3][index % 3], // cycle through 1, 2, 3.jpg
  }));

  const [selected, setSelected] = useState(projectsWithImages[0]);

  // Generate subtle paper grain texture
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
      {/* SVG defs */}
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
          <pattern id="pencilStroke" width="300" height="6" patternUnits="userSpaceOnUse">
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
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.15" />
            </feComponentTransfer>
          </filter>
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
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-12">
          <h1
            className="text-[clamp(2rem,6vw,4rem)] leading-tight font-serif tracking-tight text-neutral-900"
            style={{ filter: "url(#wobble)" }}
          >
            {t("portfolioPage.title")}
          </h1>
          <div className="mt-3 h-[6px] w-48">
            <svg width="100%" height="6" viewBox="0 0 300 6">
              <rect width="300" height="6" fill="url(#pencilStroke)" />
            </svg>
          </div>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-700">
            {t("portfolioPage.subtitle")}
          </p>
        </div>
      </header>

      {/* Featured project + philosophy */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Featured project */}
          <div className="lg:col-span-7 relative">
            <figure className="relative rounded-2xl bg-white/70 shadow-lg border border-neutral-300 overflow-hidden">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-48 sm:h-56 md:h-[420px] object-cover filter grayscale-[35%] contrast-110"
              />
              <figcaption className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-white/90 via-white/70 to-transparent">
                <div className="inline-block bg-white/90 border border-neutral-300 rounded-lg px-3 py-1 text-xs uppercase">
                  {selected.name}
                </div>
                <p className="mt-2 text-sm sm:text-base text-neutral-700 leading-snug">
                  {selected.description}
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Philosophy */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-300 bg-white/70 p-5 sm:p-8 shadow-md">
              <h2 className="text-xl sm:text-2xl font-serif text-neutral-900">
                {t("portfolioPage.philosophyTitle")}
              </h2>
              <div className="mt-2 h-[6px] w-32">
                <svg width="100%" height="6" viewBox="0 0 300 6">
                  <rect width="300" height="6" fill="url(#pencilStroke)" />
                </svg>
              </div>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-700">
                {t("portfolioPage.philosophyText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects scroller */}
      <section className="mt-14 sm:mt-20 px-4 sm:px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg sm:text-xl font-serif">{t("portfolioPage.featuredProjects")}</h3>
            <span className="text-xs text-neutral-500 hidden sm:inline">
              {t("portfolioPage.scrollHint")}
            </span>
          </div>

          {/* Mobile scroller */}
          <div className="mt-6 lg:hidden">
            <div className="-mx-4 px-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
              <div className="flex gap-4 min-w-max pr-4">
                {projectsWithImages.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelected(p)}
                    className="relative w-[80vw] sm:w-[60vw] rounded-2xl bg-white/80 border border-neutral-300 shadow-md overflow-hidden text-left"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-48 sm:h-56 w-full object-cover filter grayscale-[35%] contrast-110"
                    />
                    <div className="p-4">
                      <div className="inline-block bg-neutral-900 text-white text-xs uppercase px-2.5 py-1 rounded-md">
                        {p.name}
                      </div>
                      <p className="mt-2 text-sm text-neutral-700 line-clamp-2">
                        {p.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop grid */}
          <div className="mt-8 hidden lg:grid grid-cols-12 gap-6">
            {projectsWithImages.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelected(p)}
                className="col-span-6 xl:col-span-4 text-left"
              >
                <div className="rounded-2xl bg-white/80 border border-neutral-300 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-64 w-full object-cover filter grayscale-[35%] contrast-110"
                  />
                  <div className="p-5">
                    <div className="inline-block bg-neutral-900 text-white text-xs uppercase px-2.5 py-1 rounded-md">
                      {p.name}
                    </div>
                    <p className="mt-2 text-sm text-neutral-700 line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Subtle global grain */}
      <div
        className="pointer-events-none fixed inset-0"
        aria-hidden
        style={{ filter: "url(#grain)" }}
      />
    </div>
  );
}
