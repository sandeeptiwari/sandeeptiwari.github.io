import { getBlogTagConfig } from "./blogConfig";

export function parseBlogXml(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "application/xml");

  const parserError = xmlDoc.querySelector("parsererror");
  if (parserError) {
    throw new Error("Invalid blog XML content.");
  }

  const articleNode = xmlDoc.querySelector("article");
  if (!articleNode) {
    throw new Error("Blog XML is missing the article root element.");
  }

  const metaNode = articleNode.querySelector("meta");
  const contentNode = articleNode.querySelector("content");

  const meta = {
    title: getText(metaNode, "title"),
    slug: getText(metaNode, "slug"),
    author: getText(metaNode, "author"),
    date: getText(metaNode, "date"),
    category: getText(metaNode, "category"),
    readTime: getText(metaNode, "readTime"),
    summary: getText(metaNode, "summary"),
    thumbnail: getThumbnailUrl(metaNode),
    thumbnailAlt: getThumbnailAlt(metaNode),
    tags: getTags(metaNode),
  };

  const blocks = contentNode
    ? Array.from(contentNode.children).flatMap((childNode) => {
        const block = mapNodeToBlock(childNode);
        return block ? [block] : [];
      })
    : [];

  assignHeadingIds(blocks);

  return { meta, blocks };
}

function getText(parentNode, selector) {
  if (!parentNode) {
    return "";
  }

  const node = parentNode.querySelector(selector);
  return node ? node.textContent.trim() : "";
}

function getThumbnailUrl(metaNode) {
  const thumbnailNode = metaNode?.querySelector("thumbnail");
  return thumbnailNode?.getAttribute("src") || "";
}

function getThumbnailAlt(metaNode) {
  const thumbnailNode = metaNode?.querySelector("thumbnail");
  return thumbnailNode?.getAttribute("alt") || "";
}

function getTags(metaNode) {
  if (!metaNode) {
    return [];
  }

  return Array.from(metaNode.querySelectorAll("tag"))
    .map((tagNode) => tagNode.textContent.trim())
    .filter(Boolean);
}

function mapNodeToBlock(node) {
  const tagName = node.tagName.toLowerCase();
  const tagConfig = getBlogTagConfig(tagName);

  if (!tagConfig || typeof tagConfig.parser !== "function") {
    return null;
  }

  return tagConfig.parser(node);
}

function slugify(text) {
  return (
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "section"
  );
}

// Table-of-contents anchors need stable, unique ids per heading.
function assignHeadingIds(blocks) {
  const usedSlugs = new Map();

  blocks.forEach((block) => {
    if (block.type !== "heading") {
      return;
    }

    const baseSlug = slugify(block.value);
    const occurrence = usedSlugs.get(baseSlug) || 0;
    usedSlugs.set(baseSlug, occurrence + 1);

    block.id = occurrence === 0 ? baseSlug : `${baseSlug}-${occurrence}`;
  });
}
