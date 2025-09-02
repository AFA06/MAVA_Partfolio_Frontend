// src/Components/Footer.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        background: "#ffffff", // pure white background
        color: "#4b5563", // gray-600 text
        position: "relative",
        padding: "3rem 1.5rem 1.5rem",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        boxShadow: "0 -2px 6px rgba(0,0,0,0.05)",
      }}
    >
      {/* 🔥 Top Accent Divider */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "3px",
          background:
            "linear-gradient(to right, #facc15, #fde047, #facc15)",
          animation: "shimmer 6s linear infinite",
        }}
      ></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 relative z-10 text-center md:text-left">
        {/* Brand / Studio Info */}
        <div className="fade-in">
          <h2 className="text-2xl font-bold text-yellow-500 mb-3 tracking-wide">
            {t("footer.studioTitle")}
          </h2>
          <p className="text-gray-700 font-medium">{t("footer.studioName")}</p>
          <p className="text-gray-500 mt-2 leading-relaxed">
            {t("footer.studioDesc")}
          </p>
        </div>

        {/* Navigation */}
        <div className="fade-in">
          <h2 className="text-lg font-semibold mb-4 text-yellow-500 uppercase tracking-wide">
            {t("footer.navigation")}
          </h2>
          <ul className="space-y-2 font-medium">
            <li><a href="/portfolio" className="hover:text-yellow-500 transition">{t("footer.link1")}</a></li>
            <li><a href="/about" className="hover:text-yellow-500 transition">{t("footer.link2")}</a></li>
            <li><a href="/services" className="hover:text-yellow-500 transition">{t("footer.link3")}</a></li>
            <li><a href="/blog" className="hover:text-yellow-500 transition">{t("footer.link4")}</a></li>
            <li><a href="/contact" className="hover:text-yellow-500 transition">{t("footer.link5")}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="fade-in">
          <h2 className="text-lg font-semibold mb-4 text-yellow-500 uppercase tracking-wide">
            {t("footer.contacts")}
          </h2>
          <p className="mb-2">
            <a href="tel:+79647269665" className="hover:text-yellow-500 transition">
              {t("footer.phone")}
            </a>
          </p>
          <p className="mb-2">
            <a href="mailto:hello@vproekte.com" className="hover:text-yellow-500 transition">
              {t("footer.email")}
            </a>
          </p>
          <p className="mb-2 text-gray-500">{t("footer.address")}</p>
          <p>
            <a href="/map" className="hover:text-yellow-500 transition">
              {t("footer.map")}
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div className="fade-in">
          <h2 className="text-lg font-semibold mb-4 text-yellow-500 uppercase tracking-wide">
            Follow Us
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {[
              { href: "https://instagram.com", icon: <FaInstagram /> },
              { href: "https://facebook.com", icon: <FaFacebookF /> },
              { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
              { href: "https://t.me/", icon: <FaTelegramPlane /> },
            ].map(({ href, icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:text-yellow-500 hover:border-yellow-400 hover:shadow-[0_0_10px_rgba(250,204,21,0.6)] transition relative overflow-hidden group bg-white"
              >
                <span className="relative z-10 text-lg">{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-200 mt-10 pt-5 text-center text-sm text-gray-500 relative z-10">
        <p className="mb-2">{t("footer.bottomLine")}</p>
        <p className="mb-2">{t("footer.orderCall")}</p>
        <p className="text-gray-600">
          {t("footer.dev")}{" "}
          <a
            href="https://fedorovlab.ru"
            className="hover:text-yellow-500"
            target="_blank"
            rel="noreferrer"
          >
            Fedorovlab Digital
          </a>
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .fade-in {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInUp 1s ease forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
