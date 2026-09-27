// In development, requests go through src/setupProxy.js to avoid CORS on localhost.
const PAPER2LEARN_BASE_URL =
  process.env.NODE_ENV === "development"
    ? ""
    : "https://paper2learn.onrender.com";
const POSTS_ENDPOINT = `${PAPER2LEARN_BASE_URL}/api/v1/blog/posts`;
const API_KEY = process.env.REACT_APP_PAPER2LEARN_API_KEY || "";

export const PAPER2LEARN_ROUTE_PREFIX = "/blogs/p2l/";

let postsPromise = null;

function request(url) {
  return fetch(url, { headers: { "X-API-Key": API_KEY } }).then((response) => {
    if (!response.ok) {
      throw new Error(`Paper2Learn request failed (${response.status})`);
    }
    return response;
  });
}

function toBlogCard(item) {
  return {
    url: `${PAPER2LEARN_ROUTE_PREFIX}${item.slug}`,
    slug: item.slug,
    title: item.title,
    description: item.summary,
    category: item.category,
    tags: item.tags || [],
    readTime: item.readTimeMinutes ? `${item.readTimeMinutes} min read` : "",
    publishedAt: item.publishedAt,
    xmlUrl: item.xmlUrl,
  };
}

// Cached per page session so the home grid, list page and detail page share one call.
export function fetchPaper2LearnPosts() {
  if (!postsPromise) {
    postsPromise = request(POSTS_ENDPOINT)
      .then((response) => response.json())
      .then((data) => (data.items || []).map(toBlogCard))
      .catch((err) => {
        postsPromise = null;
        throw err;
      });
  }
  return postsPromise;
}

export async function fetchPaper2LearnXml(slug) {
  const posts = await fetchPaper2LearnPosts();
  const post = posts.find((item) => item.slug === slug);
  if (!post || !post.xmlUrl) {
    throw new Error("Blog not found");
  }

  const response = await request(`${PAPER2LEARN_BASE_URL}${post.xmlUrl}`);
  return response.text();
}
