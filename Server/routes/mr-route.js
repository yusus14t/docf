const express = require('express');
const router = express();
const mrController = require('../controllers/mr-controller')


router.get('/clinics', mrController.clinics)
router.get('/organiztions', mrController.organizations)
router.delete('/orgnization/:id', mrController.deleteOrganization)

module.exports = router;
