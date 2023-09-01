import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../constants/utils";

const Card = ({source, specializations}) => {
  
  
  return (
    <>
      {specializations
        .filter(
          (card, index) =>
            (source === "slider1" && index <= 3) ||
            (source === "slider2" && index >= 4 && index <= 5) ||
            (source === "slider3" && index >= 8 && index <= 11) ||
            (source === "slider4" && index >= 13 && index <=16) ||
            (source === "slider5" && index >= 17 && index <=20)
        )
        .map((specialisation) => {
          return (
            <Link to={`/specialization/${specialisation?.id}`}>
              <div className="specialization-card">
                <div className="">
                  <div className="spe-circle mx-auto ">
                    {/* <FontAwesomeIcon
                      style={{ fontSize: "50px", marginTop: "20%" }}
                      icon={faHeart}
                    /> */}
                    <img
                      style={{ width: "85px", height: "85px", borderRadius:"50%" }}
                      src={specialisation?.icon1}
                      alt=""
                    />
                  </div>
                  <h2 className="sixe">{specialisation.name}</h2>
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default Card;
