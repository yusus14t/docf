import { memo, useEffect, useState  } from "react"
import Logo from '../assets.web/img/Doctor.png'
import Avatar from '../assets.app/img/dashboard/doctor-3.jpg'
import { useNavigate } from "react-router-dom"
import Sidebar from "./Sidebar"

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const mobileView = window.screen.availWidth <= 767
    const [isSidebarOpen, setIsSidebarOpen] = useState(mobileView ? false : true)

    useEffect(() => {
        window.addEventListener('resize', () => {
            const mobileView = window.screen.availWidth <= 767
            setIsSidebarOpen(mobileView ? false : true)
        })
        return() =>  window.removeEventListener('resize', () => {},  false) 
    }, [])

    const Logout = () => {
        localStorage.clear()
        window.location.replace('/login')
    }

    return(
        <>
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} mobileView={mobileView} />
            <nav className="navbar ms-navbar">
                <div className="ms-aside-toggler ms-toggler ps-0" data-bs-target="#ms-side-nav" data-bs-toggle="slideLeft">
                    <span className="ms-toggler-bar bg-white"></span>
                    <span className="ms-toggler-bar bg-white"></span>
                    <span className="ms-toggler-bar bg-white"></span>
                </div>
                <div className="docfind-logo">
                    <a className="sigma_logo" href="../index-2.html">
                    <img src={Logo} alt="logo" />
                    </a>
                </div>
                
                <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">

                    <li className="ms-nav-item  ms-d-none">
                    <a href="/" className="text-white" data-bs-toggle="modal"><i className="flaticon-spreadsheet me-2"></i> Make an appointment</a>
                    </li>

                    <li className="ms-nav-item ms-d-none">
                    <a href="/" className="text-white" data-bs-toggle="modal"><i className="flaticon-pencil me-2"></i> Write a prescription</a>
                    </li>

                    <li className="ms-nav-item ms-d-none">
                    <a href="/" className="text-white" data-bs-toggle="modal"><i className="flaticon-list me-2"></i> Generate Report</a>
                    </li>

                    <li className="ms-nav-item ms-nav-user dropdown">
                    <img className="ms-user-img ms-img-round float-end" src={Avatar} alt="people" onClick={() => setDropdownOpen(!dropdownOpen)} /> 
                    <ul className={`dropdown-menu dropdown-menu-end user-dropdown ${ dropdownOpen ? 'show' : '' }`}>
                        <li className="dropdown-menu-header">
                        <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Welcome, Dr Samuel Deo</span></h6>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li className="ms-dropdown-list">
                        <a className="media fs-14 p-2" href="pages/prebuilt-pages/user-profile.html"> <span><i className="flaticon-user me-2"></i> Profile</span> </a>
                        <a className="media fs-14 p-2" href="pages/apps/email.html"> <span><i className="flaticon-mail me-2"></i> Inbox</span> <span className="badge rounded-pill badge-info">3</span> </a>
                        <a className="media fs-14 p-2" href="pages/prebuilt-pages/user-profile.html"> <span><i className="flaticon-gear me-2"></i> Account Settings</span> </a>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li className="dropdown-menu-footer">
                        <a className="media fs-14 p-2" href="pages/prebuilt-pages/lock-screen.html"> <span><i className="flaticon-security me-2"></i> Lock</span> </a>
                        </li>
                        <li className="dropdown-menu-footer">
                        <div className="media fs-14 p-2 cursor-poitner" onClick={() => Logout()}> <span><i className="flaticon-shut-down me-2"></i> Logout</span> </div>
                        </li>
                    </ul>
                    </li>
                </ul>
                <div className="ms-toggler ms-d-block-sm pe-0 ms-nav-toggler" onClick={() => setIsSidebarOpen((old) => !old)}>
                    <span className="ms-toggler-bar bg-white"></span>
                    <span className="ms-toggler-bar bg-white"></span>
                    <span className="ms-toggler-bar bg-white"></span>
                </div>
                </nav>
        </>
    )
}
export default memo(Header);