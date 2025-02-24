import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0,0); // Smooth scrolling to top
  }, [pathname]); // Runs when the page (pathname) changes

  return null;
};

export default ScrollToTop;
