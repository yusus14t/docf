const express = require('express');
const router = express();
const DoctorController = require('../controllers/doctor-controller')

router.get('/get-appointments', DoctorController.getAppointments )

module.exports = router;