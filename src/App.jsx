import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Documentary from "./pages/Documentary";
import Home from "./pages/Home";
import Initiatives from "./pages/Initiatives";
import { RouterProvider, useRouter } from "./router";

function PageRouter() {
  const { path } = useRouter();

  const renderPage = () => {
    switch (path) {
      case "/about":
        return <About />;
      case "/initiatives":
        return <Initiatives />;
      case "/documentary":
        return <Documentary />;
      case "/articles":
        return <Articles />;
      case "/contact":
        return <Contact />;
      case "/blog":
        return <Blog />;
      default:
        if (path.startsWith("/blog/")) {
          const id = path.split("/").pop();
          return <BlogPost id={id} />;
        }
        return <Home />;
    }
  };

  return (
    <div className="page-enter" key={path}>
      <Navbar />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <RouterProvider>
          <PageRouter />
        </RouterProvider>
      )}
    </>
  );
}
