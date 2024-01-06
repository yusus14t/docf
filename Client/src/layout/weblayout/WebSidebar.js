import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { userRoutes, WEB_MENU_ITEMS } from "../../constants/constant";
import OutsideWrapper from "../../components/common-components/OutsideWrapper";

function WebSidebar({ isOpen, setIsOpen }) {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const logout= () =>{
    localStorage.clear()
  }

  return (
    <OutsideWrapper callback={() => setIsOpen(false)} className={`side-nav fixed ms-aside-scrollable ms-aside ps ps--active-y  ${
      !isOpen ? "ms-aside-left" : ""
    } `} >
        <div className="logo-sn ms-d-block-lg m-container">
          <div className="m-container">
            <div className="m-footer mt-3">

              {userInfo ? (
                <>
                  <Link to={`${userRoutes[userInfo?.userType]?.path}/dashboard`}  className="m-login" > Dashboard </Link>
                  <Link onClick={logout} className="m-login"> LogOut  </Link>
                </>
              ) : (
                <Link to={"/login"} className="m-login">  Login/Signup </Link>
              )}

            </div>

            <div className="height-auto ">
              <ul className="m-menu ">
                {WEB_MENU_ITEMS.map((item, key) => (
                  !item.isDropdown ?  
                  <li className="m-menu-item w-100 pe-3" key={key} onClick={() => setIsOpen(!isOpen)} >
                    <Link to={item.path} className="text-white " key={item.id}>
                      <div className=" d-flex justify-content-between align-items-center">
                        <div>{item.name}</div>
                        <FontAwesomeIcon className="m-icon" icon={faAnglesRight} />
                      </div>
                    </Link>
                  </li>

                  :

                  <li className="m-menu-item w-100 pe-3" key={key} >
                      <Link to={'/private-hospitals'} className=" d-flex justify-content-between align-items-center text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        Pvt Hospitals
                        <FontAwesomeIcon className="m-icon" icon={faAnglesRight} />
                      </Link>
                      <Link to={'/government-hospitals'} className="d-flex justify-content-between align-items-center text-white cursor-pointer mt-2" onClick={() => setIsOpen(!isOpen)}>
                        Govt Hospitals
                        <FontAwesomeIcon className="m-icon" icon={faAnglesRight} />
                      </Link>
                    
                  </li>

                ))}
              </ul>
            </div>
          </div>
        </div>
    </OutsideWrapper>
  );
}

export default WebSidebar;
