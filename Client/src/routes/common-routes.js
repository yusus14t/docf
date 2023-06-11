import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { userRoutes as userRouteConstant } from '../constants/constant';

import Detail from  '../components/webcomponents/Detail';
import ClinicDetail from  '../components/webcomponents/Clinic_Details';
import DoctorsList from  '../components/webcomponents/DoctorsList';
import SignUp from  "../components/authentication/SignUp";
import ClinicGrid from  "../components/webcomponents/ClinicGrid";
import LogIn from  "../components/authentication/LogIn";
import UserLogin from "../components/authentication/UserLogin"
import UserSignUp from "../components/authentication/UserSignUp"

import Home from  "../components/webcomponents/Home.js";
import About from "../components/webcomponents/About.js";
import Lockscreen from  "../components/authentication/Lockscreen";
import Contact from '../components/webcomponents/Contact';

const getUserType = () => JSON.parse(localStorage.getItem('user'))?.userType
const isLock = JSON.parse(localStorage.getItem('email'))

const COMMON_ROUTE = [
    { path: "/", element: <Home/> },
    { path: "/doctor-detail", element: <Detail /> },
    { path: "/doctors", element: <DoctorsList /> },
    { path: "/about", element: <About/> },
    { path: "/clinic-detail", element: < ClinicDetail /> },
    { path: "/clinic", element: <ClinicGrid/> },
    { path: "/contact", element: <Contact/> },
    { path: "/login", element: getUserType() ? <Navigate to={userRouteConstant[getUserType()]?.path ||  '/login' } /> : ( Boolean(isLock) ? <Navigate to={'/lock'} /> : <LogIn />)},
    { path: "/user-login", element: getUserType() ? <Navigate to={userRouteConstant[getUserType()]?.path ||  '/user-login' } /> : ( Boolean(isLock) ? <Navigate to={'/lock'} /> : <UserLogin/>)},
    { path: "/user-signup", element: getUserType() ? <Navigate to={userRouteConstant[getUserType()]?.path ||  '/user-signup' } /> : ( Boolean(isLock) ? <Navigate to={'/lock'} /> : <UserSignUp/>)},

    { path: "/signup", element: getUserType() ? <Navigate to={userRouteConstant[getUserType()]?.path || '/signup'} /> : <SignUp />},
    { path: "/lock", element: getUserType() ? <Navigate to={userRouteConstant[getUserType()]?.path || '/lock'} /> : <Lockscreen />},
    { path: "/*", element: <h1>Route Not Found</h1>, },
];

export default COMMON_ROUTE;
  