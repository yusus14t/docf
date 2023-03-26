import React from 'react';
import Logo from '../assets/img/medboard-logo-216x62.png';
import Doctor from '../assets/img/dashboard/doctor-3.jpg';
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div>
            <aside id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside ps ps--active-y ">
                {/* <!-- Logo --> */}
                <div className="logo-sn ms-d-block-lg">
                <a className="ps-0 ms-0 text-center" href="index.html"> <img src={Logo} alt="logo" /> </a>
                <a href="#" className="text-center ms-logo-img-link"> <img src={Doctor} alt="logo" /></a>
                <h5 className="text-center text-white mt-2">Dr.Samuel</h5>
                <h6 className="text-center text-white mb-3">Admin</h6>
                </div>
                {/* <!-- Navigation --> */}
                <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">
                {/* <!-- Dashboard --> */}
                <li className="menu-item">
                    <Link to={'/super-admin/profile'} className="has-chevron" >
                        <span>Dashboard </span>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to={'/super-admin/user'} className="has-chevron" >
                        <span>User </span>
                    </Link>
                </li>
                </ul>
                <div className="ps__rail-x" style={{left:0, bottom: 0}}>
                    <div className="ps__thumb-x" tabindex="0" style={{left: 0, width: 0}}>
                    </div>
                </div>
                <div className="ps__rail-y" style={{top: 0, height: 657, right: 0}}>
                    <div className="ps__thumb-y" tabindex="0" style={{top: 0, height: 279}}>
                    </div>
                </div>
        </aside>
        </div>
    );
}

export default Sidebar;