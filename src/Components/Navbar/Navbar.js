// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "./NavLinks";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./navbar.css";

import logoWhite from "../../assets/logo.png";           // white for dark mode
import logoBlack from "../../assets/logo-black.jpg";     // black for light mode

import ThemeToggle from "../ThemeToggle";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === "light";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const contactsLink = navLinks.find((link) => link.label === "contacts");
  const mainLinks = navLinks.filter((link) => link.label !== "contacts");

  const orderedLinks = [
    ...mainLinks.filter((l) => l.label === "portfolio"),
    ...mainLinks.filter((l) => l.label === "videos"),
    contactsLink,
    ...mainLinks.filter((l) => l.label === "about"),
  ].filter(Boolean);

  const mobileOrdered = [
    ...mainLinks.filter((l) => l.label === "videos"),
    ...mainLinks.filter((l) => l.label === "portfolio"),
    ...mainLinks.filter((l) => l.label === "about"),
    contactsLink,
  ].filter(Boolean);

  return (
    <nav className={`navbar ${isLight ? "navbar-light" : "navbar-dark"}`}>
      {/* Desktop Left */}
      <div className="navbar-left hidden lg:flex">
        <NavLink to="/" className="logo-link flex items-center gap-3">
          <img
            src={isLight ? logoBlack : logoWhite}
            alt="MAVA Logo"
            className="logo-img"
          />
          <span className="logo-text">MAVA GROUP</span>
        </NavLink>
      </div>

      {/* Mobile Left */}
      <div className="mobile-left lg:hidden">
        <NavLink to="/" className="logo-link flex items-center gap-3">
          <img
            src={isLight ? logoBlack : logoWhite}
            alt="MAVA Logo"
            className="logo-img"
          />
          <span className="logo-text">MAVA</span>
        </NavLink>
      </div>

      {/* Desktop Center */}
      <div className="navbar-center hidden lg:flex">
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

      {/* Desktop Right */}
      <div className="navbar-right hidden lg:flex items-center gap-4">
        {["ru", "en", "uz"].map((lng) => (
          <button key={lng} onClick={() => changeLanguage(lng)} className="lang">
            {lng.toUpperCase()}
          </button>
        ))}
        <ThemeToggle />
      </div>

      {/* Mobile Right */}
      <div className="mobile-right lg:hidden flex items-center gap-3">
        <ThemeToggle />
        {contactsLink && (
          <NavLink
            to={contactsLink.href}
            className="nav-link text-sm"
            onClick={() => setIsOpen(false)}
          >
            {t(contactsLink.label)}
          </NavLink>
        )}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
        <button onClick={() => setIsOpen(false)} className="close-btn">
          <X size={26} />
        </button>

        <div className="links-container">
          {mobileOrdered.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {t(link.label)}
            </NavLink>
          ))}
        </div>

        <div className="languages-container">
          {["ru", "en", "uz"].map((lng) => (
            <button key={lng} onClick={() => changeLanguage(lng)} className="lang">
              {lng.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
