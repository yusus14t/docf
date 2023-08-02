import { memo, useEffect, useState } from "react"
import Logo from '../assets.app/img/logo/logo.png'
import Sidebar from "./Sidebar"
import { Dropdown, Item } from '../components/common-components/Dropdown';
import Appointment from "../components/common-components/Appointment/Appointment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBell, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import useNotification from '../hooks/Notification';
import { Link } from "react-router-dom";
import { userRoutes } from "../constants/constant";

const Header = () => {
    const notificationAPI = useNotification();
    const userInfo = JSON.parse(localStorage.getItem('user'))
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [notifications, setNotifications] = useState([])
    const [unseenNotificationCount, setUnseenNotificationCount] = useState(0)
    const mobileView = window.screen.availWidth <= 767
    const [isSidebarOpen, setIsSidebarOpen] = useState(mobileView ? false : true)
    const PRIORITY_COLORS = {
        'low': 'success',
        'medium': 'warning',
        'high': 'danger',
    }

    const getUserPath = () =>  userRoutes[userInfo.userType]?.path

    useEffect(() => {
        getNotifications()
        window.addEventListener('resize', () => {
            const mobileView = window.screen.availWidth <= 767
            setIsSidebarOpen(mobileView ? false : true)
        })
        return () => window.removeEventListener('resize', () => { }, false)
    }, [])

    const Logout = () => {
        localStorage.clear()
        window.location.replace('/login')
    }

    const getNotifications = async () => {
        try { 
            let { data } = await notificationAPI.get()
            setNotifications(data.notifications)
            setUnseenNotificationCount(data?.unseenNotificationCount)
        } catch(error){ console.log(error) }
    }


    return (
        <>
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} mobileView={mobileView} />
            <nav className="navbar ms-navbar">
                <div className="ms-aside-toggler ms-toggler ps-0" data-bs-target="#ms-side-nav" data-bs-toggle="slideLeft">
                    <span className="ms-toggler-bar bg-white"></span>
                    <span className="ms-toggler-bar bg-white"></span>
                    <span className="ms-toggler-bar bg-white"></span>
                </div>
                <div className="docfind-logo">
                    <a className="sigma_logo" href="/">
                        <img src={Logo} alt="logo" />
                    </a>
                </div>

                <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">
                    {userInfo.userType === "DR"  && <li className="ms-nav-item ms-d-none">
                        <div className="text-white cursor-pointer" onClick={() => setIsModalOpen(true) }><FontAwesomeIcon className="Header-icon" icon={faCalendarDays} />Make an appointment</div>
                    </li>}
                    
                    <li className="ms-nav-item ms-d-none">
                        <div className="text-white" >
                        <Dropdown
                            toggle={<> <FontAwesomeIcon className="Header-icon cursor-pointer" icon={faBell} />{ unseenNotificationCount > 0 && <span class="badge rounded-pill badge-outline-light bell-badge ">{unseenNotificationCount}</span>} </>}
                        >
                            <li className="dropdown-menu-header">
                                <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Notifications</span></h6>
                            </li>
                            <li className="dropdown-divider m-0 fs-12"></li>
                            {notifications.length ? 
                                notifications.map( notification => 
                                    <Item>
                                        <div className="row cursor-pointer">
                                            <div className="col-2">
                                                <span class={`badge badge-gradient-${PRIORITY_COLORS[notification.priority]}`} style={{ fontSize:"9px"}}>{notification.priority}</span>
                                            </div>
                                            <div className="col-10">
                                                <span className="fs-12 mx-3">{notification.title}</span>
                                            </div>
                                        </div>
                                    </Item>
                                ) : <Item><span>No Data</span></Item>

                            }
                            <li className="dropdown-divider m-0 fs-12"></li>

                            <Link to={`${getUserPath()}/notification`} className=" dropdown-menu-header">
                                {/* <li className=""> */}
                                    <h6 className="dropdown-header ms-inline m-0 fs-12"><span className="text-disabled">View All </span></h6>
                                {/* </li> */}
                            </Link>
    
                        </Dropdown>
                        </div>
                    </li>
                    <li className="ms-nav-item ms-nav-user dropdown">
                        <button className="btn  btn-light btn-md" onClick={() => Logout()}>Logout</button>
                    </li>
                </ul>
                <div className="ms-toggler ms-d-block-sm pe-0 ms-nav-toggler" onClick={() => setIsSidebarOpen((old) => !old)}>
                    <span className="ms-toggler-bar bg-white"></span>
                    <span className="ms-toggler-bar bg-white"></span>
                    <span className="ms-toggler-bar bg-white"></span>
                </div>
                {isModalOpen && 
                    <Appointment 
                        isOpen={isModalOpen}
                        setIsOpen={setIsModalOpen}
                    />
                }
            </nav>
        </>
    )
}
export default memo(Header);