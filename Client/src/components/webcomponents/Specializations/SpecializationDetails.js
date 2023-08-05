import React, { useEffect, useState } from "react";
import "../../../assets.app/css/specialzation.css";
import banner from "../../../assets.app/img/specializations/cardio.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import slide2 from "../../../assets.web/img/home-1/1920x1280-2.jpg";
import { getFullPath } from "../../../constants/utils";
import { axiosInstance } from "../../../constants/utils";
import clinicPhoto2 from "../../../assets.web/img/home-1/1920x1280-1.jpg";
import Search from '../../common-components/Search'


const SpecializationDetails = () => {
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
      <div className=" banner text-center">

        <h3 className="title pt-3">Cardiology</h3>
        <Search />
      </div>
      <div className="splz-deatial container mt-3">
        <span className="mb-0">
          <img className="specialization-image" src={banner} alt="" />
        </span>
        <div className="deatil">
          <p className="details-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
            assumenda beatae reprehenderit necessitatibus ipsam iste illo
            blanditiis excepturi perspiciatis quasi error nulla, cumque delectus
            et, neque harum? Dolorem quas delectus ex aut nam beatae aspernatur
            quam assumenda nisi aliquam eveniet eum dicta quisquam cupiditate
            neque aperiam sit, velit consequuntur qui quis minima deserunt quia
            quasi! Error, officiis iusto, maiores esse quaerat dignissimos
            aliquid suscipit voluptas obcaecati veritatis distinctio non
            sapiente alias sequi! Repellat officia magni sed aliquid. In
            consequuntur facilis officia maxime recusandae, facere fuga tenetur
            vero? Placeat quisquam aliquam vel magnam ipsam saepe. Facere
            dignissimos optio quidem, itaque commodi nisi aspernatur cumque,
            omnis harum nam distinctio expedita reprehenderit repudiandae
            ratione, exercitationem soluta aut. Impedit explicabo eius, eos
            molestias deserunt veritatis nihil, quod amet magni consequatur
            cupiditate dignissimos commodi laboriosam? Illum cum quae error, in
            aliquam facilis eius neque beatae ad minus, ex maiores cupiditate
            odio, illo animi et quis veniam! Dolore quibusdam magni, optio eaque
            exercitationem libero atque praesentium ducimus explicabo non,
            dolorum voluptatum cupiditate officiis dicta. Exercitationem,
            numquam. Laboriosam suscipit odio architecto ex nihil error, nisi,
            cum incidunt atque inventore non quod repellendus. Autem quo ad
            aliquid tenetur ipsum, saepe, officiis velit asperiores beatae
            obcaecati nemo eligendi ab sed ex odio enim. Quaerat magnam
            voluptatum, et assumenda maiores hic consequuntur cumque distinctio
            laboriosam minus voluptas, explicabo excepturi quos temporibus
            blanditiis veniam enim recusandae architecto ipsam, alias minima
            nihil atque iusto? Quod nulla repudiandae qui ipsam harum, iusto
            commodi? Voluptas, est ratione eos aspernatur incidunt placeat
            asperiores quas porro repellat ipsa illum possimus distinctio saepe
            id tenetur optio molestias voluptatibus recusandae quo explicabo
            amet? Amet excepturi deleniti incidunt fugit, qui omnis
            necessitatibus commodi dolore, fuga natus quam impedit dolorum ipsa
            alias. Minus illo ipsum quas nisi tempora quae sed itaque quod.
            Delectus ipsa aut, laborum fugiat aliquam corporis tempore!
          </p>
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
                              in amet adipisci, iusto est dolorem. Autem aperiam
                              fugiat deserunt magni facere tenetur?
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
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecializationDetails;
