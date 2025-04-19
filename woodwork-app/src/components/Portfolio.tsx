import { Link } from "react-router-dom";
import { useRef } from "react";
import ItemCard from "./ItemCard";
import "../styles/Portfolio.css";
import { items } from "../data/items.ts";

function Portfolio() {
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
      <div className="d-flex align-items-center">
        <button onClick={() => scroll("left")} className="btn btn-dark me-2">
          &#8592;
        </button>

        <div className="flex-grow-1 overflow-hidden">
          <div
            className="d-flex portfolio-scroll"
            ref={scrollRef}
            style={{
              overflowX: "auto",
              scrollBehavior: "smooth",
              paddingInline: "1rem",
              scrollPaddingInline: "1rem",
              gap: "1rem",
              scrollSnapType: "x mandatory",
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="portfolio-card-wrapper flex-shrink-0"
                style={{
                  scrollSnapAlign: "start",
                  width: "250px",
                }}
              >
                <Link
                  to={`/item/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ItemCard
                    title={item.title}
                    image={item.images[0].src}
                    cardDescription={item.cardDescription}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => scroll("right")} className="btn btn-dark ms-2">
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
