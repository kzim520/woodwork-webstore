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
              I’m a recent Computer Science graduate from Colorado School of
              Mines. Currently I'm working part-time as a web developer while
              actively exploring full-time opportunities in tech. Outside of
              coding, I run a small side business building custom woodworking
              projects. What started as a hobby has grown into a creative outlet
              where I get to design and craft unique, functional pieces by hand.
              It’s a satisfying contrast to screen-based work and keeps me sharp
              in problem-solving and attention to detail. Whether you’re here to
              browse or want to collaborate on a piece, I appreciate your
              support as I continue growing both professionally and creatively.
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
