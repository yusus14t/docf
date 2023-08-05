

export const userRoutes = {
    PT: {path: '/patient', title: 'Patient'},
    SA: {path: '/super-admin', title: 'Super Admin'},
    MR: {path: '/mr', title: 'MR'},
    DP: {path: '/department', title: 'Department'},
    HL: {path: '/hospital', title: 'Hospital'},
    CL: {path: '/clinic', title: 'Clinic'},
} 

export const MODULES = [
    {id: 'dashboard', title: 'Dashboard', pathname: '/', access: ['CL', 'DP', 'HL', 'PT', 'SA', 'MR']},
    {id: 'patient', title: 'patient', pathname: '/patient', access: ['CL', 'DP', 'HL', 'SA', 'MA' ]},
    {id: 'appointment', title: 'Appointment', pathname: '/appointment', access: ['CL', 'DP', 'HL', 'PT',]},
    {id: 'departments', title: 'Departments', pathname: '/departments', access: ['HL', 'SA']},
    {id: 'clinic-registration', title: 'Clinics Registration', pathname: '/clinic-registration', access: [ 'MR']},
    {id: 'hospital-registration', title: 'Hospital Registration', pathname: '/hospital-registration', access: [ 'MR']},
    {id: 'clinics', title: 'Clinics', pathname: '/clinics', access: ['SA', 'MR']},
    {id: 'doctors', title: 'Doctors', pathname: '/doctors', access: ['SA', 'HL', 'CL', 'DP']},
    {id: 'setting', title: 'Setting', pathname: '/setting', access: ['CL', 'DP', 'HL', 'SA', 'PT']},
    {id: 'notification', title: 'Notification', pathname: '/notification', access: ['CL', 'DP', 'HL', 'SA', 'MR', 'PT']},
    {id: 'support', title: 'Support', pathname: '/support', access: ['CL', 'DP', 'HL', 'SA', 'MR', 'PT']},
]

export const PRIORITY = [
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'High', value: 'high' },
]

export const DAYS = [
    { id:0, value: 'MON', day: 'Monday' },
    { id:1, value: 'TUE', day: 'Tuesday' },
    { id:2, value: 'WED', day: 'Wednesday' },
    { id:3, value: 'THU', day: 'Thursday' },
    { id:4, value: 'FRI', day: 'Friday' },
    { id:5, value: 'SAT', day: 'Saturday' },
    { id:6, value: 'SUN', day: 'Sunday' },
]

export const WEB_MENU_ITEMS = [
         { id: "home", name: "Home", path: "/" },
         { id: "gynae", name: "Gynae", path: "/gynae" },
         { id: "hospitals", name: "Hospitals", path: "/hospitals" },
         { id: "clinic", name: "Clinics", path: "/clinic" },
         { id: "doctors", name: "Doctors", path: "/doctors" },
         { id: "ultrasound", name: "Ultrasound", path: "/ultrasound" },
         { id: "about", name: "About Us", path: "/about" },
         { id: "contact", name: "Contact Us", path: "/contact" },
       ];