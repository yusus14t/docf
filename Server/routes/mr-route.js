const express = require('express');
const router = express();
const mrController = require('../controllers/mr-controller')


router.get('/clinics', mrController.clinics)
router.get('/organiztions', mrController.organizations)
router.get('/organization-chart', mrController.organizationChart)
router.get('/analytics', mrController.analytics)
router.delete('/orgnization/:id', mrController.deleteOrganization)

module.exports = router;
