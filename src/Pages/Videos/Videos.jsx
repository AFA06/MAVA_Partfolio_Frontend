// src/Pages/Videos/Videos.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const courses = [
  {
    key: "course1",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
  },
  {
    key: "course2",
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1200&q=80",
  },
  {
    key: "course3",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Videos() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bgMain = isDark
    ? "bg-[#050509] text-gray-100"
    : "bg-[#f5f5f6] text-gray-900";

  const sectionCard = isDark
    ? "bg-white/5 border border-white/10 shadow-lg hover:bg-white/10"
    : "bg-white border border-gray-200 shadow-lg hover:shadow-2xl";

  const titleColor = isDark ? "text-white" : "text-gray-900";
  const subtitleColor = isDark ? "text-gray-300" : "text-gray-700";

  return (
    <div className={`min-h-screen w-full antialiased ${bgMain}`}>

      {/* ----------------------------- HERO ----------------------------- */}
      <section className={`relative text-center px-4 py-20 sm:py-24 ${isDark ? "bg-[#07070b]" : "bg-white"}`}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight ${titleColor}`}
        >
          {t("videosPage.heroTitle")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className={`max-w-2xl mx-auto mt-4 text-base sm:text-lg md:text-xl leading-relaxed ${subtitleColor}`}
        >
          {t("videosPage.heroSubtitle")}
        </motion.p>

        <motion.a
          href="#"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className={`inline-flex items-center justify-center mt-8 px-8 py-3 rounded-full text-base font-medium transition capitalize
            ${isDark ? "bg-yellow-500 text-black hover:bg-yellow-400" : "bg-gray-900 text-white hover:bg-black"}
          `}
        >
          {t("videosPage.preview")}
        </motion.a>
      </section>

      {/* ----------------------------- COURSES ----------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className={`text-center text-2xl sm:text-3xl font-semibold mb-12 ${titleColor}`}>
          {t("videosPage.coursesTitle")}
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {courses.map((course, i) => (
            <motion.div
              key={course.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`rounded-2xl overflow-hidden cursor-pointer transition-all ${sectionCard}`}
            >
              <div className="h-56 sm:h-60 md:h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col h-full">
                <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${titleColor}`}>
                  {t(`videosPage.${course.key}.title`)}
                </h3>

                <p className={`flex-1 text-sm leading-relaxed ${subtitleColor}`}>
                  {t(`videosPage.${course.key}.description`)}
                </p>

                <a
                  href="#"
                  className={`mt-4 text-sm font-medium hover:underline ${isDark ? "text-yellow-400" : "text-gray-900"}`}
                >
                  {t("videosPage.preview")}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ----------------------------- SUPER PREMIUM FEATURES (FIXED) ----------------------------- */}
      <section className={`relative px-4 sm:px-6 py-28 overflow-hidden ${isDark ? "bg-[#050508]" : "bg-[#f2f2f3]"}`}>
        
        {/* Decorative gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-40 ${isDark ? "bg-purple-700/30" : "bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300"}`} />
          <div className={`absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full blur-[170px] opacity-40 ${isDark ? "bg-blue-900/30" : "bg-gradient-to-br from-gray-200 via-white to-gray-300"}`} />
        </div>

        <h2 className={`text-center text-3xl sm:text-4xl font-semibold tracking-tight mb-20 relative z-10 ${titleColor}`}>
          {t("videosPage.featuresTitle")}
        </h2>

        <div className="max-w-6xl mx-auto grid gap-14 sm:grid-cols-2 md:grid-cols-3 relative z-10">
          {[1, 2, 3].map((num, index) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`relative group p-10 rounded-3xl text-center transition-all duration-500 cursor-pointer
              
                ${
                  isDark
                    ? "bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:bg-white/10 hover:shadow-purple-500/20"
                    : "bg-white border border-gray-200 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:bg-gray-50"
                }

                hover:-translate-y-3 hover:scale-[1.03]
              `}
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 -z-10 rounded-3xl opacity-0 group-hover:opacity-40 blur-2xl transition duration-700
                ${isDark ? "bg-purple-600/30" : "bg-gradient-to-br from-gray-400 via-gray-200 to-gray-400"}
              `}
              />

              <span className="text-6xl mb-3 block group-hover:scale-125 group-hover:rotate-3 transition-all duration-500">
                🎬
              </span>

              <h3 className={`font-semibold text-xl sm:text-2xl mb-4 tracking-tight ${titleColor}`}>
                {t(`videosPage.feature${num}Title`)}
              </h3>

              <p className={`text-sm leading-relaxed ${subtitleColor}`}>
                {t(`videosPage.feature${num}Desc`)}
              </p>

              {/* Shine */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    isDark ? "from-white/10" : "from-gray-200/20"
                  } to-transparent opacity-0 group-hover:opacity-30 transition duration-700`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
