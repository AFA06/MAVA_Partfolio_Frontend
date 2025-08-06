import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const menuOptions = [
    { id: 1, label: 'Profile', action: () => alert('Profile clicked') },
    { id: 2, label: 'Settings', action: () => alert('Settings clicked') },
    { id: 3, label: 'Log Out', action: handleLogout },
  ];

  return (
    <div className="relative z-50">
      <button
        onClick={toggleMenu}
        className="focus:outline-none p-2 rounded-md hover:bg-gray-200 transition"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200">
          {menuOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => {
                option.action();
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Hamburger;
