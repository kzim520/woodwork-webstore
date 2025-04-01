interface Props {
  title: string;
  image: string;
  description: string;
}

function ItemCard({ title, image, description }: Props) {
  return (
    <div className="card h-100">
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
      </div>
    </div>
  );
}

export default ItemCard;
