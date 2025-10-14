import React from "react";
import { motion } from "framer-motion";
import { BRAND } from "../data/brand";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Neon background auras */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.2 }}
          className="absolute -inset-x-20 -top-24 h-[420px] bg-[radial-gradient(ellipse_at_top,_rgba(255,77,90,0.25),transparent_60%)] blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          className="absolute inset-x-0 top-24 h-[380px] bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.25),transparent_60%)] blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="absolute inset-x-0 top-52 h-[380px] bg-[radial-gradient(ellipse_at_bottom,_rgba(6,182,212,0.22),transparent_60%)] blur-2xl"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-20 md:pt-28 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          {`Hi, I'm `}
          <span className="bg-gradient-to-r from-[#ff4d5a] via-[#f43f5e] to-[#8b5cf6] bg-clip-text text-transparent">
            {BRAND.name}
          </span>
          <br />
          <span className="text-2xl md:text-3xl font-light text-gray-800 dark:text-gray-300">
            {BRAND.role}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          {BRAND.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-xl px-6 py-3 bg-[#ff4d5a] text-white font-medium shadow-[0_0_25px_rgba(255,77,90,0.45)] hover:shadow-[0_0_35px_rgba(255,77,90,0.65)] hover:scale-[1.03] transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl px-6 py-3 border border-white/15 text-gray-900 dark:text-white hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
