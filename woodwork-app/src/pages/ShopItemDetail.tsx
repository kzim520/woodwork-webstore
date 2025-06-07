import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { shopItems, ShopItem } from "../data/shopItems";
import "../styles/ItemDetail.css";
import DropdownSection from "../components/DropdownSection";
import ImageCarousel from "../components/ImageCarousel";

function ShopItemDetail() {
  // Get the item ID from the route parameter
  const { id } = useParams<{ id: string }>();

  // Store the matching shop item
  const [item, setItem] = useState<ShopItem | undefined>(undefined);

  // Track selected dropdown option (if any)
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );

  // Track whether the "purchase" message should be shown
  const [showMessage, setShowMessage] = useState(false);

  // Find and set the item from the item list once the component mounts or the ID changes
  useEffect(() => {
    if (id) {
      const foundItem = shopItems.find((item) => item.id === id);
      setItem(foundItem);
    }
  }, [id]);

  // If no item matches the given ID, show an error message
  if (!item) {
    return <div className="container text-center mt-5">Item not found!</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {/* === Image Carousel Section (Reused Component) === */}
        <ImageCarousel images={item.images} title={item.title} />

        {/* === Item Information Section === */}
        <div className="col-md-6">
          <h2 className="text-primary mb-3">{item.title}</h2>
          <p className="lead">{item.description}</p>
          <p className="msg">{item.message}</p>

          <div className="bg-light p-4 rounded shadow-sm">
            {/* Collapsible dropdown for detailed description */}
            <DropdownSection title="Detailed Description">
              <ul className="list-group mb-3 mt-2">
                {item.detailedDescription.map((point, index) => (
                  <li key={index} className="list-group-item">
                    {point}
                  </li>
                ))}
              </ul>
            </DropdownSection>

            {/* Conditional dropdown menu for product options */}
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

            {/* Purchase button - enabled only when required option is selected */}
            <button
              className="btn btn-primary mt-3"
              onClick={() => {
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 6000); // Auto-hide after 6 seconds
              }}
              disabled={
                item.options && item.options.length > 0 && !selectedOption
              }
            >
              Purchase
            </button>

            {/* Informational message after clicking "Purchase" */}
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
