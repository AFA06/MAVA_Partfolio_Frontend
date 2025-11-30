// src/context/ThemeContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Prevent SSR errors + ensure localStorage exists
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("mava-theme") || "dark";
  });

  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;

    // Remove old classes & apply new theme class
    root.classList.remove("theme-dark", "theme-light");
    root.classList.add(theme === "dark" ? "theme-dark" : "theme-light");

    // Save preference
    localStorage.setItem("mava-theme", theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
