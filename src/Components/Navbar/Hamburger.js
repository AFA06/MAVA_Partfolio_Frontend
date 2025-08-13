// frontend/src/components/Hamburger.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import navLinks from './NavLinks';
import { useTranslation } from 'react-i18next';

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <div className="relative z-50 lg:hidden">
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-gray-900 text-white rounded-md shadow-lg overflow-hidden animate-slide-down">
          {/* Navigation Links */}
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-base font-semibold transition-colors ${
                    isActive ? 'bg-yellow-600 text-white' : 'hover:bg-gray-700'
                  }`
                }
              >
                {t(link.label)}
              </NavLink>
            ))}
          </div>

          <hr className="border-gray-700" />

          {/* Auth buttons */}
          <div className="flex flex-col">
            {!user ? (
              <button
                onClick={() => {
                  navigate('/login');
                  setIsOpen(false);
                }}
                className="px-4 py-3 text-left text-base hover:bg-gray-700 transition"
              >
                {t('login.signIn') || 'Login'}
              </button>
            ) : (
              <>
                <div className="px-4 py-3 border-b border-gray-700">{user.name}</div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-3 text-left text-red-400 hover:text-red-500 hover:bg-gray-700 transition"
                >
                  {t('logout') || 'Logout'}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Hamburger;
