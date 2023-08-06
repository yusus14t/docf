import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import banner from "../../assets.app/img/gynae/gynacard-image.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import clinicPhoto2 from "../../assets.app/img/backgrounds/hos.jpg";

import slide1 from "../../assets.web/img/home-1/1920x1280-1.jpg";
import slide2 from "../../assets.web/img/home-1/1920x1280-2.jpg";
import slide3 from "../../assets.web/img/home-1/1920x1280-3.jpg";

import { axiosInstance } from "../../constants/utils";
import { getFullPath } from "../../constants/utils";

const Gynae = () => {
  let card = [1, 2, 3, 4];
  const [clinics, setClinics] = useState([]);
  useEffect(() => {
    getAllClinics();
  }, []);

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
      <div className="box"></div>
      <div className=" ">
        <div className="">
          <Carousel
            dynamicHeight={500}
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            onChange={true}
            interval={50}
          >
            <div className="slide1">
              <img src={slide1} className="gynae-slide" alt="slide-1" />
            </div>
            <div className="slide1">
              <img src={slide2} className="gynae-slide" alt="slide-2" />
            </div>
            <div className="slide1">
              <img src={slide3} className="gynae-slide" alt="slide-3" />
            </div>
          </Carousel>
        </div>
        <div className="p-2">
          <div
            className="hero-banner"
            style={{
              backgroundColor: "blue",
              backgroundImage: `url(${banner})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <span className="btn btn-primary  gynae-button-hero">
              <Link className="text-light">Book Appiontment</Link>
            </span>
          </div>
        </div>
        {/*------services-------  */}
        <div className="gynae-services ">
          <div className="container">
            <h3 className="text-center underline">
              <span className="under">Health Care Services</span>
            </h3>
          </div>
          <div className="gynae-services-cards-container ">
            {card.map((x) => {
              return (
                <div className="gynae-services-card text-center gynae-pink-layer">
                  <span className="gynae-circle mt-2">
                    <FontAwesomeIcon
                      className="gynae-services-icon"
                      icon={faStethoscope}
                    />
                  </span>
                  <h3>Birth Control</h3>
                  <p className="p-2">
                    known as contraception and fertility control Lorem ipsum
                    dolor sit amet.
                  </p>
                  <span className="btn btn1 btn-gynae">
                    <Link>Check It</Link>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-2">
          <div
            className="hero-banner"
            style={{
              backgroundImage: `url(${slide2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <span className="btn btn-primary  gynae-button-hero">
              <Link className="text-light">Test Now</Link>
            </span>
          </div>
        </div>
        <h3>Our Partners</h3>

        <div className="partner row">
          <div className="row m-auto">
            <div className="container">
              <h3 className="text-center underline">
                <span className="under">Hospitals</span>
              </h3>
            </div>
            {[1, 2, 3].map((Hospital) => {
              return (
                <div
                  className="ml-2 col-lg-4 mb-4 col-md-4 mcard mt-2 "
                  // key={key}
                >
                  <div
                    className="hospitalCard  "
                    style={{ backgroundColor: "#ffc1d44d" }}
                  >
                    <span
                      className=" hospital-title text-dark"
                      style={{ backgroundColor: "#ffc1d44d" }}
                    >
                      Al-Samad Hospital
                    </span>
                    <div className="hospitalCard-background-img">
                      {/* <div className="hospital-card-inner-header"></div> */}
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
                        </h6>
                        <div className="contact-info mt-3">
                          <div>
                            <p className="ml-2 adjust hospital-address  ">
                              <FontAwesomeIcon
                                className="clinic-icon address-icon"
                                icon={faLocationDot}
                              />
                              Nala road nagla jamalpur, Aligarh Uttar Pradesh
                              Nala road nagla jamalpur, Aligarh Uttar Pradesh
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
                            <button className="hospital-btn  btn btn1 btn-primary">
                              <Link
                                className="text-light"
                                to={"/hospital-details"}
                              >
                                View More
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="col-sm-5"></div>
          </div>
          <div className="row m-auto">
            <div className="container">
              <h3 className="text-center underline">
                <span className="under">Clinics</span>
              </h3>
            </div>

            {clinics.length > 0 &&
              clinics
                .filter((e, i) => i < 3)
                .map((clinic, key) => (
                  <div className="col-lg-4 mb-4 col-md-4 mcard mt-4" key={key}>
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
                          {clinic?.name} : <span className="open">close</span>
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
                ))}
          </div>
        </div>
        <div className="container"></div>
      </div>
    </>
  );
};

export default Gynae;
