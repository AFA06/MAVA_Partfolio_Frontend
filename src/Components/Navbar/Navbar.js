// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "./NavLinks";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.jpg";
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
    <nav className="navbar">
      {/* Left (logo + name) */}
      <div className="navbar-left">
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="MAVA Logo" className="logo-img" />
          <span className="logo-text">MAVA</span>
        </NavLink>
      </div>

      {/* Center nav links (desktop) */}
      <div className="navbar-center hidden lg:flex">
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

      {/* Right (languages + hamburger) */}
      <div className="navbar-right">
        <div className="hidden lg:flex gap-4">
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

        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile sidebar */}
      <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <img src={logo} alt="MAVA Logo" className="logo-img-small" />
            <span className="logo-text-small">MAVA</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-5 p-6">
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

          <div className="mt-6 border-t border-white/10 pt-4 flex flex-col gap-3">
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

          {/* Language switch */}
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
