import React, { useState } from "react";
import "./blog.css";
import BlogCard from "../components/blogCard/BlogCard";
import { blogSection } from "../data/blogs";

const PAGE_SIZE = 9;

export default function BlogListPage() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleBlogs = blogSection.blogs.slice(0, visibleCount);
  const hasMore = visibleCount < blogSection.blogs.length;

  return (
    <div className="blog-list-page">
      <a className="blog-back-home" href="/">
        ← Back to Home
      </a>

      <div className="blog-header">
        <h1 className="blog-header-text">{blogSection.title}</h1>
        <p className="subTitle blog-subtitle">{blogSection.subtitle}</p>
      </div>

      <div className="blog-text-div">
        {visibleBlogs.map((blog) => (
          <BlogCard
            key={blog.url}
            blog={{
              url: blog.url,
              image: blog.image,
              title: blog.title,
              description: blog.description,
            }}
          />
        ))}
      </div>

      {hasMore && (
        <div className="blog-view-all-wrapper">
          <button
            className="main-button blog-load-more"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
