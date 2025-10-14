import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="mt-2 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#ff4d5a] via-[#8b5cf6] to-[#06b6d4]" />
        {subtitle && (
          <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        )}
      </motion.div>
      {children}
    </div>
  </section>
);

export default Section;
