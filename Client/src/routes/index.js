import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";


import WebLayout from "../layout/weblayout/WebLayout";
import LogIn from "../components/authentication/LogIn";
import Appointment from "../components/dashcomponents/Appointment";
import ClinicGrid from "../components/webcomponents/ClinicGrid";
import Home from "../components/webcomponents/Home.js";


const SignUp = lazy(() => import("../components/authentication/SignUp"));
const AppLayout = lazy(() => import("../layout/Index"));
const Detail = lazy(() => import('../components/webcomponents/Detail'));
const ClinicDetail = lazy(() => import('../components/webcomponents/Clinic_Details'));
const DoctorsList = lazy(() => import('../components/webcomponents/DoctorsList'))

const COMMON_ROUTE = [
  { path: "/", element: <Home/> },
  { path: "/doctor-detail", element: <Detail /> },
  { path: "/doctors", element: <DoctorsList /> },
  { path: "/clinic-detail", element: < ClinicDetail /> },
  { path: "/clinic", element: <ClinicGrid/> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <LogIn/> },
  { path: "/*", element: <h1>Route Not Found</h1>, },
];

const SUPER_ADMIN = [
    { path: "/super-admin", element: <h1>Dashbaord</h1> },
    { path: "/super-admin/profile", element: <h1>Profile</h1> },
    { path: "/super-admin/user", element: <h1>user</h1> },
    { path: "/super-admin/appointment", element: <Appointment/> },
]

const USER_ROUTES = {
  SA: { path: "/super-admin", id: SUPER_ADMIN },
};

export const AllRoutes = () => {
  let user = 'SA'
  let userRoute = USER_ROUTES[user]
  let routes = useRoutes([
    { path: "/", element: <WebLayout />, children: COMMON_ROUTE },
    { path: `/${userRoute.path}`, element: <AppLayout />, children: userRoute.id },
  ]);

  return(
    <Suspense fallback={<h1>Loading....</h1>} >{routes}</Suspense>
  )
};
