import React from "react";
import "./Project.css";
import { Icon } from "@iconify/react";
import { projectSection } from "../../portfolio";

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a
        className="project-card-image-link"
        href={project.launchUrl}
        aria-label={`Launch ${project.name}`}
        title={`Play ${project.name}`}
      >
        <img
          className="project-card-image"
          src={project.image}
          alt={`${project.name} game artwork`}
        />
        <span className="project-image-overlay" aria-hidden="true">
          <span className="project-image-details">
            <span className="project-overlay-category">{project.category}</span>
            <span className="project-overlay-title">{project.name}</span>
            <span className="project-play-button">
              <Icon icon="mdi:play" />
              Play
            </span>
          </span>
        </span>
      </a>
      <div className="project-card-content">
        <span className="project-category">{project.category}</span>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default function Projects() {
  const previewProjects = projectSection.projects.slice(0, 3);

  return (
    <section className="main projects-section" id="projects">
      <div className="project-header">
        <h1 className="project-title">{projectSection.title}</h1>
        <p>{projectSection.subtitle}</p>
      </div>
      <div className="project-grid">
        {previewProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="project-view-all-wrapper">
        <a className="main-button" href="/projects">
          View All Projects
        </a>
      </div>
    </section>
  );
}
