import React from "react";
import background from "../../../assets.app/img/user-profile-bg-1920x400.jpg";
import DepartmentCard from "./DepartmentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

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
          {/* <DepartmentCard /> */}
          <DepartmentCard />
        </div>

        {/* contact card */}
        <div class="contact-details-clinic">
          <div class="sigma_info style-26 d-flex">
            <div class="sigma_info-title">
              <span class="sigma_info-icon clinic-address-icon-container">
                <FontAwesomeIcon
                  className="clinic-address-icon"
                  icon={faLocationDot}
                />
              </span>
            </div>
            <div class="sigma_info-description">
              <p>Our Address</p>
              <p class="secondary-color">Street 9, Ho Chi Minh city Vietman</p>
            </div>
          </div>
          <div class="sigma_info style-26 d-flex">
            <div class="sigma_info-title d-flex">
              <span class="sigma_info-icon clinic-address-icon-container">
                <FontAwesomeIcon
                  className="clinic-address-icon"
                  icon={faPhone}
                />
                <i class="fal fa-phone"></i>
              </span>
            </div>
            <div class="sigma_info-description">
              <p>Call Us</p>
              <p class="secondary-color">+91 8889966365</p>
            </div>
          </div>
          <div class="sigma_info style-26 d-flex">
            <div class="sigma_info-title">
              <span class="sigma_info-icon clinic-address-icon-container">
                <FontAwesomeIcon
                  className="clinic-address-icon"
                  icon={faEnvelope}
                />
              </span>
            </div>
            <div class="sigma_info-description">
              <p>Our Mail</p>
              <p class="secondary-color">youremail@gamil.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalDetails;
