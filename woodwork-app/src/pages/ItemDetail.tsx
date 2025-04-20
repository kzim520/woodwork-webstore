import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { items, Item } from "../data/items.ts";
import { CustomPrevArrow, CustomNextArrow } from "../components/Arrow.tsx";

function ItemDetail() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const foundItem = items.find((item) => item.id === parseInt(id));
      setItem(foundItem);
    }
  }, [id]);

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
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Image Carousel Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <Slider {...sliderSettings}>
            {item.images.map((image, index) => (
              <div key={index} className="text-center">
                <img
                  src={image.src}
                  alt={image.caption || item.title}
                  className="img-fluid rounded shadow mb-2"
                  onError={(e) => {
                    console.log(
                      "⛔ Failed to load image in ItemDetail, falling back:",
                      image.src
                    );
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/assets/placeholder.jpg";
                  }}
                />
                {image.caption && (
                  <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                    {image.caption}
                  </p>
                )}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
