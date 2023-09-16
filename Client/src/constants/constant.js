

export const userRoutes = {
    PT: {path: '/patient', title: 'Patient'},
    SA: {path: '/super-admin', title: 'Super Admin'},
    MR: {path: '/mr', title: 'MR'},
    DP: {path: '/department', title: 'Department'},
    HL: {path: '/hospital', title: 'Hospital'},
    CL: {path: '/clinic', title: 'Clinic'},
    AD: {path: '/admin', title: 'Admin'},
} 

export const MODULES = [
    {id: '', title: 'Dashboard', pathname: '/', access: ['CL', 'DP', 'HL', 'PT', 'SA', 'MR', 'AD']},
    {id: 'patients', title: 'patient', pathname: '/patients', access: ['CL', 'DP', 'HL', 'SA' ]},
    {id: 'appointment', title: 'Appointment', pathname: '/appointment', access: ['CL', 'DP', 'HL' ]},
    {id: 'departments', title: 'Departments', pathname: '/departments', access: ['HL', 'SA']},
    {id: 'clinic-registration', title: 'Clinics Registration', pathname: '/clinic-registration', access: [ 'MR']},
    {id: 'hospital-registration', title: 'Hospital Registration', pathname: '/hospital-registration', access: [ 'MR']},
    {id: 'clinics', title: 'Clinics', pathname: '/clinics', access: ['SA', 'MR']},
    {id: 'hospitals', title: 'Hospitals', pathname: '/hospitals', access: ['MR']},
    {id: 'doctors', title: 'Doctors', pathname: '/doctors', access: ['SA', 'HL', 'CL', 'DP', 'MR']},
    {id: 'mr', title: 'MR', pathname: '/mr', access: ['SA', 'AD']},
    {id: 'contacts', title: 'Contacts', pathname: '/contacts', access: ['SA', 'AD']},
    {id: 'setting', title: 'Setting', pathname: '/setting', access: ['CL', 'DP', 'HL', 'SA', 'MR', 'AD' ]},
    {id: 'notification', title: 'Notification', pathname: '/notification', access: ['CL', 'DP', 'HL', 'SA', 'MR', 'PT', 'AD']},
    {id: 'support', title: 'Support', pathname: '/support', access: ['CL', 'DP', 'HL', 'SA', 'MR', 'PT', 'AD']},
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
         { id: "clinics", name: "Clinics", path: "/clinics" },
         { id: "doctors", name: "Doctors", path: "/doctors" },
         { id: "ultrasounds", name: "Ultrasounds", path: "/ultrasounds" },
         { id: "homeopathy", name: "Homeopathy", path: "/homeopathy" },
         { id: "about", name: "About Us", path: "/about" },
         { id: "contact", name: "Contact Us", path: "/contact" },
       ];

export const SERVICES = [
    { id: 'PARKING', name: 'Parking' },
    { id: 'AMBULANCE', name: 'Ambulance' },
    { id: 'WAITING', name: 'Waiting' },
    { id: 'FOOD_FOR_PATIENT', name: 'Fooding for Patients' },
    { id: 'ECHO', name: 'ECHO' },
    { id: 'CARE_TAKER', name: 'Care Taker' },
    { id: 'ENDOSCOPY', name: 'ENDOSCOPY' },
    { id: 'NICU', name: 'NICU' },
    { id: 'CATHLAB', name: 'CATHLAB' },
    { id: 'OPERATION_THEATRE', name: 'Operation Theatre' },
    { id: 'VENTILATOR', name: 'Ventilator' },
    { id: 'ULTRASOUND', name: 'Ultrasound' },
    { id: 'ECG', name: 'ECG Services' },
    { id: 'PHARMACY', name: 'Pharmacy' },
    { id: 'ROOM_FACILITY', name: 'Room Facility' },
    { id: 'MRI', name: 'MRI' },
    { id: 'CT_SCAN', name: 'CT Scan' },
    { id: 'BLOOD_BANK', name: 'Blood Bank' },
    { id: 'ICU', name: 'ICU' },
    { id: 'OXYGEN', name: 'Oxygen' },
]

export const RADIOLOGIST_DEPARTMENT = [
    { id:'ULTRASOUND', name: 'Ultrasound' },
    { id:'XRAY', name: 'X-Ray' },
    { id:'MRI', name: 'MRI' },
    { id:'CTSCAN', name: 'CT-Scan' },
]

export const ORGANIZATION_TYPE = [
    { id: 'HOSPITAL', name: 'Hospital' },
    { id: 'CLINIC', name: 'Clinic' },
    { id: 'DOCTOR', name: 'Doctor' },
]

export const WEBSITE_IMAGE = {
    HOME_BANNER: 'HOME_BANNER',
    HOME_BOTTOM_BANNER: 'HOME_BOTTOM_BANNER',
    GYNAE_SLIDER_1: 'GYNAE_SLIDER_1',
    GYNAE_SLIDER_2: 'GYNAE_SLIDER_2',
    GYNAE_SLIDER_3: 'GYNAE_SLIDER_3',
    GYNAE_SLIDER_4: 'GYNAE_SLIDER_4',
    GYNAE_BANNER: 'GYNAE_BANNER',
    GYNAE_BOTTOM_BANNER: 'GYNAE_BOTTOM_BANNER',
    ULTRASOUND_BANNER: 'ULTRASOUND_BANNER',
    HOMEOPATHY_BANNER: 'HOMEOPATHY_BANNER',
    LOGIN_BANNER: 'LOGIN_BANNER',
    ABOUT_BANNER: 'ABOUT_BANNER',
    ABOUT_POSTER_1: 'ABOUT_POSTER_1',
    ABOUT_POSTER_2: 'ABOUT_POSTER_2'
} 

export const FULLDAY = {
    "MON": 'Monday',
    "TUE": 'Tuesday',
    "WED": 'Wednesday',
    "THU": 'Thursday',
    "FRI": 'Friday',
    "SAT": 'Saturday',
    "SUN": 'Sunday',
}

export const NUMBER_TO_DAY = {
    0: 'SUN',
    1: "MON",
    2: "TUE",
    3: "WED",
    4: 'THU',
    5: 'FRI',
    6: 'SAT',
}

export const PLAN = {
    month: 'month',
    quater: 'quater',
    halfYear: 'halfYear',
    year: 'year',
}