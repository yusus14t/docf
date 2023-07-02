import React from "react";
import background from "../../../assets.app/img/user-profile-bg-1920x400.jpg";
import DepartmentCard from "./DepartmentCard";

const HospitalDetails = () => {
  return (
    <>
      <div className="box"></div>
      <div className="hospital-banner">
        <h4 className="clinic-detail-name">Lababa Juhsil Hospital</h4>
        <img className="hopsiptal-banner-img" src={background} alt="" />
      </div>
      <div className="container-fluid">
        <div className="departments">
          <DepartmentCard />
        </div>
      </div>
    </>
  );
};

export default HospitalDetails;
