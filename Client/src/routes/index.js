import { Navigate, useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";
import SUPER_ADMIN from './super-admin-routes';
import PATIENT from './user-routes';
import DOCTOR from './doctor-routes';
import COMMON_ROUTE from './common-routes';

const WebLayout = lazy(() => import("../layout/weblayout/WebLayout"));
const AppLayout = lazy(() => import("../layout/Index"));

const getUserType = () => JSON.parse(localStorage.getItem('user'))?.userType

const USER_ROUTES = {
  SA: { path: "/super-admin", id: SUPER_ADMIN },
  PT: { path: "/patient", id: PATIENT },
  DR: { path: "/doctor", id: DOCTOR}
};

export const AllRoutes = () => {
  let user = getUserType()
  let userRoute = USER_ROUTES[user]

  let allUseRoutes = [{ path: "/", element: <WebLayout />, children: COMMON_ROUTE },]
  allUseRoutes.push({ path: `/${userRoute?.path}`, element: user ? <AppLayout /> : <Navigate to={'/login'} />, children: user ? userRoute.id : [] })
  
  let routes = useRoutes(allUseRoutes); 

  return(
    <Suspense fallback={<h1>Loading....</h1>} >{routes}</Suspense>
  )
};
