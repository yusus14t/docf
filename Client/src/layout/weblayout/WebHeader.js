import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NO_PHOTO from '../../assets.app/images/no-photo.png'
import logo from '../../assets.app/img/logo/logo.jpg'
import WebSidebar from "./WebSidebar";
import { Dropdown, Item } from "../../components/common-components/Dropdown";
import { WEB_MENU_ITEMS, userRoutes } from "../../constants/constant";
import { getFullPath, Logout } from "../../constants/utils";

const WebHeader = () => {
  const userInfo = JSON.parse(localStorage.getItem('user'))
  const [isLogin] = useState(Boolean(userInfo))
  const [isSideBbarOpen, setIsSidebarOpen] = useState(false);


  return (
    <>
      <WebSidebar isOpen={isSideBbarOpen} setIsOpen={setIsSidebarOpen} />
      <nav className="navbar ms-navbar">
        <div className="ms-aside-toggler ms-toggler ps-0">
          <span className="ms-toggler-bar bg-white"></span>
          <span className="ms-toggler-bar bg-white"></span>
          <span className="ms-toggler-bar bg-white"></span>
        </div>
        <div className="docfind-logo">
          <Link className="sigma_logo" to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <section className="menu_item">
          <div className="ms-nav-list ms-inline mb-0">
            {
              WEB_MENU_ITEMS.map(item => (
                !item.isDropdown
                  ? <NavLink to={item.path} className="text-white mx-2" data-bs-toggle="modal" >{item.name}</NavLink>
                  : <Dropdown
                      toggle={<div className="text-light cursor-pointer">{item.name}</div>}
                    >
                      <Item> <Link to={'/private-hospitals'} className="text-dark m-0 p-0" >Private Hospitals</Link> </Item>
                      <Item> <Link to={'/government-hospitals'} className="text-dark m-0 p-0" >Government Hospitals</Link> </Item>
                    </Dropdown>
              ))
            }
          </div>
        </section>
        {isLogin ? (
          <div className="ms-nav-item ms-nav-user dropdown d-profile cursor-pointer">
            <Dropdown
              toggle={
                <img
                  className="ms-user-img ms-img-round float-end avatar"
                  src={userInfo?.photo || userInfo?.organizationId?.photo ? getFullPath(userInfo?.photo || userInfo?.organizationId?.photo) : NO_PHOTO}
                  alt="people"
                />
              }
              text={`Welcome, ${ userInfo?.fullName || userInfo?.organizationId?.name || ""}`}
            >
              <li className="dropdown-divider"></li>

            {userInfo && <>
              <Item to={userRoutes[userInfo.userType]?.path}>Dashboard
              </Item>
              <Item onClick={() => Logout()}>Logout</Item>
            </>}
          </Dropdown>
        </div>)
          :
         <Link to={"/login"} className="login_button">Login/Signup</Link>
        }
        <div className="ms-toggler ms-d-block-sm pe-0 ms-nav-toggler" data-bs-toggle="slideDown" data-bs-target="#ms-nav-options" onClick={() => { setIsSidebarOpen(!isSideBbarOpen) }}>
          <span className="ms-toggler-bar bg-white"></span>
          <span className="ms-toggler-bar bg-white"></span>
          <span className="ms-toggler-bar bg-white"></span>
        </div>
      </nav>
    </>
  );
};

export default WebHeader;
