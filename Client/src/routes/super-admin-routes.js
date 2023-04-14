import { lazy } from "react"

const SUPER_ADMIN = [
    { path: "/super-admin", element: <h1>Dashbaord</h1> },
    { path: "/super-admin/profile", element: <h1>Profile</h1> },
    { path: "/super-admin/user", element: <h1>user</h1> },
    { path: "/super-admin/appointment", element: lazy(() => import('../components/dashcomponents/Appointment')) },
]

export default SUPER_ADMIN