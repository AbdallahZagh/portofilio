import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import Section from "./Section";
import { EXPERIENCE } from "../data/experience";
import { EDUCATION } from "../data/education";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Impact, collaboration, and outcomes across roles."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff4d5a]/60 via-[#8b5cf6]/40 to-[#06b6d4]/30" />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {EXPERIENCE.map((exp) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl border border-white/10 bg-white/70 dark:bg-white/[0.04] p-6 backdrop-blur"
            >
              <div className="absolute -left-2 top-6 h-4 w-4 rounded-full shadow ring-4 ring-[#ff4d5a]/20" style={{ background: "#ff4d5a" }} />
              <div className="flex items-center gap-3 text-gray-900 dark:text-white">
                <BriefcaseBusiness className="h-5 w-5 text-[#ff4d5a]" />
                <h3 className="font-semibold">{exp.role}</h3>
              </div>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">{exp.date}</p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-800 dark:text-gray-300 space-y-1">
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
            className="relative rounded-2xl border border-white/10 bg-white/70 dark:bg-white/[0.04] p-6"
          >
            <div className="absolute -left-2 top-6 h-4 w-4 rounded-full shadow ring-4 ring-[#8b5cf6]/20" style={{ background: "#8b5cf6" }} />
            <div className="flex items-center gap-3 text-gray-900 dark:text-white">
              <GraduationCap className="h-5 w-5 text-[#8b5cf6]" />
              <h3 className="font-semibold">{EDUCATION.program}</h3>
            </div>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
              {EDUCATION.school} — {EDUCATION.date}
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
