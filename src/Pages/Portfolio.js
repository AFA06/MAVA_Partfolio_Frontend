// src/pages/Portfolio.jsx
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

const PROJECTS = [
  {
    slug: "charvak-dacha-1",
    name: "Charvak Dacha 1",
    location: "Charvak, Uzbekistan",
    year: "2024",
    client: "Private Client",
    status: "Completed",
    typology: "Residential",
    area: "—",
    coverImages: [
      "Assets/Charvak_Dacha_1/1.png",
      "Assets/Charvak_Dacha_1/2.png",
      "Assets/Charvak_Dacha_1/3.png",
      "Assets/Charvak_Dacha_1/4.png",
      "Assets/Charvak_Dacha_1/5.png",
      "Assets/Charvak_Dacha_1/6.png",
      "Assets/Charvak_Dacha_1/7.png",
      "Assets/Charvak_Dacha_1/8.png",
      "Assets/Charvak_Dacha_1/9.png"
    ],
    descriptions: Array(9).fill("Project description will be added soon.")
  },

  {
    slug: "house-lunacharsky",
    name: "House Lunacharsky",
    location: "Tashkent, Uzbekistan",
    year: "2024",
    client: "Private Client",
    status: "Completed",
    typology: "Residential",
    area: "—",
    coverImages: [
      "Assets/House_Lunacharsky/1.jpg",
      "Assets/House_Lunacharsky/2.jpg",
      "Assets/House_Lunacharsky/3.jpg",
      "Assets/House_Lunacharsky/4.jpg",
      "Assets/House_Lunacharsky/5.jpg"
    ],
    descriptions: Array(5).fill("Project description will be added soon.")
  },

  {
    slug: "kongress-hall",
    name: "Kongress Hall",
    location: "Uzbekistan",
    year: "2024",
    client: "Government",
    status: "Completed",
    typology: "Civic / Cultural",
    area: "—",
    coverImages: [
      "Assets/Kongress_Hall/1.png",
      "Assets/Kongress_Hall/2.png",
      "Assets/Kongress_Hall/3.png",
      "Assets/Kongress_Hall/4.png",
      "Assets/Kongress_Hall/5.png",
      "Assets/Kongress_Hall/6.jpg",
      "Assets/Kongress_Hall/7.jpg",
      "Assets/Kongress_Hall/8.jpg",
      "Assets/Kongress_Hall/9.jpg"
    ],
    descriptions: Array(9).fill("Project description will be added soon.")
  },

  {
    slug: "ofis-avo",
    name: "AVO Office",
    location: "Tashkent, Uzbekistan",
    year: "2024",
    client: "AVO",
    status: "Completed",
    typology: "Office",
    area: "—",
    coverImages: Array.from({ length: 21 }, (_, i) => `Assets/Ofis_AVO/${i + 2}.jpg`),
    descriptions: Array(21).fill("Project description will be added soon.")
  },

  {
    slug: "sanora-lounge-bar",
    name: "Sanora Lounge Bar",
    location: "Tashkent, Uzbekistan",
    year: "2024",
    client: "Sanora",
    status: "Completed",
    typology: "Hospitality",
    area: "—",
    coverImages: Array.from({ length: 24 }, (_, i) => `Assets/Sanora_Lounge_Bar/${i + 1}.jpg`),
    descriptions: Array(24).fill("Project description will be added soon.")
  },

  {
    slug: "turkestan-villa",
    name: "Turkestan Villa",
    location: "Turkestan",
    year: "2024",
    client: "Private Client",
    status: "Completed",
    typology: "Residential",
    area: "—",
    coverImages: [
      "Assets/Turkestan_Villa/Bedroom1.jpg",
      "Assets/Turkestan_Villa/Bedroom2.jpg",
      "Assets/Turkestan_Villa/Bedroom3.jpg",
      "Assets/Turkestan_Villa/Bedroom4.jpg",
      "Assets/Turkestan_Villa/Bedroom5.jpg",
      "Assets/Turkestan_Villa/Bedroom6.jpg",

      "Assets/Turkestan_Villa/BoysRoom1.jpg",
      "Assets/Turkestan_Villa/BoysRoom2.jpg",
      "Assets/Turkestan_Villa/BoysRoom3.jpg",
      "Assets/Turkestan_Villa/BoysRoom4.jpg",

      "Assets/Turkestan_Villa/DiningRoom1.jpg",
      "Assets/Turkestan_Villa/DiningRoom2.jpg",
      "Assets/Turkestan_Villa/DiningRoom3.jpg",

      "Assets/Turkestan_Villa/GirlsRoom1.jpg",
      "Assets/Turkestan_Villa/GirlsRoom2.jpg",
      "Assets/Turkestan_Villa/GirlsRoom3.jpg",
      "Assets/Turkestan_Villa/GirlsRoom4.jpg",

      "Assets/Turkestan_Villa/Hall1.jpg",
      "Assets/Turkestan_Villa/Hall2.jpg",
      "Assets/Turkestan_Villa/Hall3.jpg",
      "Assets/Turkestan_Villa/Hall4.jpg",
      "Assets/Turkestan_Villa/Hall5.jpg",
      "Assets/Turkestan_Villa/Hall6.jpg",

      "Assets/Turkestan_Villa/LivingRoom1.jpg",
      "Assets/Turkestan_Villa/LivingRoom2.jpg",
      "Assets/Turkestan_Villa/LivingRoom3.jpg"
    ],
    descriptions: Array(26).fill("Project description will be added soon.")
  },

  // ⭐⭐⭐ NEW PROJECTS START HERE ⭐⭐⭐

  {
    slug: "urban-stroy-oq-saroy",
    name: "Urban Stroy Oq Saroy",
    location: "Tashkent, Uzbekistan",
    year: "2022",
    client: "Private Client",
    status: "Completed",
    typology: "Residential",
    area: "110 sq.m",
    coverImages: [
      "Assets/Urban_Stroy_Oq_Saroy/Badroom1.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/Badroom2.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/Badroom3.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/Corridor1.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/Corridor2.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/Corridor3.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/Corridor4.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/K1.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/K2.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/K3.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/K4.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/Kitchen.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/Kitchen_night.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/LivingRoom3.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/LivingRoom4.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/LivingRoom5_Interactive_LightMix.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/LivingRoom6.jpg",
      "Assets/Urban_Stroy_Oq_Saroy/LivingRoom7.jpg"
    ],
    descriptions: Array(19).fill("Project description will be added soon.")
  },

  {
    slug: "villa-mansard",
    name: "Villa Mansard",
    location: "Uzbekistan",
    year: "—",
    client: "Private Client",
    status: "Completed",
    typology: "Residential",
    area: "—",
    coverImages: [
      "Assets/Villa_Mansard/AA.jpg",
      "Assets/Villa_Mansard/BB.jpg",
      "Assets/Villa_Mansard/DD.jpg",
      "Assets/Villa_Mansard/EE.jpg",
      "Assets/Villa_Mansard/GE.jpg",
      "Assets/Villa_Mansard/GG.jpg",
      "Assets/Villa_Mansard/RR.jpg",
      "Assets/Villa_Mansard/VV.jpg",
      "Assets/Villa_Mansard/XX.jpg",
      "Assets/Villa_Mansard/ZZ.jpg"
    ],
    descriptions: Array(10).fill("Project description will be added soon.")
  },

  {
    slug: "villa-namangan",
    name: "Villa Namangan",
    location: "Namangan, Uzbekistan",
    year: "2021",
    client: "Private Client",
    status: "Completed",
    typology: "Residential",
    area: "800 sq.m",
    coverImages: [
      "Assets/Villa_Namangan/1.jpg",
      "Assets/Villa_Namangan/2.jpg",
      "Assets/Villa_Namangan/3.jpg",
      "Assets/Villa_Namangan/4.jpg",
      "Assets/Villa_Namangan/5.jpg",
      "Assets/Villa_Namangan/6.jpg",
      "Assets/Villa_Namangan/7(2).jpg",
      "Assets/Villa_Namangan/7A.jpg",
      "Assets/Villa_Namangan/8.jpg",
      "Assets/Villa_Namangan/9.jpg",
      "Assets/Villa_Namangan/10.jpg",
      "Assets/Villa_Namangan/11.jpg",
      "Assets/Villa_Namangan/12.jpg",
      "Assets/Villa_Namangan/13.jpg",
      "Assets/Villa_Namangan/14.jpg",
      "Assets/Villa_Namangan/15.jpg",
      "Assets/Villa_Namangan/16.jpg"
    ],
    descriptions: Array(16).fill("Project description will be added soon.")
  },

  {
    slug: "yugnaki-220",
    name: "YUGNAKI 220",
    location: "Uzbekistan",
    year: "2020",
    client: "Private Client",
    status: "Completed",
    typology: "Residential",
    area: "220 sq.m",
    coverImages: [
      "Assets/YUGNAKI_220/3.jpg",
      "Assets/YUGNAKI_220/2.jpg",
      "Assets/YUGNAKI_220/11.jpg",
      "Assets/YUGNAKI_220/44.jpg",
      "Assets/YUGNAKI_220/55.jpg",
      "Assets/YUGNAKI_220/Гардероб_2_этаж(1).jpg",
      "Assets/YUGNAKI_220/Гардероб_2_этаж(2).jpg",
      "Assets/YUGNAKI_220/Гардероб_2_этаж(3).jpg",
      "Assets/YUGNAKI_220/Детская большая 4.jpg",
      "Assets/YUGNAKI_220/Детская_1.jpg",
      "Assets/YUGNAKI_220/Детская_2.jpg",
      "Assets/YUGNAKI_220/Детская_3.jpg",
      "Assets/YUGNAKI_220/Детская_4.jpg",
      "Assets/YUGNAKI_220/Детская_5.jpg",
      "Assets/YUGNAKI_220/Детская_большая_1.jpg",
      "Assets/YUGNAKI_220/Детская_большая_2.jpg",
      "Assets/YUGNAKI_220/Детская_большая_3.jpg",
      "Assets/YUGNAKI_220/Детская_большая_5.jpg",
      "Assets/YUGNAKI_220/Зал_1_этаж_2.jpg",
      "Assets/YUGNAKI_220/Зал_1_этаж_3.jpg",
      "Assets/YUGNAKI_220/Зал_1_этаж.jpg",
      "Assets/YUGNAKI_220/Зал_2_этаж_(1).jpg",
      "Assets/YUGNAKI_220/Зал_2_этаж_(2).jpg",
      "Assets/YUGNAKI_220/Кухня_1.jpg",
      "Assets/YUGNAKI_220/Кухня_2.jpg",
      "Assets/YUGNAKI_220/Кухня_3.jpg",
      "Assets/YUGNAKI_220/Кухня_4.jpg",
      "Assets/YUGNAKI_220/Спальня_2_этаж_(3).jpg",
      "Assets/YUGNAKI_220/Спальня_2_этаж_(2).jpg",
      "Assets/YUGNAKI_220/Спальня_2_этаж_(1).jpg",
      "Assets/YUGNAKI_220/Спальня_1_этаж.jpg",
      "Assets/YUGNAKI_220/Спальня_1_этаж_2.jpg",
      "Assets/YUGNAKI_220/Спальня_1_этаж_3.jpg",
      "Assets/YUGNAKI_220/Офис_подвал_(2).jpg",
      "Assets/YUGNAKI_220/Офис_подвал_(1).jpg",
      "Assets/YUGNAKI_220/Офис подвал (3).jpg"
    ],
    descriptions: Array(36).fill("Project description will be added soon.")
  },

  {
    slug: "jk-bek-baraka-100",
    name: "Eshonguzar — Bek Baraka 145",
    location: "Tashkent, Uzbekistan",
    year: "—",
    client: "Private Client",
    status: "Completed",
    typology: "Residential",
    area: "145 sq.m",
    coverImages: [
      "Assets/ЖК_БЕК_БАРАКА_100кв/1.jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/1(2).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/1(3).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/1(4).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/1(5).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/1(6).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/2.jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/2(2).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/2(3).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/2(4).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/2(5).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/2(6).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/3.jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/3(2).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/3(3).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/3(4).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/3(5).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/3(6).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/4.jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/4(2).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/4(3).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/4(4).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/5.jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/6.jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/A.jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/A(2).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/B.jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/B(2).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/C.jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/C(2).jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/D.jpg",
      "Assets/ЖК_БЕК_БАРАКА_100кв/D(2).jpg"
    ],
    descriptions: Array(32).fill("Project description will be added soon.")
  }
];

export default function Portfolio() {
  const [zoomedProject, setZoomedProject] = useState(null);
  const cardRefs = useRef([]);
  const { theme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === "dark";

  useEffect(() => {
    if (!zoomedProject) return;
    setTimeout(() => {
      const el = cardRefs.current.find((c) => c?.dataset.slug === zoomedProject);
      if (!el) return;
      const top = el.offsetTop - window.innerHeight * 0.1;
      window.scrollTo({ top, behavior: "smooth" });
    }, 200);
  }, [zoomedProject]);

  const toggleZoom = (slug) => {
    if (zoomedProject === slug) {
      setZoomedProject(null);
      return;
    }
    if (zoomedProject !== null) {
      const next = slug;
      setZoomedProject(null);
      setTimeout(() => setZoomedProject(next), 150);
    } else {
      setZoomedProject(slug);
    }
  };

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-[#050509] text-gray-100" : "bg-[#f5f5f6] text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto py-14 px-4">
        <h1 className="text-center text-5xl font-semibold uppercase mb-10">
          {t("portfolioPage.title")}
        </h1>

        <div className="flex flex-col items-center gap-10">
          {PROJECTS.map((project, i) => {
            const isZoomed = zoomedProject === project.slug;

            return (
              <div
                key={project.slug}
                data-slug={project.slug}
                ref={(el) => (cardRefs.current[i] = el)}
                onClick={() => toggleZoom(project.slug)}
                className={`relative cursor-pointer transition-all duration-700 rounded-2xl overflow-hidden
                  ${
                    isZoomed
                      ? `${isDark ? "bg-[#060711]/95 border border-white/10" : "bg-white border border-gray-200"} 
                         w-[90vw] h-[90vh] p-6 shadow-2xl z-40`
                      : `${
                          isDark
                            ? "bg-[#060711]/95 border border-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.7)]"
                            : "bg-white border border-gray-200 shadow-lg"
                        } 
                         w-full max-w-xl h-[230px]`
                  }`}
              >
                {!isZoomed && (
                  <div className="relative w-full h-full">
                    <img
                      src={project.coverImages[0]}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <div className="absolute bottom-4 left-4 text-xl text-white font-semibold">
                      {project.name}
                    </div>
                  </div>
                )}

                {isZoomed && (
                  <div className="flex gap-6 w-full h-full overflow-x-auto">
                    {project.coverImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="min-w-[85vw] h-full flex items-center justify-center"
                      >
                        <img
                          src={img}
                          className="max-w-full max-h-full object-contain"
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                )}

                {isZoomed && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoomedProject(null);
                    }}
                    className={`absolute top-4 right-4 px-4 py-2 rounded-full backdrop-blur-md border 
                      ${
                        isDark
                          ? "bg-black/60 border-white/20 text-white"
                          : "bg-white/80 border-gray-300 text-black"
                      }`}
                  >
                    Close
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
