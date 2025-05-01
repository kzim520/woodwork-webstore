import "../styles/ItemCard.css";

// Props definition for ItemCard
interface Props {
  title: string; // Title of the item
  image: string; // Image URL or path
  cardDescription: string; // Short description displayed on the card
}

/**
 * ItemCard Component
 *
 * Renders a Bootstrap-styled card with:
 * - An image (with fallback support if it fails to load)
 * - A title
 * - A short description
 *
 * Styles are defined in `ItemCard.css`, and the card is designed to be used
 * in a responsive grid or list layout.
 *
 * @param title The item's name or title
 * @param image The item's image source path
 * @param cardDescription A brief description of the item
 */
function ItemCard({ title, image, cardDescription }: Props) {
  // Fallback image shown if original image fails to load
  const fallbackImage = "/assets/placeholder.jpg";

  return (
    <div className="card h-100">
      <div className="card-img-container">
        <img
          src={image}
          alt={title}
          onError={(e) => {
            console.log("⛔ Image failed to load, using fallback for:", image);
            e.currentTarget.onerror = null; // Prevents infinite loop in case fallback fails
            e.currentTarget.src = fallbackImage;
          }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{cardDescription}</p>
      </div>
    </div>
  );
}

export default ItemCard;
