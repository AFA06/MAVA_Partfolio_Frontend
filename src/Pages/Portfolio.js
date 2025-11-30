// src/pages/Portfolio.jsx
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

//
// ---------------- REAL PROJECTS ---------------- //
//

const PROJECTS = [
  //
  // -------------------------------------------------------------
  // 1) CHARVAK DACHA 1
  // -------------------------------------------------------------
  //
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
      "Assets/Charvak_Dacha_1/9.png",
    ],
    descriptions: Array(9).fill("Project description will be added soon."),
  },

  //
  // -------------------------------------------------------------
  // 2) HOUSE LUNACHARSKY
  // -------------------------------------------------------------
  //
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
      "Assets/House_Lunacharsky/5.jpg",
    ],
    descriptions: Array(5).fill("Project description will be added soon."),
  },

  //
  // -------------------------------------------------------------
  // 3) KONGRESS HALL
  // -------------------------------------------------------------
  //
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
      "Assets/Kongress_Hall/9.jpg",
    ],
    descriptions: Array(9).fill("Project description will be added soon."),
  },

  //
  // -------------------------------------------------------------
  // 4) OFIS AVO (2–22)
  // -------------------------------------------------------------
  //
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
    descriptions: Array(21).fill("Project description will be added soon."),
  },

  //
  // -------------------------------------------------------------
  // 5) SANORA LOUNGE BAR (1–24)
  // -------------------------------------------------------------
  //
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
    descriptions: Array(24).fill("Project description will be added soon."),
  },

  //
  // -------------------------------------------------------------
  // 6) TURKESTAN VILLA
  // -------------------------------------------------------------
  //
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
      // Bedroom
      "Assets/Turkestan_Villa/Bedroom1.jpg",
      "Assets/Turkestan_Villa/Bedroom2.jpg",
      "Assets/Turkestan_Villa/Bedroom3.jpg",
      "Assets/Turkestan_Villa/Bedroom4.jpg",
      "Assets/Turkestan_Villa/Bedroom5.jpg",
      "Assets/Turkestan_Villa/Bedroom6.jpg",

      // Boys Room
      "Assets/Turkestan_Villa/BoysRoom1.jpg",
      "Assets/Turkestan_Villa/BoysRoom2.jpg",
      "Assets/Turkestan_Villa/BoysRoom3.jpg",
      "Assets/Turkestan_Villa/BoysRoom4.jpg",

      // Dining Room
      "Assets/Turkestan_Villa/DiningRoom1.jpg",
      "Assets/Turkestan_Villa/DiningRoom2.jpg",
      "Assets/Turkestan_Villa/DiningRoom3.jpg",

      // Girls Room
      "Assets/Turkestan_Villa/GirlsRoom1.jpg",
      "Assets/Turkestan_Villa/GirlsRoom2.jpg",
      "Assets/Turkestan_Villa/GirlsRoom3.jpg",
      "Assets/Turkestan_Villa/GirlsRoom4.jpg",

      // Hall
      "Assets/Turkestan_Villa/Hall1.jpg",
      "Assets/Turkestan_Villa/Hall2.jpg",
      "Assets/Turkestan_Villa/Hall3.jpg",
      "Assets/Turkestan_Villa/Hall4.jpg",
      "Assets/Turkestan_Villa/Hall5.jpg",
      "Assets/Turkestan_Villa/Hall6.jpg",

      // Living Room
      "Assets/Turkestan_Villa/LivingRoom1.jpg",
      "Assets/Turkestan_Villa/LivingRoom2.jpg",
      "Assets/Turkestan_Villa/LivingRoom3.jpg",
    ],
    descriptions: Array(26).fill("Project description will be added soon."),
  },
];

//
// ---------------- COMPONENT ---------------- //
//

export default function Portfolio() {
  const [zoomedProject, setZoomedProject] = useState(null);
  const cardRefs = useRef([]);
  const scrollStartRef = useRef(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Scroll zoom effect
  useEffect(() => {
    const current = cardRefs.current;
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          e.target.style.transform = e.isIntersecting ? "scale(1.02)" : "scale(0.96)";
          e.target.style.transition = "transform 0.4s ease";
        });
      },
      { threshold: 0.5 }
    );
    current.forEach(c => c && obs.observe(c));
    return () => current.forEach(c => c && obs.unobserve(c));
  }, []);

  // Close zoom on scroll
  useEffect(() => {
    if (!zoomedProject) return;
    scrollStartRef.current = window.scrollY;
    const handleScroll = () => {
      if (Math.abs(window.scrollY - scrollStartRef.current) > 100) {
        window.removeEventListener("scroll", handleScroll);
        setTimeout(() => setZoomedProject(null), 300);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [zoomedProject]);

  const toggleZoom = slug => setZoomedProject(prev => (prev === slug ? null : slug));

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#050509] text-gray-100" : "bg-[#f5f5f6] text-gray-900"}`}>
      <div className="max-w-6xl mx-auto py-14 px-4 flex flex-col items-center gap-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl">
          <p className={`text-xs tracking-[0.3em] uppercase mb-3 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Portfolio
          </p>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[0.08em] uppercase ${isDark ? "text-white" : "text-gray-900"}`}>
            Selected Works
          </h1>
          <div className={`mt-4 w-16 h-[2px] mx-auto rounded-full ${isDark ? "bg-[#f5c15d]" : "bg-gray-300"}`} />
        </div>

        {/* PROJECT LIST */}
        <div className="flex flex-col items-center gap-10 w-full">
          {PROJECTS.map((project, index) => {
            const isZoomed = zoomedProject === project.slug;

            return (
              <div
                key={project.slug}
                ref={el => (cardRefs.current[index] = el)}
                onClick={() => toggleZoom(project.slug)}
                className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-2xl overflow-hidden ${
                  isZoomed
                    ? `w-full h-[80vh] z-40 flex overflow-x-auto ${
                        isDark ? "bg-[#060711]/95 border border-white/10" : "bg-white border border-gray-200"
                      }`
                    : `w-full max-w-xl h-[230px] flex items-center justify-center ${
                        isDark ? "bg-[#060711]/95 border border-white/10" : "bg-white border border-gray-200"
                      }`
                }`}
              >

                {/* CARD PREVIEW */}
                {!isZoomed && (
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <img src={project.coverImages[0]} alt="" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h2 className="text-lg font-semibold text-white">{project.name}</h2>
                    </div>
                  </div>
                )}

                {/* ZOOMED VIEW */}
                {isZoomed && (
                  <div className="flex">
                    {/* FIRST SLIDE */}
                    <div className="flex-shrink-0 w-[100vw] md:w-[90vw] h-[80vh] flex flex-row">
                      <div className="basis-full flex items-center justify-center bg-black">
                        <img src={project.coverImages[0]} alt="" className="object-cover h-full w-full" />
                      </div>
                      <div className="basis-[30%] min-w-[220px] p-5 overflow-y-auto border-l">
                        <p className="text-sm">{project.descriptions[0]}</p>
                      </div>
                    </div>

                    {/* OTHER SLIDES */}
                    {project.coverImages.slice(1).map((img, idx) => (
                      <div key={idx} className="flex-shrink-0 w-[100vw] md:w-[90vw] h-[80vh] flex">
                        <div className="basis-full flex items-center justify-center bg-black">
                          <img src={img} alt="" className="object-cover h-full w-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CLOSE BUTTON */}
                {isZoomed && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setZoomedProject(null); }}
                    className="absolute top-4 right-4 px-4 py-2 bg-white/90 border rounded-full"
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
