import { Navigate } from "react-router-dom"
import Dashboard from '../components/user-component/superAdmin/Dashboard';
import Doctors from '../components/user-component/Doctors';
import Notification from '../components/common-components/Notification/Notification';
import Support from '../components/common-components/Support/Support';
import Settings from '../components/common-components/Settings/Settings';


const SUPER_ADMIN = [
    { path: "/super-admin", element: <Dashboard /> },
    { path: "/super-admin/profile", element: <h1>Profile</h1> },
    { path: "/super-admin/user", element: <h1>user</h1> },
    { path: "/super-admin/doctors", element: <Doctors /> },
    { path: "/super-admin/notification", element: <Notification /> },
    { path: "/super-admin/support", element: <Support /> },
    { path: "/super-admin/setting", element: <Settings /> },
    { path: "/super-admin/clinics", element: <Settings /> },
    { path: "/super-admin/*", element: <Navigate to={'/super-admin'} /> },
]

export default SUPER_ADMIN