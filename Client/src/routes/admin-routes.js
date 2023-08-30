import { Navigate } from "react-router-dom"
import Dashboard from '../components/user-component/superAdmin/Dashboard';
import Notification from '../components/common-components/Notification/Notification';
import Support from '../components/common-components/Support/Support';
import Settings from '../components/common-components/Settings/Settings';
import MR from "../components/user-component/superAdmin/MR";



const ADMIN = [
    { path: "/admin", element: <Dashboard /> },
    { path: "/admin/notification", element: <Notification /> },
    { path: "/admin/support", element: <Support /> },
    { path: "/admin/setting", element: <Settings /> },
    { path: "/admin/mr", element: <MR /> },
    { path: "/admin/*", element: <Navigate to={'/admin'} /> },
]

export default ADMIN