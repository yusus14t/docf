import React, { useEffect, useState } from 'react';
import Logo from '../assets.app/img/medboard-logo-216x62.png';
import Doctor from '../assets.app/img/dashboard/doctor-3.jpg';
import { Link, useLocation } from 'react-router-dom';
import { MODULES, userRoutes } from '../constants/constant';

function Sidebar({ isOpen, setIsOpen, mobileView }) {
    const location = useLocation();
    const pathname = location.pathname.split("/")
    const userInfo = JSON.parse(localStorage.getItem('user'))
    const [activeNav, setActiveNav] = useState(null)

    useEffect(() => {
        setActiveNav(pathname[2])
    }, [pathname,])


    return (
        <aside className={`side-nav fixed ms-aside-scrollable ms-aside ps ps--active-y ${!isOpen ? 'ms-aside-left' : ''} `} style={{ paddingBottom: '6rem' }}>
            <div className="logo-sn ms-d-block-lg">
                <a className="ps-0 ms-0 text-center" href="index.html"> <img src={Logo} alt="logo" /> </a>
                <div className="d-flex flex-row justify-content-around align-items-baseline">
                    <div className="">
                        <a href="/" className="text-center "> <img className="profile-image" src={Doctor} alt="logo" /></a>
                    </div>
                    <div className="">
                        <h5 className="text-center text-white mt-2">{['SA', 'MR', 'PT'].includes(userInfo.userType) ? userInfo?.fullName : userInfo?.organizationId?.name}</h5>
                        <h6 className="text-center text-white mb-3">{userInfo?.userType !== 'DR' ? userRoutes[userInfo?.userType].title : userInfo?.organizationId?.organizationType?.toUpperCase()}</h6>
                    </div>
                </div>
            </div>
            <ul className="accordion ms-main-aside fs-14 overflow-auto">
                {MODULES.filter((m) => m.access.includes(userInfo?.userType)).map((module, key) => <li className={`menu-item ${activeNav === module.id && 'nav-link-active'}`} onClick={() => { mobileView && setIsOpen(false) }} key={key}>
                    <Link to={`/${pathname[1]}${module.pathname}`} className="has-chevron"  >
                        <span>{module.title}</span>
                    </Link>
                </li>)}
            </ul>
        </aside>
    );
}

export default Sidebar;