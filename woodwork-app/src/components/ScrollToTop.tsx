import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Always scroll to top on pathname change
  }, [pathname]);

  return null;
}

export default ScrollToTop;
