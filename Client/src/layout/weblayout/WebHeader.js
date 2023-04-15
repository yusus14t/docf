import React, { useState } from "react";
import { Link } from "react-router-dom";
import Store from "../../redux/Store";
import logo from '../../assets.web/img/Doctor.png'


const WebHeader = () => {
  const userInfo = JSON.parse(localStorage.getItem('user'))
  const [ isLogin ] = useState(Boolean(userInfo))
  return (
    <div className="sigma_header-absolute">
      <header className="sigma_header header-absolute style-5 other can-sticky">
        <div className="sigma_header-middle">
          <div className="container-fluid">
            <div className="navbar">
              <div className="sigma_logo-wrapper">
                <a className="sigma_logo" href="index-2.html">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <ul className="navbar-nav">
                <li className="menu-item menu-item-has-children">
                  <Link to={"/"}>Home</Link>
                  {/* <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="index-2.html">Directory Landing</a>
                    </li>
                    <li className="menu-item">
                      <a href="doctor-clinic.html">Doctor Clinic</a>
                    </li>
                    <li className="menu-item">
                      <a href="pharmacy.html">
                        Pharmacy<span className="new-badge">New</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="emergency.html">
                        Emergency<span className="new-badge">New</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="surgery.html">
                        Surgery<span className="new-badge">New</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="dentist.html">
                        Dentist<span className="new-badge">New</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="hospital.html">
                        Hospital<span className="new-badge">New</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="laboratory.html">
                        Laboratory<span className="new-badge">New</span>
                      </a>
                    </li>
                  </ul> */}
                </li>

                <li className="menu-item menu-item-has-children">
                  <Link to={"/hospitals"}>Hostpitals</Link>
                  
                </li>
                
                <li className="menu-item menu-item-has-children">
                  <Link to={"/clinic"}>Clinics</Link>
                  
                </li>


                <li className="menu-item menu-item-has-children">
                  <Link to={"/doctors"}>Doctors</Link>
                </li>

                <li className="menu-item menu-item-has-children">
                  <Link to={"/about-us"}>About Us</Link>
                </li>

                
                <li className="menu-item menu-item-has-children">
                  <a href="/">Contact Us</a>
                  
                </li>
              </ul>
              <div className="sigma_header-controls style-2">
                <ul className="sigma_header-controls-inner">
                  
                  <li className="contact-btn">
                    <Link to={'/login'} className="sigma_btn btn-sm">
                      { isLogin ? 'Account' : 'Log In/Sign Up' }
                      <i className="fal fa-arrow-right"></i>
                    </Link>
                  </li>
                  <li className="aside-toggle aside-trigger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default WebHeader;
