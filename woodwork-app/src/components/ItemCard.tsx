interface Props {
  title: string;
  image: string;
  description: string;
}

function ItemCard({ title, image, description }: Props) {
  return (
    <div className="card h-100">
      <div
        className="card-img-container"
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "#f8f9fa",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
      </div>
    </div>
  );
}

export default ItemCard;
