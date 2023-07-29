import React from "react";
import { Link } from "react-router-dom";
import clinicPhoto2 from "../../../assets.app/img/backgrounds/hos.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { getFullPath } from "../../../constants/utils";

const HospitalCard = ({ hospitals }) => {
  return hospitals.map((hospital, key) => (
    <div className="ml-2 col-lg-4 mb-4 col-md-4 mcard mt-2" key={key}>
      <div className="hospitalCard ">
        <span className=" hospital-title">
          { hospital.name }
        </span>
        <div className="hospitalCard-background-img">
          <img
            className="hospitalCard-background-img"
            src={ hospital?.photo ? getFullPath(hospital.photo) : clinicPhoto2}
            alt=""
          />
        </div>
        <div className="clinic-details d-flex flex-row justify-content-between">
          <div className="mt-3">
            <h6 className="hospital-specialization text-disabled">
              { hospital.specialization.length > 1 ? 'Multi speciality' : hospital.specialization?.name || '-' }
            </h6>
            <div className="contact-info mt-3">
              <div>
                <p className="ml-2 adjust hospital-address  ">
                  <FontAwesomeIcon
                    className="clinic-icon address-icon"
                    icon={faLocationDot}
                  />
                  { hospital.address }
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3 hospital-card-timing">
            <h6 className="text-disabled">Timming</h6>
            <div className="d-flex flex-column justify-contant-between">
              <div className="">
                <p className="clinic-timming mb-0">Morning : 08 AM to 11 PM</p>
                <p className="clinic-timming mb-0"> Evening : 05 PM to 11 PM</p>
              </div>
              <div className="">
                  <Link className="text-light hospital-btn  btn btn1 btn-primary shadow-none" to={`/hospital/${ hospital._id }`}>
                    View More
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default HospitalCard;
