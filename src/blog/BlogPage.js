import React, { useEffect, useState } from "react";
import { parseBlogXml } from "./blogContent";
import BlogRenderer from "./BlogRenderer";

export default function BlogPage({ blogSlug }) {
  const [blogData, setBlogData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBlog() {
      try {
        const response = await fetch(`/blogs/articles/${blogSlug}.xml`);
        if (!response.ok) {
          throw new Error("Blog not found");
        }

        const xmlText = await response.text();
        const parsed = parseBlogXml(xmlText);
        setBlogData(parsed);
      } catch (err) {
        setError(err.message || "Unable to load blog content.");
      }
    }

    loadBlog();
  }, [blogSlug]);

  if (error) {
    return <div className="blog-error">{error}</div>;
  }

  if (!blogData) {
    return <div className="blog-loading">Loading blog...</div>;
  }

  return <BlogRenderer meta={blogData.meta} blocks={blogData.blocks} />;
}
