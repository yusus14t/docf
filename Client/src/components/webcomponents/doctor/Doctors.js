import React, { useEffect, useState } from "react";
// import store from '../../redux/Store';
import { axiosInstance, getAuthHeader, getFullPath } from "../../../constants/utils";
import ProfilePhoto from "../../../assets.web/img/doctor-details/243x264.jpg";
import { Navigate, Link } from "react-router-dom"

function DoctorsList({ source, filter }) {
  const [doctors, setDoctors] = useState([]);
  

  useEffect(() => {
    getAllDoctors();
  }, []);

  const getAllDoctors = async () => {
    try{
      let { data } = await axiosInstance.get("/all-doctors", {params: { filter }, ...getAuthHeader() });
      setDoctors(data?.doctors);
    } catch(error){ 
      console.error(error)
    }
  };
const handle = ()=>{
  Navigate("/patient-login", {
       state: { redirectTo: window.location.pathname },
       })
}
  return (
    <div>
      <div className="box d-flex align-items-center">
        <h3 className="text-center underline">
          <span className="under">Doctors</span>
        </h3>
      </div>

      <div className="section section-padding mt-4">
        <div className="container mwidth">
          <div className="row">
            <div className="col-12">
              <div className="row ">
                {doctors?.length > 0 &&
                  doctors
                    .filter(
                      (doctor, index) =>
                        (source === "homepage" && index < 7) ||
                        source !== "homepage"
                    )
                    .map((doctor, key) => (
                      <>
                        <div className="col-lg-4 col-md-4 mcard" key={key}>
                          <Link to={`/clinic-detail/${doctor?.organizationId}`}>
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
                                <h2 className="">{doctor?.name}</h2>
                                <p className="mb-1 dr-spelialization">
                                  {doctor?.specialization?.name ||
                                    "Specialization"}
                                </p>
                                <p className="mb-1 experience-dr">
                                  Eperience :{ doctor?.experience || '-'}
                                </p>
                                <p className="dr-qualifiction mb-1">Qualification: {doctor?.qualification || '-'}</p>
                                <p className="dr-address">{doctor?.address || '-'}</p>
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
