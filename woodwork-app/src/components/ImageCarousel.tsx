import { useRef, useState } from "react";
import Slider from "react-slick";
import { CustomPrevArrow, CustomNextArrow } from "./Arrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Image = { src: string; caption?: string };

type Props = {
  images: Image[];
  title: string;
};

const ImageCarousel = ({ images, title }: Props) => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentCaption = images[activeIndex]?.caption || "";

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
  };

  return (
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
        {images.map((image, index) => (
          <div key={index} className="carousel-img-wrapper">
            <img
              src={image.src}
              alt={image.caption || title}
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
