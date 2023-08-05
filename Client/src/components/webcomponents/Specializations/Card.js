import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

const Card = () => {
  return (
    <>
      <Link to="/specialization-deatils">
        <div className="specialization-card">
          <div className="spe-circle mx-auto mt-3">
            <FontAwesomeIcon
              style={{ fontSize: "50px", marginTop: "20%" }}
              icon={faHeart}
            />
          </div>
          <h2>Cardiologist</h2>
        </div>
      </Link>
    </>
  );
};

export default Card;
