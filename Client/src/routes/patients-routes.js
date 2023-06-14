import { Navigate } from "react-router-dom";
import Appointment from "../components/common-components/Appointment/Appointment";
import Dashboard from '../components/user-component/patient/Dashboard';

const PATIENT = [
    { path: "/patient", element: <Dashboard /> },
    { path: "/patient/setting", element: <h1>Profile</h1> },
    { path: "/patient/appointment", element: <Appointment/> },
    { path: "/patient/*", element: <Navigate to={'/patient'} /> },
  ]

export default PATIENT;