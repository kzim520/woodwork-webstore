import { Link } from "react-router-dom";
import { useRef } from "react";
import ItemCard from "./ItemCard";
import "../styles/Portfolio.css";
import { Item } from "../data/items";

interface PortfolioProps {
  items: Item[];
}

function Portfolio({ items }: PortfolioProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

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
      <div className="text-center d-md-none mb-3">
        <p className="swipe-hint">← Swipe to explore →</p>
      </div>

      <div className="d-flex align-items-center">
        <button
          onClick={() => scroll("left")}
          className="btn btn-dark me-2 d-none d-md-inline"
        >
          &#8592;
        </button>

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
