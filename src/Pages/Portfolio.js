import React, { useEffect, useRef, useState } from "react";

// ---------------- SAMPLE DATA ---------------- //
const PROJECTS = [
  {
    slug: "the-impact",
    name: "The Impact",
    location: "Copenhagen, Denmark",
    client: "BIG Architects",
    status: "Completed",
    typology: "Civic / Cultural",
    area: "4,200 m²",
    coverImages: [
      "https://images.unsplash.com/photo-1505842465776-3d6cc9f97f12?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505843775291-2d1d4c3f8a6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    slides: [
      {
        image:
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1400&q=80",
        text:
          "Adaptive reuse of an industrial building transformed into a community hub.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1505691723518-36a5b5693e12?auto=format&fit=crop&w=1400&q=80",
        text:
          "Landscape integration and public accessibility creating a porous edge between park and building.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1400&q=80",
        text:
          "Sustainable systems including natural ventilation, rainwater harvesting, and passive solar strategies.",
      },
    ],
  },
];

// ---------------- COMPONENT ---------------- //
export default function Portfolio() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [zoomedImageIndex, setZoomedImageIndex] = useState(null);
  const containerRef = useRef(null);

  // Smooth vertical project navigation with mouse wheel
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let isThrottled = false;

    const onWheel = (e) => {
      if (isThrottled) return;
      isThrottled = true;
      setTimeout(() => (isThrottled = false), 600);

      if (e.deltaY > 40) {
        setZoomedImageIndex(null);
        setActiveProjectIndex((i) => Math.min(i + 1, PROJECTS.length - 1));
      } else if (e.deltaY < -40) {
        setZoomedImageIndex(null);
        setActiveProjectIndex((i) => Math.max(i - 1, 0));
      }
    };

    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const currentProject = PROJECTS[activeProjectIndex];

  const toggleZoom = (idx) => {
    setZoomedImageIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="bg-neutral-50 text-neutral-900 min-h-screen" ref={containerRef}>
      <div className="max-w-screen-xl mx-auto py-12 px-4">
        <section className="relative w-full max-w-6xl mx-auto">
          {/* Project title and location */}
          <div className="absolute left-0 top-0 p-4">
            <h2 className="text-2xl font-semibold">{currentProject.name}</h2>
            <p className="text-sm text-neutral-600">{currentProject.location}</p>
          </div>

          {/* Project images vertical stack */}
          <div className="flex flex-col items-center justify-center gap-6">
            {currentProject.coverImages.map((img, i) => {
              const isZoomed = zoomedImageIndex === i;
              return (
                <div
                  key={i}
                  onClick={() => toggleZoom(i)}
                  className={`relative cursor-pointer transition-all duration-700 ease-in-out rounded-lg overflow-hidden shadow-xl ${
                    isZoomed
                      ? "w-[95vw] h-[90vh]" // 🔥 now much wider & taller
                      : "w-[240px] md:w-[320px] lg:w-[380px] h-[160px] md:h-[220px] lg:h-[280px]"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${currentProject.name}-img-${i}`}
                    className="object-cover w-full h-full"
                  />

                  {isZoomed && (
                    <div className="absolute inset-0 flex gap-6 overflow-x-auto p-6 bg-white/95 border rounded">
                      {currentProject.slides.map((slide, idx) => (
                        <div
                          key={idx}
                          className="flex-shrink-0 w-[450px] md:w-[600px] lg:w-[750px] h-full flex flex-col items-center justify-start gap-2"
                        >
                          <img
                            src={slide.image}
                            alt={`slide-${idx}`}
                            className="object-cover w-full h-[75%] rounded-md shadow-lg"
                          />
                          <div className="w-full p-2 text-center">
                            <p className="text-sm md:text-base">{slide.text}</p>
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={() => setZoomedImageIndex(null)}
                        className="absolute top-4 right-4 px-4 py-2 border rounded hover:bg-neutral-100"
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
