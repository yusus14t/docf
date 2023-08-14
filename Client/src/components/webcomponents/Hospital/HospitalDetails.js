import React, { useEffect, useState } from "react";
import background from "../../../assets.app/img/user-profile-bg-1920x400.jpg";
import DepartmentCard from "./DepartmentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { axiosInstance, formatPhone, getFullPath } from "../../../constants/utils";
import { useParams } from "react-router-dom";

const HospitalDetails = () => {
  const [ hospital, setHospital] = useState({});
  const [ departments, setDepartments] = useState([]);
  const params = useParams();

  useEffect(() => {
    getHospital();
  }, [params.id, ])

  const getHospital = async () => {
    try{
      let { data } = await axiosInstance.get(`/hospital-details/${params.id}`)
      setHospital(data?.details)
      setDepartments(data?.departments)
    } catch(error) { console.error(error) }
  }

  return (
    <>
      <div className="box"></div>
      <div className="hospital-banner">
        <h4 className="clinic-detail-name">{hospital?.name}</h4>
        <img className="hopsiptal-banner-img" src={hospital?.photo ? getFullPath(hospital?.photo) : background} alt="" />
      </div>
      <div className="container-fluid">
        <div className="departments">
          {/* <DepartmentCard /> */}
          {departments.length > 0 && <DepartmentCard departments={departments} />}
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
              <p class="secondary-color">{ hospital?.address }</p>
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
              <p class="secondary-color">{formatPhone(hospital?.phone)}</p>
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
              <p class="secondary-color">{ hospital?.email }</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalDetails;
