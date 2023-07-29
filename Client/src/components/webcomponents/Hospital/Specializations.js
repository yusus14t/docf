import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { fa1 } from "@fortawesome/free-solid-svg-icons";
const Specializations = () => {
  return (
    <div>
      <Carousel
        dynamicHeight={false}
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        onChange={true}
        interval={50}
      >
        <div>
          <div className="slide slide1 d-flex flex-row" >
            <div className="col-lg-3 col-md-4 col-sm-6 border">
              <div className="category-h style-16">
                <div className="sigma_service-thumb">
                    <FontAwesomeIcon icon={fa1}/>
                  <i className="flaticon-stethoscope"></i>
                </div>
                <div className="sigma_service-body">
                  <h5>
                    <a href="service-details.html">Therapiya</a>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                    do eiusmod
                  </p>
                  <a href="service-details.html" className="btn-link primary-color">
                    Read More
                    <i className="far fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Specializations;
