import { Navigate } from "react-router-dom"
import Appointment from "../components/dashcomponents/Appointment"
import { lazy } from "react"
const ClinicRegistration = lazy(()=>import('../components/dashcomponents/ClinicRegistartion'))
const Dashboard = lazy(()=>import('../components/dashcomponents/superAdmin/Dashboard'))
const Doctors = lazy(()=>import('../components/dashcomponents/DoctorsList'))


const SUPER_ADMIN = [
    { path: "/super-admin", element: <Dashboard /> },
    { path: "/super-admin/profile", element: <h1>Profile</h1> },
    { path: "/super-admin/user", element: <h1>user</h1> },
    { path: "/super-admin/appointment", element: <Appointment/> },
    { path: "/super-admin/clinicsregistration", element: <ClinicRegistration/> },
    { path: "/super-admin/doctors", element: <Doctors /> },
    { path: "/super-admin/*", element: <Navigate to={'/super-admin'} /> },
]

export default SUPER_ADMIN