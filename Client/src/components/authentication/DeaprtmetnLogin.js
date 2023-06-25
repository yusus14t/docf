import React from "react";
import background from "../../assets.app/img/backgrounds/department.jpg";

const DepartmentLogin = () => {
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
        <span className=" h4 hos-singup-heading p-1 text-light">Login</span>
        <span className="h2 text-light text-center  mb-3 hos-singup-heading">
          Hospital & Clinic
        </span>
        <div className="w-100">
          <p className="mb-1 text-light">Mobile Number or Email</p>
          <input
            type="number"
            className="form-control"
            name=""
            id=""
            placeholder="Mobile Number or Email"
          />
          
        </div>
        <div className="w-100 d-flex flex-column justify-content-start">
          <div className="otp  mt-2 ">
            <label htmlFor="" className="text-light">
              Enter your password
            </label>
            <input
              className="form-control mt-2 letterSpcing"
              type="number"
              name="OTP"
              id=""
              placeholder="x x x x x"
            />
            <button className="btn btn-primary btn1 mt-4">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentLogin;
