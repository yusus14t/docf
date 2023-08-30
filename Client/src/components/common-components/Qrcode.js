import React from 'react'
import qrcode from "../../assets.app/images/Borcelle.png";
import logo from "../../assets.app/img/logo/logo.jpg"

const Qrcode = () => {
  return (
    <>
      <div className="box"></div>
      <div style={{ marginLeft: "auto" }} className="">
        <div style={{ width: 800, border: "2px solid black" }}>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: "200px", padding: "10px 50px 0 50px" }}
              src={logo}
              alt=""
            />
            <h3 style={{ textAlign: "center" }}>Clinic Or Hospital Name</h3>
          </div>
          <hr />
          <div style={{ margin: "auto", width: "430px", height: "400px" }}>
            <h5 style={{ textAlign: "center" }}>
              Scan QR code to book Appointment
            </h5>
            <img
              src={qrcode}
              style={{ width: "400px", height: "400px" }}
              alt=""
            />
            <p style={{ textAlign: "center" }}>Or visit Doctortime.in</p>
          </div>
          <div style={{ marginTop: "100px" }}>
            <h4 style={{ textAlign: "center" }}>
              Don't Waste Your Time Be Samart
            </h4>
            <h4 style={{ textAlign: "center" }}>
              Come Here Just Before Your Turn{" "}
            </h4>
            <h4 style={{ textAlign: "center" }}>
              Book Appointment from Doctor Time and Track Live Appointment
              Number
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Qrcode