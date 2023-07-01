import background from "../../assets.app/img/user-profile-bg-1920x400.jpg";
import drprofile from "../../assets.app/img/doctors-list/182x280-0.jpg";
import { axiosInstance, getAuthHeader } from "../../constants/utils";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Appointment from "../common-components/Appointment/Appointment";
import imgh from "../../assets.app/img/doctors-grid/348x350-3.jpg";
// import { useEvent } from "../../hooks/common-hook";
// import useToasty from "../../hooks/toasty";

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
        <div className="box"></div>
        <div
          className="clinicbanner"
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
          <h5 className="p-2">Book Appointment</h5>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="wating-area-clinic container">
                <h4 className="text-center">Waiting List</h4>
                <div className=" w-100">
                  <ul className="token-list">
                    <li className="">
                      <div className="mt-auto">

                      <div className="token-list-item d-flex flex-row justify-content-around">
                        <div className="token "><h4>45</h4></div>
                        <img className="token-list-img" src={imgh} alt="" />
                        <div className="token-list-detail">
                          <h4>
                            <span>Name</span>: Kelly Clarson
                          </h4>
                          <p>
                            Address : {/*put only landmark or street*/} Jamlpur
                          </p>
                        </div>
                      </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <div class="container">
                  <h4>Clinic Timing</h4>
                  <table class="table table-bordered">
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
          <div className="row">
            <div className="col-md-6">
              <h6>
                <span>Address </span>: Nala road nagla Jamalpur <br />
                Aligarh 202001, Utter Pradesh
              </h6>
            </div>
            <div className="col-md-6">
              <h6>
                <span>Contact Number </span>: +91 8754256653
              </h6>
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
