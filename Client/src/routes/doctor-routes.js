import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Appointment from "../components/common-components/Appointment";
import Patients from "../components/user-component/doctor/Patients";
import Dashbaord from "../components/user-component/doctor/Dashboard";
import Notification from "../components/common-components/Notification/Notification";
import Support from "../components/common-components/Support/Support";

const DOCTOR = [
    { path: "/doctor", element: <Navigate to={'/doctor/dashboard'} /> },
    { path: "/doctor/dashboard", element: <Dashbaord /> },
    { path: "/doctor/profile", element: <h1>Profile</h1> },
    { path: "/doctor/patient", element: <Patients/>},
    { path: "/doctor/appointment", element: <Appointment/> },
    { path: "/doctor/notification", element: <Notification/> },
    { path: "/doctor/support", element: <Support/> },
    { path: "/doctor/*", element: <Navigate to={'/doctor/dashboard'} /> }, 
  ]

export default DOCTOR;
