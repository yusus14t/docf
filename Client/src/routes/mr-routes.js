import { Navigate } from "react-router-dom"
import Appointment from "../components/dashcomponents/Appointment"
import { lazy } from "react"
const ClinicRegistration = lazy(()=>import('../components/dashcomponents/ClinicRegistartion'))
const Dashboard = lazy(()=>import('../components/dashcomponents/superAdmin/Dashboard'))
const Doctors = lazy(()=>import('../components/dashcomponents/DoctorsList'))


const SUPER_ADMIN = [
    { path: "/mr", element: <Dashboard /> },
    { path: "/mr/profile", element: <div> Profile </div> },
    { path: "/mr/user", element: <h1>user</h1> },
    { path: "/mr/appointment", element: <Appointment/> },
    { path: "/mr/clinicsregistration", element: <ClinicRegistration/> },
    { path: "/mr/doctors", element: <Doctors /> },
    { path: "/mr/*", element: <Navigate to={'/mr'} /> },
]

export default SUPER_ADMIN