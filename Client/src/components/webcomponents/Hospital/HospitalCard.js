import React from "react";
import { Link } from "react-router-dom";
import clinicPhoto2 from "../../../assets.app/img/backgrounds/hos.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const HospitalCard = ({ hospitals }) => {
  return hospitals.map((clinic, key) => (
    <div className="ml-2 col-lg-4 mb-4 col-md-4 mcard mt-2" key={key}>
      <div className="hospitalCard ">
        <div className="hospitalCard-background-img">
          {/* <div className="hospital-card-inner-header"></div> */}
          <span className=" p-2 clinic-title">
            Al-Samad Hospital: <span className="open">close</span>
          </span>
          <img
            className="hospitalCard-background-img"
            src={clinicPhoto2}
            alt=""
          />
        </div>
        <div className="clinic-details d-flex flex-row justify-content-between">
          <div className="mt-3">
            <h6 className="hospital-specialization text-disabled">
              Multi Specialist
            </h6>
            <div className="contact-info mt-3">
              <div>
                <p className="ml-2 adjust address-clinic ">
                  <FontAwesomeIcon
                    className="clinic-icon address-icon"
                    icon={faLocationDot}
                  />
                  Nala road nagla jamalpur, <br /> Aligarh Uttar Pradesh
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h6 className="text-disabled">Timming</h6>
            <div className="d-flex flex-column justify-contant-between">
              <div className="">
                <p className="clinic-timming mb-0">Morning : 08 AM to 11 PM</p>
                <p className="clinic-timming mb-0"> Evening : 05 PM to 11 PM</p>
              </div>
              <div className="">
                <button className="hospital-btn  btn btn1 btn-primary">
                  <Link className="text-light" to={"/hospital-detail"}>
                    View More
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default HospitalCard;
