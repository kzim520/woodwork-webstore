import ShopItemCard from "../components/ShopItemCard";

function Shop() {
  return (
    <div className="container">
      <p className="display-4 text-center fw-medium mt-5">
        Welcome to the Shop
      </p>

      <div className="row justify-content-center mt-5">
        <div className="col-md-6 col-lg-4 mb-4">
          <ShopItemCard
            id="midcentury-coffee"
            title="Mid-Century Modern Coffee Table"
            imageSrc="/assets/OakCoffee1.jpg"
            description="Crafted from solid oak and finished with Osmo Polyx hardwax oil to protect and enhance the natural grain."
          />
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <ShopItemCard
            id="custom-picture-frames"
            title="Custom Picture Frames"
            imageSrc="/assets/PictureFrames.jpg"
            description="Built to your dimensions with your choice of wood and reinforced spline joints."
          />
        </div>
      </div>
    </div>
  );
}

export default Shop;
