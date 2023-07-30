import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { fa1, faHeart } from "@fortawesome/free-solid-svg-icons";
const Specializations = () => {
  return (
    <div className="d-flex justify-center">
      <div className="specialization-card-container container">
        {[1, 2, 3, 4, ].map((x) => {
          return (
            <div className="specialization-card">
              <div className="spe-circle mx-auto mt-3">
                <FontAwesomeIcon  icon={faHeart}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Specializations;
