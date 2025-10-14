import React from "react";
import { BRAND } from "../data/brand";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-4 text-sm text-gray-800 dark:text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} {BRAND.name}. Built with React, Tailwind, and Framer Motion.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 hover:bg-white/10 transition"
          aria-label="Back to top"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path fill="currentColor" d="m7 14l5-5l5 5" />
          </svg>
          Back to top
        </a>
      </div>
    </footer>
  );
}
