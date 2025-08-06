// frontend/src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import navLinks from './NavLinks';
import './navbar.css';
import { useTranslation } from 'react-i18next';
import Hamburger from './Hamburger';
import logo from '../../assets/logo.jpg';

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload(); // Reload to reflect logout
  };

  return (
    <nav
      className={`navbar-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-wrap items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-cover rounded-full"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/100x50';
            }}
          />
          <div
            className={`text-xl font-bold transition-colors duration-500 ${
              isHovered ? 'text-yellow-600' : 'text-white'
            }`}
          >
            {t('nex')}
          </div>
        </Link>

        {/* Center: Language + Nav */}
        <div className="flex flex-col items-center space-y-2 mx-auto text-center">
          <div className="flex space-x-3">
            <button
              onClick={() => changeLanguage('ru')}
              className="font-semibold text-white hover:text-yellow-600 transition"
            >
              RU
            </button>
            <button
              onClick={() => changeLanguage('uz')}
              className="font-semibold text-white hover:text-yellow-600 transition"
            >
              UZ
            </button>
          </div>

          <div className="flex flex-wrap justify-center space-x-4 text-base">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? 'font-semibold text-yellow-400'
                    : 'font-semibold text-white hover:text-yellow-500 transition'
                }
              >
                {t(link.label)}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Right: Phone + Auth + Hamburger */}
        <div className="flex items-center space-x-4">
          <div className="text-base font-semibold text-white hover:text-yellow-600 transition">
            {t('phone')}
          </div>

          {!user ? (
            <button
              onClick={() => navigate('/login')}
              className="text-sm font-semibold text-white hover:text-yellow-500 transition"
            >
              {t('login.signIn') || 'Login'}
            </button>
          ) : (
            <div className="flex items-center space-x-3">
              <span className="text-white font-medium">
                {user.name || 'Foydalanuvchi'}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm font-semibold text-red-300 hover:text-red-500 transition"
              >
                {t('logout') || 'Logout'}
              </button>
            </div>
          )}

          <Hamburger />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
