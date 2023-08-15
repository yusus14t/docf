import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../constants/utils";

const Card = ({source}) => {
  useEffect(() => {
    getSpecialization();
  }, []);

  const [specialisations, setSpecialization] = useState([]);
  const getSpecialization = async () => {
    let { data } = await axiosInstance.get("/get-specializations");
    setSpecialization(data?.specializations);
  };
  
  return (
    <>
      {specialisations
        .filter(
          (card, index) =>
            (source === "slider1" && index <= 3) ||
            (source === "slider2" && index >= 4 && index <= 5) ||
            (source === "slider3" && index >= 8 && index <= 11) ||
            (source === "slider4" && index >= 13 && index <=16) ||
            (source === "slider2" && index >= 17 && index <=20)
        )
        .map((specialisation) => {
          return (
            <Link to={`/specialization/${specialisation?.id}`}>
              
              <div className="specialization-card">
                <div className="">
                  <div className="spe-circle mx-auto ">
                    <FontAwesomeIcon
                      style={{ fontSize: "50px", marginTop: "20%" }}
                      icon={faHeart}
                    />
                  </div>
                  <h2>{specialisation.name}</h2>
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default Card;
