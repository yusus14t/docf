import { memo, useEffect, useState } from "react"
import Logo from '../assets.web/img/Doctor.png'
import Avatar from '../assets.app/img/dashboard/doctor-3.jpg'
import Sidebar from "./Sidebar"
import { Dropdown, Item } from '../components/common-components/Dropdown';
import Appointment from "../components/common-components/Appointment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faB, faBell, faCalendar, faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const mobileView = window.screen.availWidth <= 767
    const [isSidebarOpen, setIsSidebarOpen] = useState(mobileView ? false : true)


    useEffect(() => {
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

    const LockUser = () => {
        let user = JSON.parse( localStorage.getItem('user'))
        localStorage.clear()
        localStorage.setItem('email', JSON.stringify(user.email))
        window.location.replace('/login')
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
                    <li className="ms-nav-item ms-d-none">
                        <div className="text-white cursor-pointer" onClick={() => setIsModalOpen(true) }><FontAwesomeIcon className="Header-icon" icon={faCalendarDays} />Make an appointment</div>
                    </li>
                    
                    <li className="ms-nav-item ms-d-none">
                        <div className="text-white cursor-pointer" >
                        <Dropdown
                            toggle={ <FontAwesomeIcon className="Header-icon" icon={faBell} />}
                        >
                            <li className="dropdown-menu-header">
                                <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Notifications</span></h6>
                            </li>
                            <li className="dropdown-divider"></li>
                            <Item><span className="fs-14 p-2">Add new Hospital</span></Item>
                            <Item><span className="fs-14 p-2">Introduced Doctors to our new Service</span></Item>
                            <Item><span className="fs-14 p-2"> Renew Plan for Apollo Hospital </span></Item>
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