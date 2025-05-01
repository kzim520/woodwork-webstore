import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop Component
 *
 * Automatically scrolls the window to the top whenever the route changes.
 * This prevents the browser from preserving the scroll position between pages,
 * which is the default behavior in single-page apps using React Router.
 *
 * Usage:
 * Place <ScrollToTop /> inside your <BrowserRouter> but outside <Routes> in App.tsx.
 */
function ScrollToTop() {
  const { pathname } = useLocation(); // Get current path

  useEffect(() => {
    // Scroll to the top-left corner when the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;
