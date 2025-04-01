import ItemCard from "./ItemCard";

function Portfolio() {
  return (
    <div className="container mt-5">
      <div className="row flex-nowrap overflow-auto">
        <div className="col-md-4">
          <ItemCard
            title="Walnut & Cherry Cutting Board"
            image="/assets/cuttingboard.jpg"
            description="A handcrafted cutting board made from premium walnut and cherry."
          />
        </div>
        <div className="col-md-4">
          <ItemCard
            title="Pine Nightstand"
            image="/assets/pinetable.jpg"
            description="them tapered legs tho"
          />
        </div>
        <div className="col-md-4">
          <ItemCard
            title="Night Stand"
            image="/assets/greennightstand.jpg"
            description="Frankie's table"
          />
        </div>
        <div className="col-md-4">
          <ItemCard
            title="Modern Farmhouse Coffee Table"
            image="/assets/coffeetable.jpg"
            description="table"
          />
        </div>
        <div className="col-md-4">
          <ItemCard
            title="Maple, Cherry, and Walnut Cutting Board"
            image="/assets/bread.JPEG"
            description="that sourdough tho"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
