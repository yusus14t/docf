import { Navigate } from "react-router-dom"
import Appointment from "../components/user-component/Appointment"
import ClinicRegistration from '../components/user-component/ClinicRegistartion';
import HospitalRegistration from "../components/user-component/HospitalRegistration";
import Dashboard from '../components/user-component/superAdmin/Dashboard';
import Doctors from '../components/user-component/DoctorsList';


const SUPER_ADMIN = [
    { path: "/super-admin", element: <Dashboard /> },
    { path: "/super-admin/profile", element: <h1>Profile</h1> },
    { path: "/super-admin/user", element: <h1>user</h1> },
    { path: "/super-admin/appointment", element: <Appointment/> },
    { path: "/super-admin/clinicsregistration", element: <ClinicRegistration/> },
    { path: "/super-admin/hospitalregistration", element: <HospitalRegistration/> },
    { path: "/super-admin/doctors", element: <Doctors /> },
    { path: "/super-admin/*", element: <Navigate to={'/super-admin'} /> },
]

export default SUPER_ADMIN