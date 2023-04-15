import { Navigate } from "react-router-dom";
import Appointment from "../components/dashcomponents/Appointment";

const PATIENT = [
    { path: "/patient", element: <h1>Dashbaord</h1> },
    { path: "/patient/profile", element: <h1>Profile</h1> },
    { path: "/patient/user", element: <h1>user</h1> },
    { path: "/patient/appointment", element: <Appointment/> },
    { path: "/patient/*", element: <Navigate to={'/patient'} /> },
  ]

export default PATIENT;