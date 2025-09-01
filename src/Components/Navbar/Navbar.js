import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import navLinks from "./NavLinks";
import "./navbar.css";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.jpg";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Left: Logo + Name (name styled same as nav-link) */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="nav-link">{t("nex")}</span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-6">
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

      {/* Right Section (Languages + mobile toggle) */}
      <div className="navbar-right">
        <button onClick={() => changeLanguage("en")} className="lang">
          EN
        </button>
        <button onClick={() => changeLanguage("uz")} className="lang">
          UZ
        </button>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden mobile-menu">
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
      )}
    </nav>
  );
}

export default Navbar;
