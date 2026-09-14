import React from "react";
import "./blog.css";
import { blogBlockTypeConfig } from "./blogConfig";

function BlogRenderer({ blocks, meta }) {
  return (
    <article className="blog-article">
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
