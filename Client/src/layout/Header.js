import { memo, useEffect, useState } from "react"
import Logo from '../assets.web/img/Doctor.png'
import Avatar from '../assets.app/img/dashboard/doctor-3.jpg'
import Sidebar from "./Sidebar"
import { Dropdown, Item } from '../components/common-components/Dropdown';
import Appointment from "../components/common-components/Appointment/Appointment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBell, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import useNotification from '../hooks/Notification';


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

    const LockUser = () => {
        localStorage.clear()
        localStorage.setItem('email', JSON.stringify(userInfo.email))
        window.location.replace('/login')
    }

    return (
        <>
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} mobileView={mobileView} />
            <nav className="navbar ms-navbar position-fixed">
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
                        <div className="text-white cursor-pointer" >
                        <Dropdown
                            toggle={<> <FontAwesomeIcon className="Header-icon" icon={faBell} />{ unseenNotificationCount > 0 && <span class="badge rounded-pill badge-outline-light bell-badge ">{unseenNotificationCount}</span>} </>}
                        >
                            <li className="dropdown-menu-header">
                                <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Notifications</span></h6>
                            </li>
                            <li className="dropdown-divider m-0 fs-12"></li>
                            {notifications.length ? 
                                notifications.map( notification => 
                                    <Item>
                                        <div className="row">
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

                            <li className="dropdown-menu-header">
                                <h6 className="dropdown-header ms-inline m-0 fs-12"><span className="text-disabled">View All </span></h6>
                            </li>
    
                        </Dropdown>
                        </div>
                    </li>
                    <li className="ms-nav-item ms-nav-user dropdown">
                        <Dropdown
                            toggle={<img className="ms-user-img ms-img-round float-end" src={Avatar} alt="people" />}
                        >
                            <li className="dropdown-menu-header">
                                <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Welcome, Dr Samuel Deo</span></h6>
                            </li>
                            <li className="dropdown-divider"></li>
                            <Item><span className="fs-14 p-2"><i className="flaticon-user me-2"></i> Profile</span></Item>
                            <Item><span className="fs-14 p-2"><i className="flaticon-user me-2"></i> Inbox</span></Item>
                            <Item><span className="fs-14 p-2"><i className="flaticon-user me-2"></i> Setting</span></Item>
                            <Item onClick={() => LockUser()}><span className="fs-14 p-2"><i className="flaticon-user me-2"></i>Lock</span></Item>
                            <Item onClick={() => Logout()}><span className="fs-14 p-2"><i className="flaticon-user me-2"></i> Logout</span></Item>
                        </Dropdown>
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