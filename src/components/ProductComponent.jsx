import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import "../App.css";

import Hero from "./Hero";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Carousel from "./Carousel";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
        <div
          className="card col d-flex justify-content-center"
          style={{ width: "18rem" }}
          key={id}
        >
          <img
            src={image}
            className="card-img-top"
            alt={title || "not found"}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text lead">$ {price}</p>
            <p className="card-text lead">{category}</p>
            <a href="/" className="btn btn-dark">
              Buy Now
            </a>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <Carousel />

      {/* Hero Section */}
      <div className="text-dark text-center py-5 text-center">
        <p className="display-2 ">Welcome to Ecommerce Store</p>
        <p className="text-muted mb-4">
          The best place to manage your projects effortlessly.
        </p>
        <button className="btn btn-outline-dark rounded-pill">Read More</button>
      </div>
      {/* hero section */}
      <Hero />

      {/* heros section */}

      <p className="display-3 text-capitalize mt-5 text-center">
        explore our products
      </p>
      <div className="my-5 row row-cols-1  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gap-5 justify-content-center  align-items-stretch">
        {renderList}
      </div>
    </>
  );
};

export default ProductComponent;
