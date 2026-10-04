# Paper2Learn: portfolio kit for sandeeptiwari.me

Everything needed to add Paper2Learn to the **Projects** section of sandeeptiwari.me, with a detailed architecture article behind it.
- It uses your site's **existing** project-card fields and **existing** blog XML renderer. No new components are needed.
- The article was previewed on your live site's renderer and has no errors.

## Files

| File | Put it at (site `public/`) | Used for |
|---|---|---|
| `public/myworks/paper2learn/cover.png` | `/myworks/paper2learn/cover.png` | Project card thumbnail (16:9, 1600×900) and article header |
| `public/myworks/paper2learn/architecture.png` | `/myworks/paper2learn/architecture.png` | Architecture diagram inside the article |
| `public/blogs/articles/paper2learn-architecture.xml` | `/blogs/articles/paper2learn-architecture.xml` | The detailed flow document (your blog template format) |
| `public/myworks/paper2learn/admin-tour.gif` | `/myworks/paper2learn/admin-tour.gif` | Animated tour of the live admin console (26 s loop, 1100×653, 1.5 MB); already embedded in article section 9 |
| `public/myworks/paper2learn/admin-tour-poster.png` | `/myworks/paper2learn/admin-tour-poster.png` | Static first frame of the tour, for places where a GIF shouldn't autoplay |
| `*.svg` next to the PNGs | optional | Editable sources of the cover and diagram |

Once the article file is in place, it opens at **https://sandeeptiwari.me/blogs/paper2learn-architecture**.

---

## Project card content

The fields match your existing project entries (PigRunner and Ball Sort Puzzle).

**Card link:** your card image opens `launchUrl` if set, otherwise the first entry in `links`. Two consequences:
- A `launchUrl` makes the overlay button say **Play**, which suits the games but not this project.
- Instead, use one entry in `links` whose name is the button label, e.g. `"Read the architecture": "/blogs/paper2learn-architecture"`. The label then reads *Read the architecture* with a link icon.

| Field | Value |
|---|---|
| id | `paper2learn` |
| name | Paper2Learn |
| category | AI · System Design |
| image | `/myworks/paper2learn/cover.png` |
| description | Turns new arXiv research papers into beginner-friendly tutorials: deterministic ingestion, vector search, and AI simplification with human review, running at near-zero cost. |
| links | Read the architecture → `/blogs/paper2learn-architecture` |

**overview**
> Paper2Learn discovers new research papers on arXiv, processes them one PDF at a time without storing any PDFs, and splits each paper into typed sections (introduction, method, results…) using deterministic layout analysis instead of an LLM. Papers are stored compactly in MongoDB Atlas with full-text and vector search. When an admin clicks Process, Gemini produces a beginner tutorial that passes copyright and grounding checks, streams its progress live over Server-Sent Events, and waits for human approval before it appears on the blog. The whole system runs on free tiers: Render, MongoDB Atlas M0, GitHub Actions and Gemini.

**features**
- Idempotent arXiv ingestion: two-level deduplication by source ID and SHA-256 content hash.
- One PDF at a time: streamed, processed and deleted, so no PDFs are ever stored.
- Deterministic section detection for LaTeX- and IEEE-style papers, with a human review queue.
- Full-text search and Atlas Vector Search, plus LLM-ready retrieval tools with character budgets.
- AI tutorials on demand, with live progress (Server-Sent Events) and human approval.
- Licence-aware copyright checks: verbatim-copy detector and number grounding.
- Admin console: storage, token and traffic dashboards, paper management, review queues.
- CI/CD: tests against real MongoDB, automatic Render deploy, daily ingestion workflow.

**benefits** (what it shows about how I build)
- Cost-aware AI: two model calls per paper, daily caps, and results reused instead of regenerated.
- Storage measured and designed for a 512 MB free cluster (~230 KB per paper).
- Reliability first: idempotent jobs, failure isolation, timeouts, provenance on every AI result.
- Responsible AI: human-in-the-loop publishing, attribution and licence handling.

**requirements**

| label | value |
|---|---|
| Language | Python 3.12 |
| Framework | FastAPI, Pydantic, PyMuPDF |
| Data | MongoDB Atlas (full-text and Vector Search) |
| AI | Gemini (embeddings and structured generation) |
| Hosting | Render Free, GitHub Actions |

**techStack:** Python · FastAPI · PyMuPDF · MongoDB Atlas · Vector Search · Gemini · SSE · Render · GitHub Actions

**sourceCode (the Details modal):** your existing entries use `status: "on-request"`, and the modal's tabs are aimed at game source licensing. For this project either:
- keep **on-request**, with includes like *Architecture walkthrough*, *Deployment notes*, *Test suite*; or
- leave `sourceCode` out, if the modal hides that section when it's missing (please check this in your site).

**order:** 3. Your home page shows the **first three** projects (`projects.slice(0, 3)`), so order 3 puts it on the home page next to the two games.

---

## Blog list entry (optional)

To also list the article under **Blogs**, add an entry to your blogs data:

| Field | Value |
|---|---|
| url | `/blogs/paper2learn-architecture` |
| title | Paper2Learn — Turning Research Papers into Beginner Tutorials at Near-Zero Cost |
| description | How I built a pipeline that ingests arXiv papers one PDF at a time, understands their structure without an LLM, and publishes human-approved beginner tutorials, all within free tiers. |
| category | System Design |
| readTime | 14 min read |

---

## What the article covers (14 min read)

1. The problem, and the design rule "deterministic first, AI only where needed"
2. Architecture at a glance, with the diagram and the text flow
3. One-PDF-at-a-time ingestion, including the arXiv 406 quirk
4. Section detection without an LLM (43% → ~18% needing review)
5. Storage designed for 512 MB (measured ~230 KB per paper; the text-index lesson)
6. Retrieval: full-text search, vector search and LLM tool schemas
7. AI simplification with a human in the loop, plus cost controls
8. Copyright and honesty safeguards
9. Admin console and observability
10. Near-zero-cost deployment, and lessons from production
11. Tech stack
12. Results and what's next

All numbers come from the real system: 115 papers, ~2,700 sections, ~230 KB per paper, 41% restrictive licences in a 107-paper sample, and ~5k input / 1.6k output tokens per tutorial. The article doesn't mention any keys, internal URLs or admin endpoints.
