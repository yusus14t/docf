import React, { useEffect, useState } from 'react';
import Logo from '../../assets.app/img/medboard-logo-216x62.png';
import Doctor from '../../assets.app/img/dashboard/doctor-3.jpg';
// import { Link,  } from 'react-router-dom';
import { userRoutes } from '../../constants/constant';

function WebSidebar({isOpen, setIsOpen, mobileView}) {
    // const location = useLocation();
    // const pathname = location.pathname.split("/")
    const userInfo = JSON.parse(localStorage.getItem('user')) || ""
    // const [activeNav, setActiveNav] = useState(null)

    // useEffect(() => {
    //     setActiveNav(pathname[2])
    // }, [pathname, ])

    return (
            <aside className={`side-nav fixed ms-aside-scrollable ms-aside ps ps--active-y  ${ !isOpen ? 'ms-aside-left' : '' } `}>
                {/* <!-- Logo --> */}
                <div className="logo-sn ms-d-block-lg">
                    <a className="ps-0 ms-0 text-center" href="index.html"> <img src={Logo} alt="logo" /> </a>
                    <div className="d-flex flex-row justify-content-around align-items-baseline">
                        <div className="">
                            <a href="/" className="text-center "> <img className="profile-image" src={Doctor} alt="logo" /></a>
                        </div>
                        <div className="">
                            <h5 className="text-center text-white mt-2">{userInfo?.firstName} {userInfo?.lastName}</h5>
                            <h6 className="text-center text-white mb-3">{userRoutes[userInfo?.userType].title}</h6>
                        </div>
                    </div>
                </div>
    
                <ul className="accordion ms-main-aside fs-14 overflow-auto">
                     <li className={`menu-item`}>dsgh</li>
                </ul>
        </aside>
    );
}

export default WebSidebar;