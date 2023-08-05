import React from "react";
import image from "../../../assets.app/img/doctors-list/182x280-2.jpg";
import { userInfo } from "../../../constants/utils";

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
              <span>Full Name</span> : {userInfo?.name}
            </h5>
          </div>
          <div className="col-xs-6 col-md-6 ">
            <h5>
              <span>Father Name</span> : { userInfo?.fatherName }
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-1">
            <h5>
              <span>Age</span> : { userInfo?.age }
            </h5>
          </div>
          <div className=" col-md-6 mt-1">
            <h5>
              <span>Gender</span> : { userInfo?.gender }
            </h5>
          </div>
          <div className=" col-md-6 mt-2">
            <h5>
              <span>Mobile Number</span> : { userInfo.phone }
            </h5>
          </div>
        </div>
        <div className="r">
          <div className="col-12 mt-2">
            <h5>
              <span>Address </span>: { userInfo?.address }
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profie;
