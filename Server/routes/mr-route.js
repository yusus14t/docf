const express = require('express');
const router = express();
const mrController = require('../controllers/mr-controller')


router.get('/clinics', mrController.clinics)

module.exports = router;
