import React from "react";
import { Link, useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="container text-center mt-5">
      <img
        src="/images/warning.png"
        alt=""
        className="img-fluid mb-3"
        style={{ height: "150px", width: "180px" }}
      />
      <h1 className="">Oops! An error occured.</h1>
      <p>{error.data} </p>

      <Link to="/">
        <button className="btn btn-primary rounded"> Go Home </button>
      </Link>
    </div>
  );
};

export default Error;
