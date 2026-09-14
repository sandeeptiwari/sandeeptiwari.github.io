import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import BlogPage from "./blog/BlogPage";

function App() {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => setRoute(window.location.pathname);

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  const blogMatch = route.match(/^\/blogs\/([^/?#]+)/);

  if (blogMatch) {
    return <BlogPage blogSlug={blogMatch[1]} />;
  }

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
