const express = require('express');
const router = express();
const commonController = require(`../controllers/common-controller`);
// const { jwt_verify } = require('../middlewares/common-middleware');

router.post('/checkDuplicateEmail',  commonController.checkDuplicateEmail);
router.post('/create-clinic',  commonController.createClinic);
router.post('/delete-doctor',  commonController.deleteDoctor);

//Appointment
router.get('/appointment-doctors',  commonController.appointmentDoctors);
router.post('/add-appointment', commonController.addAppointment)
router.get('/get-patient-by-number', commonController.getPatientByNumber)

module.exports = router;