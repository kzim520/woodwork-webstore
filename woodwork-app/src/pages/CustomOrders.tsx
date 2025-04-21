import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/api";

function CustomOrders() {
  // store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDescription: "",
    images: [] as File[], // Store the selected files here
  });

  // Create a reference for the file input
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("projectDescription", formData.projectDescription);

    // Append each image
    formData.images.forEach((file) => {
      data.append("images", file); // "images" matches multer.array("images")
    });

    fetch(`${API_URL}/api/custom-order`, {
      method: "POST",
      body: data, // no need for headers when using FormData
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Backend response:", data);

        navigate("/order-confirmation", {
          state: {
            name: formData.name,
            imagePaths: data.imagePaths,
          },
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          projectDescription: "",
          images: [],
        });

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      })
      .catch((err) => {
        console.error("❌ Error submitting order:", err);
        alert("There was a problem submitting your order.");
      });
  };

  // Handle changes in form inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change (multiple files can be selected)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Append newly selected files to the existing array of images
      setFormData({
        ...formData,
        images: [...formData.images, ...Array.from(files)], // Append selected files
      });
    }
  };

  // Function to clear the selected files
  const handleClearPhotos = () => {
    // Reset the file input to clear the selected files
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    // Also clear the images in formData
    setFormData({
      ...formData,
      images: [],
    });
  };

  return (
    <div className="container">
      <p className="display-4 text-center fw-medium mt-5">Custom Order Form</p>
      <div
        className="mt-4 mb-4 text-start"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <p className="lead fw-medium">
          Enter your contact information and a description of what you're
          looking for. Any details you can provide will help me bring your
          vision to life—wood species, overall dimensions, desired features, and
          intended use are all great starting points. Additionally, if you have
          any reference photos that resemble the style, shape, or finish you're
          envisioning, feel free to upload them. These visuals go a long way in
          helping me understand your project goals.
        </p>
      </div>

      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Your Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="projectDescription" className="form-label">
                Project Description <span style={{ color: "red" }}>*</span>
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                className="form-control"
                rows={5}
                value={formData.projectDescription}
                onChange={handleChange}
                required
              />
            </div>

            {/* File Input for Multiple Images */}
            <div className="mb-3">
              <label htmlFor="images" className="form-label">
                Attach Images (Optional)
              </label>
              <input
                type="file"
                id="images"
                name="images"
                className="form-control"
                accept="image/*"
                multiple // Allows multiple file selections
                onChange={handleFileChange}
                ref={fileInputRef} // Add reference here
              />
            </div>

            {/* Display selected image previews (Optional) */}
            <div className="mt-3">
              {formData.images.length > 0 && (
                <div>
                  <p>Selected Images:</p>
                  <div className="d-flex flex-wrap">
                    {formData.images.map((image, index) => (
                      <div key={index} className="m-2">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Selected ${index}`}
                          className="img-thumbnail"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Button to Clear Photos (Aligned to the Left) */}
            <div className="d-flex justify-content-start">
              <button
                type="button"
                className="btn btn-secondary btn-sm mt-2"
                onClick={handleClearPhotos}
              >
                Clear Selected Photos
              </button>
            </div>

            {/* Submit Order Button (Centered) */}
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-dark btn-lg mt-3">
                Submit Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomOrders;
