const express = require('express');
const router = express();
const DoctorController = require('../controllers/doctor-controller')
const { upload } = require('../constants/utils')

router.get('/get-appointments', DoctorController.getAppointments )
router.get('/appointment', DoctorController.appointmentById )
router.get('/allDoctors', DoctorController.getAllDoctors);
router.post('/edit-doctor', upload.single('image'), DoctorController.editDoctor );
router.post('/delete-doctor',  DoctorController.deleteDoctor);
router.post('/add-appointment', DoctorController.addAppointment)
router.post('/re-appointment', DoctorController.reAppointment)
router.post('/create-doctor', upload.single('image'), DoctorController.createDoctor)
router.get('/analytics', DoctorController.analytics)
router.get('/doghnut-analytics', DoctorController.doghnutAnalytics)
router.get('/doctorsInOrganization', DoctorController.doctorsInOrganization)
router.post('/appointment-status', DoctorController.setAppointmentStatus)
router.post('/deal', DoctorController.deal)
router.post('/create-department', upload.single('image'), DoctorController.createDepartment)
router.post('/delete-department', DoctorController.deleteDepartment)
router.get('/departments', DoctorController.getDepartments)
router.get('/clinics', DoctorController.getClinics)
router.post('/specialization', DoctorController.addSpecialization)
router.get('/patients', DoctorController.patients)
router.get('/hospital-specialization', DoctorController.hospitalSpecialization)
router.post('/anonymous-appointment', DoctorController.anonymousAppointment)
router.post('/booking-status', DoctorController.onlineBookingStatus )

router.post('/send-message', DoctorController.sendMessage)

module.exports = router;