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
const About = lazy(()=> import("../components/webcomponents/About.js"))
const Lockscreen = lazy(() => import("../components/authentication/Lockscreen"));

const getUserType = () => JSON.parse(localStorage.getItem('user'))?.userType
const isLock = JSON.parse(localStorage.getItem('email'))

const COMMON_ROUTE = [
    { path: "/", element: <Home/> },
    { path: "/doctor-detail", element: <Detail /> },
    { path: "/doctors", element: <DoctorsList /> },
    { path: "/about", element: <About/> },
    { path: "/clinic-detail", element: < ClinicDetail /> },
    { path: "/clinic", element: <ClinicGrid/> },
    { path: "/login", element: getUserType() ? <Navigate to={userRouteConstant[getUserType()]?.path ||  '/login' } /> : ( Boolean(isLock) ? <Navigate to={'/lock'} /> : <LogIn />)},
    { path: "/signup", element: getUserType() ? <Navigate to={userRouteConstant[getUserType()]?.path || '/signup'} /> : <SignUp />},
    { path: "/lock", element: getUserType() ? <Navigate to={userRouteConstant[getUserType()]?.path || '/lock'} /> : <Lockscreen />},
    { path: "/*", element: <h1>Route Not Found</h1>, },
];

export default COMMON_ROUTE;
  