import React from "react";
import banner from "../../assets.app/images/AboutUS.png";
import about2 from "../../assets.app/images/about2.png";
import about3 from "../../assets.app/images/about3.png";
import about4 from "../../assets.app/images/about4.png";
import about5 from "../../assets.app/images/about4.png";





const About = () => {
  return (
    <>
      <div style={{ height: "60px" }}></div>
      <div style={{ width: "100%", height: "200px" }} className="">
        <img style={{ width: "100%", height: "200px" }} src={banner} alt="" />
      </div>

      <div
        style={{ width: "100%", height: "700px", marginTop: "30px" }}
        className=""
      >
        <img style={{ width: "100%", height: "700px" }} src={about3} alt="" />
      </div>
      <div
        style={{ width: "100%", height: "400px", marginTop: "30px" }}
        className=""
      >
        <img style={{ width: "100%", height: "500px" }} src={about2} alt="" />
      </div>
      <div
        style={{ width: "100%", height: "250px", marginTop: "30px" }}
        className=""
      >
        <img style={{ width: "100%", height: "250px" }} src={about4} alt="" />
      </div>
      <div className="container"></div>
    </>
  );
};

export default About;
