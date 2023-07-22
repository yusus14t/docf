import React, { useEffect, useState } from "react";
// import store from '../../redux/Store';
import { axiosInstance, getFullPath } from "../../../constants/utils";
import ProfilePhoto from "../../../assets.web/img/doctor-details/243x264.jpg";
import { Navigate, Link } from "react-router-dom"

function DoctorsList(props) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getAllDoctors();
  }, []);

  const getAllDoctors = async () => {
    try{
      let { data } = await axiosInstance.get("/all-doctors");
      setDoctors(data?.doctors);
    } catch(error){ 
      console.erroe(error)
    }
  };
const handle = ()=>{
  Navigate("/patient-login", {
       state: { redirectTo: window.location.pathname },
       })
}
  return (
    <div>
      <div className="box mt"></div>

      <div className="section section-padding mt-4">
        <div className="container mwidth">
          <div className="row">
            <div className="col-12">
              <div className="row ">
                {doctors?.length > 0 &&
                  doctors.map((doctor, key) => (
                    <>
                      <div className="col-lg-4 col-md-4 mcard" key={key}>
                        <Link to="/doctor-detail">
                          <div
                            onClick={handle}
                            // onClick={() =>"" }
                            className="Dr-container mb-3 d-flex p-3"
                          >
                            <div className="ml-3">
                              <img
                                className="dr-profile-img"
                                src={
                                  doctor?.photo
                                    ? getFullPath(doctor?.photo)
                                    : ProfilePhoto
                                }
                                alt=""
                              />
                            </div>

                            <div className="dr-details">
                              <h2 className="">{doctor?.fullName}</h2>
                              <p className="mb-1 dr-spelialization">
                                {doctor?.specialization || "Specialization"}
                              </p>
                              <p className="mb-1 experience-dr">
                                Eperience : 8 Years
                              </p>
                              <p className="dr-qualifiction mb-1">MBBS ,MD</p>
                              <p className="dr-address">{doctor?.address}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default DoctorsList;
