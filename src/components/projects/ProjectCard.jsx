import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { Code2 } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.55 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/70 dark:bg-white/[0.04] p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all backdrop-blur"
    >
      {/* Neon edges on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-[rgba(255,77,90,0.35)]" />
        <div className="absolute -top-24 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(255,77,90,0.25),transparent_60%)] blur-2xl" />
      </div>

      <div className="flex items-start gap-3">
        <div className="rounded-xl p-2 bg-white/70 dark:bg-white/10">
          <Code2 className="h-5 w-5 text-[#ff4d5a]" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-400">
            {project.summary}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-gray-800 dark:text-gray-100 bg-white/60 dark:bg-white/5"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {project.links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => toast.success(`Opening ${label}…`)}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-white/10 transition"
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </motion.article>
  );
}
