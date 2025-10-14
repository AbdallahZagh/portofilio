import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import Section from "./Section";
import { EXPERIENCE } from "../data/experience";
import { EDUCATION } from "../data/education";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Roles, impact, and outcomes.">
      <div className="grid gap-6 md:grid-cols-2">
        {EXPERIENCE.map((exp) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100">
              <BriefcaseBusiness className="h-5 w-5" />
              <h3 className="font-semibold">{exp.role}</h3>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {exp.date}
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/5 p-6"
        >
          <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100">
            <GraduationCap className="h-5 w-5" />
            <h3 className="font-semibold">{EDUCATION.program}</h3>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {EDUCATION.school} — {EDUCATION.date}
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
