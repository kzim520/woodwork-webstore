import { useState, useRef } from "react";

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

  // handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload on form submit

    // Process or send the form data here (without email sending logic)
    console.log(formData);

    // Clear the form after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectDescription: "",
      images: [], // Reset images after submission
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
      <p className="display-4 text-center fw-medium mt-5">
        Custom Order Request Form
      </p>

      <div className="row">
        <div className="col-md-8 offset-md-2">
          {/* ✅ Use a single form that contains all inputs */}
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
