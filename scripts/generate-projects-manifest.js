#!/usr/bin/env node
/*
 * Scans public/myworks/<project>/ and writes src/data/projects.generated.js.
 *
 * Each project folder may contain:
 *   - dist/index.html or dist/web/index.html  -> playable build, card launches it
 *   - project.json (optional)                 -> metadata + external links
 *
 * project.json shape (all fields optional):
 *   {
 *     "name": "Ball Sort",
 *     "description": "...",
 *     "category": "Game",
 *     "image": "/myworks/ball_sorter/cover.png",   // or relative: "cover.png"
 *     "order": 1,
 *     "links": { "youtube": "https://...", "github": "https://...", "website": "https://..." },
 *     "overview": "Longer paragraph shown in the details modal.",
 *     "features": ["..." | {"title": "...", "text": "..."}],  // key features
 *     "requirements": [{"label": "Platform", "value": "Web, Android"}],
 *     "customisation": ["Game name", "Package ID", ...],
 *     "gallery": [{"src": "architecture.png", "caption": "..."}],  // images/GIFs in the modal
 *     "benefitsTitle": "Why get the source",   // heading for benefits
 *     "sourceCode": false,          // not a source-for-sale project: hides licensing tabs
 *     "benefits": ["..."],          // what a buyer of the source gets / learns
 *     "techStack": ["Java", "libGDX"],
 *     "sourceCode": {
 *       "status": "on-request",     // "on-request" (email) | "purchase" (future: payment + zip)
 *       "price": "",                // shown when set, e.g. "$19"
 *       "includes": ["Full source", "Build scripts"],
 *       "excludes": ["Artwork", "Audio"]   // buyer must supply their own
 *     }
 *   }
 * A folder with only project.json (no dist) becomes a link-only card.
 */
const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
const WORKS_DIR = path.join(PUBLIC_DIR, "myworks");
const OUT_FILE = path.join(ROOT_DIR, "src", "data", "projects.generated.js");
const IMAGE_RE = /\.(png|jpe?g|webp|gif)$/i;

const toUrl = (abs) => "/" + path.relative(PUBLIC_DIR, abs).split(path.sep).join("/");

function titleCase(id) {
  return id.replace(/[_-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function findEntry(dir) {
  for (const rel of ["dist/index.html", "dist/web/index.html"]) {
    const abs = path.join(dir, rel);
    if (fs.existsSync(abs)) return abs;
  }
  return null;
}

// Pick the largest image in the build as a cover when none is configured.
function findCover(dir) {
  let best = null;
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const abs = path.join(d, e.name);
      if (e.isDirectory()) walk(abs);
      else if (IMAGE_RE.test(e.name) && !/gwt|clear\.cache/i.test(abs)) {
        const size = fs.statSync(abs).size;
        if (!best || size > best.size) best = { abs, size };
      }
    }
  };
  walk(dir);
  return best ? toUrl(best.abs) : "";
}

function readProject(id) {
  const dir = path.join(WORKS_DIR, id);
  const jsonPath = path.join(dir, "project.json");
  let meta = {};
  if (fs.existsSync(jsonPath)) {
    try {
      meta = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    } catch (err) {
      console.warn(`[projects] Invalid JSON in ${jsonPath}: ${err.message}`);
    }
  }

  const entry = findEntry(dir);
  const links = meta.links || {};
  if (!entry && !Object.keys(links).length) {
    console.warn(`[projects] Skipping ${id}: no dist/index.html and no links in project.json`);
    return null;
  }

  let image = meta.image || "";
  if (image && !/^(https?:)?\//.test(image)) image = toUrl(path.join(dir, image));
  if (!image) image = findCover(dir);
  const resolve = (src) => (/^(https?:)?\//.test(src) ? src : toUrl(path.join(dir, src)));

  return {
    id,
    name: meta.name || titleCase(id),
    description: meta.description || "",
    category: meta.category || (entry ? "Game" : "Project"),
    image,
    launchUrl: entry ? toUrl(entry) : "",
    links,
    overview: meta.overview || "",
    features: meta.features || [],
    benefits: meta.benefits || [],
    requirements: meta.requirements || [],
    customisation: meta.customisation || [],
    gallery: (meta.gallery || []).map((g) => ({ src: resolve(g.src), caption: g.caption || "" })),
    benefitsTitle: meta.benefitsTitle || "",
    techStack: meta.techStack || [],
    sourceCode:
      meta.sourceCode === false
        ? null
        : { status: "on-request", price: "", includes: [], excludes: [], ...(meta.sourceCode || {}) },
    order: typeof meta.order === "number" ? meta.order : 999,
  };
}

function main() {
  const ids = fs.existsSync(WORKS_DIR)
    ? fs.readdirSync(WORKS_DIR, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name)
    : [];
  const projects = ids
    .map(readProject)
    .filter(Boolean)
    .sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(
    OUT_FILE,
    `// AUTO-GENERATED by scripts/generate-projects-manifest.js. Do not edit.\n` +
      `const generatedProjects = ${JSON.stringify(projects, null, 2)};\n\nexport default generatedProjects;\n`,
  );
  console.log(`[projects] Wrote ${projects.length} project(s): ${projects.map((p) => p.id).join(", ")}`);
}

main();
