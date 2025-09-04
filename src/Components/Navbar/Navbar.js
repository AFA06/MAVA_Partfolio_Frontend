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

  return (
    <nav className={`navbar ${isHome ? "home-navbar" : ""}`}>
      {/* Left: Logo */}
      <div className="navbar-left">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="nav-link">{t("nex")}</span>
        </Link>
      </div>

      {/* Center: Links (desktop only) */}
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

      {/* Right: Languages + Mobile toggle */}
      <div className="navbar-right flex items-center gap-3">
        <button onClick={() => changeLanguage("en")} className="lang">
          EN
        </button>
        <button onClick={() => changeLanguage("uz")} className="lang">
          UZ
        </button>

        <button
          className={`lg:hidden ${isHome ? "text-white" : "text-gray-800"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`mobile-menu-wrapper lg:hidden ${
          isOpen ? "open" : ""
        } ${isHome ? "home-menu" : ""}`}
      >
        <div className="flex gap-3 mb-3">
          <button onClick={() => changeLanguage("en")} className="lang">
            EN
          </button>
          <button onClick={() => changeLanguage("uz")} className="lang">
            UZ
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
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
      </div>
    </nav>
  );
}

export default Navbar;
