import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfilePhoto from "../../../assets.web/img/doctor-details/243x264.jpg";
import Photo from "../../../assets.web/img/doctors-grid/348x350-0.jpg";

export function DoctorListCard({ doctor }) {
  const [doctors] = useState([1, 2, 3, 4, 5, 6,7,8,9,10,11,12]);
  let navigate = useNavigate();
  const routeChange = () => {
    let path ="/doctor-detail";
    navigate(path);
    console.log(path);
  };

  return doctors.map((doctor, key) => (
    <>
      <div className="col-lg-4 col-md-4 mcard" key={key}>
        <div onClick={routeChange} className="Dr-container mb-3 d-flex p-3">
          <div className="ml-3">
            <img className="dr-profile-img" src={ProfilePhoto} alt="" />
          </div>

          <div className="dr-details">
            <h2 className="">Dr Angel Yu Dicator</h2>
            <p className="mb-1 dr-spelialization">Neurologist</p>
            <p className="mb-1 experience-dr">Eperience : 8 Years</p>
            <p className="dr-qualifiction mb-1">MBBS ,MD</p>
            <p className="dr-address text-truncate ">
              Apollo Hospital, Aligarh
            </p>
          </div>
        </div>
      </div>
    </>
  ));
}
