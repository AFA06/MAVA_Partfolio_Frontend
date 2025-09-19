// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "./NavLinks";
import "./navbar.css";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png"; // ✅ Make sure logo.png exists
import { useTranslation } from "react-i18next";

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
    <nav className="navbar fixed w-full top-0 z-50">
      {/* Left: Logo */}
      <div className="navbar-left">
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-img" />
        </NavLink>
      </div>

      {/* Center: Desktop Links */}
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

      {/* Right: Mobile Links + Languages + Hamburger */}
      <div className="navbar-right flex items-center gap-3">
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

        {/* Hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
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
