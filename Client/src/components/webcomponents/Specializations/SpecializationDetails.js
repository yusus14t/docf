import React, { useEffect, useState } from "react";
import "../../../assets.app/css/specialzation.css";
import banner from "../../../assets.app/img/specializations/cardio.jpg";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import slide2 from "../../../assets.web/img/home-1/1920x1280-2.jpg";
import { getFullPath } from "../../../constants/utils";
import { axiosInstance } from "../../../constants/utils";
import clinicPhoto2 from "../../../assets.web/img/home-1/1920x1280-1.jpg";
// import Search from '../../common-components/Search'


const SpecializationDetails = () => {
  const params = useParams()
  const [clinics, setClinics] = useState([]);
  const [specialisations, setSpecialization] = useState([]);

  useEffect(() => {
    getAllClinics();
    getSpecialization();
    console.log('>>>>>>>>>>>>>>1')
  }, [ ]);

  const getSpecialization = async () => {
    console.log(">>>>>>>>>>>>>>2");
          
    let { data } = await axiosInstance.get(`/specialization/${params.id}`);
    setSpecialization(data?.specializations);
    
  };
  
  

  
   
    

   
    const getAllClinics = async () => {
      try {
        let { data } = await axiosInstance.get("/all-clinics");
        setClinics(data?.clinics);
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <>
    {console.log(specialisations)}
      <div style={{ height: "65px" }}></div>
      <div className="">
        <div className=" banner text-center">
          <h3 className="title pt-0">
            {specialisations?.name}
          </h3>
        </div>
      </div>
      {
        <div className="splz-deatial container mt-3">
          <span className="mb-0">
            <img className="specialization-image" src={banner} alt="" />
          </span>
          <div className="deatil">
            <p className="details-text">{specialisations?.description}</p>
          </div>

          <div className="">
            <h2 className="text-center">Hospitals</h2>
            <div className="row">
              {[1, 2, 3, 4, 5, 6].map((hospital) => {
                return (
                  <div
                    className="ml-2 col-lg-4 mb-4 col-md-4 mcard mt-2"
                    //   key={key}
                  >
                    <div className="hospitalCard ">
                      <span className=" hospital-title">
                        {hospital.name}jjklbljk
                      </span>
                      <div className="hospitalCard-background-img">
                        <img
                          className="hospitalCard-background-img"
                          src={slide2}
                          alt=""
                        />
                      </div>
                      <div className="clinic-details d-flex flex-row justify-content-between">
                        <div className="mt-3">
                          <h6 className="hospital-specialization text-disabled">
                            Multi Specialist
                            {/* {hospital.specialization.length > 1
                            ? "Multi speciality"
                            : hospital.specialization?.name || "-"} */}
                          </h6>
                          <div className="contact-info mt-3">
                            <div>
                              <p className="ml-2 adjust hospital-address  ">
                                <FontAwesomeIcon
                                  className="clinic-icon address-icon"
                                  icon={faLocationDot}
                                />
                                {hospital.address}
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Exercitationem dignissimos id,
                                officiis esse, explicabo doloremque et excepturi
                                in amet adipisci, iusto est dolorem. Autem
                                aperiam fugiat deserunt magni facere tenetur?
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 hospital-card-timing">
                          <h6 className="hospital-timming-card">Timming</h6>
                          <div className="d-flex flex-column justify-contant-between">
                            <div className="">
                              <p className="clinic-timming mb-0">
                                Morning : 08 AM to 11 PM
                              </p>
                              <p className="clinic-timming mb-0">
                                {" "}
                                Evening : 05 PM to 11 PM
                              </p>
                            </div>
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
                              {clinic?.name} :{" "}
                              <span className="open">close</span>
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
                                  <FontAwesomeIcon
                                    className="clinic-icon"
                                    icon={faPhone}
                                  />
                                  <p className="d-inline-block ml-2 mb-0">
                                    {clinic?.phone ? "+91" + clinic?.phone : ""}
                                  </p>
                                </div>
                                <div>
                                  <p className="ml-2 adjust hospital-address  ">
                                    <FontAwesomeIcon
                                      className="clinic-icon address-icon"
                                      icon={faLocationDot}
                                    />
                                    {clinic?.address}
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
