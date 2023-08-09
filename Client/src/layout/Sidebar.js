import React, { useEffect, useState } from 'react';
import NO_PHOTO from '../assets.app/images/no-photo.png'
import { Link, useLocation } from 'react-router-dom';
import { MODULES, userRoutes } from '../constants/constant';
import { getFullPath } from '../constants/utils';

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
                <div className="d-flex flex-row justify-content-around align-items-baseline">
                    <div className="">
                        <a href="/" className="text-center "> <img className="profile-image" src={ userInfo.photo || userInfo?.organizationId?.photo ? getFullPath(userInfo.photo || userInfo?.organizationId?.photo) : NO_PHOTO} alt="logo" /></a>
                    </div>
                    <div className="">
                        <h5 className="text-center text-white mt-2">{['SA', 'MR', 'PT'].includes(userInfo.userType) ? userInfo?.name : userInfo?.organizationId?.name}</h5>
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