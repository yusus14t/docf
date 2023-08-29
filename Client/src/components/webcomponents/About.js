import React from "react";
import about2 from "../../assets.app/images/about2.png";
import about3 from "../../assets.app/images/about3n.png";
import about4 from "../../assets.app/images/jk.png";





const About = () => {
  return (
    <>
      <div style={{ height: "60px" }}></div>
      <h3 className="text-center bg-success text-light p-4">About Us </h3>

      <div style={{ width: "100%", height: "500px" }} className="">
        <img style={{ width: "100%", height: "500px" }} src={about2} alt="" />
      </div>
      <div className="container">
        <div style={{ height: "300px" }} className="row">
          <div className="col-sm-7 mt-3">
            <h3 className="text-center">WELCOME TO DOCTORTIME!</h3>
            <h5 style={{ textAlign: "justify" }}>
              {" "}
              At Doctortime, we are dedicated to simplifying the complex world
              of hospital management. Our software is designed to empower
              healthcare professionals and administrators by providing powerful
              tools to streamline operations, enhance patient care, and optimize
              administrative tasks.
            </h5>
            <h5 style={{ textAlign: "justify" }}>
              With years of experience in the healthcare industry, we understand
              the unique challenges faced by hospitals, clinics and medical
              facilities. Our team of experts has worked diligently to create a
              comprehensive solution that addresses these challenges head-on.
            </h5>
          </div>
          <div style={{ height: "300px" }} className="col-sm-5">
            <img
              style={{ height: "300px", width: "100%" }}
              src={about3}
              alt=""
            />
          </div>
        </div>
        <div style={{ height: "500px" }} >
          <img style={{ height: "500px", width: "100%" }} src={about4} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
