import React from "react";
import { Link } from "react-router-dom";
import clinicPhoto from "../../assets.web/img/clinic-grid/348x350-2.jpg";
import clinicPhoto2 from "../../assets.web/img/clinic-grid/348x350-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export function ClinicInfoCard(props) {
  return (
    <div style={{ backgroundColor: "#ffffff" }} className="sigma_team style-17 mb-0">
      <div className="row g-0">
        <div className="col-md-4">
          <div className="sigma_team-thumb">
            <img src={clinicPhoto} alt="team" />
          </div>
        </div>
        <div className="col-md-8">
          <div className="sigma_team-body">
            <h5>
              <a href="/">Delta Medical College &amp; Hospital</a>
            </h5>
            <div className="sigma_team-categories">
              <a href="/" className="sigma_team-category">
                Obstetrics &amp; Gynaecology
              </a>
            </div>
            <div className="sigma_team-info mt-4">
              <span>
                <i className="fal fa-phone"></i>
                (741)376-5672
              </span>
              <span>
                <i className="fal fa-at"></i>
                marilyn.pierce@mail.com
              </span>
              <span>
                <i className="fal fa-building"></i>
                Metus ipsum Convallis
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ClinicListCard({ clinics }) {
  return <>{console.log(clinics)}
    { clinics.length > 0 && clinics.map((clinic, key) => (
      <div className="col-lg-4 mb-4 col-md-4 mcard mt-4" key={key}>
        <div style={{ background: "#ffffff" }} className="clinic-card ">
          <div className="inner-card-border"></div>
          <div style={{ marginBottom: "-22px" }}>
            <img className="clinic-img" src={clinicPhoto2} alt="" />
            <span className=" p-2 clinic-title">
              {clinic?.name} : <span className="open">close</span>{" "}
            </span>
          </div>
          <div className="clinic-details d-flex flex-row justify-content-between">
            <div className="">
              <h6 className="clinic-specialization text-disabled">{clinic?.specialization || 'Dermatologist'}</h6>
              <div className="contact-info">
                <h6 className="text-disabled">Contact Info :</h6>
                <div>
                  <FontAwesomeIcon className="clinic-icon" icon={faPhone} />
                  <p className="d-inline-block ml-2 mb-0">{ clinics?.phone ? '+91'+clinics?.phone : ''}</p>
                </div>
                <div>
                  {/* <FontAwesomeIcon className="clinic-icon " icon={faEnvelope} />
                  <p className="d-inline-block ml-2 mb-0">
                    madniclinic@gmial.com
                  </p> */}
                  <br />
                  <FontAwesomeIcon
                    className="clinic-icon address-icon"
                    icon={faLocationDot}
                  />
                </div>

                <div>
                  <p className="ml-2 adjust ">
                    Nala road nagla jamalpur, <br /> Aligarh Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <h6 className="text-disabled">Timming</h6>
              <div className="d-flex flex-column justify-contant-between">
                <div className="">
                  <p className="clinic-timming mb-0">Morning : 08 AM to 11 PM</p>
                  <p className="clinic-timming mb-0"> Evening : 05 PM to 11 PM</p>
                </div>
                <div className="">
                  <button className="clinic-btn  btn btn1 btn-primary">
                    <Link className="text-light" to={`/clinic-detail/${clinic?._id}`}>View More</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
}
