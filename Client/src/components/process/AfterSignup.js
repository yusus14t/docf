import React from 'react'
import clinic from '../../assets.app/img/icons/clinic.png'
import hospital from "../../assets.app/img/icons/hospital.png";
import others from "../../assets.app/img/icons/clipboards.png";




const AfterSignup = () => {
  return (
    <>
      <div className="box"></div>
      <div className="after-container d-flex  justify-content-center">
        <div className="after-container-child d-flex flex-row justify-content-around  position-relative">
          <div className="after-signup">
            <img src={hospital} className="after-signup-icon" alt="" />
            <h6 className="text-center mt-1">Hospital</h6>
          </div>
          <div className="after-signup">
            <img src={clinic} className="after-signup-icon" alt="" />
            <h6 className="text-center mt-1">Clinic</h6>
          </div>
          <div className="after-signup">
            <img src={others} className="after-signup-icon" alt="" />
            <h6 className="text-center mt-1">Others</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default AfterSignup