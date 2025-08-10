import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { shopItems, ShopItem } from "../data/shopItems";
import "../styles/ItemDetail.css";
import DropdownSection from "../components/DropdownSection";
import ImageCarousel from "../components/ImageCarousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function ShopItemDetail() {
  // Get the item ID from the route parameter
  const { id } = useParams<{ id: string }>();

  // Store the matching shop item
  const [item, setItem] = useState<ShopItem | undefined>(undefined);

  // Track selected option index (-1 = no selection)
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  // Show confirmation message when purchase is clicked
  const [showMessage, setShowMessage] = useState(false);

  // Look up the item based on ID from URL
  useEffect(() => {
    if (id) {
      const foundItem = shopItems.find((item) => item.id === id);
      setItem(foundItem);
    }
  }, [id]);

  // If no item matches, show error message
  if (!item) {
    return <div className="container text-center mt-5">Item not found!</div>;
  }

  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Back link */}
      <Link
        to="/shop"
        className="btn btn-outline-secondary mb-4 d-inline-flex align-items-center gap-2"
      >
        <FiArrowLeft size={18} /> Back to Shop
      </Link>

      <div className="row">
        {/* === Always show carousel; start at selected index === */}

        <ImageCarousel
          images={item.images}
          title={item.title}
          startIndex={selectedIndex >= 0 ? selectedIndex : 0}
        />

        {/* === Item Info === */}
        <div className="col-md-6">
          <h2 className="text-primary mb-3">{item.title}</h2>
          <p className="lead">{item.description}</p>
          <p className="msg">{item.message}</p>

          <div className="bg-light p-4 rounded shadow-sm">
            {/* Detailed description in dropdown */}
            <DropdownSection title="Detailed Description">
              <ul className="list-group mb-3 mt-2">
                {item.detailedDescription.map((point, index) => (
                  <li key={index} className="list-group-item">
                    {point}
                  </li>
                ))}
              </ul>
            </DropdownSection>

            {/* === Option selector dropdown === */}
            {item.options && item.options.length > 0 && (
              <div className="mb-3">
                <label htmlFor="itemOption" className="form-label">
                  Choose an option:
                </label>
                <select
                  id="itemOption"
                  className="form-select"
                  value={selectedIndex}
                  onChange={(e) => setSelectedIndex(Number(e.target.value))}
                >
                  <option value={-1}>-- Select an option --</option>
                  {item.options.map((option, idx) => (
                    <option key={idx} value={idx}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* === Purchase button === */}
            <button
              className="btn btn-primary mt-3"
              onClick={() => {
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 6000);
              }}
              disabled={
                item.options && item.options.length > 0 && selectedIndex === -1
              }
            >
              Purchase
            </button>

            {/* === Info message after clicking Purchase === */}
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
    </motion.div>
  );
}

export default ShopItemDetail;
