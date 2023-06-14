

export const userRoutes = {
    PT: {path: '/patient', title: 'Patient'},
    SA: {path: '/super-admin', title: 'Super Admin'},
    MA: {path: '/master-admin', title: 'Master Admin'},
    MR: {path: '/mr', title: 'MR'},
    DR: {path: '/doctor', title: 'Doctor'}
} 

export const MODULES = [
    {id: 'dashboard', title: 'Dashboard', pathname: '/', access: ['DR', 'PT', 'SA', 'MA', 'MR']},
    {id: 'patient', title: 'patient', pathname: '/patient', access: ['DR', 'SA', 'MA' ]},
    {id: 'appointment', title: 'Appointment', pathname: '/appointment', access: ['DR', 'PT', 'MA',]},
    {id: 'clinic-registration', title: 'Clinics Registration', pathname: '/clinic-registration', access: [ 'MA', 'MR']},
    {id: 'hospital-registration', title: 'Hospital Registration', pathname: '/hospital-registration', access: [ 'MA', 'MR']},
<<<<<<< HEAD
    {id: 'clinics', title: 'Clinics', pathname: '/clinics', access: ['DR', 'SA', 'MA', 'MR']},
    {id: 'doctors', title: 'Doctors', pathname: '/doctors', access: ['DR', 'SA', 'MA', 'MR']},
    {id: 'setting', title: 'Setting', pathname: '/setting', access: ['DR', 'SA', 'MA', 'MR', 'PT']},
    {id: 'notification', title: 'Notification', pathname: '/notification', access: ['DR', 'SA', 'MA', 'MR', 'PT']},
=======
    {id: 'clinics', title: 'Clinics', pathname: '/clinics', access: ['PT', 'SA', 'MA', 'MR']},
    {id: 'doctors', title: 'Doctors', pathname: '/doctors', access: ['SA', 'MA', 'MR']},
    {id: 'setting', title: 'Setting', pathname: '/settings', access: ['DR', 'SA', 'MA', 'MR']},
    {id: 'notification', title: 'Notification', pathname: '/notification', access: ['DR', 'SA', 'MA', 'MR']},
>>>>>>> db18f8bffcbec616e448b4b7cc255b0b7dff2109
    {id: 'support', title: 'Support', pathname: '/support', access: ['DR', 'SA', 'MA', 'MR', 'PT']},
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