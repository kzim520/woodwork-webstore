import { useState } from "react";

function CustomOrders() {
  // store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDescription: "",
  });

  // handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload on form submit
    // process or send the form data
    console.log(formData);
    // clear the form after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectDescription: "",
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

  return (
    <div className="container">
      <p className="display-4 text-center fw-medium mt-5">
        Custom Order Request Form
      </p>

      <p
        className="text-center mt-3"
        style={{ fontSize: "1.1rem", color: "#555" }}
      >
        Fill out the form below with your contact information and project
        description. Please be as specific as possible with the project
        description, i.e., the type of wood, dimensions, etc. Fields marked with
        an asterisk (<span style={{ color: "red" }}>*</span>) are required.
      </p>

      <div className="row">
        <div className="col-md-6">
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
          </form>
        </div>

        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-dark btn-lg mt-3">
              Submit Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomOrders;
