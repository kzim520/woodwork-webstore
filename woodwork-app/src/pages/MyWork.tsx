import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Portfolio from "../components/Portfolio";
import { items } from "../data/items";

function MyWork() {
  const [activeTab, setActiveTab] = useState<"recent" | "shop">("shop");
  const portfolioRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigateToShop = () => {
    navigate("/shop");
  };

  // Filter items based on active tab
  const filteredItems =
    activeTab === "recent"
      ? items.filter((item) => item.category !== "shop")
      : items.filter((item) => item.category === "shop");

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
            src="/assets/data/portrait.jpg"
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
              Mines, currently working as a web developer where I design and
              build interactive websites. Outside of coding, I run a small side
              business building custom woodworking projects. What started as a
              hobby has grown into a creative outlet where I get to design and
              craft unique, functional pieces by hand. It’s a satisfying
              contrast to screen-based work and keeps me sharp in
              problem-solving and attention to detail. Whether you’re here to
              browse or want to collaborate on a piece, I appreciate your
              support as I continue growing both professionally and creatively.
            </p>

            <button
              className="btn btn-dark btn-lg mt-3"
              onClick={handleNavigateToShop}
            >
              Check Out the Shop!
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

      {/* === What I Build Section === */}
      <div className="row text-center mt-5">
        <p className="display-6 fw-semibold mb-4">Products and Services</p>

        <div className="col-md-4 mb-4">
          <img
            src="/assets/icons/furniture-icon.jpg"
            alt="Furniture icon"
            style={{ height: "80px", width: "80px" }}
          />
          <h5 className="mt-3">Custom Furniture</h5>
          <p>
            Tables, benches, built-ins, and more — all tailored to your space.
          </p>
        </div>

        <div className="col-md-4 mb-4">
          <img
            src="/assets/icons/refinish-icon.jpg"
            alt="Refinishing icon"
            style={{ height: "80px", width: "80px" }}
          />
          <h5 className="mt-3">Refinishing Services</h5>
          <p>
            I restore old pieces with care while preserving their character.
          </p>
        </div>

        <div className="col-md-4 mb-4">
          <img
            src="/assets/icons/gift-icon.jpg"
            alt="Cutting board icon"
            style={{ height: "80px", width: "80px" }}
          />
          <h5 className="mt-3">Functional Gifts</h5>
          <p>Handmade cutting boards, picture frames, and more</p>
        </div>
      </div>

      {/* === Portfolio Tabs === */}
      <div id="portfolio" ref={portfolioRef}>
        <p className="display-4 text-center fw-medium mt-5">Explore My Work</p>

        <ul className="nav nav-tabs justify-content-center mt-4" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "shop" ? "active" : ""}`}
              onClick={() => setActiveTab("shop")}
            >
              Currently in Stock
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "recent" ? "active" : ""}`}
              onClick={() => setActiveTab("recent")}
            >
              Recent Projects
            </button>
          </li>
        </ul>

        <div className="mb-5">
          <Portfolio items={filteredItems} />
        </div>
      </div>
    </div>
  );
}

export default MyWork;
