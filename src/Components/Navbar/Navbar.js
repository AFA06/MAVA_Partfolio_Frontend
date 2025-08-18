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

  return (
    <nav
      className={`navbar-container fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? 'navbar-no-blur' : 'navbar-blur'}
      `}
    >
      <div className="flex flex-wrap items-center justify-between px-6 py-4">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-4 group fade-in">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-cover rounded-full border border-yellow-400 shadow-lg group-hover:shadow-yellow-400/50 transition"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/100x50';
            }}
          />
          <div className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-500">
            {t('nex')}
          </div>
        </Link>

        {/* Center Nav + Lang Switch */}
        <div className="hidden lg:flex flex-col items-center space-y-2 mx-auto text-center fade-in">
          <div className="flex space-x-3">
            <button
              onClick={() => changeLanguage('ru')}
              className="lang-btn"
            >
              RU
            </button>
            <button
              onClick={() => changeLanguage('uz')}
              className="lang-btn"
            >
              UZ
            </button>
          </div>

          <div className="flex space-x-6 text-base">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? 'nav-link nav-link-active'
                    : 'nav-link'
                }
              >
                {t(link.label)}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4 fade-in">
          <div className="phone-glow">
            {t('phone')}
          </div>

          {!user ? (
            <button
              onClick={() => navigate('/login')}
              className="btn-glow"
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
                className="btn-logout"
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
