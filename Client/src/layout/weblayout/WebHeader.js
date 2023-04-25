import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Store from "../../redux/Store";
import Avatar from '../../assets.app/img/dashboard/doctor-3.jpg'

import logo from '../../assets.web/img/Doctor.png'
import WebSidebar from "./WebSidebar";

const WebHeader = () => {
  const userInfo = JSON.parse(localStorage.getItem('user'))
  const [ isLogin ] = useState(Boolean(userInfo))
  
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isSideBbarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const Logout = () => {
        localStorage.clear()
        navigate('/login')
  }
  return (
    <>
      <WebSidebar isOpen={isSideBbarOpen} setIsOpen={setIsSidebarOpen} />
      <nav className="navbar ms-navbar">
                  <div className="ms-aside-toggler ms-toggler ps-0" >
                      <span className="ms-toggler-bar bg-white"></span>
                      <span className="ms-toggler-bar bg-white"></span>
                      <span className="ms-toggler-bar bg-white"></span>
                  </div>
                  <div className="docfind-logo" >
                      <Link className="sigma_logo" to="/">
                      <img className="logo" src={logo} alt="logo" />
                      </Link>
                  </div>
                  
                  <div className="menu_item">
                    <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">

                      <li className="ms-nav-item  ms-d-none">
                      <Link to="/" className="text-white" data-bs-toggle="modal">Home</Link>
                      </li>

                      <li className="ms-nav-item ms-d-none">
                      <Link to="/hospitals" className="text-white" data-bs-toggle="modal"> Hospitals</Link>
                      </li>

                      <li className="ms-nav-item ms-d-none">
                      <Link to="/clinic" className="text-white" data-bs-toggle="modal">Clinics</Link>
                      </li>

                      <li className="ms-nav-item ms-d-none">
                      <Link to="/doctors" className="text-white" data-bs-toggle="modal">Doctors</Link>
                      </li>

                      <li className="ms-nav-item ms-d-none">
                      <Link to="/clinic" className="text-white" data-bs-toggle="modal">About Us</Link>
                      </li>
                      <li className="ms-nav-item ms-d-none">
                      <Link to="/clinic" className="text-white" data-bs-toggle="modal">Contact</Link>
                      </li>

                      
                      
                  </ul>
                  </div>
                  <div className="ms-nav-item  dropdown">
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="notificationDropdown">
                          <li className="dropdown-menu-header">
                          <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Notifications</span></h6>
                          <span className="badge rounded-pill badge-info">4 New</span>
                          </li>
                          <li className="dropdown-divider"></li>
                          <li className="ms-scrollable ms-dropdown-list ps">
                          <Link className="media p-2" to="/">
                              <div className="media-body">
                              <span>12 ways to improve your crypto dashboard</span>
                              <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                              </div>
                          </Link>
                          <Link className="media p-2" to="/">
                              <div className="media-body">
                              <span>You have newly registered users</span>
                              <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 45 minutes ago</p>
                              </div>
                          </Link>
                          <Link className="media p-2" to="/">
                              <div className="media-body">
                              <span>Your account was logged in from an unauthorized IP</span>
                              <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 2 hours ago</p>
                              </div>
                          </Link>
                          <Link className="media p-2" to="/">
                              <div className="media-body">
                              <span>An application form has been submitted</span>
                              <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 1 day ago</p>
                              </div>
                          </Link>
                          <div className="ps__rail-x" ><div className="ps__thumb-x" tabIndex="0" ></div></div><div className="ps__rail-y" ><div className="ps__thumb-y" tabIndex="0" ></div></div></li>
                          <li className="dropdown-divider"></li>
                          <li className="dropdown-menu-footer text-center">
                          <Link to="/">View all Notifications</Link>
                          </li>
                      </ul>
                      </div>
                  
                  {isLogin ? <div className="ms-nav-item ms-nav-user dropdown d-profile">
                    <img className="ms-user-img ms-img-round float-end avatar " src={Avatar} alt="people" onClick={() => setDropdownOpen(!dropdownOpen)} /> 
                      <ul className={`dropdown-menu dropdown-menu-end user-dropdown ${ dropdownOpen ? 'show' : '' }`}>
                          <li className="dropdown-menu-header">
                          <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Welcome, Dr Samuel Deo</span></h6>
                          </li>
                          <li className="dropdown-divider"></li>
                          <li className="ms-dropdown-list">
                          <Link className="media fs-14 p-2" to="pages/prebuilt-pages/user-profile.html"> <span><i className="flaticon-user me-2"></i> Profile</span> </Link>
                          <Link className="media fs-14 p-2" to="pages/apps/email.html"> <span><i className="flaticon-mail me-2"></i> Inbox</span> <span className="badge rounded-pill badge-info">3</span> </Link>
                          <Link className="media fs-14 p-2" to="pages/prebuilt-pages/user-profile.html"> <span><i className="flaticon-gear me-2"></i> Account Settings</span> </Link>
                          </li>
                          <li className="dropdown-divider"></li>
                          <li className="dropdown-menu-footer">
                          <Link className="media fs-14 p-2" to="pages/prebuilt-pages/lock-screen.html"> <span><i className="flaticon-security me-2"></i> Lock</span> </Link>
                          </li>
                          <li className="dropdown-menu-footer">
                          <div className="media fs-14 p-2 cursor-poitner" onClick={() => Logout()}> <span><i className="flaticon-shut-down me-2"></i> Logout</span> </div>
                          </li>
                      </ul>
                  </div> : 
                  <div className="login_button">
                    <Link to={"/login"}>Login/Signup</Link>
                  </div>}
                  <div className="ms-toggler ms-d-block-sm pe-0 ms-nav-toggler" data-bs-toggle="slideDown" data-bs-target="#ms-nav-options" onClick={() => {setIsSidebarOpen(!isSideBbarOpen)}}>
                      <span className="ms-toggler-bar bg-white"></span>
                      <span className="ms-toggler-bar bg-white"></span>
                      <span className="ms-toggler-bar bg-white"></span>
                  </div>
      </nav>
    </>
  );
};

export default WebHeader;
