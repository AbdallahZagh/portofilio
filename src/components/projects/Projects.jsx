import React from "react";
import Section from "../Section";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../data/projects";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Production-minded builds with clean architecture, smooth UX, and real demos."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}
