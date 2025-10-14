import React from "react";
import Section from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="A dedicated Front-End developer specializing in React, with a focus on performance, accessibility, and user delight."
    >
      <div className="prose dark:prose-invert max-w-none">
        <p>
          I craft maintainable, scalable interfaces with clean architecture,
          thoughtful motion, and robust UX patterns. I love turning product
          goals into fast, readable code — and collaborating closely with design
          and backend teams to ship value.
        </p>
      </div>
    </Section>
  );
}
