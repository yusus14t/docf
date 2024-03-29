import { Navigate } from "react-router-dom"
import Dashboard from '../components/user-component/superAdmin/Dashboard';
import Doctors from '../components/user-component/Doctors';
import Notification from '../components/common-components/Notification/Notification';
import Support from '../components/common-components/Support/Support';
import Settings from '../components/common-components/Settings/Settings';
import Patients from "../components/user-component/doctor/Patients";
import Hospitals from "../components/user-component/superAdmin/Hospitals";
import Clinics from "../components/user-component/superAdmin/Clinics";
import MR from "../components/user-component/superAdmin/MR";
import Contacts from "../components/user-component/superAdmin/Contacts";



const SUPER_ADMIN = [
    { path: "/super-admin", element: <Dashboard /> },
    { path: "/super-admin/doctors", element: <Doctors /> },
    { path: "/super-admin/patients", element: <Patients /> },
    { path: "/super-admin/hospitals", element: <Hospitals /> },
    { path: "/super-admin/notification", element: <Notification /> },
    { path: "/super-admin/support", element: <Support /> },
    { path: "/super-admin/setting", element: <Settings /> },
    { path: "/super-admin/clinics", element: <Clinics /> },
    { path: "/super-admin/hospitals", element: <Clinics /> },
    { path: "/super-admin/mr", element: <MR /> },
    { path: "/super-admin/contacts", element: <Contacts /> },
    { path: "/super-admin/*", element: <Navigate to={'/super-admin'} /> },
]

export default SUPER_ADMIN