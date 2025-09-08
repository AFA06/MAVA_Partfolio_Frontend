// src/pages/About.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  // safely load arrays from translations
  const timeline = t("aboutPage.timeline", { returnObjects: true }) || [];
  const team = t("aboutPage.team", { returnObjects: true }) || [];
  const values = t("aboutPage.values", { returnObjects: true }) || [];

  return (
    <div className="relative min-h-screen w-full bg-[#f8f7f3] text-[#232323] antialiased">
      {/* Hero */}
      <header className="relative px-6 sm:px-10 pt-20 sm:pt-24 pb-16 sm:pb-20 text-center">
        <h1 className="text-[clamp(2rem,6vw,4rem)] font-serif font-bold text-neutral-900">
          {t("aboutPage.title")}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-[15px] sm:text-[17px] leading-relaxed text-neutral-700">
          {t("aboutPage.intro")}
        </p>
      </header>

      {/* Mission / Vision / Values */}
      <section className="px-6 sm:px-10 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-6 border rounded-xl bg-white shadow">
            <h2>{t("aboutPage.missionTitle")}</h2>
            <p>{t("aboutPage.missionText")}</p>
          </div>
          <div className="p-6 border rounded-xl bg-white shadow">
            <h2>{t("aboutPage.visionTitle")}</h2>
            <p>{t("aboutPage.visionText")}</p>
          </div>
          <div className="p-6 border rounded-xl bg-white shadow">
            <h2>{t("aboutPage.valuesTitle")}</h2>
            {Array.isArray(values) &&
              values.map((v, i) => (
                <p key={i}>
                  <strong>{v.title}:</strong> {v.text}
                </p>
              ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 sm:px-10 py-16 sm:py-20 bg-[#f3f2ef]">
        <h2>{t("aboutPage.timelineTitle")}</h2>
        <div className="mt-10 max-w-3xl mx-auto space-y-8">
          {Array.isArray(timeline) &&
            timeline.map((tItem, idx) => (
              <div key={idx}>
                <h3>{tItem.year}</h3>
                <p>{tItem.text}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-6 sm:px-10 py-16 sm:py-20">
        <h2>{t("aboutPage.teamTitle")}</h2>
        <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.isArray(team) &&
            team.map((m, idx) => (
              <div
                key={idx}
                className="p-6 border rounded-xl bg-white shadow text-center"
              >
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
