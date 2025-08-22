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
    <footer className="relative bg-black text-gray-300 pt-16 pb-8 px-6 border-t border-gray-900 overflow-hidden">
      {/* 🔥 Animated Gradient Shimmer Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 animate-shimmer"></div>

      {/* Grid wrapper */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 relative z-10 text-center md:text-left">
        {/* Brand / Studio Info */}
        <div>
          <h2 className="text-2xl font-bold text-gold mb-4">
            {t("footer.studioTitle")}
          </h2>
          <p className="text-gray-400 mb-3">{t("footer.studioName")}</p>
          <p className="text-gray-500 leading-relaxed">
            {t("footer.studioDesc")}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gold">
            {t("footer.navigation")}
          </h2>
          <ul className="space-y-2">
            <li><a href="/portfolio" className="hover:text-gold transition">{t("footer.link1")}</a></li>
            <li><a href="/about" className="hover:text-gold transition">{t("footer.link2")}</a></li>
            <li><a href="/services" className="hover:text-gold transition">{t("footer.link3")}</a></li>
            <li><a href="/blog" className="hover:text-gold transition">{t("footer.link4")}</a></li>
            <li><a href="/contact" className="hover:text-gold transition">{t("footer.link5")}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gold">
            {t("footer.contacts")}
          </h2>
          <p className="mb-2">
            <a href="tel:+79647269665" className="hover:text-gold transition">
              {t("footer.phone")}
            </a>
          </p>
          <p className="mb-2">
            <a href="mailto:hello@vproekte.com" className="hover:text-gold transition">
              {t("footer.email")}
            </a>
          </p>
          <p className="mb-2">{t("footer.address")}</p>
          <p>
            <a href="/map" className="hover:text-gold transition">
              {t("footer.map")}
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gold">Follow Us</h2>
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
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:text-gold transition relative overflow-hidden group"
              >
                {/* Icon */}
                <span className="relative z-10 text-lg">{icon}</span>
                {/* Neon shimmer border on hover */}
                <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gold group-hover:animate-shimmer-border"></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500 relative z-10">
        <p className="mb-2">{t("footer.bottomLine")}</p>
        <p className="mb-2">{t("footer.orderCall")}</p>
        <p className="text-gray-600">
          {t("footer.dev")}{" "}
          <a
            href="https://fedorovlab.ru"
            className="hover:text-gold"
            target="_blank"
            rel="noreferrer"
          >
            Fedorovlab Digital
          </a>
        </p>
      </div>

      {/* Tailwind custom shimmer animations */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 6s linear infinite;
        }
        @keyframes shimmer-border {
          0% { box-shadow: 0 0 5px rgba(255,215,0,0.3), 0 0 10px rgba(255,215,0,0.2); }
          50% { box-shadow: 0 0 15px rgba(255,215,0,0.6), 0 0 30px rgba(255,215,0,0.3); }
          100% { box-shadow: 0 0 5px rgba(255,215,0,0.3), 0 0 10px rgba(255,215,0,0.2); }
        }
        .animate-shimmer-border {
          animation: shimmer-border 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
