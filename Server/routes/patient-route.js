const express = require('express');
const router = express();
const commonController = require('../controllers/common-controller')

router.post('/patient-details', commonController.savePatientDatails)

module.exports = router;
