import { Link } from "react-router-dom"; // Import Link
import { useRef } from "react";
import ItemCard from "./ItemCard";
import "../styles/Portfolio.css"; // Make sure this is pointing to the correct CSS file

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
      title: "Walnut & Cherry Cutting Board",
      image: "/assets/cuttingboard.jpg",
      description:
        "A handcrafted cutting board made from premium walnut and cherry.",
    },
    {
      id: 2,
      title: "Pine Nightstand",
      image: "/assets/pinetable.jpg",
      description: "Them tapered legs tho.",
    },
    {
      id: 3,
      title: "Night Stand",
      image: "/assets/greennightstand.jpg",
      description: "Frankie's table",
    },
    {
      id: 4,
      title: "Modern Farmhouse Coffee Table",
      image: "/assets/coffeetable.jpg",
      description: "Table",
    },
    {
      id: 5,
      title: "Maple, Cherry, and Walnut Cutting Board",
      image: "/assets/bread.JPEG",
      description: "That sourdough tho",
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
            style={{ overflowX: "auto", scrollBehavior: "smooth" }}
          >
            {/* Dynamically render ItemCards */}
            {items.map((item) => (
              <div key={item.id} className="portfolio-card-wrapper me-3">
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
