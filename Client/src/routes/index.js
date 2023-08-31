import { Navigate, useRoutes } from "react-router-dom";
import { Suspense } from "react";
import SUPER_ADMIN from "./super-admin-routes";
import ADMIN from "./admin-routes";
import PATIENT from "./patient-routes";
import CLINIC from "./clinic-routes";
import DEPARTMENT from "./department-routes";
import HOSPITAL from "./hospital-routes";
import MR from "./mr-routes";

import COMMON_ROUTE from "./common-routes";
import Loader from "../layout/Loader";

import WebLayout from  "../layout/weblayout/WebLayout";
import AppLayout from "../layout/Index";
import { userInfo } from "../constants/utils";

const getUser = () => userInfo

const USER_ROUTES = {
  SA: { path: "/super-admin", id: SUPER_ADMIN },
  PT: { path: "/patient", id: PATIENT },
  CL: { path: "/clinic", id: CLINIC },
  DP: { path: "/department", id: DEPARTMENT },
  MR: { path: "/mr", id: MR },
  HL: { path: "/hospital", id: HOSPITAL },
  AD: { path: "/admin", id: ADMIN },
};

export const AllRoutes = () => {
  let user = getUser();
  if( !user ) localStorage.clear()
  if( !user?.isActive ){
    localStorage.clear()
    user = null
  }
  let userRoute = USER_ROUTES[user?.userType];

  let allUseRoutes = [
    {
      path: "/",
      exact: true,
      element: <WebLayout />,
      children: COMMON_ROUTE,
    },
  ];

  if( userRoute?.path ){
    allUseRoutes.push({
      path: `/${userRoute?.path}`,
      exact: true,
      element: user ? <AppLayout /> : <Navigate to={"/login"} />,
      children: user ? userRoute.id : [],
    });
  }

  let routes = useRoutes(allUseRoutes);

  return <Suspense fallback={<Loader />}>{routes}</Suspense>;
};
