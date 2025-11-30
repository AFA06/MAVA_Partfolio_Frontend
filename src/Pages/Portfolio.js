// src/pages/Portfolio.jsx
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

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
      "Assets/Charvak_Dacha_1/9.png",
    ],
    descriptions: Array(9).fill("Project description will be added soon."),
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
      "Assets/House_Lunacharsky/5.jpg",
    ],
    descriptions: Array(5).fill("Project description will be added soon."),
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
      "Assets/Kongress_Hall/9.jpg",
    ],
    descriptions: Array(9).fill("Project description will be added soon."),
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
    descriptions: Array(21).fill("Project description will be added soon."),
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
    descriptions: Array(24).fill("Project description will be added soon."),
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
      "Assets/Turkestan_Villa/LivingRoom3.jpg",
    ],
    descriptions: Array(26).fill("Project description will be added soon."),
  },
];

export default function Portfolio() {
  const [zoomedProject, setZoomedProject] = useState(null);
  const cardRefs = useRef([]);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Center the opened card
  useEffect(() => {
    if (!zoomedProject) return;

    setTimeout(() => {
      const target = cardRefs.current.find(c => c?.dataset?.slug === zoomedProject);
      if (!target) return;

      const top =
        target.offsetTop - window.innerHeight / 2 + target.clientHeight / 2;

      window.scrollTo({ top, behavior: "smooth" });
    }, 120);
  }, [zoomedProject]);

  // Smooth open/close logic
  const toggleZoom = slug => {
    if (zoomedProject === slug) {
      setZoomedProject(null);
      return;
    }

    if (zoomedProject !== null) {
      const next = slug;
      setZoomedProject(null);
      setTimeout(() => setZoomedProject(next), 80);
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

        <h1 className="text-center text-5xl font-semibold uppercase mb-12">
          Selected Works
        </h1>

        <div className="flex flex-col items-center gap-10">
          {PROJECTS.map((project, index) => {
            const isZoomed = zoomedProject === project.slug;

            return (
              <div
                key={project.slug}
                data-slug={project.slug}
                ref={el => (cardRefs.current[index] = el)}
                onClick={() => toggleZoom(project.slug)}
                className={`relative cursor-pointer rounded-2xl transition-all duration-700 overflow-hidden ${
                  isZoomed
                    ? "w-full z-40 flex overflow-x-auto"
                    : "w-full max-w-xl h-[230px]"
                }`}
              >
                {/* CLOSED CARD PREVIEW */}
                {!isZoomed && (
                  <div className="relative w-full h-full">
                    <img
                      src={project.coverImages[0]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-xl text-white font-semibold">
                      {project.name}
                    </div>
                  </div>
                )}

                {/* OPENED GALLERY — NO BLACK GAPS */}
                {isZoomed && (
                  <div className="flex gap-8 p-8 max-w-full overflow-x-auto">

                    {/* FIRST IMAGE */}
                    <div className="min-w-[90vw] rounded-xl overflow-hidden">
                      <img
                        src={project.coverImages[0]}
                        alt=""
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    {/* OTHER IMAGES */}
                    {project.coverImages.slice(1).map((img, idx) => (
                      <div
                        key={idx}
                        className="min-w-[90vw] rounded-xl overflow-hidden"
                      >
                        <img
                          src={img}
                          alt=""
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* CLOSE BUTTON */}
                {isZoomed && (
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      setZoomedProject(null);
                    }}
                    className="absolute top-4 right-4 px-4 py-2 bg-white/90 rounded-full shadow"
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
