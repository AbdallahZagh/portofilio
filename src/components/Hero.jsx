import React from "react";
import { motion } from "framer-motion";
import { BRAND } from "../data/brand";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60 dark:opacity-40">
        <div className="absolute -inset-x-16 -top-32 h-96 bg-gradient-to-br from-amber-300/30 via-fuchsia-300/20 to-sky-300/30 blur-3xl dark:from-amber-300/10 dark:via-fuchsia-300/10 dark:to-sky-300/10" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-16 md:pt-24 pb-8">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Hi, I'm {BRAND.name.split(" ")[0]} —{" "}
          <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
            {BRAND.role}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-gray-700 dark:text-gray-300"
        >
          {BRAND.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-5 py-3 text-sm font-medium shadow-sm hover:shadow-md"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl border border-gray-300 dark:border-gray-700 px-5 py-3 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
