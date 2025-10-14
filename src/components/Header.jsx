import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { BRAND } from "../data/brand";

const LINKS = ["About", "Projects", "Skills", "Experience", "Contact"];

export default function Header({ onToggleTheme }) {
  const [open, setOpen] = useState(false);

  const smoothTo = (hash) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onNavClick = (e, href) => {
    if (e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      smoothTo(href);
      setOpen(false);
      history.replaceState(null, "", href);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-white/70 dark:bg-[#0a0b10]/70">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => onNavClick(e, "#home")}
          className="font-semibold tracking-tight text-gray-900 dark:text-white text-lg"
        >
          {BRAND.name}
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
          {LINKS.map((label) => {
            const href = `#${label.toLowerCase()}`;
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => onNavClick(e, href)}
                className="relative hover:text-white transition-colors"
              >
                <span className="relative z-10">{label}</span>
                <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-[#ff4d5a] via-[#8b5cf6] to-[#06b6d4] opacity-0 group-hover:opacity-100" />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="h-9 w-9 flex items-center justify-center rounded-lg border border-white/10 hover:bg-white/10"
          >
            <Sun className="h-5 w-5 hidden dark:block text-yellow-400" />
            <Moon className="h-5 w-5 dark:hidden text-gray-900" />
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden h-9 w-9 flex items-center justify-center rounded-lg border border-white/10"
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 dark:text-white text-gray-900">
              <path fill="currentColor" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white/80 dark:bg-[#0a0b10]/80 backdrop-blur border-t border-white/10"
          >
            <div className="px-4 py-3 flex flex-col gap-3 text-sm text-gray-800 dark:text-gray-300">
              {LINKS.map((label) => {
                const href = `#${label.toLowerCase()}`;
                return (
                  <a
                    key={label}
                    href={href}
                    onClick={(e) => onNavClick(e, href)}
                    className="hover:text-white"
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
