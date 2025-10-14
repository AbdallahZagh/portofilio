import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { BRAND } from "../data/brand";

export default function Header({ onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200/60 dark:border-white/10 backdrop-blur bg-white/70 dark:bg-[#0b0b0f]/60">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900 dark:text-gray-50">
          {BRAND.name}
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
          {["About", "Projects", "Skills", "Experience", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-gray-900 dark:hover:text-white">
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={onToggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-white/10"
          >
            <Sun className="h-5 w-5 hidden dark:block" />
            <Moon className="h-5 w-5 dark:hidden" />
          </button>

          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5">
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
            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#0b0b0f]/70 backdrop-blur"
          >
            <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3 text-sm text-gray-700 dark:text-gray-300">
              {["About", "Projects", "Skills", "Experience", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
                  {link}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
