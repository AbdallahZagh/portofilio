import React from "react";

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-white/5 backdrop-blur">
    {children}
  </span>
);

export default Pill;
