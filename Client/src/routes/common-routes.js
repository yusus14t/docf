import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { userRoutes as userRouteConstant } from "../constants/constant";

import Hospitals from "../components/webcomponents/Hospital/Hospitals";
import { userInfo } from "../constants/utils";
import Privacy from "../components/webcomponents/Privacy";
import Terms from "../components/webcomponents/Terms";
import NotFound from "../components/webcomponents/NotFound";
import NoData from "../components/webcomponents/NoData";
import Payment_Success from "../components/common-components/Payment_Success";
import Payment_Failed from "../components/common-components/Payment_Failed";
import PricingTable from '../components/common-components/PricingTable'
import Pricing from "../components/webcomponents/Pricing";

const ClinicDetail = lazy(() => import( '../components/webcomponents/Clinic_Details'))
const Doctors = lazy(() => import( '../components/webcomponents/doctor/Doctors'))
const Clinics = lazy(() => import( "../components/webcomponents/Clinics"))
const Home = lazy(() => import( "../components/webcomponents/Home.js"))
const About = lazy(() => import("../components/webcomponents/About.js"))
const Contact = lazy(() => import('../components/webcomponents/Contact'))
const DepartmentSignUp = lazy(() => import('../components/authentication/DepartmentSignUp'))
const AfterSignup = lazy(() => import('../components/process/AfterSignup'))
const Gynae = lazy(() => import("../components/webcomponents/Gynae"))
const Detail = lazy(() => import("../components/webcomponents/doctor/Detail"))
const HospitalDetails = lazy(() => import("../components/webcomponents/Hospital/HospitalDetails"))

const LogIn = lazy(() => import("../components/authentication/LogIn"));
const Radiologist = lazy(() => import("../components/webcomponents/Radiologist"));
const SpecializationDetails = lazy(() => import('../components/webcomponents/Specializations/SpecializationDetails'))
const Homeopathy =lazy(()=> import('../components/webcomponents/Homeopathy'));

const getUserType = () => userInfo?.userType;

const COMMON_ROUTE = [
  { path: "/", element: <Home /> },
  { path: "/doctor-detail", element: <Detail /> },
  { path: "/department-login", element: <DepartmentSignUp /> },
  { path: "/doctors", element: <Doctors /> },
  { path: "/about", element: <About /> },
  { path: "/clinic-detail/:id", element: <ClinicDetail /> },
  { path: "/clinics", element: <Clinics /> },
  { path: "/contact", element: <Contact /> },
  { path: "/hospitals", element: <Hospitals /> },
  { path: "/after", element: <AfterSignup /> },
  { path: "/gynae", element: <Gynae /> },
  { path: "/hospital-detail/:id", element: <HospitalDetails /> },
  { path: "/department-detail/:id", element: <ClinicDetail /> },
  { path: "/radiologist", element: <Radiologist /> },
  { path: "/homeopathy", element: <Homeopathy /> },
  { path: "/specialization/:id", element: <SpecializationDetails /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/terms", element: <Terms /> },
  { path:"/pricing-refund-policy", element:<Pricing/>},
  { path:"/payment-success", element:<Payment_Success />},
  { path:"/payment-failed", element:<Payment_Failed />},
  { path:"/pricing", element:<PricingTable/>},

  {
    path: "/login",
    element: getUserType() ? (
      <Navigate to={userRouteConstant[getUserType()]?.path || "/login"} />
    ) : (
      <LogIn />
    ),
  },
  { path: "/jjjj", element: <NoData /> },
  { path: "/*", element: <NotFound /> },
];

export default COMMON_ROUTE;
