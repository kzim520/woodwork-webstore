import { useRef } from "react";
import ItemCard from "./ItemCard";
import "../styles/Portfolio.css"; // Assuming styles are here

function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8; // Scroll amount based on container width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const items = [
    {
      title: "Walnut & Cherry Cutting Board",
      image: "/assets/cuttingboard.jpg",
      description:
        "A handcrafted cutting board made from premium walnut and cherry.",
    },
    {
      title: "Pine Nightstand",
      image: "/assets/pinetable.jpg",
      description: "them tapered legs tho",
    },
    {
      title: "Night Stand",
      image: "/assets/greennightstand.jpg",
      description: "Frankie's table",
    },
    {
      title: "Modern Farmhouse Coffee Table",
      image: "/assets/coffeetable.jpg",
      description: "table",
    },
    {
      title: "Maple, Cherry, and Walnut Cutting Board",
      image: "/assets/bread.JPEG",
      description: "that sourdough tho",
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
            {items.map((item, index) => (
              <div key={index} className="portfolio-card-wrapper me-3">
                <ItemCard
                  title={item.title}
                  image={item.image}
                  description={item.description}
                />
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
