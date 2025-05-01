import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/api";

function CustomOrders() {
  const backendAvailable = true;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDescription: "",
    images: [] as File[],
  });

  const [fileWarnings, setFileWarnings] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!backendAvailable) {
      alert("⚙️ Backend under construction. Please try again later!");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("projectDescription", formData.projectDescription);

    formData.images.forEach((file) => {
      data.append("images", file);
    });

    fetch(`${API_URL}/api/custom-order`, {
      method: "POST",
      body: data,
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
        setFileWarnings([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      })
      .catch((err) => {
        console.error("❌ Error submitting order:", err);
        alert("There was a problem submitting your order.");
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const maxFileSize = 8 * 1024 * 1024; // 5MB
      const validFiles: File[] = [];
      const warnings: string[] = [];

      Array.from(files).forEach((file) => {
        if (file.size > maxFileSize) {
          warnings.push(`❌ ${file.name} exceeds the 5MB limit.`);
        } else {
          validFiles.push(file);
        }
      });

      setFormData({
        ...formData,
        images: [...formData.images, ...validFiles],
      });

      setFileWarnings(warnings);
    }
  };

  const handleClearPhotos = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setFormData({
      ...formData,
      images: [],
    });
    setFileWarnings([]);
  };

  return (
    <div className="container">
      <p className="display-4 text-center fw-medium mt-5">Custom Order Form</p>

      {!backendAvailable && (
        <div
          className="alert alert-warning text-center fw-bold mt-3"
          role="alert"
        >
          ⚙️ Backend is currently under construction. Form submissions are
          temporarily disabled.
        </div>
      )}

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
          envisioning, feel free to upload them.
        </p>

        <p className="fw-medium">
          <span style={{ color: "black" }}>*</span> If you have any questions
          feel free to email me at{" "}
          <a href="mailto:kevinzimmer520@gmail.com">kevinzimmer520@gmail.com</a>
          .
        </p>
      </div>

      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={handleSubmit} className="pb-5">
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

            <div className="mb-3">
              <label htmlFor="images" className="form-label">
                Attach Images (Optional)
              </label>

              {/* 🟡 Inline file warnings */}
              {fileWarnings.length > 0 && (
                <div className="alert alert-warning mt-2">
                  <ul className="mb-0">
                    {fileWarnings.map((warning, index) => (
                      <li key={index}>{warning}</li>
                    ))}
                  </ul>
                </div>
              )}

              <input
                type="file"
                id="images"
                name="images"
                className="form-control"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                ref={fileInputRef}
              />
            </div>

            {formData.images.length > 0 && (
              <div className="mt-3">
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

            <div className="d-flex justify-content-start">
              <button
                type="button"
                className="btn btn-secondary btn-sm mt-2"
                onClick={handleClearPhotos}
              >
                Clear Selected Photos
              </button>
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-dark btn-lg mt-4"
                disabled={!backendAvailable}
              >
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
