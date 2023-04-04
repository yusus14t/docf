import Header from "./Header";
import Sidebar from "./Sidebar";
// import '../assets.app/css/style.css';

const Layout = ({ children }) => {
    return (
        <body class="ms-body ms-primary-theme ms-logged-out">
            <main className="body-content">
                <Sidebar />
                <Header />
                <div className='main-content'>
                    { children }
                </div>
            </main>
        </body>
    )
}

export default Layout;