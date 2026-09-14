import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import Button from "../../components/button/Button";
import { blogSection } from "../../data/blogs";
import { Fade } from "react-reveal";

const HOMEPAGE_BLOG_LIMIT = 6;

export default function Blogs() {
  const previewBlogs = blogSection.blogs.slice(0, HOMEPAGE_BLOG_LIMIT);
  const hasMoreBlogs = blogSection.blogs.length > HOMEPAGE_BLOG_LIMIT;

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="blogs">
      <div className="blog-header">
        <h1 className="blog-header-text">{blogSection.title}</h1>
        <p className="subTitle blog-subtitle">{blogSection.subtitle}</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          {previewBlogs.map(blog => {
            return (
              <BlogCard
                key={blog.url}
                blog={{
                  url: blog.url,
                  image: blog.image,
                  title: blog.title,
                  description: blog.description
                }}
              />
            );
          })}
        </div>
      </div>
      {hasMoreBlogs && (
        <div className="blog-view-all-wrapper">
          <Button text="View All Blogs" href="/blogs" />
        </div>
      )}
    </div>
    </Fade>
  );
}
