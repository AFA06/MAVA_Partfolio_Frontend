// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "./NavLinks";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const contactsLink = navLinks.find((link) => link.label === "contacts");
  const mainLinks = navLinks.filter((link) => link.label !== "contacts");

  const orderedLinks = [
    ...mainLinks.filter((link) => link.label === "about"),
    ...mainLinks.filter((link) => link.label !== "about"),
  ];

  return (
    <nav className="navbar">
      {/* Desktop left (logo) */}
      <div className="navbar-left hidden lg:flex">
        <NavLink to="/" className="logo-link">
          <img
            src={require("../../assets/logo.jpg")}
            alt="MAVA Logo"
            className="logo-img"
          />
          <span className="logo-text">MAVA</span>
        </NavLink>
      </div>

      {/* Mobile left (hamburger) */}
      <div className="lg:hidden flex items-center">
        <button
          className="text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Center nav links (desktop only) */}
      <div className="navbar-center hidden lg:flex">
        {contactsLink && (
          <NavLink
            to={contactsLink.href}
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            {t(contactsLink.label)}
          </NavLink>
        )}
        {orderedLinks.map((link) => (
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

      {/* Right side */}
      <div className="navbar-right">
        {/* Desktop languages */}
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

        {/* Mobile logo */}
        <div className="lg:hidden flex items-center gap-2">
          <img
            src={require("../../assets/logo.jpg")}
            alt="MAVA Logo"
            className="logo-img"
            style={{ height: "40px" }}
          />
          <span className="logo-text">MAVA</span>
        </div>
      </div>

      {/* ===== Mobile Sidebar + Overlay ===== */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
      <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
        <div className="links-container">
          {contactsLink && (
            <NavLink
              to={contactsLink.href}
              onClick={() => setIsOpen(false)}
              className="nav-link"
            >
              {t(contactsLink.label)}
            </NavLink>
          )}
          {orderedLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="nav-link"
            >
              {t(link.label)}
            </NavLink>
          ))}
        </div>

        <div className="languages-container">
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
          onClick={() => setIsOpen(false)}
          className="close-btn text-white"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
