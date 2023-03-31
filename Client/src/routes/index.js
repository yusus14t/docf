import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
import '../assets.app/css/style.css';  // for App

import WebLayout from "../layout/weblayout/WebLayout";


const SignUp = lazy(() => import("../components/authentication/SignUp"));
const Layout = lazy(() => import("../layout/Index"));

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
  ],
};

const COMMON_ROUTE = [
  {
    path: "/",
    title: "Homepage",
    id: "HOMEPAGE",
    exact: true,
    element: <h1>HOMEPAGE</h1>,
  },
  {
    path: "/doctors",
    title: "Doctors",
    id: "DOCTORS",
    exact: true,
    element: <h1>Doctors</h1>,
  },
  {
    path: "/signup",
    title: "Signup",
    id: "Signup",
    exact: true,
    element: <SignUp />,
  },
  {
    path: "/*",
    title: "Page Not Found",
    id: "PAGE_NOT_FOUND",
    exact: true,
    element: <h1>Route Not Found</h1>,
  },
];

const AppRoutes = () => {
  let user = "SA";
  return (
    <Layout>
      <Routes>
        {ROUTE[USER_ROUTE[user].id].map((l, j) => (
          <Route
            exact
            key={l.j}
            path={`${USER_ROUTE[user].path}${l.path}`}
            element={
              <Suspense fallback={<h1>Loading...</h1>}>{l.element}</Suspense>
            }
          />
        ))}
        <Route exact path="/*" element={<h1>Route Not found</h1>} />
      </Routes>
    </Layout>
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
  const isLogin = false;

  return (
    <>
      {!isLogin && <WebRoute />}
      {isLogin && <AppRoutes />}
    </>
  );
}
