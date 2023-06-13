import Header from "./Header";
import "../assets.app/css/style.css"
import "../assets.app/css/custom.css"
import { Outlet } from "react-router-dom";
import ClinicRegistartion from "../components/user-component/ClinicRegistartion";

const Layout = () => {
    const userInfo = JSON.parse(localStorage.getItem('user'))
    return (
        <body className="ms-body ms-primary-theme ms-logged-out">
            <main className="body-content">
                <Header />
                <div className='main-content'>
                    <div id="main-content" className="ml255 mt80 " style={{ width: '100%',  }}>
                       { userInfo?.twoFactor?.isVerified || ['SA', "MR"].includes(userInfo.userType) || true ? <Outlet /> : <ClinicRegistartion source={'Clinic'} isSelfCreated={true} />}
                    </div> 
                </div>
            </main>
        </body>
    )
}

export default Layout;