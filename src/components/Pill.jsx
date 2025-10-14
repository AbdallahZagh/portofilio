import React from "react";

export default function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-gray-800 dark:text-gray-100 bg-white/60 dark:bg-white/5 backdrop-blur">
      {children}
    </span>
  );
}
