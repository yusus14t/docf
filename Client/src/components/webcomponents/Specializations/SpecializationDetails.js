import React, { useEffect, useState } from "react";
import "../../../assets.app/css/specialzation.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { getAuthHeader, getFullPath,axiosInstance,  } from "../../../constants/utils";
import clinicPhoto2 from "../../../assets.web/img/home-1/1920x1280-1.jpg";


const SpecializationDetails = () => {
  const params = useParams()
  const [clinics, setClinics] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [specialization, setSpecialization] = useState([]);

  useEffect(() => {
    getSpecialization();
  }, [ params.id, ]);

  useEffect(() => {
    getAllClinics();
    getAllHospitals();
  },[specialization])

  const getSpecialization = async () => {
    try{
      let { data } = await axiosInstance.get(`/specialization/${params.id}`);
      setSpecialization(data?.specializations);
    } catch(error){ console.error(error) }
  };
   
  const getAllClinics = async () => {
    try {
      let { data } = await axiosInstance.get("/all-clinics", { params: { filter: {specialization: specialization?.name }}, ...getAuthHeader()});
      console.log('data', data)
      setClinics(data?.clinics);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllHospitals = async () => {
    try {
      let { data } = await axiosInstance.get("/hospitals", { params: { filter: {specialization: specialization?.name }}, ...getAuthHeader()});
      console.log('data', data)
      setHospitals( data?.organization );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    
      <div style={{ height: "65px" }}></div>
      <div className="">
        <div className=" banner text-center">
          <h3 className="title pt-0">
            {specialization?.name}
          </h3>
        </div>
      </div>
      {
        <div className="splz-deatial container mt-3">
          <span className="mb-0">
            <img className="specialization-image" src={specialization?.pic} alt="" />
          </span>
          <div className="deatil">
            <p className="details-text">{specialization?.description}</p>
          </div>

          <div className="">
            <h2 className="text-center">Hospitals</h2>
            <div className="row">
              { hospitals?.length > 0 && hospitals.map((hospital) => {
                return (
                  <div
                    className="ml-2 col-lg-4 mb-4 col-md-4 mcard mt-2"
                    //   key={key}
                  >
                    <div className="hospitalCard ">
                      <span className=" hospital-title">
                        {hospital.name}
                      </span>
                      <div className="hospitalCard-background-img">
                        <img
                          className="hospitalCard-background-img"
                          src={hospital?.photo
                            ? getFullPath(hospital.photo)
                            : clinicPhoto2}
                          alt=""
                        />
                      </div>
                      <div className="clinic-details d-flex flex-row justify-content-between">
                        <div className="mt-3">
                          <h6 className="hospital-specialization text-disabled">
                          {hospital.specialization.length > 1
                                ? "Multi speciality"
                                : hospital.specialization[0]?.name || "-"}
                          </h6>
                          <div className="contact-info mt-3">
                            <div>
                              <p className="ml-2 adjust hospital-address  ">
                                <FontAwesomeIcon
                                  className="clinic-icon address-icon"
                                  icon={faLocationDot}
                                />
                                {hospital.address || '-'}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 hospital-card-timing">
                          <div className="d-flex flex-column justify-contant-between">
                            <div className="">
                              <Link
                                className="text-light hospital-btn  btn btn1 btn-primary shadow-none"
                                to={`/hospital/${hospital._id}`}
                              >
                                View More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <h2 className="text-center">clincs</h2>
            <div className="row">
              {clinics.length > 0 &&
                clinics
                  .filter((e, i) => i < 3)
                  .map((clinic, key) => {
                    return (
                      <div
                        className="col-lg-4 mb-4 col-md-4 mcard mt-4"
                        key={key}
                      >
                        <div
                          style={{ background: "#ffffff" }}
                          className="clinic-card "
                        >
                          <div className="inner-card-border"></div>
                          <div style={{ marginBottom: "-22px" }}>
                            <img
                              className="clinic-img"
                              src={
                                clinic?.photo
                                  ? getFullPath(clinic?.photo)
                                  : clinicPhoto2
                              }
                              alt=""
                            />
                            <span className=" p-2 clinic-title">
                              {clinic?.name} 
                            </span>
                          </div>
                          <div className="clinic-details d-flex flex-row justify-content-between">
                            <div className="mt-2">
                              <h6 className="clinic-specialization text-disabled">
                                {"Dermatologist"}
                              </h6>
                              <div className="contact-info">
                                <h6 className="text-disabled mt-1">
                                  Contact Info :
                                </h6>
                                <div>
                                  <p className="ml-2 adjust hospital-address  ">
                                    <FontAwesomeIcon
                                      className="clinic-icon address-icon"
                                      icon={faLocationDot}
                                    />
                                    {clinic?.address || '-'}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="">
                              <h6 className="text-disabled">Timming</h6>
                              <div className="d-flex flex-column justify-contant-between">
                                <div className="">
                                  <p className="clinic-timming mb-0">
                                    Morning : 08 AM to 11 PM
                                  </p>
                                  <p className="clinic-timming mb-0">
                                    Evening : 05 PM to 11 PM
                                  </p>
                                </div>
                                <Link
                                  className="text-light clinic-btn  btn btn1 btn-primary shadow-none"
                                  to={`/clinic-detail/${clinic?._id}`}
                                >
                                  View More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default SpecializationDetails;
