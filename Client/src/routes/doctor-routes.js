import { Navigate } from "react-router-dom";
import Appointment from "../components/dashcomponents/Appointment";

const DOCTOR = [
    { path: "/doctor", element: <Navigate to={'/doctor/dashboard'} /> },
    { path: "/doctor/dashboard", element: <h1>Dashboard</h1> },
    { path: "/doctor/profile", element: <h1>Profile</h1> },
    { path: "/doctor/user", element: <h1>user</h1> },
    { path: "/doctor/appointment", element: <Appointment/> },
  ]

export default DOCTOR;
