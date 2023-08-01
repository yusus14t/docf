import background from "../../assets.app/img/user-profile-bg-1920x400.jpg";
import drprofile from "../../assets.app/img/doctors-list/182x280-0.jpg";
import { axiosInstance, getAuthHeader, getFullPath } from "../../constants/utils";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Appointment from "../common-components/Appointment/Appointment";
import { useEvent } from "../../hooks/common-hook";
import useToasty from "../../hooks/toasty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarPlus,
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Detail() {
  const params = useParams();
  const event = useEvent()
  const toasty = useToasty()
  const [clinicDetail, setClinicDetail] = useState({});
  const [waitingList, setWaitingList] = useState({});
  const [token, setToken] = useState('00')
  const [isOpen, setIsOpen] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    getClinicDetail();
  }, []);

  useEffect(() => {
    handleEventData()
  }, [ event ])

  const handleEventData = () => {
    if ( ['re-appointment', 'new-appointment'].includes(event?.event) ) {
      console.log('<<<<<<<<<<<< event', event)
      let eventData = event?.data
      let LIST_OBJECT = { 
        _id: eventData?._id,
        token: eventData?.token,
        fullName: eventData.user.fullName,  
        phone: eventData.user.phone,  
        address: eventData.user.address,  
      }

      if( !waitingList.some( list => String(list._id) === String(LIST_OBJECT._id) ) ) {
        setWaitingList([ ...waitingList, LIST_OBJECT,])
      }

    } else if( event?.event === 'status' ) {

      let list = waitingList.filter( app => app._id !== event?.data?.appointmentId )
      setWaitingList(list)

      setToken(list?.length ? list[0]?.token : '00')

    }
  }


  useEffect(() => {
    if( clinicDetail?.doctors?.length){
      getWaitingList()
    }
  },[ clinicDetail?.doctors ])

  const getClinicDetail = async () => {
    try {
      let { data } = await axiosInstance.get("/clinic-detail", {
        params: { _id: params.id },
        ...getAuthHeader(),
      });
      setClinicDetail(data?.clinicDetail);

      let token = '00'
      if(data?.clinicDetail?.doctors?.length){
        token = data?.clinicDetail?.doctors["0"]?.token?.length === 1  ? 
                `0${data?.clinicDetail?.doctors["0"]?.token}` : 
                data?.clinicDetail?.doctors["0"]?.token || '00'
      }

      setToken( token )
    } catch (error) {
      console.error(error);
    }
  };

  const getWaitingList = async () => {
    try {
      let { data } = await axiosInstance.get(`/waiting-list/${params.id}`, getAuthHeader());

      setWaitingList(data?.appointment)
    } catch (error) {
      console.error(error);
    }
  };

  const handleAppointmentModal = () => {
    if (!userInfo)
      navigate("/login", {
        state: { redirectTo: window.location.pathname },
      });
    setIsOpen(true);
  };

  return (
    <>
      <div className="">
        <div className="box"></div>
        <div
          className="clinicbanner"
          style={{
            background: `url(${clinicDetail?.detail?.photo ? getFullPath(clinicDetail?.detail?.photo) : background})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h4 className="clinic-detail-name">{clinicDetail?.detail?.name}</h4>
          <div className="d-flex flex-row  clinic-detail-img-container ">
            <div className="d-flex flex-row  justify-content-around  ">
              <img className="clinic-detail-img" src={clinicDetail?.doctors && (clinicDetail?.doctors[0]?.photo ? getFullPath(clinicDetail?.doctors[0]?.photo) : drprofile)} alt="" />
              <div className="mt-5 clinic-detail-mobile">
                <h4 className="text-light clinic-detail-drName rounded mt-4">
                  {(clinicDetail?.doctors &&
                    clinicDetail?.doctors["0"]?.fullName) ||
                    "Doctor Name"}
                </h4>
                <h6
                  style={{ display: "inline-block" }}
                  className="text-light clinic-detail-drName rounded"
                >
                  {clinicDetail?.specialization || "Specialization"}
                </h6>
              </div>
            </div>
            <div
              className="current-clicnic-token ml-5 d-flex flex-row"
              style={{ position: "relative" }}
            >
              <h1 style={{ position: "absolute", left: "15%", top: "15%" }}>
                {token}
              </h1>
            </div>
          </div>
        </div>

        { (userInfo?.userType === "PT" || !userInfo) && <div
          className="bookappoint cursor-pointer"
          onClick={() => handleAppointmentModal()}
        >
          <FontAwesomeIcon
            className="bookappointment-icon"
            icon={faCalendarPlus}
          />

          <h5 className="p-2">Book Appointment</h5>
        </div>}

        <div className="container-fluid">
          <div className="row clinic-details-row mt-5 mx-0">
            {/* WAITING LIST */}
            <div className="col-md-6 ">
              <div className="wating-area-clinic">
                <h4 className="text-center mb-3">Waiting List</h4>
                <div className="token-list-container ">
                  {waitingList?.length ? (
                    <ul className={`token-list $`}>
                      {waitingList.map((list) => (
                        <li className=" p-2">
                          <div className="mt-auto">
                            <div
                              className={`token-list-item d-flex flex-row justify-content-around ${ list?.token == parseInt(token) ? "token-list-active" : "" }`}
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
                  )}
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
                  {clinicDetail?.detail?.fee}
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
                  <b>{clinicDetail?.detail?.address}</b>
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
                    {clinicDetail?.detail?.phone?.slice(0, 3)}-
                    {clinicDetail?.detail?.phone?.slice(4, 7)}-
                    {clinicDetail?.detail?.phone?.slice(-4)}
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
                  <b>{clinicDetail?.detail?.email}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{console.log(clinicDetail)}
      {isOpen && (
        <Appointment
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          departmentId={clinicDetail?.detail?._id}
          refresh={() => {}}
        />
      )}
    </>
  );
}

export default Detail;
