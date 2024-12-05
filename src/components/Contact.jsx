import React from "react";

const Contact = () => {
  return (
    <div className="contaner my-5 min-vh-100">
      <p className="text-center display-4 fw-bold"> Contact US </p>

      <div className="row align-items-center mx-5 g-5">
        <div className="col-sm-12 col-md-6  d-flex flex-column justify-content-center">
          <h2 className="fs-1 fw-normal text-capitalize">Get In Touch</h2>
          <form action="">
            <label className="form-label">Name</label>
            <input
              type="text"
              placeholder="enter an name"
              className="mb-2 form-control"
              name="name"
              required
            />
            <label className="form-label">Email</label>

            <input
              type="email"
              className="mb-2 form-control"
              name="email"
              placeholder="enter an email"
              required
            />

            <label className="form-label">Message</label>
            <textarea
              className="mb-2 form-control"
              placeholder="enter a message"
            ></textarea>
            <button className="btn btn-primary rounded" type="submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="col-md-6 ">
          <p className="fs-1 fw-normal text-capitalize lead mb-2">
            Contact Infomation
          </p>
          <p className="mb-2 text-muted">123 Main Street, Jalandhar, Punjab</p>
          <p className="mb-2 text-muted">+123456789</p>
          <p className="mb-4 text-muted">contact@company.com</p>

          <h3>Follow Us</h3>
          <div className="d-flex">
            <a href="#" className="btn btn-sm btn-outline-primary me-2">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#" className="btn btn-sm btn-outline-primary me-2">
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a href="#" className="btn btn-sm btn-outline-primary">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
