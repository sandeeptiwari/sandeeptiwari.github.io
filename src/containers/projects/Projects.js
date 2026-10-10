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
          {project.sourceCode ? "Details & source code" : "Details"}
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

// Tab order; any other type found in the data is appended after these.
const TYPE_TABS = [
  { type: "Game", label: "Games", icon: "mdi:gamepad-variant-outline" },
  { type: "Application", label: "Applications", icon: "mdi:application-outline" },
  { type: "Tool", label: "Tools", icon: "mdi:tools" },
];

export function ProjectTabs({ projects, limit, allowExpand = false }) {
  const types = [...new Set(projects.map((p) => p.type))];
  const tabs = [
    ...TYPE_TABS.filter((t) => types.includes(t.type)),
    ...types
      .filter((type) => !TYPE_TABS.some((t) => t.type === type))
      .map((type) => ({ type, label: type, icon: "mdi:folder-outline" })),
  ];
  const [active, setActive] = useState(tabs[0] && tabs[0].type);
  const [showAll, setShowAll] = useState(false);
  const visible = projects.filter((p) => p.type === active);
  const canExpand = allowExpand && limit && visible.length > limit;
  const shown = limit && !(canExpand && showAll) ? visible.slice(0, limit) : visible;

  return (
    <>
      <div className="project-type-tabs" role="tablist" aria-label="Project types">
        {tabs.map((tab) => {
          const count = projects.filter((p) => p.type === tab.type).length;
          return (
            <button
              key={tab.type}
              type="button"
              role="tab"
              id={`project-type-tab-${tab.type}`}
              aria-selected={active === tab.type}
              aria-controls="project-type-panel"
              className="project-type-tab"
              onClick={() => {
                setActive(tab.type);
                setShowAll(false);
              }}
            >
              <Icon icon={tab.icon} />
              {tab.label}
              <span className="project-type-count">{count}</span>
            </button>
          );
        })}
      </div>
      <div
        className="project-grid"
        role="tabpanel"
        id="project-type-panel"
        aria-labelledby={`project-type-tab-${active}`}
      >
        {shown.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {canExpand && (
        <div className="project-view-all-wrapper">
          <button
            type="button"
            className="main-button"
            aria-expanded={showAll}
            aria-controls="project-type-panel"
            onClick={() => setShowAll((expanded) => !expanded)}
          >
            {showAll ? "Show Fewer Projects" : "View All Projects"}
          </button>
        </div>
      )}
    </>
  );
}

export default function Projects() {

  return (
    <section className="main projects-section" id="projects">
      <div className="project-header">
        <h1 className="project-title">{projectSection.title}</h1>
        <p>{projectSection.subtitle}</p>
      </div>
      <ProjectTabs projects={projectSection.projects} limit={4} allowExpand />
    </section>
  );
}
