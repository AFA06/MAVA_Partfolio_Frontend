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

  // Separate contacts link
  const contactsLink = navLinks.find((link) => link.label === "contacts");
  const mainLinks = navLinks.filter((link) => link.label !== "contacts");

  const orderedLinks = [
    ...mainLinks.filter((link) => link.label === "about"),
    ...mainLinks.filter((link) => link.label !== "about"),
  ];

  return (
    <nav className="navbar">
      {/* ===== Left: Logo (always visible) ===== */}
      <div className="navbar-left">
        <NavLink to="/" className="logo-link" onClick={() => setIsOpen(false)}>
          <img
            src={require("../../assets/logo.jpg")}
            alt="MAVA Logo"
            className="logo-img"
          />
          <span className="logo-text">MAVA</span>
        </NavLink>
      </div>

      {/* ===== Center: Links (desktop only) ===== */}
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

      {/* ===== Right: Languages (desktop) + Contacts + Hamburger (mobile) ===== */}
      <div className="navbar-right">
        {/* Desktop languages */}
        <div className="hidden lg:flex gap-4">
          <button onClick={() => changeLanguage("ru")} className="lang">RU</button>
          <button onClick={() => changeLanguage("en")} className="lang">EN</button>
          <button onClick={() => changeLanguage("uz")} className="lang">UZ</button>
        </div>

        {/* Mobile contacts + hamburger */}
        <div className="lg:hidden flex items-center gap-4">
          {contactsLink && (
            <NavLink
              to={contactsLink.href}
              className="nav-link text-sm"
              onClick={() => setIsOpen(false)}
            >
              {t(contactsLink.label)}
            </NavLink>
          )}
          <button
            className="menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ===== Overlay ===== */}
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* ===== Sidebar (mobile) ===== */}
      <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
        <button
          onClick={() => setIsOpen(false)}
          className="close-btn text-white"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <div className="links-container">
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
          <button onClick={() => changeLanguage("ru")} className="lang">RU</button>
          <button onClick={() => changeLanguage("en")} className="lang">EN</button>
          <button onClick={() => changeLanguage("uz")} className="lang">UZ</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
