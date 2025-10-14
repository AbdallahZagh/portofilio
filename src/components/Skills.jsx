import React from "react";
import Section from "./Section";
import Pill from "./Pill";
import { SKILLS } from "../data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tools and technologies I use to deliver reliable, delightful experiences."
    >
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((s) => (
          <Pill key={s}>{s}</Pill>
        ))}
      </div>
    </Section>
  );
}
