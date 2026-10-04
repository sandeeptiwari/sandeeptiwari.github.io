import React from "react";
import "./Project.css";
import { projectSection } from "../../portfolio";
import { ProjectTabs } from "./Projects";

export default function ProjectListPage() {
  return (
    <main className="project-list-page">
      <a className="project-back-home" href="/">
        &larr; Back to Home
      </a>
      <div className="project-header">
        <h1 className="project-title">{projectSection.title}</h1>
        <p>{projectSection.subtitle}</p>
      </div>
      <ProjectTabs projects={projectSection.projects} />
    </main>
  );
}