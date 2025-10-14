import { useEffect, useState } from "react";

export const useTheme = () => {
  // default to 'dark' if no preference stored
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  const apply = (mode) => {
    const root = document.documentElement;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = mode === "dark" || (mode === "system" && systemDark);
    root.classList.toggle("dark", isDark);
  };

  useEffect(() => {
    apply(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => theme === "system" && apply("system");
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggle, setTheme };
};
