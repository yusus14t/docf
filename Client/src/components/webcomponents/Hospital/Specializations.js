import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
            <div class="col-lg-3 col-md-4 col-sm-6 border">
              <div class="sigma_service style-16">
                <div class="sigma_service-thumb">
                  <i class="flaticon-stethoscope"></i>
                </div>
                <div class="sigma_service-body">
                  <h5>
                    <a href="service-details.html">Therapiya</a>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                    do eiusmod
                  </p>
                  <a href="service-details.html" class="btn-link primary-color">
                    Read More
                    <i class="far fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6 ">
              <div class="sigma_service style-16">
                <div class="sigma_service-thumb">
                  <i class="flaticon-stethoscope"></i>
                </div>
                <div class="sigma_service-body">
                  <h5>
                    <a href="service-details.html">Therapiya</a>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                    do eiusmod
                  </p>
                  <a href="service-details.html" class="btn-link primary-color">
                    Read More
                    <i class="far fa-long-arrow-alt-right"></i>
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
