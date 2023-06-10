const express = require('express');
const router = express();
const DoctorController = require('../controllers/doctor-controller')

router.get('/get-appointments', DoctorController.getAppointments )
router.get('/allDoctors', DoctorController.getAllDoctors);
router.post('/edit-doctor', DoctorController.editDoctor );
router.post('/delete-doctor',  DoctorController.deleteDoctor);

module.exports = router;