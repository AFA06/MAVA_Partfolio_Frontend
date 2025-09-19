// src/pages/About.js
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
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#f8f7f3] text-[#232323] antialiased">
      {/* Hero */}
      <header
        className="relative h-[60vh] sm:h-[70vh] md:h-[75vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
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
            whileHover={{ y: -5 }}
            className="p-6 sm:p-8 rounded-2xl shadow-lg border bg-[#fafafa]"
          >
            <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700 mb-3 sm:mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              {t("aboutPage.missionTitle")}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">{t("aboutPage.missionText")}</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 sm:p-8 rounded-2xl shadow-lg border bg-[#fafafa]"
          >
            <Compass className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700 mb-3 sm:mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              {t("aboutPage.visionTitle")}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">{t("aboutPage.visionText")}</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 sm:p-8 rounded-2xl shadow-lg border bg-[#fafafa]"
          >
            <Users2 className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700 mb-3 sm:mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              {t("aboutPage.valuesTitle")}
            </h2>
            <ul className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
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
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-[#f3f2ef]">
        <h2 className="text-center text-2xl sm:text-3xl md:text-3xl font-serif font-bold mb-10 sm:mb-12">
          {t("aboutPage.timelineTitle")}
        </h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>
          <div className="space-y-12">
            {Array.isArray(timeline) &&
              timeline.map((tItem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-full md:w-1/2 ${
                    idx % 2 === 0 ? "md:pr-8 text-left md:text-right" : "md:pl-8 md:ml-auto text-left"
                  }`}
                >
                  <div className="p-4 sm:p-6 bg-white rounded-xl shadow">
                    <h3 className="font-semibold text-lg">{tItem.year}</h3>
                    <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">{tItem.text}</p>
                  </div>
                  <div className="absolute top-6 md:top-6 left-1/2 w-3 h-3 bg-black rounded-full -translate-x-1/2 md:w-4 md:h-4"></div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <h2 className="text-center text-2xl sm:text-3xl md:text-3xl font-serif font-bold">
          {t("aboutPage.teamTitle")}
        </h2>
        <div className="mt-8 sm:mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {team.map((m, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-[#fafafa] border rounded-2xl shadow p-4 sm:p-6 text-center"
            >
              <img
                src={m.photo}
                alt={m.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mx-auto mb-3 sm:mb-4"
              />
              <h3 className="text-base sm:text-lg font-semibold">{m.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
