import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { items, Item } from "../data/items.ts";
import { CustomPrevArrow, CustomNextArrow } from "../components/Arrow.tsx";
import "../styles/ItemDetail.css";

function ItemDetail() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | undefined>(undefined);
  const sliderRef = useRef<Slider | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (id) {
      const foundItem = items.find((item) => item.id === parseInt(id));
      setItem(foundItem);
    }
  }, [id]);

  const handleBeforeChange = (_: number, next: number) => {
    setActiveIndex(next);
  };

  if (!item) {
    return <div className="container text-center mt-5">Item not found!</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    beforeChange: handleBeforeChange,
  };

  const currentCaption = item.images[activeIndex]?.caption || "";

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Image Carousel Section */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          {/* Arrows + Caption Above the Image */}
          <div className="arrow-container">
            <div onClick={() => sliderRef.current?.slickPrev()}>
              <CustomPrevArrow />
            </div>

            <div className="caption-between-arrows">
              <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                {currentCaption}
              </p>
            </div>

            <div onClick={() => sliderRef.current?.slickNext()}>
              <CustomNextArrow />
            </div>
          </div>

          <Slider ref={sliderRef} {...sliderSettings}>
            {item.images.map((image, index) => (
              <div key={index} className="carousel-img-wrapper">
                <img
                  src={image.src}
                  alt={image.caption || item.title}
                  className="carousel-img"
                  onError={(e) => {
                    console.log(
                      "⛔ Failed to load image in ItemDetail, falling back:",
                      image.src
                    );
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/assets/placeholder.jpg";
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Item Details Section */}
        <div className="col-md-6">
          <h2 className="text-primary mb-3">{item.title}</h2>
          <p className="lead">{item.description}</p>
          <p>{item.message}</p>
          <div className="bg-light p-4 rounded shadow-sm">
            <h4 className="text-dark mb-3">Detailed Description</h4>
            <p>{item.detailedDescription}</p>

            <div className="mt-4 text-center text-md-start">
              <Link to="/custom-orders" className="btn btn-outline-dark">
                Start a Custom Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
