import Portfolio from "../components/Portfolio";

function MyWork() {
  return (
    <div className="container">
      <p className="display-4 text-center fw-medium mt-5">
        Get to Know Me and My Work
      </p>
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center">
          <img
            src="/assets/portrait.jpg"
            alt="My portrait"
            className="img-fluid mt-5 border border-dark rounded"
            style={{ width: "350px", height: "auto" }}
          />
        </div>
        <div className="col-md-8 mt-5">
          <div className="text-center p-3">
            <p className="fs-3">Hi, I’m Kevin Zimmer!</p>
            <p className="fs-5">
              I’m a soon-to-be graduate from Colorado School of Mines with a
              degree in Computer Science—but when I’m not coding, you’ll find me
              covered in sawdust, bringing custom woodworking projects to life.
              I’ve lived in Colorado for the past five years, falling in love
              with the outdoors, mountain biking, and rock climbing. Woodworking
              started as a hobby but quickly became a passion. There’s something
              special about turning raw materials into unique, handcrafted
              furniture that fits perfectly into someone’s home. Whether you’re
              looking for a custom-built piece or just browsing, you’re
              supporting a recent grad trying to chip away at student debt (one
              project at a time). Take a look around, and if you have an idea,
              let’s make it happen!
            </p>
            <button className="btn btn-dark btn-lg mt-3">
              Lets Build your Idea!
            </button>
          </div>
        </div>
      </div>
      <div id="portfolio">
        <p className="display-4 text-center fw-medium mt-5">
          Completed Projects
        </p>
        <div className="mb-5">
          <Portfolio></Portfolio>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
