import { Link } from "react-router-dom";
import { useRef } from "react";
import ItemCard from "./ItemCard";
import "../styles/Portfolio.css";
import { items } from "../data/items.ts";

/**
 * Portfolio Component
 *
 * Displays a horizontally scrollable list of portfolio items using `ItemCard`.
 * - Arrows allow scrolling left/right on desktop
 * - Mobile users see a "Swipe to explore" hint instead of buttons
 * - Each item links to a detailed view page (via React Router)
 *
 * Items are imported from a static `items.ts` data file.
 */
function Portfolio() {
  // Reference to the scroll container
  const scrollRef = useRef<HTMLDivElement>(null);

  /**
   * scroll
   * Scrolls the portfolio container left or right by 80% of its width
   *
   * @param direction "left" or "right" - direction to scroll
   */
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mt-5">
      {/* Swipe hint text (visible only on small screens) */}
      <div className="text-center d-md-none mb-3">
        <p className="swipe-hint">← Swipe to explore →</p>
      </div>

      <div className="d-flex align-items-center">
        {/* Left scroll button (desktop only) */}
        <button
          onClick={() => scroll("left")}
          className="btn btn-dark me-2 d-none d-md-inline"
        >
          &#8592;
        </button>

        {/* Scrollable container holding all item cards */}
        <div className="flex-grow-1 overflow-hidden">
          <div className="portfolio-scroll" ref={scrollRef}>
            {items.map((item) => (
              <div key={item.id} className="portfolio-card-wrapper">
                <Link
                  to={`/item/${item.id}`}
                  className="card-hover-link d-flex flex-column align-items-center"
                  style={{ textDecoration: "none" }}
                >
                  <ItemCard
                    title={item.title}
                    image={item.images[0].src}
                    cardDescription={item.cardDescription}
                  />
                  <p className="click-hint text-center mt-2 mb-0">
                    Click to view details
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right scroll button (desktop only) */}
        <button
          onClick={() => scroll("right")}
          className="btn btn-dark ms-2 d-none d-md-inline"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
