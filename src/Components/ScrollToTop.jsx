import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling to top
  }, [pathname]); // Runs when the page (pathname) changes

  return null;
};

export default ScrollToTop;
