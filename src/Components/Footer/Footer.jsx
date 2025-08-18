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
    <footer className="bg-black text-gray-300 pt-16 pb-8 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
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
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-gold hover:text-gold transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-gold hover:text-gold transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-gold hover:text-gold transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-gold hover:text-gold transition"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
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
    </footer>
  );
}

export default Footer;
