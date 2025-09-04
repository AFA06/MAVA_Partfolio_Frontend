// src/Components/Footer.jsx
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        background: "#ffffff",
        color: "#4b5563",
        position: "relative",
        padding: "2.5rem 1.25rem 1.25rem",
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
          background: "linear-gradient(to right, #facc15, #fde047, #facc15)",
          animation: "shimmer 6s linear infinite",
          backgroundSize: "200% 100%",
        }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 relative z-10 text-center md:text-left">
        {/* Brand Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-yellow-500 mb-3 tracking-wide">
            NEX ARCHITECTS
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            All rights reserved, Made by{" "}
            <span className="font-medium">Abdurashid Fattokhov</span> ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>

        {/* Social Media */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4 text-yellow-500 uppercase tracking-wide">
            Follow Us
          </h2>
          <div className="flex justify-center md:justify-start flex-wrap gap-4">
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
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:text-yellow-500 hover:border-yellow-400 hover:shadow-[0_0_10px_rgba(250,204,21,0.6)] transition bg-white"
              >
                <span className="text-lg">{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
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
