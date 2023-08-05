import { Navigate } from "react-router-dom";
import { userRoutes as userRouteConstant } from "../constants/constant";

import ClinicDetail from  '../components/webcomponents/Clinic_Details';
import Doctors from  '../components/webcomponents/doctor/Doctors';
import Clinics from  "../components/webcomponents/Clinics";
import Home from  "../components/webcomponents/Home.js";
import About from "../components/webcomponents/About.js";
import Contact from '../components/webcomponents/Contact';
import DepartmentSignUp from '../components/authentication/DepartmentSignUp';
import AfterSignup from '../components/process/AfterSignup';
import Gynae from "../components/webcomponents/Gynae";
import Hospitals from "../components/webcomponents/Hospital/Hospitals";
import Detail from "../components/webcomponents/doctor/Detail";
import HospitalDetails from "../components/webcomponents/Hospital/HospitalDetails";
import DepartmentDetail from "../components/webcomponents/Hospital/DepartmentDetail";
import LogIn from "../components/authentication/LogIn";
import SpecializationDetails from "../components/webcomponents/Specializations/SpecializationDetails";
import { Ultrasound } from "../components/webcomponents/Ultrasound";

const getUserType = () => JSON.parse(localStorage.getItem("user"))?.userType;

const COMMON_ROUTE = [
  { path: "/", element: <Home /> },
  { path: "/doctor-detail", element: <Detail /> },
  { path: "/department-login", element: <DepartmentSignUp /> },
  { path: "/doctors", element: <Doctors /> },
  { path: "/about", element: <About /> },
  { path: "/clinic-detail/:id", element: <ClinicDetail /> },
  { path: "/clinic", element: <Clinics /> },
  { path: "/contact", element: <Contact /> },
  { path: "/hospitals", element: <Hospitals /> },
  { path: "/after", element: <AfterSignup /> },
  { path: "/gynae", element: <Gynae /> },
  { path: "/hospital/:id", element: <HospitalDetails /> },
  { path: "/department-details", element: <DepartmentDetail /> },
  { path: "/ultrasound", element: <Ultrasound /> },
  { path: "/specialization-deatils", element: <SpecializationDetails /> },

  {
    path: "/login",
    element: getUserType() ? (
      <Navigate to={userRouteConstant[getUserType()]?.path || "/login"} />
    ) : (
      <LogIn />
    ),
  },
  { path: "/*", element: <h1>Not Found</h1> },
];

export default COMMON_ROUTE;
