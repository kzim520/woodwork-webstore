import "../styles/ItemCard.css";

interface Props {
  title: string;
  image: string;
  cardDescription: string;
}

function ItemCard({ title, image, cardDescription }: Props) {
  const fallbackImage = "/assets/placeholder.jpg";

  return (
    <div className="card h-100">
      <div className="card-img-container">
        <img
          src={image}
          alt={title}
          onError={(e) => {
            console.log("⛔ Image failed to load, using fallback for:", image);
            e.currentTarget.onerror = null; // Prevents infinite loop
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
