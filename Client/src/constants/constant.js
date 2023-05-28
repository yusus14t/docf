

export const userRoutes = {
    PT: {path: '/patient', title: 'Patient'},
    SA: {path: '/super-admin', title: 'Super Admin'},
    MA: {path: '/master-admin', title: 'Master Admin'},
    MR: {path: '/mr', title: 'MR'},
    DR: {path: '/doctor', title: 'Doctor'}
} 

export const MODULES = [
    {id: 'dashboard', title: 'Dashboard', pathname: '/', access: ['DR', 'PT', 'SA', 'MA', 'MR']},
    {id: 'patient', title: 'patient', pathname: '/patient', access: ['DR', 'PT', 'SA', 'MA' ]},
    {id: 'appointment', title: 'Appointment', pathname: '/appointment', access: ['DR', 'PT', 'MA',]},
    {id: 'clinic-registration', title: 'Clinics Registration', pathname: '/clinic-registration', access: ['SA', 'MA', 'MR']},
    {id: 'hospital-registration', title: 'Hospital Registration', pathname: '/hospital-registration', access: ['SA', 'MA', 'MR']},
    {id: 'clinics', title: 'Clinics', pathname: '/clinics', access: ['DR', 'PT', 'SA', 'MA', 'MR']},
    {id: 'doctors', title: 'Doctors', pathname: '/doctors', access: ['DR', 'SA', 'MA', 'MR']},
    {id: 'setting', title: 'Setting', pathname: '/setting', access: ['DR', 'SA', 'MA', 'MR']},
    {id: 'notification', title: 'Notification', pathname: '/notification', access: ['DR', 'SA', 'MA', 'MR']},
    {id: 'support', title: 'Support', pathname: '/support', access: ['DR', 'SA', 'MA', 'MR']},
]