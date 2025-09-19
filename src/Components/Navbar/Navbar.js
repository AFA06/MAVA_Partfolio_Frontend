// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "./NavLinks";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const extraLinks = navLinks.filter(
    (link) => link.label === "about" || link.label === "contacts"
  );

  const mainLinks = navLinks.filter(
    (link) => link.label !== "about" && link.label !== "contacts"
  );

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              {t(link.label)}
            </NavLink>
          ))}
        </div>

        {/* Desktop Languages */}
        <div className="hidden lg:flex gap-2">
          <button onClick={() => changeLanguage("ru")} className="lang">
            RU
          </button>
          <button onClick={() => changeLanguage("en")} className="lang">
            EN
          </button>
          <button onClick={() => changeLanguage("uz")} className="lang">
            UZ
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-white/20">
          <img src={logo} alt="Logo" className="h-8" />
          <button
            onClick={() => setIsOpen(false)}
            className="text-white"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-black">
          {mainLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              {t(link.label)}
            </NavLink>
          ))}

          {/* Extra Links */}
          <div className="mt-4 border-t border-white/20 pt-4 flex flex-col gap-3">
            {extraLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                {t(link.label)}
              </NavLink>
            ))}
          </div>

          {/* Language Switch */}
          <div className="flex gap-4 mt-6">
            <button onClick={() => changeLanguage("ru")} className="lang">
              RU
            </button>
            <button onClick={() => changeLanguage("en")} className="lang">
              EN
            </button>
            <button onClick={() => changeLanguage("uz")} className="lang">
              UZ
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
