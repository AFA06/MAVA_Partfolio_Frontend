import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-16 h-8 rounded-full border border-white/20 bg-white/5
                 overflow-hidden px-1 cursor-pointer backdrop-blur-sm
                 hover:border-white/40 transition"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-1 bottom-1 w-6 rounded-full bg-white shadow-md transform transition-transform duration-300
        ${isDark ? "translate-x-0" : "translate-x-8"}`}
      />
      <div className="relative flex justify-between w-full text-[0.7rem] font-semibold">
        <span className={isDark ? "opacity-100 text-white" : "opacity-40"}>
          <Moon className="w-3 h-3 mx-auto" />
        </span>
        <span className={!isDark ? "opacity-100 text-yellow-500" : "opacity-40"}>
          <Sun className="w-3 h-3 mx-auto" />
        </span>
      </div>
    </button>
  );
}
