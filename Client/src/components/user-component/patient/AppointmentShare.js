import React from 'react'
import img from "../../../assets.app/img/dentist/500x450-2.jpg";
const AppointmentShare = () => {
  return (
    <>
      <div className="box"></div>
      <div className="d-flex m-3  justify-content-center">
        <div
          style={{
            background: "#ffff",
            width: "600px",
            border: "1px solid black",
          }}
          className="p-2 rounded"
        >
          <h4 className="">Appointment Card</h4>
          <hr />
          <div className="">
            <h3 className="text-center">Clinic Or Hospital NAme</h3>
            <h6 className="ml-3">25/02/2003</h6>
            <hr />
          </div>
          <div className=" d-flex justify-content-around px-4">
            <div className="">
              <img
                className="rounded"
                src={img}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="user-details m-auto d-flex flex-column">
              <h6 className="font-weight-bold">
                <span className="m-0 text-dark">Name : </span>Lapd{" "}
              </h6>

              <h6 className="font-weight-bold">
                <span className="m-0 text-dark">Age : </span>25
              </h6>
              <h6 className="font-weight-bold">
                <span className="m-0 text-dark">Gender : </span>male
              </h6>
              <h6 className="font-weight-bold">
                <span className="m-0 text-dark">Blood Group : </span>A+
              </h6>
            </div>
            <div className="user-token  ">
              <h3 className="text-center ">2</h3>
            </div>
          </div>
          <hr />
          <div class="basic-details">
            <h2 class="font-weight-bold">Basic Details</h2>
            <p class="mb-0 text-dark">Guardian Name : Jwjejdbsn</p>
            <p class="mb-0 text-dark">Mobile Number : +91 9283736828</p>
            <p class="mb-0 text-dark">
              Address : Hshjsjsbsbebjska jsosownwnjseb{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentShare