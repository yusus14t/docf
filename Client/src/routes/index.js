import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {lazy} from 'react'
// import superAdminRoutes from './superadmin-route';
const Posts = lazy(() => import('../components/Posts'));

const AllRoutes = () => {
    // const getModuleRoute = (type) => {
    //     let userTypes = {
    //         SA: { path: '/super-admin', element:<h1>super admin</h1>, routeList: superAdminRoutes },
    //     }
    //     return userTypes[type]
    // }

    const commonRoutes = [
        { path: `/`, element: <h1>Dashboard</h1> },
        { path: `/profile`, element: <Posts /> },
        { path: `/*`, element: <h1>Route Not found</h1> }
    ]

    return(
        <BrowserRouter>
            <Routes>

                {/* <Route exact path={getModuleRoute('SA').path} element={getModuleRoute('SA').element} >
                    {
                        getModuleRoute('SA').routeList.map( (route, key) => <Route exact key={key} path={ `/super-admin/${route.path}` } element={ route.element } />  )
                    }
                </Route> */}
                {
                    commonRoutes.map( (route, key) => <Route exact key={key} path={ route.path } element={ route.element } /> )
                }
            </Routes>
        </BrowserRouter>
    ) 
}
export default AllRoutes;