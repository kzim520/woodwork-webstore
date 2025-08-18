import {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef as useRefHook,
} from "react";
import Slider from "react-slick";
import { CustomPrevArrow, CustomNextArrow } from "./Arrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ImageCarousel.css";

type Image = { src: string; caption?: string; size?: string };

type Props = {
  images: Image[];
  title: string;
  startIndex?: number; // allows controlling the initial image from outside
};

const MAX_INLINE_THUMBS = 9;

const ImageCarousel = ({ images, title, startIndex = 0 }: Props) => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeIndex, setActiveIndex] = useState(startIndex);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreMenuRef = useRefHook<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(startIndex);
      setActiveIndex(startIndex);
    }
  }, [startIndex]);

  // Close dropdown on outside click or on Escape
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!isMoreOpen) return;
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(e.target as Node)
      ) {
        setIsMoreOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMoreOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [isMoreOpen]);

  const currentImage = images[activeIndex];
  const currentCaption = currentImage?.caption ?? "";
  const currentSize = currentImage?.size ?? "";

  const sliderSettings = {
    dots: false, // we render our own thumb bar; disable slick dots
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    initialSlide: startIndex,
    afterChange: (index: number) => setActiveIndex(index),
  };

  const visibleThumbs = useMemo(
    () => images.slice(0, MAX_INLINE_THUMBS),
    [images]
  );
  const overflowThumbs = useMemo(
    () => images.slice(MAX_INLINE_THUMBS),
    [images]
  );
  const overflowCount = overflowThumbs.length;

  const goTo = useCallback((idx: number) => {
    sliderRef.current?.slickGoTo(idx);
    setActiveIndex(idx);
    setIsMoreOpen(false);
  }, []);

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
      <Slider ref={sliderRef} {...sliderSettings} className="image-carousel">
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

      {/* Thumb Bar with translucent strip */}
      <div
        className="thumb-bar"
        role="navigation"
        aria-label="Carousel thumbnails"
      >
        <div className="thumbs-inline">
          {visibleThumbs.map((img, i) => {
            const absoluteIdx = i; // 0..8
            const isActive = activeIndex === absoluteIdx;
            return (
              <button
                key={absoluteIdx}
                type="button"
                className={`thumb-btn ${isActive ? "is-active" : ""}`}
                onClick={() => goTo(absoluteIdx)}
                aria-label={`Go to slide ${absoluteIdx + 1}`}
                aria-current={isActive ? "true" : "false"}
              >
                <img
                  className="thumb-img"
                  src={img.src}
                  alt={
                    img.caption ? img.caption : `Thumbnail ${absoluteIdx + 1}`
                  }
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/assets/placeholder.jpg";
                  }}
                />
              </button>
            );
          })}

          {/* More dropdown trigger if overflow */}
          {overflowCount > 0 && (
            <div className="thumb-more" ref={moreMenuRef}>
              <button
                type="button"
                className="thumb-more-btn"
                onClick={() => setIsMoreOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={isMoreOpen ? "true" : "false"}
                aria-label={`Show ${overflowCount} more thumbnails`}
              >
                More ({overflowCount})
                <span className="chevron" aria-hidden="true">
                  ▾
                </span>
              </button>

              {isMoreOpen && (
                <div className="thumb-more-menu" role="menu">
                  <div className="thumb-more-grid">
                    {overflowThumbs.map((img, i) => {
                      const absoluteIdx = MAX_INLINE_THUMBS + i;
                      const isActive = activeIndex === absoluteIdx;
                      return (
                        <button
                          key={absoluteIdx}
                          type="button"
                          className={`thumb-btn ${isActive ? "is-active" : ""}`}
                          onClick={() => goTo(absoluteIdx)}
                          role="menuitem"
                          aria-label={`Go to slide ${absoluteIdx + 1}`}
                          aria-current={isActive ? "true" : "false"}
                        >
                          <img
                            className="thumb-img"
                            src={img.src}
                            alt={
                              img.caption
                                ? img.caption
                                : `Thumbnail ${absoluteIdx + 1}`
                            }
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = "/assets/placeholder.jpg";
                            }}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
