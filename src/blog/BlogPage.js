import React, { useEffect, useState } from "react";
import { parseBlogXml } from "./blogContent";
import BlogRenderer from "./BlogRenderer";
import { fetchPaper2LearnXml } from "./paper2learnApi";

async function fetchLocalXml(blogSlug) {
  const response = await fetch(`/blogs/articles/${blogSlug}.xml`);
  if (!response.ok) {
    throw new Error("Blog not found");
  }
  return response.text();
}

export default function BlogPage({ blogSlug, source }) {
  const [blogData, setBlogData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBlog() {
      try {
        const xmlText =
          source === "paper2learn"
            ? await fetchPaper2LearnXml(blogSlug)
            : await fetchLocalXml(blogSlug);
        const parsed = parseBlogXml(xmlText);
        setBlogData(parsed);
      } catch (err) {
        setError(err.message || "Unable to load blog content.");
      }
    }

    loadBlog();
  }, [blogSlug, source]);

  if (error) {
    return <div className="blog-error">{error}</div>;
  }

  if (!blogData) {
    return <div className="blog-loading">Loading blog...</div>;
  }

  return <BlogRenderer meta={blogData.meta} blocks={blogData.blocks} />;
}
