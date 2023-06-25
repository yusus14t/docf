import React from "react";
import image from "../../../assets.app/img/doctors-list/182x280-2.jpg";

const Profie = () => {
  return (
    <div className="patient-profile">
      <div className="row  ">
        <div className="col-12 text-center">
          <img className="patient-profile-img" src={image} alt="" />
        </div>
        <div className="row mt-4">
          <div className=".col-xs-6 col-md-6  ">
            <h5>
              <span>Full Name</span> : Yusuf Iqbal
            </h5>
          </div>
          <div className="col-xs-6 col-md-6 ">
            <h5>
              <span>Father Name</span> : Iqbal Ahmed
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-1">
            <h5>
              <span>Age</span> : 158
            </h5>
          </div>
          <div className=" col-md-6 mt-1">
            <h5>
              <span>Gender</span> : Male
            </h5>
          </div>
          <div className=" col-md-6 mt-2">
            <h5>
              <span>Mobile Number</span> : 8215869385
            </h5>
          </div>
        </div>
        <div className="r">
          <div className="col-12 mt-2">
            <h5>
              <span>Address </span>: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sequi mollitia quis id nisi, odit quibusdam fuga
              voluptates. Voluptatibus eligendi, atque repellat, tempora totam
              fugit recusandae neque placeat saepe facere consequatur!{" "}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profie;
