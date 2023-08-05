import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../assets.app/img/clinic-grid/348x350-2.jpg";
import Search from '../common-components/Search';

export const Ultrasound = () => {
  return (
    <>
      <div className="box"></div>
      <div className=" banner text-center text-dark">
        <h3 className="title pt-3">Ultrasound</h3>
        <Search />
      </div>
      <div className="container">
        <div className="row">
          {[1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 11, 1].map((cards) => {
            return (
              <div
                className="col-lg-4 col-md-4 mcard"

                // key={}
              >
                <Link to="/clinic-detail">
                  <div
                    style={{ background: "#edede9", border: "none" }}
                    // onClick={handle}
                    // onClick={() =>"" }
                    className="Dr-container mb-3 d-flex p-3"
                  >
                    <div className="ml-3">
                      <img className="dr-profile-img" src={img} alt="" />
                    </div>

                    <div className="dr-details">
                      <h2 className="text-center">Alhamd </h2>
                      <p
                        style={{ background: "#00afb9" }}
                        className="mb-1 dr-spelialization"
                      >
                        Ultrasound
                      </p>
                      <p className="mb-1 experience-dr">Eperience : 8 Years</p>
                      <p className="dr-qualifiction mb-1">MBBS ,MD</p>
                      <p className="dr-address">Jamalpur Uganda</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
