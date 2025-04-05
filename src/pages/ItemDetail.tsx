import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Item {
  id: number;
  title: string;
  image: string;
  description: string;
  detailedDescription: string;
}

const items: Item[] = [
  {
    id: 1,
    title: "Walnut & Cherry Cutting Board",
    image: "/assets/cuttingboard.jpg",
    description:
      "A handcrafted cutting board made from premium walnut and cherry.",
    detailedDescription:
      "This cutting board is designed for durability and style, featuring a blend of walnut and cherry wood. It is hand-sanded and finished to ensure smooth surfaces and a long-lasting finish.",
  },
  {
    id: 2,
    title: "Pine Nightstand",
    image: "/assets/pinetable.jpg",
    description: "Them tapered legs tho.",
    detailedDescription:
      "This Pine Nightstand features sleek tapered legs, offering a mid-century modern aesthetic with practical storage space. It's perfect for any modern bedroom.",
  },
  // Add more items here
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
