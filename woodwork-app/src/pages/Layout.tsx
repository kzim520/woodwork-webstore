import { Outlet, NavLink } from "react-router-dom";

/**
 * Layout Component
 *
 * Serves as the top-level wrapper for all routed pages in the application.
 * It includes a responsive Bootstrap navigation bar and uses `<Outlet />`
 * from React Router to render the matched child route below the navbar.
 *
 * Navigation links use `NavLink` to automatically apply active styling
 * when the current route matches.
 *
 * Structure:
 * - Brand: "10th Street Woodworks" links to the homepage
 * - Links: "My Work", "Custom Orders", "Shop"
 * - Mobile-friendly: Includes a Bootstrap toggle button for smaller screens
 */
const Layout = () => {
  return (
    <>
      {/* === Navigation Bar === */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Brand / Home Link */}
          <NavLink className="navbar-brand fs-3 fw-bold" to="/">
            10th Street Woodworks
          </NavLink>

          {/* Hamburger Menu for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            {/* Optional label can be added here */}
          </button>

          {/* Collapsible Menu Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  My Work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/custom-orders">
                  Custom Orders
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">
                  Shop
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* === Child Route Rendering Area === */}
      <Outlet />
    </>
  );
};

export default Layout;
