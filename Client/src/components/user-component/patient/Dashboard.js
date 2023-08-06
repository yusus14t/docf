import React, { useState } from "react";

import Profie from "./Profie";
import Cardlist from "./Cardlist";
import Appointments from "./Appointments";
import profile from "../../../assets.app/img/doctors-grid/348x350-3.jpg";

const Dashbaord = () => {
  return (
    <div style={{ background: "#f2f2f2" }} className="">
      <div className="pdash">
        <div className="pdash-left d-flex justify-content-center">
          <div className="patient-profile-container ">
            <div style={{ width: "100%" }} className="mt-3 p-2 ">
              <img className="patient-profile-pic " src={profile} alt="" />
              <div className="mt-3 ">
                <h5 className="p-2 m-0">
                  <h5 className="m-0 text-secondary">
                    Full Name :
                    <h5 className="text-dark m-0 d-inline-block pb-2">
                      Iqra Abdullah Siddque
                    </h5>
                    <hr className="m-0" />
                  </h5>
                </h5>
                <h5 className="p-2 mb-0 text-secondary">
                  <h5 className="mb-0">
                    Father Name :
                    <h5 className="text-dark mb-0 d-inline-block pb-2">
                      Abdullah Siddque
                    </h5>
                    <hr className="m-0 w-100" />
                  </h5>
                </h5>
                <h5 className="p-2 m-0 text-secondary">
                  <h5 className="m-0">
                    Mobile No :
                    <h5 className="text-dark mb-0 d-inline-block pb-2 ">
                      +91 8474986168
                    </h5>
                    <hr className="m-0 w-100" />
                  </h5>
                </h5>
                <div className="d-flex justify-content-between p-2">
                  <span className="p-0 m-0">
                    <h5>
                      Age : <span className="p-0 m-0 text-secondary">23</span>
                    </h5>
                    <hr className="m-0 w-100" />
                  </span>
                  <span className="p-0 m-0">
                    <h5>
                      Gender :
                      <span className="p-0 m-0 text-secondary">Female</span>
                    </h5>
                    <hr className="m-0 w-100" />
                  </span>
                </div>
                <div className="p-2 text-justify">
                  <h5>
                    Address :
                    <span className="p-0 m-0 pb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex, perspiciatis.
                    </span>
                  </h5>
                </div>
              </div>
              <button className="btn btn-primary w-100 mt-1 rounded">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <div className="pdash-right ">
          <div className="">
            <h5 className="position-fix bg-primary w-100 text-light p-2 mb-0">
              Appoinment List
            </h5>
          </div>
          <div className="pdash-appointment-list ">
            {[1,2,3,4,5,6,7,8,9,].map((apt)=>{
              return (
                <div className="apt-card d-flex p-2 justify-content-around ">
                  <div className="bg-success apt-token border text-white rounded">
                    <h3>08</h3>
                  </div>
                  <div className="mx-2 d-flex align-items-center">
                    <h6> Kira Fealer</h6>
                  </div>
                  <div className="mx-2 d-flex align-items-center">
                    <h6>26</h6>
                  </div>
                  <div className="d-flex align-items-center">
                    <h6>Lorem ipsum dolor sit amet consectetur</h6>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-success mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aut
            ducimus dignissimos? Laborum ut alias beatae corrupti eligendi
            excepturi minima ipsum cum incidunt, sunt, perspiciatis adipisci
            magnam quaerat distinctio voluptates!
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashbaord;
