import React, { useEffect, useState } from "react";
// import { ClinicListCard } from '../common-components/ClinicCard';
import { axiosInstance } from "../../constants/utils";

import { Link } from "react-router-dom";
import clinicPhoto2 from "../../assets.web/img/clinic-grid/348x350-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { getFullPath } from "../../constants/utils";
import { NUMBER_TO_DAY } from "../../constants/constant";

function Clinics({ source }) {
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    getAllClinics();
  }, []);

  const getAllClinics = async () => {
    try {
      let { data } = await axiosInstance.get("/all-clinics", {params: { isClinic: true }});
      setClinics(data?.clinics);
    } catch (error) {
      console.error(error);
    }
  };

  const getTodayTiming = ( timing ) => {

    let time = timing?.find( t => t.day === NUMBER_TO_DAY[2] )
    console.log(time)
    if( time ){
      return(
        <>
          <div>
            <p className="pb-0">Morning</p>
            <div>
              <span>Open: { time?.morning?.open } </span>
              <br />
              <span>Close: { time?.morning?.close } </span>
            </div>
          </div>
          <div>
          <p className="pb-0">Evening</p>
          <div>
            <span>Open: { time?.evening?.open } </span>
            <br />
            <span>Close: { time?.evening?.close } </span>
          </div>
        </div>
        </>
      )
    } else {
      return(<>
        Today Not Available
      </>)
    }
  }

  return (
    <div>
      <div className="box d-flex align-items-center">
        <h3 className="text-center underline">
          <span className="under">Clinics</span>
        </h3>
      </div>

      {/* <Banner2 title={'Clinic List'} /> */}

      <div
        style={{ background: "#f1f5fc" }}
        className="section section-padding aaside"
      >
        <div className="asidebox"></div>
        <div className="container">
          <div className="row mt-2 mb-2">
            <div className="col-12">
              <div className="row ">
                {/* <ClinicListCard clinics={clinics} /> */}
                {clinics.length > 0 &&
                  [...clinics, ...clinics]
                    .filter(
                      (clinic, index) =>
                        (source === "homepage" && index <= 5) ||
                        source !== "homepage"
                    )
                    .map((clinic, key) => (
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
                                {getTodayTiming( clinic?.timing )}
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
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clinics;
