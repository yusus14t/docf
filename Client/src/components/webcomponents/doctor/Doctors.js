import React, { useEffect, useState } from "react";
// import store from '../../redux/Store';
import { axiosInstance } from "../../../constants/utils";
import ProfilePhoto from "../../../assets.web/img/doctor-details/243x264.jpg";


function DoctorsList(props) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getAllDoctors()
  }, [])
  
  const getAllDoctors = async () => {
    let { data } = await axiosInstance.get("/allDoctors");
    setDoctors(data?.doctors);
    console.log("response", data.doctors);
  };

  return (
    <div>
      <div className="box"></div>

      <div className="section section-padding">
        <div className="container mwidth">
          <div className="row">
            <div className="col-12">
              <div className="row ">
                { doctors?.length > 0 && 
                  doctors.map((doctor, key) => (
                    <>
                      <div className="col-lg-4 col-md-4 mcard" key={key}>
                        <div onClick={() => ''} className="Dr-container mb-3 d-flex p-3">
                          <div className="ml-3">
                            <img className="dr-profile-img" src={ProfilePhoto} alt="" />
                          </div>
                
                          <div className="dr-details">
                            <h2 className="">Dr Angel Yu Dicator</h2>
                            <p className="mb-1 dr-spelialization">
                              Neurologist
                            </p>
                            <p className="mb-1 experience-dr">
                              Eperience : 8 Years
                            </p>
                            <p className="dr-qualifiction mb-1">
                              MBBS ,MD
                            </p>
                            <p className="dr-address">Apollo Hospital, Aligarh</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsList;
