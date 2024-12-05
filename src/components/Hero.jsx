import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: "/images/vector/1.png",
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur illum natus, animi impedit beatae quis, molestias sed accusamus sapiente enim dicta dolore cumque officia ab porro voluptatibus laborum reprehenderit.",
  },
  {
    id: 2,
    img: "/images/vector/2.png",
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur illum natus, animi impedit beatae quis, molestias sed accusamus sapiente enim dicta dolore cumque officia ab porro voluptatibus laborum reprehenderit.",
  },
  {
    id: 3,
    img: "/images/vector/3.png",
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur illum natus, animi impedit beatae quis, molestias sed accusamus sapiente enim dicta dolore cumque officia ab porro voluptatibus laborum reprehenderit.",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="position-relative overflow-hidden ">
      {/* Hero Section */}
      <div className="container py-5">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="row align-items-center">
                {/* Text Section */}
                <div className="col-12 col-md-6 text-center text-md-start">
                  <h1 className="display-4 fw-bold">{data.title}</h1>
                  <p className="lead">{data.description}</p>
                </div>
                {/* Image Section */}
                <div className="col-12 col-md-6 text-center">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="img-fluid mx-auto"
                    style={{ maxWidth: "80%", filter: "brightness(1)" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
