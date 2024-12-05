import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  removeSelectedProducts,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);

  const { title, image, price, category, description } = product;

  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("error: ", err));
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  return (
    <div className="container my-5">
      <div className="row g-4 align-items-center">
        <div className="col-lg-6 mb-4  col-md-12  d-flex justify-content-center">
          <img
            src={image}
            alt={title || "products"}
            className="img-fluid"
            style={{
              maxWidth: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="col-lg-6 col-md-12 ">
          <h2 className="mb-3">{title}</h2>
          <h4 className="text-success mb-3">${price}</h4>
          <p className="lead mb-3">{category}</p>
          <p className="mb-4"> {description}</p>
          <div className="d-flex justify-content-start">
            <button className="btn btn-outline-dark rounded-pill me-3">
              BUY NOW
            </button>
            <button className="btn btn-outline-dark rounded-pill ">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
