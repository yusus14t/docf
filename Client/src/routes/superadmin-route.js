import { lazy } from 'react';
const Posts = lazy(() => import('../components/Posts'));

const superAdminRoutes = [
    { path: `/profile`, element: <Posts /> },
    { path: `/dashboard`, element: <h1>Dashboard</h1> }
]

export default superAdminRoutes;
