import background from "../../assets.app/img/user-profile-bg-1920x400.jpg";
import drprofile from "../../assets.app/img/doctors-list/182x280-0.jpg";
import { axiosInstance, formatPhone, getAuthHeader, getFullPath } from "../../constants/utils";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Appointment from "../common-components/Appointment/Appointment";
import events from "../../events";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus, faEnvelope, faMapMarker,  faPhone, } from "@fortawesome/free-solid-svg-icons";
import NO_PHOTO from '../../assets.app/images/no-photo.png'
import { FULLDAY } from "../../constants/constant";

function Detail() {
  const params = useParams();
  const [clinicDetail, setClinicDetail] = useState({});
  const [waitingList, setWaitingList] = useState([]);
  const [token, setToken] = useState('00')
  const [isOpen, setIsOpen] = useState(false);
  const [timing, setTiming] = useState([])
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const [notices, setNotices] = useState([])
  const navigate = useNavigate();
 
  useEffect(() => {
    getWaitingList();
    getClinicDetail();
    getNotices();

    events.addEventListener('re-appointment', ( event ) => newAppointmentHandler( JSON.parse(event.data) )) 
    events.addEventListener('new-appointment', ( event ) => newAppointmentHandler( JSON.parse(event.data) ))
    events.addEventListener('status', ( event ) => statusEventHandler( JSON.parse(event.data) )) 

  }, []);

  let newAppointmentHandler = ( event ) => {
    getWaitingList()
  }

  const statusEventHandler = ( event ) => {
    getClinicDetail()
    getWaitingList()
  }


  const getClinicDetail = async () => {
    try {
      let { data } = await axiosInstance.get("/clinic-detail", {
        params: { _id: params.id },
        ...getAuthHeader(),
      });
      let detail = data?.detail
      setClinicDetail(detail);
      setTiming(detail?.timing)
      let token = '00'
      token = detail?.token?.length === 1  ? 
              `0${detail?.token}` : 
              detail?.token || '00'

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

  const getNotices = async () => {
    try {
      let { data } = await axiosInstance.get(`/common/notice/${params.id}`)
      setNotices(data?.notices)
    } catch (error) { console.error(error) }
  }

  const getTiming = ( short, full, source ) => {
    let day = timing.find( time => time.day === short )

    if( source === 'Clinic'  ){
      return(
        <tr>
          <td>{ full }</td>
          <td>{ day?.morning?.open || '-' }</td>
          <td>{ day?.morning?.close || '-' }</td>
          <td>{ day?.evening?.open || '-'}</td>
          <td>{ day?.evening?.close || '-'}</td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td>{ full }</td>
          <td>{ day?.open || '-' }</td>
          <td>{ day?.close || '-' }</td>
        </tr>
      )

    }
  }

  return (
    <>
      <div className="">
        <div className="box"></div>
        <div
          className="clinicbanner"
          style={{
            backgroundImage: `url(${
              clinicDetail?.photo
                ? getFullPath(clinicDetail?.photo)
                : background
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize:"100%"
          }}
        >
          <h4 className="clinic-detail-name">{clinicDetail?.name}</h4>
          <div className="d-flex flex-row  clinic-detail-img-container ">
            <div className="d-flex flex-row  justify-content-around  ">
              <img
                className="clinic-detail-img"
                src={
                  clinicDetail?.doctors
                    ? getFullPath(clinicDetail?.doctors[0]?.photo)
                    : NO_PHOTO
                }
                alt=""
              />
              <div className="mt-5 clinic-detail-mobile">
                <h4 className="text-light clinic-detail-drName rounded mt-4">
                  {clinicDetail?.name}
                </h4>
                <h6
                  style={{ display: "inline-block" }}
                  className="text-light clinic-detail-drName rounded"
                >
                  {clinicDetail?.specialization?.map((spe) => spe.name) ||
                    "Specialization"}
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

        {(userInfo?.userType === "PT" || !userInfo) && (
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
        )}

        <div className="container-fluid">
          <div className="row clinic-details-row mt-5 mx-0">
            {/* WAITING LIST */}
            <div className="col-md-6 ">
              <div className="wating-area-clinic">
                <h4 className="text-center mb-3">Waiting List</h4>
                <div className="token-list-container ">
                  {waitingList?.length ? (
                    <ul className={`token-list $`}>
                      {waitingList.map((list, key) => (
                        <li className=" p-2" key={key}>
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
                                  {list?.name}
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
              <div className="clinic-info-details pb-3">
                <h4 className="mb-3 pt-2  text-center">Info</h4>
                <h6 className="text-left text-light mx-2">
                  <span className="text-disabled">Consultation Fee</span> :
                  Rs&nbsp;
                  {clinicDetail?.fee}
                </h6>
                <div className="description-clinic-detail mb-3 pe-2">
                  <span className="text-disabled">Services</span> : &nbsp;
                  {clinicDetail?.services?.length > 0
                    ? clinicDetail?.services?.map((serv) => `${serv?.name}, `)
                    : "-"}
                </div>
                <div className="bg-white m-2 rounded p-2">Important Notice</div>
                {notices?.length > 0 ? notices.map(notice => <div className="bg-white m-2 rounded p-2">
                  <h6>{notice.title}</h6>
                  <p>{notice.description}</p>
                </div>)
                  :
                  <div className="bg-white m-2 rounded p-2">No Data</div>
                }
              </div>
              <div className="text-center">
                <div className="pr-2 ">
                  <table className="table  table-bordered">
                    <thead className="thead-light">
                      {clinicDetail?.organizationType === 'Clinic' ? <tr>
                        <th>Session</th>
                        <th>Morn Open</th>
                        <th>Morn Close</th>
                        <th>Even Open</th>
                        <th>Even Close</th>
                      </tr>
                      :
                      <tr>
                        <th>Session</th>
                        <th>Open</th>
                        <th>Close</th>
                      </tr>
                      }
                    </thead>
                    <tbody>
                      {Object.entries(FULLDAY).map(([short, day]) => (
                        getTiming( short, day, clinicDetail?.organizationType )   
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT CARD */}
          <div className="contact-details-clinic pt-3">
            <div className="sigma_info style-26 d-flex">
              <div className="sigma_info-title">
                <span className="sigma_info-icon clinic-address-icon-container">
                  <FontAwesomeIcon
                    className="clinic-address-icon"
                    icon={faMapMarker}
                  />
                </span>
              </div>
              <div className="sigma_info-description">
                <div className="clinic-footer-address">
                  <p>Our Address</p>
                  <p className="secondary-color">
                    <b>{clinicDetail?.address}</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="sigma_info style-26 d-flex">
              <div className="sigma_info-title d-flex">
                <span className="sigma_info-icon clinic-address-icon-container">
                  <FontAwesomeIcon
                    className="clinic-address-icon"
                    icon={faPhone}
                  />
                  <i className="fal fa-phone"></i>
                </span>
              </div>
              <div className="sigma_info-description">
                <p>Call Us</p>
                <p className="secondary-color">
                  <b>{formatPhone(clinicDetail?.phone)}</b>
                </p>
              </div>
            </div>
            <div className="sigma_info style-26 d-flex">
              <div className="sigma_info-title">
                <span className="sigma_info-icon clinic-address-icon-container">
                  <FontAwesomeIcon
                    className="clinic-address-icon"
                    icon={faEnvelope}
                  />
                </span>
              </div>
              <div className="sigma_info-description">
                <p>Our Mail</p>
                <p className="secondary-color">
                  <b>{clinicDetail?.email}</b>
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
          departmentId={clinicDetail?._id}
          refresh={() => {}}
        />
      )}
    </>
  );
}

export default Detail;
