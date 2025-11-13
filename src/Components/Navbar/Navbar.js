// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "./NavLinks";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./navbar.css";

// FIXED: import SVGs correctly
import logoWhite from "../../assets/logo.png";

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
    ...mainLinks.filter((link) => link.label === "portfolio"),
    ...mainLinks.filter((link) => link.label === "videos"),
    ...(contactsLink ? [contactsLink] : []),
    ...mainLinks.filter((link) => link.label === "about"),
  ];

  const mobileOrderedLinks = [
    ...mainLinks.filter((link) => link.label === "videos"),
    ...mainLinks.filter((link) => link.label === "portfolio"),
    ...mainLinks.filter((link) => link.label === "about"),
  ];

  return (
    <nav className="navbar">
      
      {/* Mobile left */}
      <div className="mobile-left lg:hidden flex items-center gap-2">
        <NavLink to="/" className="logo-link">
          <img src={logoWhite} alt="MAVA Logo" className="logo-img" />
          <span className="logo-text">MAVA</span>
        </NavLink>
      </div>

      {/* Desktop left */}
      <div className="navbar-left hidden lg:flex">
        <NavLink to="/" className="logo-link">
          <img src={logoWhite} alt="MAVA Logo" className="logo-img" />
          <span className="logo-text">MAVA</span>
        </NavLink>
      </div>

      {/* Desktop center nav links */}
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

      {/* Desktop right */}
      <div className="navbar-right hidden lg:flex gap-4">
        <button onClick={() => changeLanguage("ru")} className="lang">RU</button>
        <button onClick={() => changeLanguage("en")} className="lang">EN</button>
        <button onClick={() => changeLanguage("uz")} className="lang">UZ</button>
      </div>

      {/* Mobile right */}
      <div className="mobile-right lg:hidden flex items-center gap-4">
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
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
        <button onClick={() => setIsOpen(false)} className="close-btn">
          <X size={28} />
        </button>

        <div className="links-container">
          {mobileOrderedLinks.map((link) => (
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
          <button onClick={() => changeLanguage("ru")} className="lang">RU</button>
          <button onClick={() => changeLanguage("en")} className="lang">EN</button>
          <button onClick={() => changeLanguage("uz")} className="lang">UZ</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
