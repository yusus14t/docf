import { Navigate, useRoutes } from "react-router-dom";
import { Suspense } from "react";
import SUPER_ADMIN from './super-admin-routes';
import PATIENT from './user-routes';
import DOCTOR from './doctor-routes';
import MR from './mr-routes';

import COMMON_ROUTE from './common-routes';
import Loader from "../layout/Loader";

import WebLayout from "../layout/weblayout/WebLayout";
import AppLayout from "../layout/Index";

const getUserType = () => JSON.parse(localStorage.getItem('user'))?.userType


const USER_ROUTES = {
  SA: { path: "/super-admin", id: SUPER_ADMIN },
  PT: { path: "/patient", id: PATIENT },
  DR: { path: "/doctor", id: DOCTOR},
  MR: { path: "/mr", id: MR}
};

export const AllRoutes = () => {
  let user = getUserType()
  let userRoute = USER_ROUTES[user]

  let allUseRoutes = [{ 
    path: "/", 
    element: <WebLayout />, 
    children: COMMON_ROUTE 
  }]

  allUseRoutes.push({ 
    path: `/${userRoute?.path}`, 
    element: user ? <AppLayout /> : <Navigate to={'/login'} />, 
    children: user ? userRoute.id : []
  })
  
  let routes = useRoutes(allUseRoutes); 

  return(
    <Suspense fallback={<Loader />} >
      { routes}
      {/* <Loader /> */}
    </Suspense>
  )
};
