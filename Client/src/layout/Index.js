import Header from "./Header";
import Sidebar from "./Sidebar";
import "../assets.app/css/style.css"
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <body class="ms-body ms-primary-theme ms-logged-out">
            <main className="body-content">
                <Sidebar />
                <Header />
                <div className='main-content'>
                    {/* { children } */}
                    <Outlet />
                </div>
            </main>
        </body>
    )
}

export default Layout;