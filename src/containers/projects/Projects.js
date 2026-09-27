import React, { useCallback, useState } from "react";
import "./Project.css";
import { Icon } from "@iconify/react";
import { projectSection } from "../../portfolio";
import ProjectDetailModal from "./ProjectDetailModal";

const LINK_META = {
  youtube: { icon: "mdi:youtube", label: "Watch" },
  github: { icon: "mdi:github", label: "Code" },
  website: { icon: "mdi:open-in-new", label: "Visit" },
};

function linkMeta(key) {
  return LINK_META[key] || { icon: "mdi:link-variant", label: key };
}

export function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);
  const closeDetails = useCallback(() => setShowDetails(false), []);
  const links = Object.entries(project.links || {}).filter(([, url]) => url);
  // Playable build wins; otherwise the first external link opens the project.
  const primaryUrl = project.launchUrl || (links[0] && links[0][1]);
  const primaryAction = project.launchUrl
    ? { icon: "mdi:play", label: "Play" }
    : linkMeta(links[0] ? links[0][0] : "website");

  return (
    <article className="project-card">
      <a
        className="project-card-image-link"
        href={primaryUrl}
        aria-label={`${primaryAction.label} ${project.name}`}
        title={`${primaryAction.label} ${project.name}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.image ? (
          <img
            className="project-card-image"
            src={project.image}
            alt={`${project.name} artwork`}
            loading="lazy"
          />
        ) : (
          <span className="project-card-image project-card-placeholder">
            {project.name.charAt(0)}
          </span>
        )}
        <span className="project-image-overlay" aria-hidden="true">
          <span className="project-image-details">
            <span className="project-overlay-category">{project.category}</span>
            <span className="project-overlay-title">{project.name}</span>
            <span className="project-play-button">
              <Icon icon={primaryAction.icon} />
              {primaryAction.label}
            </span>
          </span>
        </span>
      </a>
      <div className="project-card-content">
        <span className="project-category">{project.category}</span>
        <h2>{project.name}</h2>
        {project.description && <p>{project.description}</p>}
        {links.length > 0 && (
          <div className="project-links">
            {links.map(([key, url]) => {
              const meta = linkMeta(key);
              return (
                <a
                  key={key}
                  className="project-link"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={meta.icon} />
                  {meta.label}
                </a>
              );
            })}
          </div>
        )}
        <button
          type="button"
          className="project-details-button"
          onClick={() => setShowDetails(true)}
        >
          <Icon icon="mdi:information-outline" />
          Details &amp; source code
        </button>
      </div>
      {showDetails && (
        <ProjectDetailModal
          project={project}
          onClose={closeDetails}
        />
      )}
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
