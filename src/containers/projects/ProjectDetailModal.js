import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import { contactInfo } from "../../portfolio";
import {
  LICENCE_URL,
  licenceSummary,
  licenceTiers,
  publishGuide,
  supportInfo,
} from "../../data/sourceLicensing";

const newTab = { target: "_blank", rel: "noopener noreferrer" };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "included", label: "What's included" },
  { id: "publish", label: "Publish & earn" },
  { id: "licence", label: "Licence & support" },
];

function sourceRequestMailto(project, tier) {
  const subject = `Source code request: ${project.name}`;
  const body = [
    "Hi Sandeep,",
    "",
    `I'm interested in the source code for "${project.name}".`,
    "",
    `Licence: ${tier || "Single App / Multi App / Custom"}`,
    "Name:",
    "Company (optional):",
    "Where I plan to publish:",
    "",
    "Thanks!",
  ].join("\n");
  return `mailto:${contactInfo.email_address}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

function Section({ title, children }) {
  return (
    <section className="project-modal-block">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function CheckList({ items, icon = "mdi:check", tone }) {
  if (!items || !items.length) return null;
  return (
    <ul className={`project-modal-list ${tone ? `is-${tone}` : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <Icon icon={icon} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Features may be plain strings or { title, text } pairs.
function FeatureGrid({ features }) {
  if (!features || !features.length) return null;
  return (
    <ul className="project-feature-grid">
      {features.map((f) => {
        const { title, text } = typeof f === "string" ? { title: f } : f;
        return (
          <li key={title}>
            <strong>{title}</strong>
            {text && <span>{text}</span>}
          </li>
        );
      })}
    </ul>
  );
}

function Gallery({ items }) {
  if (!items || !items.length) return null;
  return (
    <div className="project-gallery">
      {items.map(({ src, caption }) => (
        <figure key={src}>
          <a href={src} {...newTab}>
            <img src={src} alt={caption} loading="lazy" />
          </a>
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

function OverviewTab({ project }) {
  return (
    <>
      {project.gallery && project.gallery.length > 0 && (
        <Section title="Gallery">
          <Gallery items={project.gallery} />
        </Section>
      )}
      <Section title="Key features">
        <FeatureGrid features={project.features} />
      </Section>
      {project.benefits.length > 0 && (
        <Section title={project.benefitsTitle || "Why get the source"}>
          <CheckList items={project.benefits} icon="mdi:check-circle-outline" />
        </Section>
      )}
    </>
  );
}

function IncludedTab({ project }) {
  const { includes, excludes } = project.sourceCode || { includes: [], excludes: [] };
  return (
    <>
      {project.requirements.length > 0 && (
        <Section title="Technical requirements">
          <dl className="project-spec-list">
            {project.requirements.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}
      <div className="project-modal-columns">
        {includes.length > 0 && (
          <Section title="Included in the download">
            <CheckList items={includes} />
          </Section>
        )}
        {excludes.length > 0 && (
          <Section title="Not included (bring your own)">
            <CheckList items={excludes} icon="mdi:close" tone="muted" />
          </Section>
        )}
      </div>
      {project.customisation.length > 0 && (
        <Section title="Easy to customise">
          <ul className="project-tech">
            {project.customisation.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}

function PublishTab() {
  return (
    <>
      <p className="project-modal-overview">{publishGuide.intro}</p>
      <ol className="project-steps">
        {publishGuide.steps.map((s) => (
          <li key={s.title}>
            <strong>{s.title}</strong>
            <span>{s.text}</span>
          </li>
        ))}
      </ol>
      <Section title="Where you can publish">
        <ul className="project-tech">
          {publishGuide.channels.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Section>
      <p className="project-disclaimer">
        <Icon icon="mdi:information-outline" aria-hidden="true" />
        {publishGuide.disclaimer}
      </p>
    </>
  );
}

function LicenceTab() {
  return (
    <>
      <div className="project-tiers">
        {licenceTiers.map((t) => (
          <div key={t.name} className={`project-tier ${t.highlight ? "is-highlight" : ""}`}>
            {t.highlight && <span className="project-tier-badge">Most popular</span>}
            <strong>{t.name}</strong>
            <span>{t.summary}</span>
          </div>
        ))}
      </div>
      <div className="project-modal-columns">
        <Section title="You can">
          <CheckList items={licenceSummary.allowed} />
        </Section>
        <Section title="You can't">
          <CheckList items={licenceSummary.notAllowed} icon="mdi:close" tone="muted" />
        </Section>
      </div>
      <p className="project-disclaimer">
        <Icon icon="mdi:scale-balance" aria-hidden="true" />
        <span>
          Summary only. The{" "}
          <a href={LICENCE_URL} {...newTab}>
            full source code licence
          </a>{" "}
          applies.
        </span>
      </p>
      <Section title="Support">
        <p className="project-modal-overview">
          {supportInfo.covers} {supportInfo.include} {supportInfo.extra}
        </p>
      </Section>
    </>
  );
}

function SourceCodePanel({ project }) {
  const { status, price } = project.sourceCode;
  const isPurchase = status === "purchase";

  return (
    <aside className="project-source-panel">
      <div className="project-source-head">
        <Icon icon="mdi:code-braces-box" aria-hidden="true" />
        <div>
          <h3>Get the source code</h3>
          <p>
            {isPurchase
              ? "Buy once and download the full project as a zip."
              : "Available on request. Tell me which licence you need and I'll reply with details."}
          </p>
        </div>
        {price && <span className="project-source-price">{price}</span>}
      </div>
      <div className="project-source-actions">
        <a className="project-cta" href={sourceRequestMailto(project)}>
          <Icon icon="mdi:email-outline" aria-hidden="true" />
          Request source code
        </a>
        <button
          type="button"
          className="project-cta project-cta-disabled"
          disabled
          title="Online purchase is coming soon"
        >
          <Icon icon="mdi:download-lock-outline" aria-hidden="true" />
          Buy &amp; download (coming soon)
        </button>
      </div>
      <p className="project-source-email">
        Or email{" "}
        <a href={`mailto:${contactInfo.email_address}`}>{contactInfo.email_address}</a>
      </p>
    </aside>
  );
}

export default function ProjectDetailModal({ project, onClose }) {
  const closeRef = useRef(null);
  const [tab, setTab] = useState("overview");
  // Projects without source for sale only get overview + tech details.
  const tabs = project.sourceCode
    ? TABS
    : [TABS[0], { id: "included", label: "Tech details" }];

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current && closeRef.current.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused && previouslyFocused.focus && previouslyFocused.focus();
    };
  }, [onClose]);

  const links = Object.entries(project.links || {}).filter(([, url]) => url);
  const titleId = `project-modal-title-${project.id}`;
  const panelId = `project-modal-panel-${project.id}`;

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern).
  const onTabKey = (e) => {
    const i = tabs.findIndex((t) => t.id === tab);
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    const next = tabs[(i + delta + tabs.length) % tabs.length];
    setTab(next.id);
    document.getElementById(`${panelId}-tab-${next.id}`).focus();
  };

  // Portal to <body>: cards use transform on hover, which would otherwise
  // trap a position:fixed overlay inside the card.
  return createPortal(
    <div className="project-modal-backdrop" onMouseDown={onClose}>
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <Icon icon="mdi:close" />
        </button>

        {project.image && (
          <div className="project-modal-hero">
            <img src={project.image} alt="" />
          </div>
        )}

        <div className="project-modal-body">
          <span className="project-category">{project.category}</span>
          <h2 id={titleId}>{project.name}</h2>
          <p className="project-modal-overview">{project.overview || project.description}</p>

          {project.techStack.length > 0 && (
            <ul className="project-tech" aria-label="Tech stack">
              {project.techStack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}

          <div className="project-modal-actions">
            {project.launchUrl && (
              <a className="project-cta" href={project.launchUrl} {...newTab}>
                <Icon icon="mdi:play" aria-hidden="true" />
                Play now
              </a>
            )}
            {links.map(([key, url]) => (
              <a key={key} className="project-cta project-cta-secondary" href={url} {...newTab}>
                <Icon icon="mdi:open-in-new" aria-hidden="true" />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            ))}
          </div>

          <div className="project-tabs" role="tablist" aria-label="Project details">
            {tabs.map((t) => (
              <button
                key={t.id}
                id={`${panelId}-tab-${t.id}`}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                aria-controls={panelId}
                tabIndex={tab === t.id ? 0 : -1}
                className="project-tab"
                onClick={() => setTab(t.id)}
                onKeyDown={onTabKey}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div
            id={panelId}
            role="tabpanel"
            aria-labelledby={`${panelId}-tab-${tab}`}
            className="project-tab-panel"
          >
            {tab === "overview" && <OverviewTab project={project} />}
            {tab === "included" && <IncludedTab project={project} />}
            {tab === "publish" && <PublishTab />}
            {tab === "licence" && <LicenceTab />}
          </div>

          {project.sourceCode && <SourceCodePanel project={project} />}
        </div>
      </div>
    </div>,
    document.body,
  );
}
