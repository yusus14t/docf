import React from "react";
import { Link } from 'react-router-dom';
import ProfilePhoto from "../../assets.web/img/doctor-details/243x264.jpg";
import Photo from "../../assets.web/img/doctors-grid/348x350-0.jpg";

export function DoctorInfoCard(props) {
  return (
    <div className="sigma_team style-17 mb-0">
      <div className="row g-0">
        <div className="col-md-4">
          <div className="sigma_team-thumb">
            <img src={ProfilePhoto} alt="team" />
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

export function DoctorListCard({ doctors }) {
  return doctors.map((doctor, key) => (
    <div className="col-lg-4 col-md-4 mcard" key={key}>
      <div className="sigma_team style-16">
        <div className="sigma_team-thumb">
          <img src={Photo} alt="team" />
          <div className="sigma_team-controls">
            <a href="/">
              <i className="fal fa-heart"></i>
            </a>
          </div>
        </div>
        <div className="sigma_team-body">
          <h5>
            <a href="doctor-details.html">Matthew Reyes</a>
          </h5>
          <div className="sigma_team-categories">
            <a href="/" className="sigma_team-category">
              Obstetrics &amp; Gynaecology
            </a>
          </div>
          <div className="sigma_team-info">
            <span>
              <i className="fal fa-map-marker-alt"></i>
              Aligarh
            </span>
          </div>
          <Link to={'/doctor-detail'} className="sigma_btn btn-block btn-sm"> View Detail </Link>
        </div>
      </div>
    </div>
  ));
}
