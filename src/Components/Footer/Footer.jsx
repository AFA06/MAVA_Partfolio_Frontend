// src/components/Footer/Footer.jsx
import React from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const tr = (key, fallback) => (t(key) !== key ? t(key) : fallback);

  return (
    <footer
      className={`mt-20 pt-16 ${
        isDark
          ? "bg-[#050509] text-gray-300"
          : "bg-[#f5f6f7] text-[#1a1a1a]"
      }`}
    >
      {/* TOP LINE */}
      <div
        className={`h-[2px] w-full ${
          isDark
            ? "bg-gradient-to-r from-yellow-500/80 to-yellow-400/80"
            : "bg-[rgba(0,0,0,0.06)]"
        }`}
      />

      {/* MAIN BODY */}
      <div
        className="
          max-w-7xl mx-auto 
          px-6 py-14 
          grid grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          gap-14 sm:gap-10
        "
      >
        {/* BRAND */}
        <div className="text-center sm:text-left">
          <h2
            className={`text-2xl sm:text-3xl font-semibold tracking-tight mb-4 ${
              isDark ? "text-yellow-400" : "text-[#1a1a1a]"
            }`}
          >
            MAVA GROUP
          </h2>

          <p
            className={`max-w-xs mx-auto sm:mx-0 text-sm leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {tr("footer.rights", "All rights reserved,")}{" "}
            <span className={isDark ? "text-white" : "text-[#1a1a1a]"}>
              MAVA
            </span>{" "}
            © {new Date().getFullYear()}
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="text-center sm:text-left">
          <h3
            className={`text-lg font-semibold uppercase tracking-wider mb-4 ${
              isDark ? "text-yellow-400" : "text-[#1a1a1a]"
            }`}
          >
            {tr("footer.navigation", "Navigation")}
          </h3>

          <ul className="flex flex-col gap-3 text-sm">
            {[
              ["portfolio", "/portfolio"],
              ["videos", "/videos"],
              ["contacts", "/contacts"],
              ["about", "/about"],
            ].map(([key, link]) => (
              <li key={key}>
                <a
                  href={link}
                  className={`transition hover:underline ${
                    isDark ? "hover:text-yellow-300" : "hover:text-[#111827]"
                  }`}
                >
                  {tr(`footer.${key}`, key.charAt(0).toUpperCase() + key.slice(1))}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="text-center sm:text-left">
          <h3
            className={`text-lg font-semibold uppercase tracking-wider mb-4 ${
              isDark ? "text-yellow-400" : "text-[#1a1a1a]"
            }`}
          >
            {tr("footer.follow", "Follow Us")}
          </h3>

          <div className="flex justify-center sm:justify-start gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/mavagroup_?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-11 h-11 flex items-center justify-center rounded-full shadow-sm transition
                ${
                  isDark
                    ? "border border-white/20 text-gray-200 hover:border-yellow-400 hover:text-yellow-400"
                    : "border border-[rgba(0,0,0,0.06)] text-[#1a1a1a] hover:border-[#1a1a1a]"
                }`}
            >
              <FaInstagram className="text-lg" />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/MAVA_GROUP"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-11 h-11 flex items-center justify-center rounded-full shadow-sm transition
                ${
                  isDark
                    ? "border border-white/20 text-gray-200 hover:border-yellow-400 hover:text-yellow-400"
                    : "border border-[rgba(0,0,0,0.06)] text-[#1a1a1a] hover:border-[#1a1a1a]"
                }`}
            >
              <FaTelegramPlane className="text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className={`py-6 text-center text-sm border-t ${
          isDark
            ? "border-white/10 text-gray-400"
            : "border-[rgba(0,0,0,0.06)] text-gray-600"
        }`}
      >
        {tr("footer.dev", "Made with ❤️ by")}{" "}
        <span className={isDark ? "text-yellow-400" : "text-[#1a1a1a]"}>
          MAVA
        </span>
      </div>
    </footer>
  );
}
