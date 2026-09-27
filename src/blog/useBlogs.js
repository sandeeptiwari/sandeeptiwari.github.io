import { useEffect, useState } from "react";
import { blogSection } from "../data/blogs";
import { fetchPaper2LearnPosts } from "./paper2learnApi";

// Paper2Learn posts first, followed by the local/static blogs.
export default function useBlogs() {
  const [remoteBlogs, setRemoteBlogs] = useState([]);

  useEffect(() => {
    let active = true;
    fetchPaper2LearnPosts()
      .then((posts) => active && setRemoteBlogs(posts))
      .catch((err) => console.warn("Paper2Learn blogs unavailable:", err));
    return () => {
      active = false;
    };
  }, []);

  return [...remoteBlogs, ...blogSection.blogs];
}
