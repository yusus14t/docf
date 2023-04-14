import React from 'react';
import Logo from '../assets.app/img/medboard-logo-216x62.png';
import Doctor from '../assets.app/img/dashboard/doctor-3.jpg';
import { Link, useLocation } from 'react-router-dom';
import { MODULES,userRoutes } from '../constants/constant';

function Sidebar() {
    const location = useLocation();
    const path = location.pathname.split("/")[1]
    const userInfo = JSON.parse(localStorage.getItem('user'))
    return (
        <div>
            <aside id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside ps ps--active-y ">
                {/* <!-- Logo --> */}
                <div className="logo-sn ms-d-block-lg">
                    <a className="ps-0 ms-0 text-center" href="index.html"> <img src={Logo} alt="logo" /> </a>
                    <div className="d-flex flex-row justify-content-around">
                        <div className="">
                            <a href="/" className="text-center "> <img className="profile-image" src={Doctor} alt="logo" /></a>
                        </div>
                        <div className="">
                            <h5 className="text-center text-white mt-2">{userInfo.firstName} {userInfo.lastName}</h5>
                            <h6 className="text-center text-white mb-3">{userRoutes[userInfo.userType].title}</h6>
                        </div>
                    </div>
                </div>
    
                <ul className="accordion ms-main-aside fs-14 overflow-auto">
  
                    {MODULES.map( (module, key) => <li className="menu-item" key={key}>
                        <Link to={`/${path}${module.pathname}`} className="has-chevron" >
                            <span>{module.title}</span>
                        </Link>
                    </li>)}
                </ul>
                <div></div>
        </aside>
        </div>
    );
}

export default Sidebar;