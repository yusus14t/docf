import background from "../../assets.app/img/user-profile-bg-1920x400.jpg";
import drprofile from "../../assets.app/img/doctors-list/182x280-0.jpg";
import { axiosInstance, getAuthHeader } from "../../constants/utils";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Appointment from "../common-components/Appointment/Appointment";
import imgh from "../../assets.app/img/doctors-grid/348x350-3.jpg";
// import { useEvent } from "../../hooks/common-hook";
// import useToasty from "../../hooks/toasty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarPlus,
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Detail() {
  const params = useParams();
  // const event = useEvent('new-appointment')
  // const toasty = useToasty()
  const [clinicDetail, setClinicDetail] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    getClinicDetail();
  }, []);

  // useEffect(() => {
  //   if (event?.data?.doctorId) {
  //       toasty.success('New Appointment Added')
  //   }
  // }, [event?.data])

  const getClinicDetail = async () => {
    try {
      let { data } = await axiosInstance.get("/clinic-detail", {
        params: { _id: params.id },
        ...getAuthHeader(),
      });
      console.log("data", data);
      setClinicDetail(data?.clinicDetail);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAppointmentModal = () => {
    if (!userInfo)
      navigate("/patient-login", {
        state: { redirectTo: window.location.pathname },
      });
    setIsOpen(true);
  };

  return (
    <>
      <div className="">
        <div
          className="clinicbanner mt-8"
          style={{
            background: `url(${background})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h4 className="clinic-detail-name">{clinicDetail?.detail?.name}</h4>
          <div className="d-flex flex-row  clinic-detail-img-container ">
            <div className="d-flex flex-row  justify-content-around  ">
              <img className="clinic-detail-img" src={drprofile} alt="" />
              <div className="mt-5 clinic-detail-mobile">
                <h4 className="text-light clinic-detail-drName mt-4">
                  {(clinicDetail?.doctors &&
                    clinicDetail?.doctors["0"]?.fullName) ||
                    "dfg"}
                </h4>
                <h6
                  style={{ display: "inline-block" }}
                  className="text-light clinic-detail-drName"
                >
                  {clinicDetail?.specialization || "Specialization"}
                </h6>
              </div>
            </div>
            <div className="current-clicnic-token ml-5 d-flex flex-row">
              <h1 style={{ margin: "15px 15px" }}>45</h1>
            </div>
          </div>
        </div>

        <div
          className="bookappoint cursor-pointer"
          onClick={() => handleAppointmentModal()}
        >
          <FontAwesomeIcon
            className="bookappointment-icon"
            icon={faCalendarPlus}
          />

          <h5 className="p-2">Book Appointment</h5>
        </div>

        <div className="">
          <div className="row ">
            <div className="col-md-6 ">
              <div className="wating-area-clinic">
                <h4 className="text-center mb-3">Waiting List</h4>
                <div className="token-list-container ">
                  <ul className="token-list">
                    <li className=" p-2">
                      <div className="mt-auto">
                        <div className="token-list-item d-flex flex-row justify-content-around">
                          <div className="token ">
                            <h4 className="token-list-number">45</h4>
                          </div>
                          <div className="token-list-detail">
                            <h4 className="list-patient-name mb-1">
                              <span>Name</span>: Kelly Clarson
                            </h4>
                            <p className="mb-0 list-mobile-no">
                              Mobile Number : +91 xxxxxx6998
                            </p>
                            <p className="mb-0 list-address">
                              Address : {/*put only landmark or street*/}{" "}
                              Jamlpur
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="p-2">
                      <div className="mt-auto">
                        <div className="token-list-item d-flex flex-row justify-content-around">
                          <div className="token ">
                            <h4 className="token-list-number">45</h4>
                          </div>
                          <div className="token-list-detail">
                            <h4 className="list-patient-name mb-1">
                              <span>Name</span>: Kelly Clarson
                            </h4>
                            <p className="mb-0 list-mobile-no">
                              Mobile Number : +91 xxxxxx6998
                            </p>
                            <p className="mb-0 list-address">
                              Address : {/*put only landmark or street*/}{" "}
                              Jamlpur
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="p-2">
                      <div className="mt-auto">
                        <div className="token-list-item d-flex flex-row justify-content-around">
                          <div className="token ">
                            <h4 className="token-list-number">45</h4>
                          </div>
                          <div className="token-list-detail">
                            <h4 className="list-patient-name mb-1">
                              <span>Name</span>: Kelly Clarson
                            </h4>
                            <p className="mb-0 list-mobile-no">
                              Mobile Number : +91 xxxxxx6998
                            </p>
                            <p className="mb-0 list-address">
                              Address : {/*put only landmark or street*/}{" "}
                              Jamlpur
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="p-2">
                      <div className="mt-auto">
                        <div className="token-list-item d-flex flex-row justify-content-around">
                          <div className="token ">
                            <h4 className="token-list-number">45</h4>
                          </div>
                          <div className="token-list-detail">
                            <h4 className="list-patient-name mb-1">
                              <span>Name</span>: Kelly Clarson
                            </h4>
                            <p className="mb-0 list-mobile-no">
                              Mobile Number : +91 xxxxxx6998
                            </p>
                            <p className="mb-0 list-address">
                              Address : {/*put only landmark or street*/}{" "}
                              Jamlpur
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="p-2">
                      <div className="mt-auto">
                        <div className="token-list-item d-flex flex-row justify-content-around">
                          <div className="token ">
                            <h4 className="token-list-number">45</h4>
                          </div>
                          <div className="token-list-detail">
                            <h4 className="list-patient-name mb-1">
                              <span>Name</span>: Kelly Clarson
                            </h4>
                            <p className="mb-0 list-mobile-no">
                              Mobile Number : +91 xxxxxx6998
                            </p>
                            <p className="mb-0 list-address">
                              Address : {/*put only landmark or street*/}{" "}
                              Jamlpur
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="p-2">
                      <div className="mt-auto">
                        <div className="token-list-item d-flex flex-row justify-content-around">
                          <div className="token ">
                            <h4 className="token-list-number">45</h4>
                          </div>
                          <div className="token-list-detail">
                            <h4 className="list-patient-name mb-1">
                              <span>Name</span>: Kelly Clarson
                            </h4>
                            <p className="mb-0 list-mobile-no">
                              Mobile Number : +91 xxxxxx6998
                            </p>
                            <p className="mb-0 list-address">
                              Address : {/*put only landmark or street*/}{" "}
                              Jamlpur
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="p-2">
                      <div className="mt-auto">
                        <div className="token-list-item d-flex flex-row justify-content-around">
                          <div className="token ">
                            <h4 className="token-list-number">45</h4>
                          </div>
                          <div className="token-list-detail">
                            <h4 className="list-patient-name mb-1">
                              <span>Name</span>: Kelly Clarson
                            </h4>
                            <p className="mb-0 list-mobile-no">
                              Mobile Number : +91 xxxxxx6998
                            </p>
                            <p className="mb-0 list-address">
                              Address : {/*put only landmark or street*/}{" "}
                              Jamlpur
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="p-2">
                      <div className="mt-auto">
                        <div className="token-list-item d-flex flex-row justify-content-around">
                          <div className="token ">
                            <h4 className="token-list-number">45</h4>
                          </div>
                          <div className="token-list-detail">
                            <h4 className="list-patient-name mb-1">
                              <span>Name</span>: Kelly Clarson
                            </h4>
                            <p className="mb-0 list-mobile-no">
                              Mobile Number : +91 xxxxxx6998
                            </p>
                            <p className="mb-0 list-address">
                              Address : {/*put only landmark or street*/}{" "}
                              Jamlpur
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="clinic-info-details">
                <h4 className="mb-3 pt-2  text-center">Info</h4>
                <h6 className="text-left text-light mx-2">
                  <span className="text-disabled">Consultation Fee</span> : Rs
                  300
                </h6>
                <div className="description-clinic-detail mb-3 pe-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  velit quam iure quibusdam dolorum quisquam eos quis sed
                  molestiae, quae excepturi delectus soluta sunt dignissimos
                  accusamus accusantium repellendus quod assumenda.
                </div>
              </div>
              <div className="text-center">
                <div class="pr-2 ">
                  <table class="table  table-bordered">
                    <thead class="thead-light">
                      <tr>
                        <th>Session</th>
                        <th>Morning</th>
                        <th>Evening</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Monday</td>
                        <td>9:00 AM - 1:00 PM</td>
                        <td>4:00 PM - 8:00 PM</td>
                      </tr>
                      <tr>
                        <td>Tuesday</td>
                        <td>9:00 AM - 1:00 PM</td>
                        <td>4:00 PM - 8:00 PM</td>
                      </tr>
                      <tr>
                        <td>Wednesday</td>
                        <td>9:00 AM - 1:00 PM</td>
                        <td>4:00 PM - 8:00 PM</td>
                      </tr>
                      <tr>
                        <td>Thursday</td>
                        <td>9:00 AM - 1:00 PM</td>
                        <td>4:00 PM - 8:00 PM</td>
                      </tr>
                      <tr>
                        <td>Friday</td>
                        <td>9:00 AM - 1:00 PM</td>
                        <td>4:00 PM - 8:00 PM</td>
                      </tr>
                      <tr>
                        <td>Saturday</td>
                        <td>9:00 AM - 1:00 PM</td>
                        <td>4:00 PM - 8:00 PM</td>
                      </tr>
                      <tr>
                        <td>Sunday</td>
                        <td>10:00 AM - 12:00 PM</td>
                        <td>5:00 PM - 7:00 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-details-clinic">
            <div class="sigma_info style-26 d-flex">
              <div class="sigma_info-title">
                <span class="sigma_info-icon clinic-address-icon-container">
                  <FontAwesomeIcon
                    className="clinic-address-icon"
                    icon={faMapMarker}
                  />
                </span>
              </div>
              <div class="sigma_info-description">
                <p>Our Address</p>
                <p class="secondary-color">
                  <b>Drive Chicago, IL 60607</b>
                </p>
              </div>
            </div>
            <div class="sigma_info style-26 d-flex">
              <div class="sigma_info-title d-flex">
                <span class="sigma_info-icon clinic-address-icon-container">
                  <FontAwesomeIcon
                    className="clinic-address-icon"
                    icon={faPhone}
                  />
                  <i class="fal fa-phone"></i>
                </span>
              </div>
              <div class="sigma_info-description">
                <p>Call Us</p>
                <p class="secondary-color">
                  <b>360-779-2228</b>
                </p>
              </div>
            </div>
            <div class="sigma_info style-26 d-flex">
              <div class="sigma_info-title">
                <span class="sigma_info-icon clinic-address-icon-container">
                  <FontAwesomeIcon
                    className="clinic-address-icon"
                    icon={faEnvelope}
                  />
                </span>
              </div>
              <div class="sigma_info-description">
                <p>Our Mail</p>
                <p class="secondary-color">
                  <b>yourname@mail.com</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Appointment
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          doctors={clinicDetail?.doctors}
          refresh={() => {}}
        />
      )}
    </>
  );
}

export default Detail;
