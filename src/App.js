import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import BlogPage from "./blog/BlogPage";
import BlogListPage from "./blog/BlogListPage";
import ProjectListPage from "./containers/projects/ProjectListPage";

function App() {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => setRoute(window.location.pathname);

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  const blogMatch = route.match(/^\/blogs\/([^/?#]+)/);
  const isBlogListRoute = /^\/blogs\/?$/.test(route);
  const isProjectsRoute = /^\/projects\/?$/.test(route);

  if (blogMatch) {
    return <BlogPage blogSlug={blogMatch[1]} />;
  }

  if (isBlogListRoute) {
    return <BlogListPage />;
  }

  if (isProjectsRoute) {
    return <ProjectListPage />;
  }

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
