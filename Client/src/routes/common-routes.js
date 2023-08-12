import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { userRoutes as userRouteConstant } from "../constants/constant";

const ClinicDetail = lazy(() => import( '../components/webcomponents/Clinic_Details'))
const Doctors = lazy(() => import( '../components/webcomponents/doctor/Doctors'))
const Clinics = lazy(() => import( "../components/webcomponents/Clinics"))
const Home = lazy(() => import( "../components/webcomponents/Home.js"))
const About = lazy(() => import("../components/webcomponents/About.js"))
const Contact = lazy(() => import('../components/webcomponents/Contact'))
const DepartmentSignUp = lazy(() => import('../components/authentication/DepartmentSignUp'))
const AfterSignup = lazy(() => import('../components/process/AfterSignup'))
const Gynae = lazy(() => import("../components/webcomponents/Gynae"))
const Hospitals = lazy(() => import("../components/webcomponents/Hospital/Hospitals"))
const Detail = lazy(() => import("../components/webcomponents/doctor/Detail"))
const HospitalDetails = lazy(() => import("../components/webcomponents/Hospital/HospitalDetails"))
const LogIn = lazy(() => import("../components/authentication/LogIn"));
const Ultrasound = lazy(() => import("../components/webcomponents/Ultrasound"));
const SpecializationDetails = lazy(() => import('../components/webcomponents/Specializations/SpecializationDetails'))

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
  { path: "/department/:id", element: <ClinicDetail /> },
  { path: "/ultrasounds", element: <Ultrasound /> },
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
