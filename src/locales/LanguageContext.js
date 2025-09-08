// src/context/LanguageContext.js
import React, { createContext, useState, useContext } from "react";
import translations from "../translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en"); // default language

  // helper function to get translation by key path like "homepage.hero.title"
  const t = (path) => {
    return path.split(".").reduce((obj, key) => obj?.[key], translations[lang]);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
