import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Portfolio from "../components/Portfolio";
// import { API_URL } from "../utils/api";

/**
 * MyWork Component
 *
 * Serves as the landing page to introduce the creator (Kevin Zimmer)
 * and showcase recent woodworking projects. The page includes:
 * - A personal intro and portrait
 * - Buttons to navigate to the custom order form or scroll to the portfolio
 * - A reusable <Portfolio /> component displaying project cards
 */
function MyWork() {
  const portfolioRef = useRef<HTMLDivElement>(null); // Ref for scroll-to-section
  const navigate = useNavigate();

  /**
   * useEffect (on mount)
   * Used for optional backend health check.
   * Left commented out to avoid unnecessary fetches in production.
   */
  useEffect(() => {
    // console.log("MyWork loaded — API fetch commented out.");
    // test backend connectivity during development
    // fetch(`${API_URL}/api/hello`)
    //   .then((res) => res.json())
    //   .then((data) => console.log("🚀 Backend says:", data))
    //   .catch((err) => console.error("❌ Backend error:", err));
  }, []);

  /**
   * Scroll smoothly to the portfolio section
   */
  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  /**
   * Navigate to the custom orders form
   */
  const handleNavigateToCustomOrders = () => {
    navigate("/custom-orders");
  };

  return (
    <div className="container">
      {/* === Header Section === */}
      <p className="display-4 text-center fw-medium mt-5">
        Get to Know Me and My Work
      </p>

      {/* === Bio + Portrait Section === */}
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center">
          <img
            src="/assets/portrait.jpg"
            alt="My portrait"
            className="img-fluid mt-5 border border-dark rounded"
            style={{ width: "350px", height: "auto" }}
          />
        </div>
        <div className="col-md-8 mt-5">
          <div className="text-center p-3">
            <p className="fs-3">Hi, I’m Kevin Zimmer!</p>
            <p className="fs-5">
              I’m a recent graduate with a degree in Computer Science—but when
              I’m not coding, you’ll find me covered in sawdust, bringing custom
              woodworking projects to life. Woodworking started as a hobby but
              quickly became a passion. There’s something special about turning
              raw materials into unique, handcrafted furniture that fits
              perfectly into someone’s home. Whether you’re looking for a
              custom-built piece or just browsing, you’re supporting a recent
              grad trying to chip away at student debt (one project at a time).
              Take a look around, and if you have an idea, let’s make it happen!
            </p>

            {/* CTA Buttons */}
            <button
              className="btn btn-dark btn-lg mt-3"
              onClick={handleNavigateToCustomOrders}
            >
              Request a Custom Build
            </button>

            <button
              className="btn btn-outline-dark btn-lg mt-3 ms-3"
              onClick={scrollToPortfolio}
            >
              See My Work ↓
            </button>
          </div>
        </div>
      </div>

      {/* === Portfolio Section === */}
      <div id="portfolio" ref={portfolioRef}>
        <p className="display-4 text-center fw-medium mt-5">Recent Projects</p>
        <div className="mb-5">
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default MyWork;
