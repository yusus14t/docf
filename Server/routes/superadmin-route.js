const express = require('express');
const router = express();
const superAdminController = require('../controllers/superadmin-controller');

router.get('/profile', superAdminController.getProfile );
router.get('/analytics', superAdminController.analytics );
router.get('/hospitals', superAdminController.hospitals );
router.get('/clinics', superAdminController.clinics );
router.get('/patients', superAdminController.patients );

module.exports = router;
