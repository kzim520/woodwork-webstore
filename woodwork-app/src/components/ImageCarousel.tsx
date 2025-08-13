import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { CustomPrevArrow, CustomNextArrow } from "./Arrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Image = { src: string; caption?: string; size?: string };

type Props = {
  images: Image[];
  title: string;
  startIndex?: number; // allows controlling the initial image from outside
};

const ImageCarousel = ({ images, title, startIndex = 0 }: Props) => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeIndex, setActiveIndex] = useState(startIndex);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(startIndex);
      setActiveIndex(startIndex);
    }
  }, [startIndex]);

  const currentImage = images[activeIndex];
  const currentCaption = currentImage?.caption ?? "";
  const currentSize = currentImage?.size ?? "";

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    initialSlide: startIndex,
    afterChange: (index: number) => setActiveIndex(index),
  };

  return (
    <div className="col-md-6 mb-4 mb-md-0 text-center">
      {/* Caption between custom arrows */}
      <div className="arrow-container">
        <div onClick={() => sliderRef.current?.slickPrev()}>
          <CustomPrevArrow />
        </div>

        <div className="caption-between-arrows">
          <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
            {currentCaption}
            {currentSize && (
              <>
                <br />
                <small className="text-muted">{currentSize}</small>
              </>
            )}
          </p>
        </div>

        <div onClick={() => sliderRef.current?.slickNext()}>
          <CustomNextArrow />
        </div>
      </div>

      {/* Image slider */}
      <Slider ref={sliderRef} {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-img-wrapper">
            <img
              src={image.src}
              alt={
                image.caption
                  ? `${image.caption}${image.size ? ` – ${image.size}` : ""}`
                  : title
              }
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
  );
};

export default ImageCarousel;
