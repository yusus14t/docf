import { memo  } from "react"
import Logo from '../assets.app/img/docfind-logo.png'
import Avatar from '../assets.app/img/dashboard/doctor-3.jpg'

const Header = () => {
    return(
        <>
            <nav className="navbar ms-navbar">
                <div className="ms-aside-toggler ms-toggler ps-0" data-bs-target="#ms-side-nav" data-bs-toggle="slideLeft">
                    <span className="ms-toggler-bar bg-white"></span>
                    <span className="ms-toggler-bar bg-white"></span>
                    <span className="ms-toggler-bar bg-white"></span>
                </div>
                <div className="docfind-logo d-none d-xl-block">
                    <a className="sigma_logo" href="../index-2.html">
                    {/* <img src={Logo} alt="logo" /> */}
                    <h2>Doctor Dekho</h2>
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

                    <li className="ms-nav-item dropdown">
                    <a href="/" className="text-disabled ms-has-notification" id="notificationDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="flaticon-bell"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="notificationDropdown">
                        <li className="dropdown-menu-header">
                        <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Notifications</span></h6>
                        <span className="badge rounded-pill badge-info">4 New</span>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li className="ms-scrollable ms-dropdown-list ps">
                        <a className="media p-2" href="/">
                            <div className="media-body">
                            <span>12 ways to improve your crypto dashboard</span>
                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                            </div>
                        </a>
                        <a className="media p-2" href="/">
                            <div className="media-body">
                            <span>You have newly registered users</span>
                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 45 minutes ago</p>
                            </div>
                        </a>
                        <a className="media p-2" href="/">
                            <div className="media-body">
                            <span>Your account was logged in from an unauthorized IP</span>
                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 2 hours ago</p>
                            </div>
                        </a>
                        <a className="media p-2" href="/">
                            <div className="media-body">
                            <span>An application form has been submitted</span>
                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 1 day ago</p>
                            </div>
                        </a>
                        <div className="ps__rail-x" ><div className="ps__thumb-x" tabIndex="0" ></div></div><div className="ps__rail-y" ><div className="ps__thumb-y" tabIndex="0" ></div></div></li>
                        <li className="dropdown-divider"></li>
                        <li className="dropdown-menu-footer text-center">
                        <a href="/">View all Notifications</a>
                        </li>
                    </ul>
                    </li>
                    <li className="ms-nav-item ms-nav-user dropdown">
                    <a href="/" id="userDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className=""> 
                    <img className="ms-user-img ms-img-round float-end" src={Avatar} alt="people" /> </a>
                    <ul className="dropdown-menu dropdown-menu-end user-dropdown" aria-labelledby="userDropdown">
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
                        <a className="media fs-14 p-2" href="pages/prebuilt-pages/default-login.html"> <span><i className="flaticon-shut-down me-2"></i> Logout</span> </a>
                        </li>
                    </ul>
                    </li>
                </ul>
                <div className="ms-toggler ms-d-block-sm pe-0 ms-nav-toggler" data-bs-toggle="slideDown" data-bs-target="#ms-nav-options">
                    <span className="ms-toggler-bar bg-white"></span>
                    <span className="ms-toggler-bar bg-white"></span>
                    <span className="ms-toggler-bar bg-white"></span>
                </div>
                </nav>
        </>
    )
}
export default memo(Header);