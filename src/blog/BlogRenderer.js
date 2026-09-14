import React, { useEffect, useMemo, useState } from "react";
import "./blog.css";
import { blogBlockTypeConfig } from "./blogConfig";

function BlogRenderer({ blocks, meta }) {
  const tocItems = useMemo(
    () => blocks.filter((block) => block.type === "heading" && block.id),
    [blocks],
  );
  const [activeId, setActiveId] = useState(tocItems[0]?.id || "");

  useEffect(() => {
    if (tocItems.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px" },
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [tocItems]);

  return (
    <div className="blog-layout">
      {tocItems.length > 0 && (
        <aside className="blog-toc" aria-label="Table of contents">
          <div className="blog-toc-sticky">
            <p className="blog-toc-heading">On this page</p>
            <nav>
              <ul>
                {tocItems.map((item) => (
                  <li
                    key={item.id}
                    className={`blog-toc-level-${item.level || 2}${
                      activeId === item.id ? " blog-toc-active" : ""
                    }`}
                  >
                    <a href={`#${item.id}`}>{item.value}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      )}

      <div className="blog-article-area">
        <article className="blog-article">
          <a className="blog-back-home" href="/">
            ← Back to Home
          </a>

          {meta.thumbnail && (
            <div className="blog-hero-image-wrapper">
              <img
                className="blog-hero-image"
                src={meta.thumbnail}
                alt={meta.thumbnailAlt || meta.title}
              />
            </div>
          )}

          <header className="blog-header">
            <div className="blog-kicker">{meta.category || "Blog"}</div>
            <h1 className="blog-page-title">{meta.title}</h1>

            <div className="blog-meta-row">
              {meta.author && <span>By {meta.author}</span>}
              {meta.date && <span>{meta.date}</span>}
              {meta.readTime && <span>{meta.readTime}</span>}
            </div>

            {meta.summary && <div className="blog-summary">{meta.summary}</div>}

            {meta.tags?.length > 0 && (
              <div className="blog-tag-list">
                {meta.tags.map((tag) => (
                  <span key={tag} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="blog-content">
            {blocks.map((block, index) => renderBlock(block, index))}
          </div>
        </article>
      </div>
    </div>
  );
}

function renderBlock(block, index) {
  const Component = blogBlockTypeConfig[block.type] || null;

  if (!Component) {
    return null;
  }

  return <Component key={index} block={block} index={index} />;
}

export default BlogRenderer;
