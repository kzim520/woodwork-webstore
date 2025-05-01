import { useLocation, Link } from "react-router-dom";
import { API_URL } from "../utils/api";

/**
 * OrderConfirmation Component
 *
 * This page displays a thank-you message after a user successfully submits
 * a custom order. It:
 * - Retrieves the user's name and uploaded image paths from navigation state
 * - Displays a personalized message and image thumbnails (if provided)
 * - Includes a button to return to the homepage
 *
 * Expects to receive state from navigation like:
 *   {
 *     name: "Kevin",
 *     imagePaths: ["/uploads/image1.jpg", "/uploads/image2.jpg"]
 *   }
 */
function OrderConfirmation() {
  const location = useLocation();
  const { name, imagePaths } = location.state || {};

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">🎉 Thank you for your custom order!</h2>

      {/* Personalized thank-you message */}
      {name && <p className="fs-4">I'll reach out to you soon, {name}.</p>}

      {/* Show uploaded images, if any */}
      {imagePaths?.length > 0 && (
        <>
          <p className="mt-4">You've uploaded the following images:</p>
          <div className="d-flex justify-content-center flex-wrap">
            {imagePaths.map((src: string, index: number) => (
              <img
                key={index}
                src={`${API_URL}${src}`} // Build full image URL using API base
                alt={`Uploaded ${index}`}
                className="img-thumbnail m-2"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
            ))}
          </div>
        </>
      )}

      {/* Navigation back to homepage */}
      <Link to="/" className="btn btn-dark mt-4">
        Back to Home
      </Link>
    </div>
  );
}

export default OrderConfirmation;
