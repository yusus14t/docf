import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

function Slider() {
  return (
    <>
      <div
        style={{ background: "#29", marginBottom: "200px" }}
        className="mb-2"
      >
        <div
          style={{ background: "tr" }}
          className="d-flex flex-row justify-content-between container mb-0  pt-3 px-4"
        >
          <div style={{ fontSize: "30px" }}>Specialization </div>
          <div>
            <button className="btn-slider btn-primary">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>{" "}
            <button className="btn-slider  btn-primary">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <Carousel
          dynamicHeight={false}
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          onChange={true}
          interval={50}
        >
          <div className="slide">
            <div className="d-flex justify-center">
              <div className="specialization-card-container container">
                <Card source={"slider1"} />
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="d-flex justify-center">
              <div className="specialization-card-container container">
                <Card source={"slider2"} />
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="d-flex justify-center">
              <div className="specialization-card-container container">
                <Card source={"slider3"} />
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="d-flex justify-center">
              <div className="specialization-card-container container">
                <Card source={"slider4"} />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
