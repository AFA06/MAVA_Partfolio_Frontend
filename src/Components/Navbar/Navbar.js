import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import navLinks from "./NavLinks";
import "./navbar.css";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.jpg";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <nav id="navbar" className="navbar-container">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group fade-in">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-cover rounded-full border border-yellow-400 shadow-lg group-hover:shadow-yellow-400/50 transition"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/100x50";
            }}
          />
          <span className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-500">
            {t("nex")}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-col items-center space-y-2 mx-auto text-center fade-in">
          <div className="flex space-x-3">
            <button onClick={() => changeLanguage("en")} className="lang-btn">
              EN
            </button>
            <button onClick={() => changeLanguage("uz")} className="lang-btn">
              UZ
            </button>
          </div>
          <div className="flex space-x-6 text-base">
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
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 fade-in">
          <div className="phone-glow">{t("phone")}</div>

          {!user ? (
            <button onClick={() => navigate("/login")} className="btn-glow">
              {t("login.signIn")}
            </button>
          ) : (
            <div className="flex items-center space-x-3">
              <span className="text-white font-medium">
                {user.name || t("signup.name")}
              </span>
              <button onClick={handleLogout} className="btn-logout">
                {t("logout") || "Logout"}
              </button>
            </div>
          )}

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden mobile-menu fade-in">
          <div className="flex space-x-3 mb-3">
            <button onClick={() => changeLanguage("en")} className="lang-btn">
              EN
            </button>
            <button onClick={() => changeLanguage("uz")} className="lang-btn">
              UZ
            </button>
          </div>

          <div className="flex flex-col space-y-3">
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
