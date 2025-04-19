import { useLocation, Link } from "react-router-dom";
import { API_URL } from "../utils/api";

function OrderConfirmation() {
  const location = useLocation();
  const { name, imagePaths } = location.state || {};

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">🎉 Thank you for your custom order!</h2>
      {name && <p className="fs-4">I'll reach out to you soon, {name}.</p>}

      {imagePaths?.length > 0 && (
        <>
          <p className="mt-4">You've uploaded the following images:</p>
          <div className="d-flex justify-content-center flex-wrap">
            {imagePaths.map((src: string, index: number) => (
              <img
                key={index}
                src={`${API_URL}${src}`}
                alt={`Uploaded ${index}`}
                className="img-thumbnail m-2"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
            ))}
          </div>
        </>
      )}

      <Link to="/" className="btn btn-dark mt-4">
        Back to Home
      </Link>
    </div>
  );
}

export default OrderConfirmation;
