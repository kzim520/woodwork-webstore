import { Link } from "react-router-dom";

type ShopItemCardProps = {
  id: string;
  title: string;
  imageSrc: string;
  description: string;
  price?: string;
};

function ShopItemCard({
  id,
  title,
  imageSrc,
  description,
  price,
}: ShopItemCardProps) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={imageSrc}
        alt={title}
        className="card-img-top"
        style={{ objectFit: "cover", height: "250px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {price && <p className="fw-bold mt-2">${price}</p>}
        <Link to={`/shop/${id}`} className="btn btn-outline-primary mt-auto">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ShopItemCard;
