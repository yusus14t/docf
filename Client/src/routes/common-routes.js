import { Navigate } from "react-router-dom";
import { userRoutes as userRouteConstant } from "../constants/constant";

// import Detail from  '../components/webcomponents/Detail';
import ClinicDetail from  '../components/webcomponents/Clinic_Details';
import Doctors from  '../components/webcomponents/doctor/Doctors';
import SignUp from  "../components/authentication/SignUp";
import Clinics from  "../components/webcomponents/Clinics";
// import LogIn from  "../components/authentication/LogIn";
import UserSignUp from "../components/authentication/UserSignUp"
import Home from  "../components/webcomponents/Home.js";
import About from "../components/webcomponents/About.js";
// import Lockscreen from  "../components/authentication/Lockscreen";
import Contact from '../components/webcomponents/Contact';
import DepartmentSignUp from '../components/authentication/DepartmentSignUp';
import AfterSignup from '../components/process/AfterSignup';
import Gynae from "../components/webcomponents/Gynae";
import Hospitals from "../components/webcomponents/Hospital/Hospitals";
import LogIn from "../components/authentication/LogIn";
import Detail from "../components/webcomponents/doctor/Detail";
import HospitalDetails from "../components/webcomponents/Hospital/HospitalDetails";

const getUserType = () => JSON.parse(localStorage.getItem("user"))?.userType;
const isLock = JSON.parse(localStorage.getItem("email"));

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
  { path: "/login2", element: <LogIn /> },
  { path: "/gynae", element: <Gynae /> },
  { path: "/hospital-details", element: <HospitalDetails /> },

  {
    path: "/login",
    element: getUserType() ? (
      <Navigate to={userRouteConstant[getUserType()]?.path || "/login"} />
    ) : Boolean(isLock) ? (
      <Navigate to={"/lock"} />
    ) : (
      <UserSignUp />
    ),
  },
  {
    path: "/patient-login",
    element: getUserType() ? (
      <Navigate
        to={userRouteConstant[getUserType()]?.path || "/patient-login"}
      />
    ) : (
      <UserSignUp />
    ),
  },

  {
    path: "/signup",
    element: getUserType() ? (
      <Navigate to={userRouteConstant[getUserType()]?.path || "/signup"} />
    ) : (
      <SignUp />
    ),
  },
  { path: "/*", element: <h1>Route Not Found</h1> },
];

export default COMMON_ROUTE;
