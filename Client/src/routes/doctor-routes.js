import { Navigate } from "react-router-dom";
import Patients from "../components/user-component/doctor/Patients";
import Dashbaord from "../components/user-component/doctor/Dashboard";
import Notification from "../components/common-components/Notification/Notification";
import Support from "../components/common-components/Support/Support";
import AppointmentList from "../components/common-components/Appointment/AppointmentList";
import Settings from "../components/common-components/Settings/Settings";

const DOCTOR = [
  { path: "/doctor", element: <Navigate to={"/doctor/dashboard"} /> },
  { path: "/doctor/dashboard", element: <Dashbaord /> },
  { path: "/doctor/profile", element: <h1>Profile</h1> },
  { path: "/doctor/patient", element: <Patients /> },
  { path: "/doctor/appointment", element: <AppointmentList /> },
  { path: "/doctor/notification", element: <Notification /> },
  { path: "/doctor/support", element: <Support /> },
  { path: "/doctor/setting", element: <Settings /> },
  { path: "/doctor/*", element: <Navigate to={"/doctor/dashboard"} /> },
];

export default DOCTOR;
