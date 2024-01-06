import React, { useEffect, useState } from "react";
// import store from '../../redux/Store';
import {
  axiosInstance,
  getAuthHeader,
  getFullPath,
  truncate,
} from "../../../constants/utils";
import nopic from "../../../assets.app/images/no_images/no_doctor.png";
import { Navigate, Link } from "react-router-dom";

function DoctorsList({ source, filter }) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getAllDoctors();
  }, []);

  const getAllDoctors = async () => {
    try {
      let { data } = await axiosInstance.get("/all-doctors", {
        params: { filter, source: "doctor-page" },
        ...getAuthHeader(),
      });
      setDoctors(data?.doctors);
    } catch (error) {
      console.error(error);
    }
  };
  const handle = () => {
    Navigate("/patient-login", {
      state: { redirectTo: window.location.pathname },
    });
  };
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
                        <div className="col-lg-4 col-md-6 mcard" key={key}>
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
                                      : nopic
                                  }
                                  alt=""
                                />
                              </div>

                              <div className="dr-details">
                                <h2 className="DRNAME">
                                  {truncate(doctor?.name, 10)}
                                </h2>
                                <p className="mb-1 dr-spelialization">
                                  {/* {doctor?.specialization?.name ||
                                    (doctor?.specialization?.length ? doctor?.specialization[0]?.name : '-')} */}
                                  {truncate(
                                    doctor?.specialization?.name ||
                                      (doctor?.specialization?.length
                                        ? doctor?.specialization[0]?.name
                                        : "-"),
                                    18
                                  )}
                                </p>
                                <p className="mb-1 experience-dr">
                                  Eperience :{doctor?.experience || "-"}
                                </p>
                                <p className="dr-qualifiction mb-1">Qualification {truncate(doctor?.qualification || '-' ,15 )}</p>
                                <p className="dr-address">
                                  {truncate(doctor?.address || "-", 50)}
                                </p>
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
