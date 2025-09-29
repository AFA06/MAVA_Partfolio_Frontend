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

  // Split links: Contacts separately for top-right on mobile
  const contactsLink = navLinks.find(link => link.label === "contacts");
  const mainLinks = navLinks.filter(link => link.label !== "contacts");

  // Order: About first in center, then others
  const orderedLinks = [
    ...mainLinks.filter(link => link.label === "about"),
    ...mainLinks.filter(link => link.label !== "about")
  ];

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

      {/* Right (languages + hamburger) */}
      <div className="navbar-right">
        <div className="hidden lg:flex gap-4">
          <button onClick={() => changeLanguage("ru")} className="lang">RU</button>
          <button onClick={() => changeLanguage("en")} className="lang">EN</button>
          <button onClick={() => changeLanguage("uz")} className="lang">UZ</button>
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
        {/* Logo */}
        <div className="sidebar-logo">
          <img src={logo} alt="MAVA Logo" />
          <span>MAVA</span>
        </div>

        {/* Top-right contacts link */}
        {contactsLink && (
          <NavLink
            to={contactsLink.href}
            onClick={() => setIsOpen(false)}
            className="top-contact"
          >
            {t(contactsLink.label)}
          </NavLink>
        )}

        {/* Mobile nav links centered */}
        <div className="links-container">
          {orderedLinks.map((link) => (
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

        {/* Languages at bottom */}
        <div className="languages-container">
          <button onClick={() => changeLanguage("ru")} className="lang">RU</button>
          <button onClick={() => changeLanguage("en")} className="lang">EN</button>
          <button onClick={() => changeLanguage("uz")} className="lang">UZ</button>
        </div>

        {/* Close button */}
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
