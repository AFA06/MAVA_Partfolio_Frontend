// src/Pages/About.js
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Building2, Users2, Compass } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

// Images
import aboutImage from "../assets/about.jpg";
import team1 from "../assets/teem1.jpg";
import team2 from "../assets/teem2.jpg";
import team3 from "../assets/teem3.jpg";

export default function About() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const timeline = t("aboutPage.timeline", { returnObjects: true }) || [];
  const values = t("aboutPage.values", { returnObjects: true }) || [];

  const team = [
    { name: "Mava Group", role: "Lead Architect", photo: team1 },
    { name: "Jane Smith", role: "Interior Designer", photo: team2 },
    { name: "Michael Lee", role: "Project Manager", photo: team3 },
    { name: "Sophia Kim", role: "3D Designer", photo: team1 },
    { name: "David Brown", role: "Engineer", photo: team2 },
    { name: "Emma Wilson", role: "Assistant Architect", photo: team3 },
  ];

  // ------------------------- THEME STYLES -------------------------

  // Warm stone background for light; cinematic for dark
  const bgMain = isDark
    ? "bg-[#050509] text-gray-100"
    : "bg-[#f3f0eb] text-[#171717]";

  const accent = isDark ? "#f5c15d" : "#d08a3f";

  const cardBaseLight =
    "bg-[#fdfbf8] border border-[#e3d8c9] shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-[2px]";
  const cardBaseDark =
    "bg-white/5 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.45)]";

  const card = isDark ? cardBaseDark : cardBaseLight;

  const cardHover = isDark
    ? "hover:bg-white/10"
    : "hover:-translate-y-[6px] hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)]";

  const glassDark =
    "bg-white/10 border border-white/18 backdrop-blur-md text-white";

  const glassLight =
    "bg-[#fdfbf8]/90 border border-[#e4dbcf] backdrop-blur-[6px] shadow-[0_16px_40px_rgba(0,0,0,0.14)]";

  return (
    <div className={`min-h-screen w-full antialiased ${bgMain}`}>
      {/* =============================== HEADER =============================== */}
      <header
        className="relative h-[55vh] sm:h-[65vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        {/* Dark overlay */}
        {isDark && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-[#050509]" />
        )}

        {/* Warm Scandinavian light overlay */}
        {!isDark && (
          <>
            {/* Base soft warm blur */}
            <div className="absolute inset-0 bg-[#f5eee4]/45 backdrop-blur-[4px]" />
            {/* Gentle vignette from top & sides */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#e7ded0]/80 via-transparent to-[#f3f0eb]" />
            {/* subtle warm highlight from right to emulate sunset light */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#f4c28a]/20 via-transparent to-transparent pointer-events-none" />
          </>
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-center px-4"
        >
          <p
            className={`text-xs tracking-[0.32em] uppercase mb-3 ${
              isDark ? "text-gray-300" : "text-[#7a756c]"
            }`}
          >
            ARCHITECTURE • INTERIORS • VISUALIZATION
          </p>

          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight ${
              isDark ? "text-white" : "text-[#161616]"
            }`}
          >
            {t("aboutPage.title")}
          </h1>

          <p
            className={`mt-4 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed ${
              isDark ? "text-gray-200" : "text-[#5b5852]"
            }`}
          >
            {t("aboutPage.intro")}
          </p>
        </motion.div>
      </header>

      {/* ==================== MISSION / VISION / VALUES ==================== */}
      <section className="px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <Building2 className="w-8 h-8" />,
              title: t("aboutPage.missionTitle"),
              text: t("aboutPage.missionText"),
            },
            {
              icon: <Compass className="w-8 h-8" />,
              title: t("aboutPage.visionTitle"),
              text: t("aboutPage.visionText"),
            },
            {
              icon: <Users2 className="w-8 h-8" />,
              title: t("aboutPage.valuesTitle"),
              isList: true,
              text: values,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className={`rounded-2xl p-7 sm:p-8 transition-all ${card} ${cardHover}`}
            >
              <div
                className={`mb-4 ${
                  isDark ? "text-white" : "text-[#3a332a]"
                }`}
              >
                {item.icon}
              </div>

              <h2
                className={`text-lg sm:text-xl font-semibold mb-3 ${
                  isDark ? "text-white" : "text-[#181715]"
                }`}
              >
                {item.title}
              </h2>

              {!item.isList && (
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-gray-300" : "text-[#6a655d]"
                  }`}
                >
                  {item.text}
                </p>
              )}

              {item.isList && (
                <ul
                  className={`space-y-2 text-sm sm:text-base ${
                    isDark ? "text-gray-300" : "text-[#6a655d]"
                  }`}
                >
                  {item.text.map((v, idx) => (
                    <li key={idx}>
                      <strong
                        className={`${
                          isDark ? "text-white" : "text-[#252320]"
                        }`}
                      >
                        {v.title}:
                      </strong>{" "}
                      {v.text}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* =============================== TIMELINE =============================== */}
      <section
        className="relative px-4 sm:px-6 py-20 bg-center bg-cover"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        {/* Overlays */}
        {isDark ? (
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-[#050509]" />
        ) : (
          <>
            <div className="absolute inset-0 bg-[#f1e7db]/70 backdrop-blur-[4px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#f1e7db]/90 via-transparent to-[#f3f0eb]" />
          </>
        )}

        <div className="relative max-w-5xl mx-auto z-10">
          <h2
            className={`text-center text-3xl sm:text-4xl font-semibold mb-12 ${
              isDark ? "text-white" : "text-[#181715]"
            }`}
          >
            {t("aboutPage.timelineTitle")}
          </h2>

          <div className="relative">
            {/* Center spine */}
            <div
              className={`hidden md:block absolute left-1/2 top-0 h-full w-[2px] ${
                isDark ? "bg-white/20" : "bg-[#d3c6b6]"
              }`}
            />

            <div className="space-y-16">
              {timeline.map((item, idx) => {
                const left = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`relative w-full md:w-1/2 ${
                      left
                        ? "md:pr-10 text-left md:text-right"
                        : "md:pl-10 md:ml-auto text-left"
                    }`}
                  >
                    {/* Connector */}
                    <div
                      className={`hidden md:block absolute top-1/2 w-10 h-[2px] ${
                        isDark ? "bg-white/20" : "bg-[#d3c6b6]"
                      } ${left ? "-right-10" : "-left-10"}`}
                    />

                    {/* Glass card */}
                    <div
                      className={`rounded-xl p-6 ${
                        isDark ? glassDark : glassLight
                      }`}
                    >
                      <h3
                        className={`text-lg font-semibold ${
                          isDark ? "text-white" : "text-[#201d18]"
                        }`}
                      >
                        {item.year}
                      </h3>
                      <p
                        className={`mt-2 text-sm leading-relaxed ${
                          isDark ? "text-gray-50" : "text-[#6a655d]"
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =============================== TEAM =============================== */}
      <section className="px-4 sm:px-6 py-20">
        <h2
          className={`text-center text-3xl sm:text-4xl font-semibold mb-12 ${
            isDark ? "text-white" : "text-[#181715]"
          }`}
        >
          {t("aboutPage.teamTitle")}
        </h2>

        <div className="relative max-w-7xl mx-auto overflow-hidden">
          <div className="flex w-max animate-scroll">
            {[...team, ...team].map((m, idx) => (
              <div
                key={idx}
                className={`group min-w-[230px] rounded-2xl border p-6 mx-4 flex-shrink-0 transition-all duration-500
                  ${
                    isDark
                      ? "bg-white/5 border-white/10 text-white shadow-lg hover:-translate-y-2 hover:shadow-2xl"
                      : "bg-[#fdfbf8] border-[#e3d8c9] text-[#181715] shadow-[0_8px_22px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)]"
                  }`}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,0.18)]">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3 className="text-lg font-semibold text-center">
                  {m.name}
                </h3>
                <p
                  className={`text-center text-sm mt-1 ${
                    isDark ? "text-gray-300" : "text-[#6f6960]"
                  }`}
                >
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
