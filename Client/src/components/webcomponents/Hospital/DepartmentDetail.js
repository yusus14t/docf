import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarPlus,
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate } from 'react-router-dom';
import Appointment from '../../common-components/Appointment/Appointment';
import img from "../../../assets.app/img/blog-grid/350x300-0.jpg";


const DepartmentDetail = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleAppointmentModal = () => {
    //   if (!userInfo)
    //     Navigate("/patient-login", {
    //       state: { redirectTo: window.location.pathname },
    //     });
      return setIsOpen(true);
    };

  return (
    <>
      <div className="box"></div>
      <div className="">
        <div className="hospital-banner">
          <h4 className="clinic-detail-name">Lababa Juhsil Hospital</h4>
          <img className="hopsiptal-banner-img" src={img} alt="" />
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

        <div className="container-fluid">
          <div className="row clinic-details-row mx-0">
            {/* WAITING LIST */}
            <div className="col-md-6 ">
              <div className="wating-area-clinic">
                <h4 className="text-center mb-3">Waiting List</h4>
                <div className="token-list-container ">
                  {/* {waitingList?.length ? (
                    <ul className={`token-list $`}>
                      {waitingList.map((list) => (
                        <li className=" p-2">
                          <div className="mt-auto">
                            <div
                              className={`token-list-item d-flex flex-row justify-content-around ${
                                list?.token == parseInt(token)
                                  ? "token-list-active"
                                  : ""
                              }`}
                            >
                              <div className="token ">
                                <h4 className="token-list-number">
                                  {list?.token}
                                </h4>
                              </div>
                              <div className="token-list-detail">
                                <h4 className="list-patient-name mb-1">
                                  {list?.fullName}
                                </h4>
                                <p className="mb-0 list-mobile-no">
                                  Mobile Number : +91{" "}
                                  {list?.phone
                                    ? `xxx-xxx-${list?.phone.slice(-4)}`
                                    : "----------"}
                                </p>
                                <p className="mb-0 list-address">
                                  Address : {list?.address}
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span>No Data</span>
                  )} */}
                  no data
                </div>
              </div>
            </div>

            {/* INFO CARD */}
            <div className="col-md-6 px-3">
              <div className="clinic-info-details">
                <h4 className="mb-3 pt-2  text-center">Info</h4>
                <h6 className="text-left text-light mx-2">
                  <span className="text-disabled">Consultation Fee</span> :
                  Rs&nbsp;
                  {/* {clinicDetail?.detail?.fee} */}
                  500
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

          {/* CONTACT CARD */}
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
                    jamalpur nagla aligarh
                  {/* <b>{clinicDetail?.detail?.address}</b> */}
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
                  <b>
                    {/* {clinicDetail?.detail?.phone?.slice(0, 3)}-
                    {clinicDetail?.detail?.phone?.slice(4, 7)}-
                    {clinicDetail?.detail?.phone?.slice(-4)} */}
                    9463524326432
                  </b>
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
                  {/* <b>{clinicDetail?.detail?.email}</b> */}
                  your@gmail.com
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
        //   doctors={clinicDetail?.doctors}
          refresh={() => {}}
        />
      )}
    </>
  );
}

export default DepartmentDetail