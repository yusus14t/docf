import { lazy } from "react"
import { Navigate } from "react-router-dom"
const Appointment  = lazy(() => import("../components/user-component/Appointment"));
const ClinicRegistration = lazy(()=>import('../components/user-component/ClinicRegistartion'))
const HospitalRegistration = lazy(()=>import('../components/user-component/HospitalRegistration'))
const Dashboard = lazy(()=>import('../components/user-component/mr/Dashboard'))
const Doctors = lazy(()=>import('../components/user-component/DoctorsList'))

const MR = [
    { path: "/mr", element: <Navigate to={'/mr/dashboard'} /> },
    { path: "/mr/dashboard", element: <Dashboard /> },
    { path: "/mr/profile", element: <div> Profile </div> },
    { path: "/mr/user", element: <h1>user</h1> },
    { path: "/mr/appointment", element: <Appointment/> },
    { path: "/mr/clinic-registration", element: <ClinicRegistration /> },
    { path: "/mr/hospital-registration", element: <HospitalRegistration /> },
    { path: "/mr/doctors", element: <Doctors /> },
    { path: "/mr/clinics", element:  <h1>Clinics LIsts</h1>},
    { path: "/mr/setting", element:  <h1>Setting</h1>},
    { path: "/mr/*", element: <Navigate to={'/mr'} /> },
]

export default MR