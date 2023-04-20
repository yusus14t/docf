

export const userRoutes = {
    PT: {path: '/patient', title: 'Patient'},
    SA: {path: '/super-admin', title: 'Super Admin'},
    MA: {path: '/master-admin', title: 'Master Admin'},
    MR: {path: '/mr', title: 'MR'},
    DR: {path: '/doctor', title: 'Doctor'}
} 

export const MODULES = [
    {id: 'dashboard', title: 'Dashboard', pathname: '/', access: ['DR', 'PT', 'SA', 'MA', 'MR']},
    {id: 'patient', title: 'patient', pathname: '/patient', access: ['DR', 'PT', 'SA', 'MA', 'MR']},
    {id: 'appointment', title: 'Appointment', pathname: '/appointment', access: ['DR', 'PT', 'SA', 'MA', 'MR']},
    {id: 'clinicsregistration', title: 'Clinics Registration', pathname: '/clinicsregistration', access: ['SA', 'MA', 'MR']},
    {id: 'clinics', title: 'Clinics', pathname: '/', access: ['DR', 'PT', 'SA', 'MA', 'MR']},
    {id: 'doctors', title: 'Doctors', pathname: '/', access: ['DR', 'PT', 'SA', 'MA', 'MR']},
    {id: 'doctors', title: 'Doctors', pathname: '/', access: ['DR', 'PT', 'SA', 'MA', 'MR']},
    {id: 'doctors', title: 'Doctors', pathname: '/', access: ['DR', 'PT', 'SA', 'MA', 'MR']},
    {id: 'doctors', title: 'Doctors', pathname: '/', access: ['DR', 'PT', 'SA', 'MA', 'MR']},
    {id: 'doctors', title: 'Doctors', pathname: '/', access: ['DR', 'PT', 'SA', 'MA', 'MR']},
    {id: 'doctors', title: 'Doctors', pathname: '/', access: ['DR', 'PT', 'SA', 'MA', 'MR']},
    {id: 'doctors', title: 'Doctors', pathname: '/', access: ['DR', 'PT', 'SA', 'MA', 'MR']},
    {id: 'doctors', title: 'Doctors', pathname: '/', access: ['DR', 'PT', 'SA', 'MA', 'MR']},
    {id: 'doctors', title: 'Doctors', pathname: '/', access: ['DR', 'PT', 'SA', 'MA', 'MR']},
]