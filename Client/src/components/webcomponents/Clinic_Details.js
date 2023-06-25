import background from "../../assets.app/img/user-profile-bg-1920x400.jpg";
import drprofile from "../../assets.app/img/doctors-list/182x280-0.jpg";

function Detail() {
  return (
    <>
      <div className="ms-content-wrapper">
        <div className="box"></div>
        <h4 className="clinic-detail-name">Aligarh Hospital</h4>
        <div
          className="clinicbanner"
          style={{
            background: `url(${background})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="d-flex flex-row  clinic-detail-img-container ">
            <div className="d-flex flex-row  justify-content-around  ">
              <img className="clinic-detail-img" src={drprofile} alt="" />
              <div className="mt-5 clinic-detail-mobile">
                <h4 className="text-light clinic-detail-drName mt-4">
                  Dr Tsunade Senju
                </h4>
                <h6
                  style={{ display: "inline-block" }}
                  className="text-light clinic-detail-drName"
                >
                  Cardiologist
                </h6>
              </div>
            </div>
            <div className="current-clicnic-token ml-5 d-flex flex-row">
              <h1 style={{ margin: "15px 15px" }}>45</h1>
            </div>
          </div>
        </div>
        <div className="bookappoint">
          <h5 className="p-2">Book Appointment</h5>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="wating-area-clinic container">
                <h4 className="text-center">Waiting List</h4>
                <div className="Current-token-clinic-details">
                  <h1 className="mt-4">45</h1>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div  className="text-center">
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
    </>
  );
}

export default Detail;
