import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { toast } from "react-hot-toast";
import Pill from "../Pill";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/5 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all backdrop-blur"
    >
      <div className="flex items-start gap-3">
        <div className="rounded-xl p-2 bg-gradient-to-br from-amber-200/70 to-yellow-100/30 dark:from-amber-400/10 dark:to-yellow-400/5 text-amber-700 dark:text-amber-300">
          <Code2 className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {project.summary}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Pill key={s}>{s}</Pill>
        ))}
      </div>

      <div className="mt-6 grid sm:grid-cols-3 gap-2">
        {project.links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => toast.success(`Opening ${label}…`)}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 dark:border-gray-800 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 transition"
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </motion.article>
  );
}
