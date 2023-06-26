import { Navigate } from "react-router-dom"
import ClinicRegistration from '../components/user-component/ClinicRegistartion';
import HospitalRegistration from '../components/user-component/HospitalRegistration';
import Dashboard from '../components/user-component/mr/Dashboard';
import Doctors from '../components/user-component/Doctors';
import Support from '../components/common-components/Support/Support';
import Notification from '../components/common-components/Notification/Notification';

const MR = [
    { path: "/mr", element: <Navigate to={'/mr/dashboard'} /> },
    { path: "/mr/dashboard", element: <Dashboard /> },
    { path: "/mr/profile", element: <div> Profile </div> },
    { path: "/mr/user", element: <h1>user</h1> },
    { path: "/mr/clinic-registration", element: <ClinicRegistration /> },
    { path: "/mr/hospital-registration", element: <HospitalRegistration /> },
    { path: "/mr/doctors", element: <Doctors /> },
    { path: "/mr/clinics", element:  <h1>Clinics LIsts</h1>},
    { path: "/mr/setting", element:  <h1>Setting</h1>},
    { path: "/mr/notification", element:  <Notification />},
    { path: "/mr/support", element:  <Support />},
    { path: "/mr/*", element: <Navigate to={'/mr'} /> },
]

export default MR