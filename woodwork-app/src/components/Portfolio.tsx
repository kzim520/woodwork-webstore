import { Link } from "react-router-dom";
import { useRef } from "react";
import ItemCard from "./ItemCard";
import "../styles/Portfolio.css";

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

  const items = [
    {
      id: 1, // Add a unique ID for each item
      title: "Cutting Boards",
      image: "/assets/cuttingboard.jpg",
      description: "Cutting boards handcrafted to your preference",
    },
    {
      id: 2,
      title: "Rustic Oak End Table",
      image: "/assets/oaktable.jpg",
      description: "Red oak coffee table with a weathered finish",
    },
    {
      id: 3,
      title: "Modern Farmhouse Coffee",
      image: "/assets/coffeetable.jpg",
      description: "Farmhouse look with a modern twist",
    },
    {
      id: 4,
      title: "Simple Pine Table",
      image: "/assets/pinetable.jpg",
      description: "Simple yet elegant pine table",
    },
    {
      id: 5,
      title: "Refinishing services",
      image: "/assets/greennightstand.jpg",
      description: "Refinished nightstand from 1950's",
    },
  ];

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
            {/* Dynamically render ItemCards */}
            {items.map((item) => (
              <div
                key={item.id}
                className={"portfolio-card-wrapper flex-shrink-0"}
                style={{
                  scrollSnapAlign: "start",
                  width: "250px",
                }}
              >
                {/* Use Link to navigate to the item detail page */}
                <Link
                  to={`/item/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ItemCard
                    title={item.title}
                    image={item.image}
                    description={item.description}
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
