"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`p-2 rounded-xl transition-all duration-300 flex items-center justify-center shadow-sm ${
        theme === "light"
          ? "bg-mad-surface-2 text-mad-text border border-mad-border hover:bg-mad-surface-3 hover:text-mad-lime"
          : "bg-mad-surface text-mad-lime border border-white/10 hover:border-mad-lime/50"
      } ${className}`}
      title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
      aria-label="Toggle light or dark theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-90 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 hover:-rotate-45 text-slate-800" />
      )}
    </button>
  );
}
