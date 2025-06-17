import ShopItemCard from "../components/ShopItemCard";
import { shopItems } from "../data/shopItems";

function Shop() {
  return (
    <div className="container">
      <p className="display-4 text-center fw-medium mt-5">
        Welcome to the Shop
      </p>

      <div className="row justify-content-center mt-5">
        {shopItems.map((item) => (
          <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
            <ShopItemCard
              id={item.id}
              title={item.title}
              imageSrc={item.images[0].src}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
