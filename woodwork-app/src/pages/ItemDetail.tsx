import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { items, Item } from "../data/items.ts";
import "../styles/ItemDetail.css";
import DropdownSection from "../components/DropdownSection";
import ImageCarousel from "../components/ImageCarousel";
import { shopItems } from "../data/shopItems";

/**
 * ItemDetail Component
 *
 * Displays a detailed view of a selected portfolio item, including:
 * - Reusable image carousel
 * - Item title, description, and details
 * - Button to start a custom order
 */
function ItemDetail() {
  // === State & Routing ===

  // Get the item ID from the URL
  const { id } = useParams<{ id: string }>();

  // Store the matched item based on ID
  const [item, setItem] = useState<Item | undefined>(undefined);

  // Load the item when the ID parameter changes
  useEffect(() => {
    if (id) {
      const foundItem = items.find((item) => item.id === id);
      setItem(foundItem);
    }
  }, [id]);

  // If no matching item is found, display fallback message
  if (!item) {
    return <div className="container text-center mt-5">Item not found!</div>;
  }

  const matchingShopItem = shopItems.find(
    (shopItem) => shopItem.id === item.id
  );

  // === Render ===
  return (
    <div className="container mt-5">
      <div className="row">
        {/* === Image Carousel Section (Reused Component) === */}
        <ImageCarousel images={item.images} title={item.title} />

        {/* === Item Information Section === */}
        <div className="col-md-6">
          <h2 className="text-primary mb-3">{item.title}</h2>
          <p className="lead">{item.description}</p>
          <p>{item.message}</p>

          {/* Detailed description in collapsible section */}
          <div className="bg-light p-4 rounded shadow-sm">
            <DropdownSection title="Detailed Description">
              <ul className="list-group mb-3">
                {item.detailedDescription.map((point, index) => (
                  <li key={index} className="list-group-item">
                    {point}
                  </li>
                ))}
              </ul>
            </DropdownSection>

            {/* CTA to custom order page */}
            <div className="mt-4 text-center text-md-start">
              <Link to="/custom-orders" className="btn btn-outline-dark">
                Start a Custom Order
              </Link>
            </div>
            {matchingShopItem && (
              <div className="mt-3 text-center text-md-start">
                <Link
                  to={`/shop/${matchingShopItem.id}`}
                  className="btn btn-primary"
                >
                  View in Shop
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
