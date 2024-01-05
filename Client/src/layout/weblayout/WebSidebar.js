import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { userRoutes, WEB_MENU_ITEMS } from "../../constants/constant";

function WebSidebar({ isOpen, setIsOpen }) {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const logout= () =>{
    localStorage.clear()
  }

  return (
    <aside
      className={`side-nav fixed ms-aside-scrollable ms-aside ps ps--active-y  ${
        !isOpen ? "ms-aside-left" : ""
      } `}
    >
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
                    <a className=" d-flex justify-content-between align-items-center text-white cursor-pointer">
                      <div>{item.name}</div>
                      <FontAwesomeIcon className="m-icon" icon={faAnglesRight} />
                    </a>

                    <Link to={'/private-hospitals'} className="text-white cursor-pointer fs-6 ps-3 my-2" onClick={() => setIsOpen(!isOpen)}>
                      Pvt Hospitals
                    </Link>
                    <Link to={'/government-hospitals'} className=" text-white cursor-pointer fs-6 ps-3 my-2" onClick={() => setIsOpen(!isOpen)}>
                      Govt Hospitals
                    </Link>
                  
                </li>

              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default WebSidebar;
