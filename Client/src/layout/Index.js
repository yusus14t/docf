import Header from "./Header";
import Sidebar from "./Sidebar";
import "../assets.app/css/style.css"
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <body className="ms-body ms-primary-theme ms-logged-out">
            <main className="body-content">
                <Sidebar /> 
                <Header />
                <div className='main-content'>
                    <Outlet />
                </div>
            </main>
        </body>
    )
}

export default Layout;