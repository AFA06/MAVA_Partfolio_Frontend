import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Building2, Users2, Compass } from "lucide-react";

// ✅ import images from assets
import aboutImage from "../assets/about.jpg";
import team1 from "../assets/teem1.jpg";
import team2 from "../assets/teem2.jpg";
import team3 from "../assets/teem3.jpg";

export default function About() {
  const { t } = useTranslation();

  const timeline = t("aboutPage.timeline", { returnObjects: true }) || [];
  const values = t("aboutPage.values", { returnObjects: true }) || [];

  const team = [
    { name: "John Doe", role: "Lead Architect", photo: team1 },
    { name: "Jane Smith", role: "Interior Designer", photo: team2 },
    { name: "Michael Lee", role: "Project Manager", photo: team3 },
    { name: "Sophia Kim", role: "3D Designer", photo: team1 },
    { name: "David Brown", role: "Engineer", photo: team2 },
    { name: "Emma Wilson", role: "Assistant Architect", photo: team3 },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#f8f7f3] text-[#232323] antialiased">
      {/* Hero */}
      <header
        className="relative h-[60vh] sm:h-[70vh] md:h-[75vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-[clamp(2.5rem,6vw,5rem)] font-serif font-bold drop-shadow-lg">
            {t("aboutPage.title")}
          </h1>
          <p className="mt-4 sm:mt-6 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-gray-200 drop-shadow">
            {t("aboutPage.intro")}
          </p>
        </motion.div>
      </header>

      {/* Mission / Vision / Values */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-6 sm:p-8 rounded-2xl shadow-xl border bg-white/70 backdrop-blur-md transition-all duration-300"
          >
            <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800 mb-3 sm:mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">
              {t("aboutPage.missionTitle")}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">{t("aboutPage.missionText")}</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-6 sm:p-8 rounded-2xl shadow-xl border bg-white/70 backdrop-blur-md transition-all duration-300"
          >
            <Compass className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800 mb-3 sm:mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">
              {t("aboutPage.visionTitle")}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">{t("aboutPage.visionText")}</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-6 sm:p-8 rounded-2xl shadow-xl border bg-white/70 backdrop-blur-md transition-all duration-300"
          >
            <Users2 className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800 mb-3 sm:mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">
              {t("aboutPage.valuesTitle")}
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
              {Array.isArray(values) &&
                values.map((v, i) => (
                  <li key={i}>
                    <strong>{v.title}:</strong> {v.text}
                  </li>
                ))}
            </ul>
          </motion.div>
        </div>
      </section>

      

{/* Timeline */}
<section
  className="relative px-4 sm:px-6 py-20 bg-fixed bg-center bg-cover"
  style={{ backgroundImage: `url(${aboutImage})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

  <div className="relative z-10">
    {/* Title */}
    <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-12 text-white">
      {t("aboutPage.timelineTitle")}
    </h2>

    <div className="relative max-w-3xl mx-auto">
      {/* Central vertical line */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-white/50 transform -translate-x-1/2 rounded-lg shadow-lg"></div>

      <div className="space-y-16">
        {Array.isArray(timeline) &&
          timeline.map((tItem, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`relative w-full md:w-1/2 ${
                  isLeft
                    ? "md:pr-12 text-left md:text-right"
                    : "md:pl-12 md:ml-auto text-left"
                }`}
              >
                {/* Connector arrow from center line to card */}
                <div
                  className={`hidden md:block absolute top-10 w-6 h-6 bg-indigo-400 
                    ${isLeft ? "clip-arrow-left right-[-28px]" : "clip-arrow-right left-[-28px]"}`}
                ></div>

                {/* Timeline card */}
                <div className="p-6 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-300 relative">
                  <h3 className="font-semibold text-lg text-gray-900">{tItem.year}</h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">{tItem.text}</p>
                </div>
              </motion.div>
            );
          })}
      </div>
    </div>
  </div>
</section>




      {/* Team */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white overflow-hidden">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-12">
          {t("aboutPage.teamTitle")}
        </h2>
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
          <div className="flex w-max animate-scroll">
            {[...team, ...team].map((m, idx) => (
              <div
                key={idx}
                className="min-w-[220px] sm:min-w-[240px] md:min-w-[260px] bg-white/90 backdrop-blur-md border rounded-2xl shadow-lg p-5 mx-4 flex-shrink-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100 shadow-md"
                />
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 text-center">
                  {m.name}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base text-center">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
