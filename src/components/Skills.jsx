import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { SKILLS } from "../data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills & Tools"
      subtitle="Focused on performance, accessibility, and a superb developer experience."
    >
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {SKILLS.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.06, y: -2 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-white/70 dark:bg-white/[0.04] p-4 shadow-sm hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,90,0.15),transparent_45%)]" />
            <p className="relative text-sm font-semibold text-gray-900 dark:text-gray-100 text-center">
              {skill}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
