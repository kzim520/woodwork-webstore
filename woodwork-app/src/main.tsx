import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Import Bootstrap's CSS for layout, grid, and component styles
import "bootstrap/dist/css/bootstrap.css";

// Import Bootstrap's JavaScript bundle (includes interactive components like navbar, collapse, modal)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/**
 * Entry Point of the React App
 *
 * - Attaches the root React component tree (`<App />`) to the DOM.
 * - Wraps the app in React's <StrictMode> to enable additional checks/warnings in development.
 * - Uses React 18's `createRoot` API for concurrent rendering.
 *
 * Notes:
 * - The root DOM node must exist with id="root" (defined in `index.html`)
 * - `!` (non-null assertion) is safe here because the DOM node is known to exist at runtime
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
