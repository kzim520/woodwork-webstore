import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { shopItems, ShopItem } from "../data/shopItems";
import { CustomPrevArrow, CustomNextArrow } from "../components/Arrow.tsx";
import "../styles/ItemDetail.css";
import DropdownSection from "../components/DropdownSection";

function ShopItemDetail() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ShopItem | undefined>(undefined);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );
  const [showMessage, setShowMessage] = useState(false);
  const sliderRef = useRef<Slider | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (id) {
      const foundItem = shopItems.find((item) => item.id === id);
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
        {/* === Image Carousel Section === */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
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
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/assets/placeholder.jpg";
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* === Item Info Section === */}
        <div className="col-md-6">
          <h2 className="text-primary mb-3">{item.title}</h2>
          <p className="lead">{item.description}</p>
          <p className="msg">{item.message}</p>

          <div className="bg-light p-4 rounded shadow-sm">
            <DropdownSection title="Detailed Description">
              <ul className="list-group mb-3 mt-2">
                {item.detailedDescription.map((point, index) => (
                  <li key={index} className="list-group-item">
                    {point}
                  </li>
                ))}
              </ul>
            </DropdownSection>

            {item.options && item.options.length > 0 && (
              <div className="mb-3">
                <label htmlFor="itemOption" className="form-label">
                  Choose an option:
                </label>
                <select
                  id="itemOption"
                  className="form-select"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="">-- Select an option --</option>
                  {item.options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              className="btn btn-primary mt-3"
              onClick={() => {
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 6000); // hide after 6s
              }}
              disabled={
                item.options && item.options.length > 0 && !selectedOption
              }
            >
              Purchase
            </button>
            {showMessage && (
              <div className="alert alert-info mt-3">
                Purchase functionality still under development. If you're
                interested in this item, please email me at{" "}
                <a href="mailto:10thstreetwoodwork@gmail.com">
                  10thstreetwoodwork@gmail.com
                </a>
                .
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopItemDetail;
