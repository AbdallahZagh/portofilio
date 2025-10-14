import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-50">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl">
            {subtitle}
          </p>
        )}
      </motion.div>
      {children}
    </div>
  </section>
);

export default Section;
