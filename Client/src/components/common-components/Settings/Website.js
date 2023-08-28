import React from 'react'
import Im from "../../../assets.app/images/about2.png";

const Website = () => {
  return (
    <div className={`ms-panel-body `}>
      <div className="row">
        <div className="col-sm-4 p-2">
          <img style={{ width: "100%" }} src={Im} alt="" />
          <h6 className="text-center">Home Page Poster</h6>
        </div>
        <div className="col-sm-4 p-2">
          <img style={{ width: "100%" }} src={Im} alt="" />
          <h6 className="text-center">Gynae Poster 1</h6>
        </div>
        <div className="col-sm-4 p-2">
          <img style={{ width: "100%" }} src={Im} alt="" />
          <h6 className="text-center">Gynae Poster 2</h6>
        </div>
        <div className="col-sm-4 p-2">
          <img style={{ width: "100%" }} src={Im} alt="" />
          <h6 className="text-center">Homiopathy Poster</h6>
        </div>
        <div className="col-sm-4 p-2">
          <img style={{ width: "100%" }} src={Im} alt="" />
          <h6 className="text-center">UltraSound Poster</h6>
        </div>
        <div className="col-sm-4">
          <img style={{ width: "100%" }} src={Im} alt="" />
          <h6 className="text-center">Gynae Slider</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <img style={{ width: "100%" }} src={Im} alt="" />
          <h6 className="text-center">Contact Information</h6>
        </div>
      </div>
    </div>
  );
}

export default Website