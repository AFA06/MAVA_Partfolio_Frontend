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

  // ✅ Changed name to "Mava Group"
  const team = [
    { name: "Mava Group", role: "Lead Architect", photo: team1 },
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
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-[clamp(2.5rem,6vw,5rem)] font-serif font-bold tracking-tight">
            {t("aboutPage.title")}
          </h1>
          <p className="mt-4 sm:mt-6 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
            {t("aboutPage.intro")}
          </p>
        </motion.div>
      </header>

      {/* Mission / Vision / Values */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 sm:p-8 rounded-xl shadow-md border border-gray-200 bg-white transition-all duration-300"
          >
            <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700 mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">
              {t("aboutPage.missionTitle")}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">{t("aboutPage.missionText")}</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 sm:p-8 rounded-xl shadow-md border border-gray-200 bg-white transition-all duration-300"
          >
            <Compass className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700 mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">
              {t("aboutPage.visionTitle")}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">{t("aboutPage.visionText")}</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 sm:p-8 rounded-xl shadow-md border border-gray-200 bg-white transition-all duration-300"
          >
            <Users2 className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700 mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">
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
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10">
          {/* Title */}
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-12 text-white tracking-tight">
            {t("aboutPage.timelineTitle")}
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Central line */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-gray-300 transform -translate-x-1/2"></div>

            <div className="space-y-20">
              {Array.isArray(timeline) &&
                timeline.map((tItem, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`relative w-full md:w-1/2 ${
                        isLeft
                          ? "md:pr-16 text-left md:text-right"
                          : "md:pl-16 md:ml-auto text-left"
                      }`}
                    >
                      {/* Connector line */}
                      <div
                        className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 h-[1px] bg-gray-400 
                          ${isLeft ? "-right-16 w-16" : "-left-16 w-16"}`}
                      ></div>

                      {/* Card */}
                      <div className="relative p-6 sm:p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/20 hover:shadow-lg transition-all duration-500">
                        <h3 className="font-semibold text-lg sm:text-xl text-white">
                          {tItem.year}
                        </h3>
                        <p className="text-gray-200 mt-3 text-sm sm:text-base leading-relaxed">
                          {tItem.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 sm:px-6 py-20 sm:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden relative">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-gray-900 tracking-tight">
            {t("aboutPage.teamTitle")}
          </h2>
          <div className="mt-4 w-20 h-[2px] mx-auto bg-gray-300 rounded-full"></div>
        </div>

        {/* Scroll Wrapper */}
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
          <div className="flex w-max animate-scroll">
            {[...team, ...team].map((m, idx) => (
              <div
                key={idx}
                className="group min-w-[220px] sm:min-w-[240px] md:min-w-[260px] bg-white border border-gray-200 rounded-xl shadow-md p-6 mx-5 flex-shrink-0 
                           hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-sm group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-full border border-gray-200 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>

                {/* Name */}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 text-center">
                  {m.name}
                </h3>

                {/* Role */}
                <p className="text-gray-500 text-sm sm:text-base md:text-lg text-center mt-1">
                  {m.role}
                </p>

                {/* Accent line */}
                <div className="mt-4 w-12 h-[2px] mx-auto bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
