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
            <h3 style={{textAlign:"center"}} >Clinic Or Hospital NAme</h3>
            <h6 style={{marginLeft:"16px"}} >25/02/2003</h6>
            <hr />
          </div>
          <div style={{display:"flex", justifyContent:"space-around", padding:"0 3.5rem"}} className=" d-flex justify-content-around px-4">
            <div className="">
              <img
                
                src={img}
                style={{ width: "100px", height: "100px", borderRadius:"6px" }}
                alt=""
              />
            </div>
            <div style={{display:"flex", flexDirection:"column" , margin:"auto"}} className="user-details m-auto d-flex flex-column">
              <h6 style={{fontWeight:"bold"}} >
                <span style={{margin:"0", color:"black"}} >Name : </span>Lapd{" "}
              </h6>

              <h6 style={{fontWeight:"bold"}} >
                <span style={{margin:"0", color:"black"}}>Age : </span>25
              </h6>
              <h6 style={{fontWeight:"bold"}} >
                <span style={{color:"black", margin:"0"}} className="m-0 text-dark">Gender : </span>male
              </h6>
              <h6 style={{fontWeight:"bold"}} >
                <span style={{margin:"0", color:"black"}} className="m-0 text-dark">Blood Group : </span>A+
              </h6>
            </div>
            <div style={{width:"60px", height:"60px", borderRadius:"6px", backgroundColor:"#00bf63"}}  >
              <h3 style={{textAlign:"center", marginTop:"16%"}}>222</h3>
            </div>
          </div>
          <hr />
          <div style={{paddingLeft:"40px"}}>
            <h2 style={{fontWeight:"bold"}} >Basic Details</h2>
            <p style={{marginBottom:'0', color:"black"}}>Guardian Name : Jwjejdbsn</p>
            <p style={{marginBottom:'0', color:"black"}}>Mobile Number : +91 9283736828</p>
            <p style={{marginBottom:'0', color:"black"}}>
              Address : Hshjsjsbsbebjska jsosownwnjseb{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentShare