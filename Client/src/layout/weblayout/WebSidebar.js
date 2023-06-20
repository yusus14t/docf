import React from 'react';
import Doctor from '../../assets.app/img/dashboard/doctor-3.jpg';
// import { Link,  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'

function WebSidebar({isOpen}) {        
    return (
      <aside
        className={`side-nav fixed ms-aside-scrollable ms-aside ps ps--active-y  ${
          !isOpen ? "ms-aside-left" : ""
        } `}
      >
        {/* <!-- Logo --> */}
        <div className="logo-sn ms-d-block-lg m-container">
          <div className="m-container">
            <div className="">
              <Link to="/" className="text-center">
                {" "}
                <img className="profile-image" src={Doctor} alt="logo" />
              </Link>
              <p className="m-title">Arif Mohd</p>
            </div>
            <div className="m-footer">
              <Link to={"/login"} className="m-login">
                Login/Signup
              </Link>
              {/* <Link>logout</Link> */}
            </div>
            <div className="">
              <ul className="m-menu">
                <li className="m-menu-item">
                  <Link to="/" className="text-white">
                    Home{" "}
                    <FontAwesomeIcon
                      style={{ marginLeft: "100px" }}
                      className="m-icon"
                      icon={faAnglesRight}
                    />
                    <hr className="underline" />
                  </Link>
                </li>

                <li className="m-menu-item">
                  <Link to="/hospitals" className="text-white">
                    {" "}
                    Hospitals{" "}
                    <FontAwesomeIcon
                      style={{ marginLeft: "66px" }}
                      className=" m-icon"
                      icon={faAnglesRight}
                    />
                    <hr className="underline" />
                  </Link>
                </li>

                <li className="m-menu-item">
                  <Link to="/clinic" className="text-white">
                    Clinics
                    <FontAwesomeIcon
                      style={{ marginLeft: "101px" }}
                      className="m-icon"
                      icon={faAnglesRight}
                    />{" "}
                    <hr className="underline" />
                  </Link>
                </li>

                <li className="m-menu-item">
                  <Link to="/doctors" className="text-white">
                    Doctors{" "}
                    <FontAwesomeIcon
                      style={{ marginLeft: "78px" }}
                      className="m-icon"
                      icon={faAnglesRight}
                    />{" "}
                    <hr className="underline" />
                  </Link>
                </li>

                <li className="m-menu-item">
                  <Link to="/clinic" className="text-white">
                    About Us
                    <FontAwesomeIcon
                      style={{ marginLeft: "70px" }}
                      className="m-icon"
                      icon={faAnglesRight}
                    />
                    <hr className="underline" />
                  </Link>
                </li>
                <li className="m-menu-item">
                  <Link to="/clinic" className="text-white">
                    Contact
                    <FontAwesomeIcon
                      style={{ marginLeft: "86px" }}
                      className="m-icon"
                      icon={faAnglesRight}
                    />
                    <hr className="underline" />
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </aside>
    );
}

export default WebSidebar;