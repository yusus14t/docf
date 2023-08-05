import { Navigate } from "react-router-dom";
import Patients from "../components/user-component/doctor/Patients";
import Dashbaord from "../components/user-component/Hospital/Dashboard";
import Notification from "../components/common-components/Notification/Notification";
import Support from "../components/common-components/Support/Support";
import AppointmentList from "../components/common-components/Appointment/AppointmentList";
import Settings from "../components/common-components/Settings/Settings";
import Departments from "../components/user-component/Hospital/Departments";
import Doctors from "../components/user-component/Doctors";


const HOSPITAL = [
  { path: "/hospital", element: <Navigate to={"/hospital/dashboard"} /> },
  { path: "/hospital/dashboard", element: <Dashbaord /> },
  { path: "/hospital/profile", element: <h1>Profile</h1> },
  { path: "/hospital/patient", element: <Patients /> },
  { path: "/hospital/appointment", element: <AppointmentList /> },
  { path: "/hospital/notification", element: <Notification /> },
  { path: "/hospital/support", element: <Support /> },
  { path: "/hospital/doctors", element: <Doctors /> },
  { path: "/hospital/setting", element: <Settings /> },
  { path: "/hospital/departments", element: <Departments /> },
  { path: "/hospital/*", element: <Navigate to={"/hospital/dashboard"} /> },
];

export default HOSPITAL;
