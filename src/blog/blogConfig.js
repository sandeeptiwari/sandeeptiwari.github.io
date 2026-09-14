import React from "react";

function TitleBlock({ block, index }) {
  return <h1 key={index} className="blog-title">{block.value}</h1>;
}

function SummaryBlock({ block, index }) {
  return <div key={index} className="blog-summary">{block.value}</div>;
}

function HeadingBlock({ block, index }) {
  const Tag = `h${block.level || 2}`;
  return <Tag key={index} className="blog-heading">{block.value}</Tag>;
}

function ParagraphBlock({ block, index }) {
  return <p key={index} className="blog-paragraph">{block.value}</p>;
}

function QuoteBlock({ block, index }) {
  return <blockquote key={index} className="blog-quote">{block.value}</blockquote>;
}

function ImageBlock({ block, index }) {
  return (
    <figure key={index} className="blog-image-wrapper">
      <img className="blog-image" src={block.src} alt={block.alt} />
      {block.caption && <figcaption>{block.caption}</figcaption>}
    </figure>
  );
}

function ListBlock({ block, index }) {
  const listTag = block.variant === "number" ? "ol" : "ul";
  const listClass = `blog-list blog-list-${block.variant || "dot"}`;

  return (
    <div key={index} className="blog-list-wrapper">
      {React.createElement(
        listTag,
        { className: listClass },
        block.items.map((item, itemIndex) => (
          <li key={`${index}-${itemIndex}`}>{item}</li>
        ))
      )}
    </div>
  );
}

function CodeBlock({ block, index }) {
  return (
    <pre key={index} className={`blog-code blog-code-${block.language}`}>
      <code>{block.value}</code>
    </pre>
  );
}

export const blogTagConfig = {
  tle: {
    blockType: "title",
    parser: (node) => ({ type: "title", value: node.textContent.trim() }),
    component: TitleBlock,
  },
  smr: {
    blockType: "summary",
    parser: (node) => ({ type: "summary", value: node.textContent.trim() }),
    component: SummaryBlock,
  },
  hd1: {
    blockType: "heading",
    parser: (node) => ({ type: "heading", level: 1, value: node.textContent.trim() }),
    component: HeadingBlock,
  },
  hd2: {
    blockType: "heading",
    parser: (node) => ({ type: "heading", level: 2, value: node.textContent.trim() }),
    component: HeadingBlock,
  },
  hd3: {
    blockType: "heading",
    parser: (node) => ({ type: "heading", level: 3, value: node.textContent.trim() }),
    component: HeadingBlock,
  },
  p: {
    blockType: "paragraph",
    parser: (node) => ({ type: "paragraph", value: node.textContent.trim() }),
    component: ParagraphBlock,
  },
  quote: {
    blockType: "quote",
    parser: (node) => ({ type: "quote", value: node.textContent.trim() }),
    component: QuoteBlock,
  },
  img: {
    blockType: "image",
    parser: (node) => ({
      type: "image",
      src: node.getAttribute("src") || "",
      alt: node.getAttribute("alt") || "",
      caption: node.getAttribute("caption") || "",
    }),
    component: ImageBlock,
  },
  list: {
    blockType: "list",
    parser: (node) => ({
      type: "list",
      variant: node.getAttribute("type") || "dot",
      items: Array.from(node.querySelectorAll("item"))
        .map((itemNode) => itemNode.textContent.trim())
        .filter(Boolean),
    }),
    component: ListBlock,
  },
  codej: {
    blockType: "code",
    parser: (node) => ({
      type: "code",
      language: "javascript",
      value: node.textContent.trim(),
    }),
    component: CodeBlock,
  },
  codep: {
    blockType: "code",
    parser: (node) => ({
      type: "code",
      language: "python",
      value: node.textContent.trim(),
    }),
    component: CodeBlock,
  },
  codes: {
    blockType: "code",
    parser: (node) => ({
      type: "code",
      language: "scala",
      value: node.textContent.trim(),
    }),
    component: CodeBlock,
  },
  codet: {
    blockType: "code",
    parser: (node) => ({
      type: "code",
      language: "typescript",
      value: node.textContent.trim(),
    }),
    component: CodeBlock,
  },
};

export const blogBlockTypeConfig = Object.values(blogTagConfig).reduce(
  (registry, tagEntry) => {
    registry[tagEntry.blockType] = tagEntry.component;
    return registry;
  },
  {}
);

export function getBlogTagConfig(tagName) {
  return blogTagConfig[tagName.toLowerCase()] || null;
}
