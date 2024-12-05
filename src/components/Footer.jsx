import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-dark mt-5 text-white py-5">
      <div className="container">
        <div className="row text-center text-md-left">
          <div className="col-sm-12 col-md-4 mb-4">
            <h5 className="text-uppercase font-weight-bold">About Us</h5>
            <p>
              We are a passionate team of developers creating innovative web
              solutions for a better tomorrow.
            </p>
          </div>
          {/* Links Section */}
          <div className="col-sm-12 col-md-4 mb-4">
            <h5 className="text-uppercase font-weight-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/"
                  className="text-white text-decoration-none footer-link"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white text-decoration-none footer-link"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white text-decoration-none footer-link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-sm-12 col-md-4 mb-4">
            <h5 className="text-uppercase font-weight-bold">Contact</h5>
            <p>info@contact.com</p>
            <p>+123 456 789</p>
            <div>
              <a
                href="https://facebook.com"
                className="text-white mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-white mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-white mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="text-center py-3 border-top border-light">
          <p className="m-0">
            &copy; {new Date().getFullYear()} Ecommerce Store. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
