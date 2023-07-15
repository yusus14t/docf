

export const userRoutes = {
    PT: {path: '/patient', title: 'Patient'},
    SA: {path: '/super-admin', title: 'Super Admin'},
    MA: {path: '/master-admin', title: 'Master Admin'},
    MR: {path: '/mr', title: 'MR'},
    DR: {path: '/doctor', title: 'Doctor'},
    DP: {path: '/department', title: 'Department'},
    HL: {path: '/hospital', title: 'Hospital'},

} 

export const MODULES = [
    {id: 'dashboard', title: 'Dashboard', pathname: '/', access: ['DR', 'DP', 'HL', 'PT', 'SA', 'MR']},
    {id: 'patient', title: 'patient', pathname: '/patient', access: ['DR', 'DP', 'HL', 'SA', 'MA' ]},
    {id: 'appointment', title: 'Appointment', pathname: '/appointment', access: ['DR', 'DP', 'HL', 'PT',]},
    {id: 'departments', title: 'Departments', pathname: '/departments', access: ['HL', 'SA']},
    {id: 'clinic-registration', title: 'Clinics Registration', pathname: '/clinic-registration', access: [ 'MR']},
    {id: 'hospital-registration', title: 'Hospital Registration', pathname: '/hospital-registration', access: [ 'MR']},
    {id: 'clinics', title: 'Clinics', pathname: '/clinics', access: ['SA', 'MR']},
    {id: 'doctors', title: 'Doctors', pathname: '/doctors', access: ['SA', 'MR']},
    {id: 'setting', title: 'Setting', pathname: '/setting', access: ['DR', 'DP', 'HL', 'SA', 'MR', 'PT']},
    {id: 'notification', title: 'Notification', pathname: '/notification', access: ['DR', 'DP', 'HL', 'SA', 'MR', 'PT']},
    {id: 'support', title: 'Support', pathname: '/support', access: ['DR', 'DP', 'HL', 'SA', 'MR', 'PT']},
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