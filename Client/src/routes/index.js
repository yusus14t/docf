import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";


import WebLayout from "../layout/weblayout/WebLayout";
import LogIn from "../components/authentication/LogIn";
import Appointment from "../components/dashcomponents/Appointment";
import ClinicGrid from "../components/webcomponents/ClinicGrid";
import Home from "../components/webcomponents/Home.js";


const SignUp = lazy(() => import("../components/authentication/SignUp"));
const AppLayout = lazy(() => import("../layout/Index"));
const Detail = lazy(() => import('../components/webcomponents/Detail'))
const Clinic_Detail = lazy(() => import('../components/webcomponents/Clinic_Details'))
const DoctorsList = lazy(() => import('../components/webcomponents/DoctorsList'))

const USER_ROUTE = {
  SA: { path: "/super-admin", id: "SUPER_ADMIN" },
};

const ROUTE = {
  SUPER_ADMIN: [
    {
      path: "/",
      title: "Dahboard",
      id: "DASHBOARD",
      exact: true,
      element: <h1>Dashbaord</h1>,
    },
    {
      path: "/profile",
      title: "Profile",
      id: "PROFILE",
      exact: true,
      element: <h1>Profile</h1>,
    },
    {
      path: "/user",
      title: "Profile",
      id: "PROFILE",
      exact: true,
      element: <h1>user</h1>,
    },
    {
      path: "/appointment",
      title: "appointment",
      id: "appointment",
      exact: true,
      element: <Appointment/>,
    },
  ],
};

const COMMON_ROUTE = [
  {
    path: "/",
    title: "Homepage",
    id: "HOMEPAGE",
    exact: true,
    element: <Home/>,
  },
  {
    path: "/doctor-detail",
    title: "Doctors Details",
    id: "DOCTOR_DETAIL",
    exact: true,
    element: <Detail />,
  },
  {
    path: "/doctors",
    title: "Doctors List",
    id: "DOCTOR_LIST",
    exact: true,
    element: <DoctorsList />,
  },
  {
    path: "/clinic-detail",
    title: "Clinic Details",
    id: "Clinic_DETAIL",
    exact: true,
    element: < Clinic_Detail />,
  },
  {
    path: "/clinic",
    title: "Clinic",
    id: "Clinic",
    exact: true,
    element: <ClinicGrid/>,
  },
  {
    path: "/signup",
    title: "Signup",
    id: "Signup",
    exact: true,
    element: <SignUp />,
  },
  
  {
    path: "/login",
    title: "Homepage",
    id: "HOMEPAGE",
    exact: true,
    element: <LogIn/>,
  },
  // {
  //   path: "/*",
  //   title: "Page Not Found",
  //   id: "PAGE_NOT_FOUND",
  //   exact: true,
  //   element: <h1>Route Not Found</h1>,
  // },
];

const AppRoutes = () => {
  let user = "SA";
  return (
    <Routes>
      {/* <Route exact path={`${USER_ROUTE[user].id}`} element={<h1>hgfdsdfgh</h1>}> */}
                    <AppLayout>
                      {ROUTE[USER_ROUTE[user].id].map((l, j) => (
                        <Route exact key={l.j}
                          path={`${l.path}`}
                          element={`${l.element}`}
                        />
                      ))}
                      <Route exact path="/*" element={<h1>Route Not found</h1>} />
                    </AppLayout>
              {/* </Route> */}
      </Routes>
  );
};

const WebRoute = () => {
  return (
    <WebLayout>
      <Routes>
        {COMMON_ROUTE.map((route, key) => (
          <Route
            exact
            key={key}
            path={`${route.path}`}
            element={
              <Suspense fallback={<h1>Loading...</h1>}>{route.element}</Suspense>
            }
          />
        ))}
      </Routes>
    </WebLayout>
  );
};

export default function AllRoutes() {
  // const isLogin = false;
  // let user = "SA";
  return (
    <>
      <WebRoute />
     {/* <AppRoutes /> */}
    </>
  );
}
