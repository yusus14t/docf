import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { userRoutes as userRouteConstant } from '../constants/constant';

const Detail = lazy(() => import('../components/webcomponents/Detail'));
const ClinicDetail = lazy(() => import('../components/webcomponents/Clinic_Details'));
const DoctorsList = lazy(() => import('../components/webcomponents/DoctorsList'))
const SignUp = lazy(() => import("../components/authentication/SignUp"));
const ClinicGrid = lazy(() => import("../components/webcomponents/ClinicGrid"));
const LogIn = lazy(() => import("../components/authentication/LogIn"));
const Home = lazy(() => import("../components/webcomponents/Home.js"));

const getUserType = () => JSON.parse(localStorage.getItem('user'))?.userType


const COMMON_ROUTE = [
    { path: "/", element: <Home/> },
    { path: "/doctor-detail", element: <Detail /> },
    { path: "/doctors", element: <DoctorsList /> },
    { path: "/clinic-detail", element: < ClinicDetail /> },
    { path: "/clinic", element: <ClinicGrid/> },
    { path: "/login", element: getUserType() ? <Navigate to={userRouteConstant[getUserType()]?.path || '/login'} /> : <LogIn />},
    { path: "/signup", element: getUserType() ? <Navigate to={userRouteConstant[getUserType()]?.path || '/login'} /> : <SignUp />},
    { path: "/*", element: <h1>Route Not Found</h1>, },
];

export default COMMON_ROUTE;
  