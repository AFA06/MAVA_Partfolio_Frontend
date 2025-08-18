// frontend/src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import navLinks from './NavLinks';
import './navbar.css';
import { useTranslation } from 'react-i18next';
import Hamburger from './Hamburger';
import logo from '../../assets/logo.jpg';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  };

  // Handle scroll for blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger entrance animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <nav
      className={`navbar-container fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${isScrolled ? 'navbar-no-blur' : 'navbar-blur'}
        ${isLoaded ? 'animate-fade-slide' : 'opacity-0 -translate-y-5'}
      `}
    >
      <div className="flex flex-wrap items-center justify-between px-6 py-4">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-4 group">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-cover rounded-full transform group-hover:scale-110 transition"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/100x50';
            }}
          />
          <div className="text-xl font-bold text-white transition-colors duration-500 group-hover:text-yellow-400">
            {t('nex')}
          </div>
        </Link>

        {/* Center Nav */}
        <div className="hidden lg:flex flex-col items-center space-y-2 mx-auto text-center animate-stagger">
          {/* Languages */}
          <div className="flex space-x-3">
            <button
              onClick={() => changeLanguage('ru')}
              className="font-semibold text-white hover:text-yellow-400 transition relative link-underline"
            >
              RU
            </button>
            <button
              onClick={() => changeLanguage('uz')}
              className="font-semibold text-white hover:text-yellow-400 transition relative link-underline"
            >
              UZ
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex space-x-4 text-base">
            {navLinks.map((link, idx) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `font-semibold relative link-underline ${
                    isActive
                      ? 'text-yellow-400'
                      : 'text-white hover:text-yellow-400 transition'
                  }`
                }
                style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
              >
                {t(link.label)}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <div className="text-base font-semibold text-white hover:text-yellow-400 transition relative link-underline">
            {t('phone')}
          </div>

          {!user ? (
            <button
              onClick={() => navigate('/login')}
              className="text-sm font-semibold text-white hover:text-yellow-400 transition relative link-underline"
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
