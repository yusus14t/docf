import React from 'react'
import background from "../../assets.app/img/backgrounds/department.jpg";


const DepartmentSignUp = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="loginContainer align-center"
    >
      <div className="w-25 m-auto hc-signup-container d-flex flex-column align-items-center">
        <span className=" h4 hos-singup-heading p-1 text-light"> Sign Up</span>
        <span className="h2 text-light text-center  mb-3 hos-singup-heading">
          Hospital / Clinic
        </span>
        <div className="w-100">
          <p className="mb-1 text-light">Mobile Number</p>
          <input
            type="number"
            className="form-control letterSpcing"
            name=""
            id=""
            placeholder='8218692122'
          />
          <span className="text-center">
            <button className="btn btn1 btn-primary mt-3">Submit</button>{" "}
          </span>
        </div>
        <div className="w-100 d-flex flex-column justify-content-start">
          <div className="otp w-75 mt-2 ">
            <label htmlFor="" className="text-light">
              Enter the OTP
            </label>
            <input
              className="form-control mt-2 letterSpcing"
              type="number"
              name="OTP"
              id=""
              placeholder="X X X X"
            />
            <button className="btn btn-primary btn1 mt-4">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentSignUp