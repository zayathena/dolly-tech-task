"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light" | null;

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem("theme");

    if (themeFromLocalStorage === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else if (themeFromLocalStorage === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  function toggleDarkMode() {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }

  return (
    <div>
      <button className="m-5" onClick={toggleDarkMode}>
        {theme === "dark" ? "🌙" : null}
        {theme === "light" ? "☀️" : null}
      </button>
    </div>
  );
}
