import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Item {
  id: number;
  title: string;
  image: string;
  description: string;
  message: string;
  detailedDescription: string;
}

const items: Item[] = [
  {
    id: 1,
    title: "Walnut & Cherry Cutting Board",
    image: "/assets/cuttingboard.jpg",
    description:
      "Handscrafted cutting boards made to your prefered dimension and wood spieces. Including walnut, maple, cherry, purple heart and more.",
    message: "*read description below for reccomended dimensions",
    detailedDescription: `This handcrafted cutting board combines the rich, dark tones of walnut with the warm contrast of cherry, creating a timeless and elegant addition to any kitchen. Designed with durability and style in mind, each board is made from premium hardwoods and finished with food-safe oils and beeswax to ensure long-lasting performance and beauty.

Every board is fully customizable—you can choose the wood species, thickness, and length to suit your needs or kitchen aesthetic. Whether you're looking for a compact prep board or a large serving piece, this cutting board can be tailored to your exact specifications.

Recommended Dimensions:

Width: 8"–12.5"
Length: 16"–21"
Thickness: 1.5"–2.5"

Pricing is based on size and wood choice, and quotes are available upon request through the "Custom Orders" tab.

Perfect for both daily use and presentation, this cutting board makes a thoughtful gift or a functional statement piece for your own home.`,
  },
  {
    id: 2,
    title: "Rustic Red Oak End Table",
    image: "/assets/redoak.jpg",
    description: "Red oak table finished with a distinct weathered look",
    message: "*read description below for recommended dimensions",
    detailedDescription: "Coming soon",
  },
  {
    id: 3,
    title: "Modern Farmhouse Coffee Table",
    image: "/assets/coffeetable.jpg",
    description: "Farmhouse coffee table with a modern finish",
    message: "*read description below for recommended dimensions",
    detailedDescription: "Coming soon",
  },
  {
    id: 4,
    title: "Simple Pine Table",
    image: "/assets/pinetable.jpg",
    description: "Pine table with a simple yet elegant finish",
    message: "*read description below for recommended dimensions",
    detailedDescription: "Coming soon",
  },
  {
    id: 5,
    title: "Refinished Nightstand",
    image: "/assets/greennightstand.jpg",
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

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Image Section */}
        <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
          <img
            src={item.image}
            alt={item.title}
            className="img-fluid shadow-lg rounded"
          />
        </div>

        {/* Item Details Section */}
        <div className="col-md-6">
          <h2 className="text-primary mb-3">{item.title}</h2>
          <p className="lead">{item.description}</p>
          <p className="">{item.message}</p>
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
