import React from "react";
import Section from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="I turn product goals into fast, readable code—shipped with thoughtful motion and robust UX."
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur p-6">
        <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#ff4d5a]/20 blur-2xl" />
        <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-[#8b5cf6]/20 blur-2xl" />
        <p className="relative text-gray-800 dark:text-gray-300 leading-relaxed">
          I craft maintainable, scalable interfaces with clean architecture, composable components, and a11y-first patterns. I enjoy collaborating closely with design and backend to ship value, fast—without compromising on quality.
        </p>
      </div>
    </Section>
  );
}

