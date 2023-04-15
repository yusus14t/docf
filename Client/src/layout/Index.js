import Header from "./Header";
import Sidebar from "./Sidebar";
import "../assets.app/css/style.css"
import "../assets.app/css/custom.css"


import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <body className="ms-body ms-primary-theme ms-logged-out">
            <main className="body-content">
                <Header />
                <div className='main-content'>
                    <Sidebar />
                    <div style={{marginLeft:'255px', marginTop:'80px'}}>
                        <Outlet />
                    </div> 
                </div>
            </main>
        </body>
    )
}

export default Layout;