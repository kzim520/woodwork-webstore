import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ItemImage {
  src: string;
  caption?: string;
}

interface Item {
  id: number;
  title: string;
  images: ItemImage[];
  description: string;
  message: string;
  detailedDescription: string;
}

const CustomPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <FaArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        left: "-20px",
        zIndex: 1,
        color: "#333",
      }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <FaArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        right: "-20px",
        zIndex: 1,
        color: "#333",
      }}
      onClick={onClick}
    />
  );
};

const items: Item[] = [
  {
    id: 1,
    title: "Custom Cutting Boards",
    images: [
      { src: "/assets/cuttingboard.jpg", caption: "Walnut & Cherry" },
      { src: "/assets/pinetable.jpg", caption: "Close-up of end grain" },
      { src: "/assets/cuttingboard3.jpg" }, // No caption
    ],
    description:
      "Handscrafted cutting boards made to your prefered dimension and wood spieces. Including walnut, maple, cherry, purple heart and more.",
    message:
      "*read description below for reccomended dimensions. The max width I can accommodate is 12.5in ",
    detailedDescription: `This handcrafted cutting board combines the rich, dark tones of walnut with the 
    warm contrast of cherry, creating a timeless and elegant addition to any kitchen. Designed with durability 
    and style in mind, each board is made from premium hardwoods and finished with food-safe oils and beeswax to 
    ensure long-lasting performance and beauty. Every board is fully customizable—you can choose the wood species, 
    thickness, length and pattern to suit your needs or kitchen aesthetic. Whether you're looking for a compact prep board 
    or a large serving piece, this cutting board can be tailored to your exact specifications. Recommended Dimensions:
    Width: 8"–12.5", Length: 16"–21", Thickness: 1.5"–2.5". Pricing is based on size and wood choice, and quotes are 
    available upon request through the "Custom Orders" tab. Perfect for both daily use and presentation, this cutting 
    board makes a thoughtful gift or a functional statement piece for your own home.`,
  },
  {
    id: 2,
    title: "Rustic Red Oak End Table",
    images: [
      { src: "/assets/redoak.jpg", caption: "Rustic finish" },
      { src: "/assets/redoak2.jpg" },
    ],
    description: "Red oak table finished with a distinct weathered look",
    message: "*read description below for recommended dimensions",
    detailedDescription: "Coming soon",
  },
  {
    id: 3,
    title: "Modern Farmhouse Coffee Table",
    images: [
      { src: "/assets/coffeetable.jpg", caption: "Full view" },
      { src: "/assets/coffeetable2.jpg", caption: "Top surface" },
    ],
    description: "Farmhouse coffee table with a modern finish",
    message: "*read description below for recommended dimensions",
    detailedDescription: "Coming soon",
  },
  {
    id: 4,
    title: "Simple Pine Table",
    images: [
      { src: "/assets/pinetable.jpg" },
      { src: "/assets/pinetable2.jpg", caption: "Minimalist design" },
    ],
    description: "Pine table with a simple yet elegant finish",
    message: "*read description below for recommended dimensions",
    detailedDescription: "Coming soon",
  },
  {
    id: 5,
    title: "Refinished Nightstand",
    images: [
      { src: "/assets/greennightstand.jpg", caption: "Restored finish" },
    ],
    description:
      "Antique nightstand from the 1950's with a refreshing new look",
    message:
      "*read description below for details regarding refinished furniture",
    detailedDescription: "Coming soon",
  },
];

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
    fade: true, // for fade transition instead of sliding
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
