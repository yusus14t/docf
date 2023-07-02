const express = require('express');
const router = express();
const patientController = require('../controllers/patient-controller')

router.post('/patient-details', patientController.savePatientDetails)
router.get('/patient-details', patientController.getPatientDetails)
router.post('/appointment-status', patientController.setAppointmentStatus)
router.get('/appointments', patientController.appointments)

module.exports = router;
