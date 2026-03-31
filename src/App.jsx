import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Articles from "./pages/Articles";
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
      default:
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
  return (
    <RouterProvider>
      <PageRouter />
    </RouterProvider>
  );
}
