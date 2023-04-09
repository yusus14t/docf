import { Navigate, useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";


import WebLayout from "../layout/weblayout/WebLayout";
import LogIn from "../components/authentication/LogIn";
import Appointment from "../components/dashcomponents/Appointment";
import ClinicGrid from "../components/webcomponents/ClinicGrid";
import Home from "../components/webcomponents/Home.js";
import { userRoutes } from "../constants/constant";


const SignUp = lazy(() => import("../components/authentication/SignUp"));
const Logout = lazy(() => import("../components/authentication/Logout"));

const AppLayout = lazy(() => import("../layout/Index"));
const Detail = lazy(() => import('../components/webcomponents/Detail'));
const ClinicDetail = lazy(() => import('../components/webcomponents/Clinic_Details'));
const DoctorsList = lazy(() => import('../components/webcomponents/DoctorsList'))


const getUserType = () => {
  return JSON.parse(localStorage.getItem('user'))?.userType
}

let COMMON_ROUTE = [
  { path: "/", element: <Home/> },
  { path: "/doctor-detail", element: <Detail /> },
  { path: "/doctors", element: <DoctorsList /> },
  { path: "/clinic-detail", element: < ClinicDetail /> },
  { path: "/clinic", element: <ClinicGrid/> },
  { path: "/*", element: <h1>Route Not Found</h1>, },
];



const SUPER_ADMIN = [
    { path: "/super-admin", element: <h1>Dashbaord</h1> },
    { path: "/super-admin/profile", element: <h1>Profile</h1> },
    { path: "/super-admin/user", element: <h1>user</h1> },
    { path: "/super-admin/appointment", element: <Appointment/> },
]

const PATIENT = [
  { path: "/patient", element: <h1>Dashbaord</h1> },
  { path: "/patient/profile", element: <h1>Profile</h1> },
  { path: "/patient/user", element: <h1>user</h1> },
  { path: "/patient/appointment", element: <Appointment/> },
]

const USER_ROUTES = {
  SA: { path: "/super-admin", id: SUPER_ADMIN },
  PA: { path: "/patient", id: PATIENT },
};

const AUTHENTICATE_ROUTE = [
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <LogIn/> },
]

const AUTHENTICATE_REDIRECT_ROUTE = [
  { path: "/signup", element: <Navigate to={`/patient`} /> },
  { path: "/login",  element: <Navigate to={`/patient`} /> },// workon
  { path: '/logout', element: <Logout />}
]

export const AllRoutes = () => {
  let user = getUserType()
  let userRoute = USER_ROUTES[user]
  let localData = localStorage.getItem('session')
  if( localData ) COMMON_ROUTE = [...COMMON_ROUTE, ...AUTHENTICATE_REDIRECT_ROUTE]
  else COMMON_ROUTE = [...COMMON_ROUTE, ...AUTHENTICATE_ROUTE]

  let routes = useRoutes([
    { path: "/", element: <WebLayout />, children: COMMON_ROUTE },
    { path: `/${userRoute.path}`, element: <AppLayout />, children: userRoute.id },
  ]);

  return(
    <Suspense fallback={<h1>Loading....</h1>} >{routes}</Suspense>
  )
};
