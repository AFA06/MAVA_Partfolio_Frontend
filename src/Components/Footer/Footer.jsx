import React from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const tr = (key, fallback) => (t(key) !== key ? t(key) : fallback);

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      {/* Top Divider */}
      <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 animate-[shimmer_6s_linear_infinite]"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col items-start sm:items-start md:items-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 tracking-wide">
            {tr("mava-group", "MAVA GROUP")}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-400 max-w-xs">
            {tr("footer.rights", "All rights reserved, Made by")}{" "}
            <span className="font-medium text-white">Mava</span> ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>

        {/* ✅ Navigation Links — open in same tab */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-3 uppercase tracking-wide">
            {tr("footer.navigation", "Navigation")}
          </h3>

          {/* Portfolio */}
          <a
            href="http://localhost:3001/MAVA_Partfolio_Frontend/portfolio"
            className="hover:text-yellow-300 transition text-sm sm:text-base"
          >
            {tr("footer.link9", "Portfolio")}
          </a>

          {/* Courses */}
          <a
            href="http://localhost:3001/MAVA_Partfolio_Frontend/videos"
            className="hover:text-yellow-300 transition text-sm sm:text-base"
          >
            {tr("footer.link3", "Courses")}
          </a>

          {/* Contacts */}
          <a
            href="http://localhost:3001/MAVA_Partfolio_Frontend/contacts"
            className="hover:text-yellow-300 transition text-sm sm:text-base"
          >
            {tr("footer.contacts", "Contacts")}
          </a>

          {/* About Us */}
          <a
            href="http://localhost:3001/MAVA_Partfolio_Frontend/about"
            className="hover:text-yellow-300 transition text-sm sm:text-base"
          >
            {tr("footer.about", "About Us")}
          </a>
        </div>

        {/* ✅ Social Media — only Instagram & Telegram (open in new tab) */}
        <div className="flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-3 uppercase tracking-wide">
            {tr("footer.follow", "Follow Us")}
          </h3>
          <div className="flex flex-wrap gap-4">
            {[
              {
                href: "https://www.instagram.com/mavagroup_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                icon: <FaInstagram />,
              },
              {
                href: "https://t.me/MAVA_GROUP",
                icon: <FaTelegramPlane />,
              },
            ].map(({ href, icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-300 hover:text-yellow-400 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.6)] transition"
              >
                <span className="text-lg">{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 text-center text-sm sm:text-base text-gray-500">
        {tr("footer.dev", "Made with ❤️ by")}{" "}
        <span className="text-yellow-400 font-medium">Mava</span>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
