import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Portfolio from "../components/Portfolio";
// import { API_URL } from "../utils/api";

function MyWork() {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // ✅ Call backend when this page mounts
  useEffect(() => {
    console.log("MyWork loaded — API fetch commented out.");
    // fetch(`${API_URL}/api/hello`)
    //   .then((res) => res.json())
    //   .then((data) => console.log("🚀 Backend says:", data))
    //   .catch((err) => console.error("❌ Backend error:", err));
  }, []);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigateToCustomOrders = () => {
    navigate("/custom-orders");
  };

  return (
    <div className="container">
      <p className="display-4 text-center fw-medium mt-5">
        Get to Know Me and My Work
      </p>
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
              I’m a soon-to-be graduate with a degree in Computer Science—but
              when I’m not coding, you’ll find me covered in sawdust, bringing
              custom woodworking projects to life. Woodworking started as a
              hobby but quickly became a passion. There’s something special
              about turning raw materials into unique, handcrafted furniture
              that fits perfectly into someone’s home. Whether you’re looking
              for a custom-built piece or just browsing, you’re supporting a
              recent grad trying to chip away at student debt (one project at a
              time). Take a look around, and if you have an idea, let’s make it
              happen!
            </p>
            <button
              className="btn btn-dark btn-lg mt-3"
              onClick={handleNavigateToCustomOrders}
            >
              Let’s Build Your Idea!
            </button>

            {/* 🚀 New scroll button */}
            <button
              className="btn btn-outline-dark btn-lg mt-3 ms-3"
              onClick={scrollToPortfolio}
            >
              See My Work ↓
            </button>
          </div>
        </div>
      </div>

      {/* 🎯 Target scroll section */}
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
