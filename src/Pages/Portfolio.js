import React, { useState, useEffect, useRef } from "react";

// ---------------- SAMPLE DATA (12 demo projects) ---------------- //
const PROJECTS = Array.from({ length: 12 }, (_, i) => ({
  slug: `project-${i + 1}`,
  name: `Project ${i + 1}`,
  location: i % 2 === 0 ? "Copenhagen, Denmark" : "Berlin, Germany",
  year: 2020 + ((i % 5) + 1),
  client: i % 2 === 0 ? "BIG Architects" : "OMA",
  status: i % 3 === 0 ? "Completed" : "Ongoing",
  typology: i % 2 === 0 ? "Civic / Cultural" : "Mixed-Use",
  area: `${(i + 1) * 1000} m²`,
  coverImages: [
    `https://picsum.photos/id/${1010 + i}/1200/800`,
    `https://picsum.photos/id/${1020 + i}/1200/800`,
    `https://picsum.photos/id/${1030 + i}/1200/800`,
    `https://picsum.photos/id/${1040 + i}/1200/800`,
    `https://picsum.photos/id/${1050 + i}/1200/800`,
    `https://picsum.photos/id/${1060 + i}/1200/800`,
  ],
  descriptions: [
    "Adaptive reuse of industrial space.",
    "Landscape integration and accessibility.",
    "Sustainable systems for ventilation.",
    "Public accessibility and community.",
    "Rainwater harvesting systems.",
    "Harmony between old and new.",
  ],
}));

// ---------------- COMPONENT ---------------- //
export default function Portfolio() {
  const [zoomedProject, setZoomedProject] = useState(null);
  const cardRefs = useRef([]);

  // Scroll-based zoom effect
  useEffect(() => {
    const currentCards = cardRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "scale(1.05)";
            entry.target.style.transition = "transform 0.5s ease";
          } else {
            entry.target.style.transform = "scale(0.95)";
            entry.target.style.transition = "transform 0.5s ease";
          }
        });
      },
      { threshold: 0.5 }
    );

    currentCards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentCards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const toggleZoom = (slug) => {
    setZoomedProject((prev) => (prev === slug ? null : slug));
  };

  return (
    <div className="bg-neutral-50 text-neutral-900 min-h-screen">
      <div className="max-w-screen-xl mx-auto py-12 px-4 flex flex-col items-center gap-8">
        {PROJECTS.map((project, index) => {
          const isZoomed = zoomedProject === project.slug;

          return (
            <div
              key={project.slug}
              ref={(el) => (cardRefs.current[index] = el)}
              onClick={() => toggleZoom(project.slug)}
              className={`relative cursor-pointer transition-all duration-700 ease-in-out rounded-lg overflow-hidden shadow-xl ${
                isZoomed
                  ? "w-[95vw] h-[80vh] z-40 flex bg-white overflow-x-auto"
                  : "w-[90vw] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[220px] flex items-center justify-center"
              }`}
            >
              {/* Card Preview (not zoomed) */}
              {!isZoomed && (
                <img
                  src={project.coverImages[0]}
                  alt={`${project.name}-preview`}
                  className="object-cover w-full h-full rounded-lg"
                />
              )}

              {/* Full card (zoomed in with horizontal scroll) */}
              {isZoomed && (
                <div className="flex">
                  {/* ---------- FIRST SLIDE = PROJECT OVERVIEW INFO ---------- */}
                  <div className="flex-shrink-0 w-[95vw] h-[80vh] flex flex-col sm:flex-row">
                    {/* Left Info (desktop) / Top Info (mobile) */}
                    <div className="basis-full sm:basis-[20%] min-w-[180px] p-4 space-y-2 text-left">
                      <h2 className="text-xl font-semibold">{project.name}</h2>
                      <p className="text-sm text-neutral-600">
                        {project.location} – {project.year}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Typology: </span>
                        {project.typology}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Status: </span>
                        {project.status}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Area: </span>
                        {project.area}
                      </p>
                    </div>

                    {/* Center Image */}
                    <div className="basis-full sm:basis-[55%] flex items-center justify-center">
                      <img
                        src={project.coverImages[0]}
                        alt={`overview`}
                        className="object-cover h-full w-full rounded-md"
                      />
                    </div>

                    {/* Right Description */}
                    <div className="basis-full sm:basis-[25%] min-w-[200px] p-4 text-left overflow-y-auto">
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {project.descriptions[0]}
                      </p>
                    </div>
                  </div>

                  {/* ---------- NEXT SLIDES = IMAGE + DESCRIPTION ONLY ---------- */}
                  {project.coverImages.slice(1).map((img, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 w-[95vw] h-[80vh] flex flex-col sm:flex-row"
                    >
                      {/* Center Image */}
                      <div className="basis-full sm:basis-[70%] flex items-center justify-center">
                        <img
                          src={img}
                          alt={`zoomed-${idx + 1}`}
                          className="object-cover h-full w-full rounded-md"
                        />
                      </div>

                      {/* Right Description */}
                      <div className="basis-full sm:basis-[30%] min-w-[200px] p-4 text-left overflow-y-auto">
                        <p className="text-sm text-neutral-700 leading-relaxed">
                          {project.descriptions[idx + 1]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Close Button */}
              {isZoomed && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomedProject(null);
                  }}
                  className="absolute top-4 right-4 px-4 py-2 bg-black/80 text-white rounded shadow"
                >
                  Close
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
