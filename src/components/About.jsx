import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <img
            src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg"
            alt="About Us"
            className="img-fluid rounded"
            style={{ width: "100%", height: "400px" }}
          />
        </div>
        <div className="col-lg-6">
          <h1 className="mb-4 display-5 fw-normal text-capitalize">
            Welcome to Our Store
          </h1>
          <p className="text-muted">
            Discover an unparalleled shopping experience with us. At our store,
            we bring you a curated selection of high-quality products, from the
            latest gadgets to chic fashion, all tailored to your unique tastes.
          </p>
          <p className="text-muted">
            Our mission is to provide exceptional value and service. Every
            product is handpicked to ensure it meets our high standards of
            quality and style. We are committed to your satisfaction and aim to
            make every interaction delightful and seamless.
          </p>
          <p className="text-muted">
            Join our community of happy customers and let us redefine the way
            you shop. Your satisfaction is our priority.
          </p>
          <div className="mt-4">
            <a href="/contact" className="btn btn-primary btn-lg me-3">
              Contact Us
            </a>
            <a href="/shop" className="btn btn-outline-primary btn-lg">
              Explore Products
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-5 text-center">
        <div className="col">
          <h2 className="fw-bold mb-4">Why Shop With Us?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 border rounded shadow-sm">
                <h5 className="fw-bold">High Quality</h5>
                <p className="text-muted">
                  We only offer products that meet our high standards of quality
                  and durability.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded shadow-sm">
                <h5 className="fw-bold">Affordable Prices</h5>
                <p className="text-muted">
                  Enjoy competitive pricing without compromising on quality or
                  service.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded shadow-sm">
                <h5 className="fw-bold">Exceptional Service</h5>
                <p className="text-muted">
                  Our team is here to assist you with any queries or concerns
                  you may have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
