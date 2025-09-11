// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import navLinks from "./NavLinks";
import "./navbar.css";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.jpg";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const isHome = location.pathname === "/";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // About & Contacts links
  const extraLinks = navLinks.filter(
    (link) => link.label === "about" || link.label === "contacts"
  );

  // Other links
  const mainLinks = navLinks.filter(
    (link) => link.label !== "about" && link.label !== "contacts"
  );

  return (
    <nav className={`navbar ${isHome ? "home-navbar" : ""}`}>
      {/* Left: Logo */}
      <div className="navbar-left">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
      </div>

      {/* Center: Desktop Nav Links (include all) */}
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

      {/* Right: Mobile Extra Links + Languages + Hamburger */}
      <div className="navbar-right flex items-center gap-3">
        {/* Show About & Contacts only on mobile (hidden on desktop) */}
        <div className="flex gap-3 lg:hidden">
          {extraLinks.map((link) => (
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

        {/* Hamburger (Mobile only) */}
        <button
          className={`lg:hidden ${isHome ? "text-white" : "text-gray-800"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar (without About & Contacts now) */}
      <div
        className={`mobile-sidebar ${isOpen ? "open" : ""} ${
          isHome ? "home-menu" : ""
        }`}
      >
        <div className="flex flex-col gap-4 p-6">
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

          {/* Language Switcher (mobile only) */}
          <div className="flex gap-4 mt-4">
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
